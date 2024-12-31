'use client'

import { ColorGame } from '@/types/color-game'
import Image from 'next/image'

interface GameGuidesProps {
  game: ColorGame
}

export function GameGuides({ game }: GameGuidesProps) {
  return (
    <section id="guides" className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">How to Play</h2>
      <div className="space-y-8">
        {game.guides.map(guide => (
          <div 
            key={guide.step}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            {guide.image && (
              <div className="w-full md:w-1/3 relative aspect-video">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                Step {guide.step}: {guide.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {guide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 