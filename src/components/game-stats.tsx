'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useGameState } from './game-provider'

export function GameStats() {
  const { state } = useGameState()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Game Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium">Current Score</p>
          <p className="text-2xl font-bold">{state.score}</p>
        </div>
        <div>
          <p className="text-sm font-medium">High Score</p>
          <p className="text-2xl font-bold">{state.highScore}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Game Status</p>
          <p className="text-lg font-semibold">Playing</p>
        </div>
      </CardContent>
    </Card>
  )
}

