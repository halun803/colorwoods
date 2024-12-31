import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function GameHero() {
  return (
    <div className="relative h-[600px] rounded-xl overflow-hidden mb-12">
      <Image
        src="/placeholder.svg?height=600&width=1200"
        alt="Suika Game"
        width={1200}
        height={600}
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center max-w-xl mx-4">
          <h1 className="text-4xl font-bold mb-4">Suika Game</h1>
          <p className="text-lg mb-8">
            Merge fruits to create bigger ones in this addictive puzzle game!
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/play">Play Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

