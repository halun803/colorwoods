import { GameCanvas } from '../components/game-canvas'
import { GameProvider } from '../components/game-provider'
import { GameControls } from '../components/game-controls'
import { GameStats } from '../components/game-stats'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb'

export default function PlayPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/play">Suika Game</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <GameProvider>
        <div className="grid gap-4 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] mt-8">
          <div className="space-y-4">
            <GameStats />
            <GameControls />
          </div>
          <div className="aspect-square w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <GameCanvas />
          </div>
        </div>
      </GameProvider>
    </main>
  )
}

