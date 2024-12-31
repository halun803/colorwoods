import { GameHero } from '@/components/game-hero'
import { GameGrid } from '@/components/game-grid'
import { GameCanvas } from '@/components/game-canvas'
import path from 'path'
import fs from 'fs'
import { Game } from '@/types/game'

// 获取游戏数据
async function getGames(): Promise<Game[]> {
  try {
    const gamesDataPath = path.join(process.cwd(), 'public', 'voertherainbowbest', 'games-data.json')
    const fileContent = await fs.promises.readFile(gamesDataPath, 'utf8')
    const data = JSON.parse(fileContent)
    return data.games
  } catch (error) {
    console.error('Error loading games data:', error)
    // 返回默认游戏数据
    return [
      {
        id: "suika",
        title: "syntheic watermelon",
        description: "combine the same fruit to make a bigger fruit",
        image: "/images/suika.png",
        url: "/"
      }
    ]
  }
}

export default async function Home() {
  const games = await getGames()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 space-y-12">
      
      <GameHero />
      <GameCanvas />
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-8">More Games</h2>
        <GameGrid games={games} />
      </div>
    </main>
  )
}

