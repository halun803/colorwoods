'use client'

import { ColorGame } from '@/types/color-game'
import Link from 'next/link'
import { useState } from 'react'

interface GameHeaderProps {
  game: ColorGame
}

export function GameHeader({ game }: GameHeaderProps) {
  const [activeSection, setActiveSection] = useState('game')

  const sections = [
    { id: 'game', name: 'Game' },
    { id: 'description', name: 'About' },
    { id: 'videos', name: 'Videos' },
    { id: 'guides', name: 'Guides' },
    { id: 'comments', name: 'Comments' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold">{game.name}</h1>
          <nav className="hidden md:flex space-x-8">
            {sections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`${
                  activeSection === section.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400'
                } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
} 