'use client'

import { useState, useEffect, useRef } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'
import { getGameUrl } from '@/lib/get-game-url'

interface GameCanvasProps {
  gameUrl?: string
}

export function GameCanvas({ gameUrl = '/suikagame/index.html' }: GameCanvasProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const toggleFullscreen = async () => {
    if (!iframeRef.current) return

    try {
      if (!document.fullscreenElement) {
        await iframeRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error('Fullscreen error:', err)
      setError('Failed to toggle fullscreen')
    }
  }

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false)
      setError(null)
    }

    const handleError = () => {
      setIsLoading(false)
      setError('Failed to load game')
    }

    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener('load', handleLoad)
      iframe.addEventListener('error', handleError)
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad)
        iframe.removeEventListener('error', handleError)
      }
    }
  }, [gameUrl])

  return (
    <div className="relative w-full max-w-[600px] aspect-square bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"></div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background text-red-500">
          {error}
        </div>
      )}

      <button
        onClick={toggleFullscreen}
        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
        aria-label="Toggle fullscreen"
      >
        {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
      </button>

      <iframe 
        ref={iframeRef}
        src={getGameUrl(gameUrl)}
        className="w-full h-full border-0"
        allow="cross-origin-isolated; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  )
}

