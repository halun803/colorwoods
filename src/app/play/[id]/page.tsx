import path from 'path'
import fs from 'fs'
import { Game } from '@/types/game'
import { GameCanvas } from '@/components/game-canvas'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Home } from 'lucide-react'

interface PlayPageProps {
  params: {
    id: string
  }
}

async function getGameById(id: string): Promise<Game | null> {
  try {
    const gamesDataPath = path.join(process.cwd(), 'public', 'voertherainbowbest', 'games-data.json')
    const fileContent = await fs.promises.readFile(gamesDataPath, 'utf8')
    const data = JSON.parse(fileContent)
    const game = data.games.find((game: Game) => game.id === id)
    
    if (game) {
      // 确保路径正确
      game.path = game.path.startsWith('/') 
        ? game.path 
        : `/voertherainbowbest/games/${game.id}/index.html`
    }
    
    return game || null
  } catch (error) {
    console.error('Error loading game:', error)
    return null
  }
}

export default async function PlayPage({ params }: PlayPageProps) {
  const game = await getGameById(params.id)

  if (!game) {
    notFound()
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">{game.title}</h1>
          <Link 
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>
        <div className="max-w-4xl mx-auto">
          <GameCanvas gameUrl={game.path} />
        </div>
      </div>
    </main>
  )
} 