'use client'

import { ColorGame } from '@/types/color-game'
import { Share2, Facebook, Twitter } from 'lucide-react'

interface GameShareProps {
  game: ColorGame
}

export function GameShare({ game }: GameShareProps) {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Share Your Score</h2>
      <div className="flex justify-center gap-4">
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full">
          <Facebook className="w-5 h-5" />
          <span>Share</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-full">
          <Twitter className="w-5 h-5" />
          <span>Tweet</span>
        </button>
      </div>
      <div className="mt-4">
        {game.socialShare.hashtags.map(tag => (
          <span 
            key={tag}
            className="inline-block mx-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
    </section>
  )
} 