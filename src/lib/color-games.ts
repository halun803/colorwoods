import path from 'path'
import fs from 'fs/promises'
import { ColorGame } from '@/types/color-game'

const DATA_FILE = path.join(process.cwd(), 'public', 'voertherainbowbest', 'color-games-data.json')

// 获取所有游戏
export async function getAllGames(): Promise<ColorGame[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8')
    const jsonData = JSON.parse(data)
    return jsonData.games || []
  } catch (error) {
    console.error('Error reading games data:', error)
    return []
  }
}

// 读取游戏数据
async function readGamesData() {
  const data = await fs.readFile(DATA_FILE, 'utf8')
  return JSON.parse(data)
}

// 写入游戏数据
async function writeGamesData(data: any) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
}

// 获取特定游戏
export async function getGameById(id: string): Promise<ColorGame | null> {
  const data = await readGamesData()
  return data.games.find((game: ColorGame) => game.id === id) || null
}

// 添加新游戏
export async function addGame(game: ColorGame) {
  const data = await readGamesData()
  
  // 验证必填字段
  const requiredFields: (keyof ColorGame)[] = ['id', 'name', 'iframeUrl']
  for (const field of requiredFields) {
    if (!game[field]) {
      throw new Error(`Missing required field: ${field}`)
    }
  }

  // 检查ID是否已存在
  if (data.games.some((g: ColorGame) => g.id === game.id)) {
    throw new Error(`Game with ID ${game.id} already exists`)
  }

  // 添加默认值
  const newGame = {
    ...game,
    featured: false,
    rating: { score: 0, count: 0 },
    lastUpdated: new Date().toISOString().split('T')[0],
    videos: game.videos || [],
    guides: game.guides || [],
    tags: game.tags || []
  }

  data.games.push(newGame)
  await writeGamesData(data)
  return newGame
}

// 更新游戏
export async function updateGame(id: string, updates: Partial<ColorGame>) {
  const data = await readGamesData()
  const index = data.games.findIndex((g: ColorGame) => g.id === id)
  
  if (index === -1) {
    throw new Error(`Game with ID ${id} not found`)
  }

  data.games[index] = {
    ...data.games[index],
    ...updates,
    lastUpdated: new Date().toISOString().split('T')[0]
  }

  await writeGamesData(data)
  return data.games[index]
}

// 删除游戏
export async function deleteGame(id: string) {
  const data = await readGamesData()
  data.games = data.games.filter((g: ColorGame) => g.id !== id)
  await writeGamesData(data)
}

// 获取特色游戏
export async function getFeaturedGames() {
  const data = await readGamesData()
  return {
    main: data.games.find((g: ColorGame) => g.id === data.featured.mainGame),
    showcase: data.games.filter((g: ColorGame) => 
      data.featured.showcase.includes(g.id)
    )
  }
} 