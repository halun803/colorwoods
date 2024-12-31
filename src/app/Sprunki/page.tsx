import { getAllGames } from '@/lib/color-games-data'
import { GameGrid } from '@/components/game-grid'
import Link from 'next/link'
import { Home } from 'lucide-react'

export default async function SprunkiPage() {
  let games = []
  try {
    games = await getAllGames()
  } catch (error) {
    console.error('Error loading games:', error)
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-center">Sprunki</h1>
          <Link 
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-[485px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
            <iframe 
              src="/Sprunki.html"
              width="485"
              height="402"
              style={{ border: 0 }}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              scrolling="no"
              className="w-full aspect-[485/402]"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games && games.length > 0 ? (
              games.slice(0, 8).map(game => (
                <Link
                  key={game.id}
                  href={`/play/${game.id}`}
                  className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{game.shortDescription}</p>
                </Link>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-300 col-span-full text-center">
                No games available at the moment.
              </p>
            )}
          </div>
        </section>

        <footer className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Sprunki</h3>
              <p className="text-gray-600 dark:text-gray-300">
              Sprunki is an online music creation tool inspired by Incredibox. It allows players to mix beats and create tracks by arranging characters with unique sounds. The game is browser-based, free to play, and offers intuitive drag-and-drop functionality, varied soundscapes, and customizable visuals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Controls</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Drag and Drop the Icons on the bottom bar on the Open/Gray Body
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  The Reset button is located at the top right
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Gallery Next to the Settings on the Top Left
                </li>
                
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Tips</h3>
              <div className="space-y-4">
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-gray-300">
                    • Time your jumps carefully
                  </li>
                  <li className="text-gray-600 dark:text-gray-300">
                    • Collect all power-ups
                  </li>
                  <li className="text-gray-600 dark:text-gray-300">
                    • Watch out for moving platforms
                  </li>
                </ul>
                <Link 
                  href="#"
                  className="inline-block px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
                >
                  View Highscores
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
} 