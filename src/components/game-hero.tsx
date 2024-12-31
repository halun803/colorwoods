import Link from 'next/link'

export function GameHero() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Suike Game</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Syntheic watermelon game
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          href="/hot-games"
          className="px-6 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
        >
          Hot Games
        </Link>
        <Link
          href="/new-games"
          className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          New Games
        </Link>
        <Link
          href="/Sprunki"
          className="px-6 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors"
        >
          Sprunki
        </Link>
      </div>
    </div>
  )
} 