import { getAllGames } from '@/lib/color-games-data'
import { GameGrid } from '@/components/game-grid'
import Link from 'next/link'
import { Home } from 'lucide-react'

export default async function ColorGames() {
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
          <h1 className="text-3xl font-bold text-center">Color Games</h1>
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
                  href={`/color-games/${game.id}`}
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
              <h3 className="text-xl font-bold mb-4">About Color Games</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore our collection of color-based puzzle and action games. 
                Challenge your perception and reflexes while having fun with colors!
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Game Guides</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/guides/basics"
                    className="text-blue-500 hover:underline"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/guides/advanced"
                    className="text-blue-500 hover:underline"
                  >
                    Advanced Techniques
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/guides/tips"
                    className="text-blue-500 hover:underline"
                  >
                    Pro Tips & Tricks
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-gray-600 dark:text-gray-300">4.8/5 Average Rating</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Join our community of color game enthusiasts!
                </p>
                <Link 
                  href="/community"
                  className="inline-block px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
                >
                  Join Discussion
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
} 