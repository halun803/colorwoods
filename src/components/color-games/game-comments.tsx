'use client'

import { ColorGame } from '@/types/color-game'
import { ThumbsUp } from 'lucide-react'

interface GameCommentsProps {
  game: ColorGame
}

export function GameComments({ game }: GameCommentsProps) {
  return (
    <section id="comments" className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      <div className="space-y-6">
        {game.comments.map(comment => (
          <div 
            key={comment.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">{comment.user}</h3>
                <p className="text-sm text-gray-500">{comment.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <span>{comment.rating}/5</span>
                <button className="flex items-center gap-1 text-blue-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{comment.likes}</span>
                </button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 