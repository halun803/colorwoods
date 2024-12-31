'use client'

import Link from 'next/link'
import { WheatIcon as Watermelon, Search, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-orange-500 text-white">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Watermelon className="h-6 w-6" />
          <span className="font-bold">SuikaGame</span>
        </Link>
        
        <nav className="flex items-center space-x-6 ml-6 hidden md:flex">
          <Link href="/play" className="text-sm font-medium hover:text-orange-200 transition-colors">
            Suika Taylor Swift
          </Link>
          <Link href="/play" className="text-sm font-medium hover:text-orange-200 transition-colors">
            That&apos;s Not My Neighbor
          </Link>
          <Link href="/hot-games" className="text-sm font-medium hover:text-orange-200 transition-colors">
            Hot Games
          </Link>
          <Link href="/new-games" className="text-sm font-medium hover:text-orange-200 transition-colors">
            New Games
          </Link>
        </nav>

        <div className="flex items-center ml-auto">
          <Button variant="ghost" size="icon" className="mr-2">
            <Search className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem>
                <Link href="/play">Suika Taylor Swift</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/play">That&apos;s Not My Neighbor</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/hot-games">Hot Games</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/new-games">New Games</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

