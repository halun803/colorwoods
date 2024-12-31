'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'

interface GameState {
  score: number
  highScore: number
  isGameOver: boolean
  isPaused: boolean
  currentFruit: number
  nextFruit: number
}

type GameAction =
  | { type: 'UPDATE_SCORE'; payload: number }
  | { type: 'SET_GAME_OVER' }
  | { type: 'RESET_GAME' }
  | { type: 'TOGGLE_PAUSE' }
  | { type: 'UPDATE_FRUITS'; payload: { current: number; next: number } }

const initialState: GameState = {
  score: 0,
  highScore: 0,
  isGameOver: false,
  isPaused: false,
  currentFruit: 0,
  nextFruit: 1,
}

const GameContext = createContext<{
  state: GameState
  dispatch: React.Dispatch<GameAction>
} | null>(null)

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'UPDATE_SCORE':
      const newScore = action.payload
      return {
        ...state,
        score: newScore,
        highScore: Math.max(state.highScore, newScore),
      }
    case 'SET_GAME_OVER':
      return { ...state, isGameOver: true }
    case 'RESET_GAME':
      return { ...initialState, highScore: state.highScore }
    case 'TOGGLE_PAUSE':
      return { ...state, isPaused: !state.isPaused }
    case 'UPDATE_FRUITS':
      return {
        ...state,
        currentFruit: action.payload.current,
        nextFruit: action.payload.next,
      }
    default:
      return state
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGameState() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGameState must be used within a GameProvider')
  }
  return context
}

