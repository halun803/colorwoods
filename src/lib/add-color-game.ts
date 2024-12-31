import { ColorGame } from '@/types/color-game'
import { colorGames } from './color-games-data'
import fs from 'fs/promises'
import path from 'path'

export async function addNewGame(game: ColorGame) {
  // 验证必填字段
  const requiredFields: (keyof ColorGame)[] = ['id', 'name', 'iframeUrl', 'description']
  for (const field of requiredFields) {
    if (!game[field]) {
      throw new Error(`Missing required field: ${field}`)
    }
  }

  // 检查ID是否已存在
  if (colorGames.some(g => g.id === game.id)) {
    throw new Error(`Game with ID ${game.id} already exists`)
  }

  // 添加游戏到数组
  colorGames.push(game)

  // 更新数据文件
  const filePath = path.join(process.cwd(), 'src/lib/color-games-data.ts')
  const fileContent = `
    import { ColorGame } from '@/types/color-game'

    export const colorGames: ColorGame[] = ${JSON.stringify(colorGames, null, 2)}

    export function getGameById(id: string): ColorGame | undefined {
      return colorGames.find(game => game.id === id)
    }

    export function getAllGames(): ColorGame[] {
      return colorGames
    }
  `

  await fs.writeFile(filePath, fileContent)
  
  return game
} 