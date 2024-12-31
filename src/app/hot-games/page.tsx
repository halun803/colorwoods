import { GameGrid } from '@/components/game-grid'
import Link from 'next/link'
import { Home } from 'lucide-react'
import path from 'path'
import fs from 'fs'
import { Game } from '@/types/game'

async function getHotGames(): Promise<Game[]> {
  try {
    const gamesDataPath = path.join(process.cwd(), 'public', 'voertherainbowbest', 'games-data.json')
    const fileContent = await fs.promises.readFile(gamesDataPath, 'utf8')
    const data = JSON.parse(fileContent)
    return data.games.slice(0, 30) // 返回前30个游戏作为热门游戏
  } catch (error) {
    console.error('Error loading hot games:', error)
    return []
  }
}

export default async function HotGames() {
  const games = await getHotGames()

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-center">Hot Games</h1>
          <Link 
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>
        <GameGrid games={games} />
      </div>
    </main>
  )
} 