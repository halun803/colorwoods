'use client'

import { ColorGame } from '@/types/color-game'
import { Play } from 'lucide-react'
import Image from 'next/image'

interface GameVideosProps {
  game: ColorGame
}

export function GameVideos({ game }: GameVideosProps) {
  return (
    <section id="videos" className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Watch & Learn</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {game.videos.map(video => (
          <a
            key={video.title}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
          >
            {video.thumbnail && (
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-12 h-12 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/70">
              <h3 className="text-white text-sm font-medium">{video.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
} 