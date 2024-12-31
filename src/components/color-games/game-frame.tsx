'use client'

import { ColorGame } from '@/types/color-game'
import { useState } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'

interface GameFrameProps {
  game: ColorGame
}

export function GameFrame({ game }: GameFrameProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const toggleFullscreen = async () => {
    try {
      const iframe = document.querySelector('iframe')
      if (!iframe) return

      if (!document.fullscreenElement) {
        await iframe.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error('Fullscreen error:', err)
    }
  }

  return (
    <section id="game" className="relative">
      <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        <iframe
          src={game.iframeUrl}
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => window.location.href = game.iframeUrl}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors"
        >
          Play Now
        </button>
      </div>
    </section>
  )
} 