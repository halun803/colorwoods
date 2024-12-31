import { getGameById } from '@/lib/color-games-data'
import { GameHeader } from '@/components/color-games/game-header'
import { GameFrame } from '@/components/color-games/game-frame'
import { GameDescription } from '@/components/color-games/game-description'
import { GameVideos } from '@/components/color-games/game-videos'
import { GameGuides } from '@/components/color-games/game-guides'
import { GameComments } from '@/components/color-games/game-comments'
import { GameShare } from '@/components/color-games/game-share'
import { notFound } from 'next/navigation'

interface ColorGamePageProps {
  params: {
    id: string
  }
}

export default function ColorGamePage({ params }: ColorGamePageProps) {
  const game = getGameById(params.id)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <GameHeader game={game} />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <GameFrame game={game} />
        <GameDescription game={game} />
        <GameVideos game={game} />
        <GameGuides game={game} />
        <GameComments game={game} />
        <GameShare game={game} />
      </main>
    </div>
  )
} 