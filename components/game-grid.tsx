import Link from 'next/link'
import Image from 'next/image'

const GAMES = [
  {
    id: 1,
    title: "Suika Game",
    image: "/placeholder.svg?height=200&width=200",
    href: "/play"
  },
  {
    id: 2,
    title: "Suika Taylor Swift",
    image: "/placeholder.svg?height=200&width=200",
    href: "/play"
  },
  {
    id: 3,
    title: "That's Not My Neighbor",
    image: "/placeholder.svg?height=200&width=200",
    href: "/play"
  },
  // Add more games as needed
]

export function GameGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {GAMES.map((game) => (
        <Link
          key={game.id}
          href={game.href}
          className="group relative aspect-square rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <Image
            src={game.image}
            alt={game.title}
            width={200}
            height={200}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {game.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

