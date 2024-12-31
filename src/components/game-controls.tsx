'use client'

import { Button } from '@/components/ui/button'
import { useGameState } from './game-provider'
import { Pause, Play, RotateCcw } from 'lucide-react'

export function GameControls() {
  const { state, dispatch } = useGameState()

  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="outline"
        size="lg"
        onClick={() => dispatch({ type: 'TOGGLE_PAUSE' })}
        className="w-full"
      >
        {state.isPaused ? (
          <>
            <Play className="mr-2 h-4 w-4" />
            Resume Game
          </>
        ) : (
          <>
            <Pause className="mr-2 h-4 w-4" />
            Pause Game
          </>
        )}
      </Button>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => dispatch({ type: 'RESET_GAME' })}
        className="w-full"
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Reset Game
      </Button>
    </div>
  )
}

