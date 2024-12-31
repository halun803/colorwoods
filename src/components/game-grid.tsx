'use client'

import Image from 'next/image'
import { Game } from '@/types/game'
import { useState } from 'react'

interface GameGridProps {
  games: Game[]
}

export function GameGrid({ games }: GameGridProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (gameId: string) => {
    setImageErrors(prev => ({
      ...prev,
      [gameId]: true
    }))
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {games.map((game) => (
          <a
            key={game.id}
            href={`/play/${game.id}`}
            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 transition-transform hover:scale-105"
          >
            <Image
              src={imageErrors[game.id] ? "/overtherainbowbest/images/default-game.png" : game.image}
              alt={game.title}
              fill
              className="object-cover transition-transform group-hover:scale-110"
              onError={() => handleImageError(game.id)}
              priority={true}
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold">{game.title}</h3>
                {game.description && (
                  <p className="text-gray-200 text-sm">{game.description}</p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
} 