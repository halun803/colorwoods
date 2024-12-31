'use client'

import { ColorGame } from '@/types/color-game'

interface GameDescriptionProps {
  game: ColorGame
}

export function GameDescription({ game }: GameDescriptionProps) {
  return (
    <section id="description" className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About the Game</h2>
      <p className="text-gray-600 dark:text-gray-300">{game.description}</p>
    </section>
  )
} 