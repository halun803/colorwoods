import { ColorGame } from '@/types/color-game'

export const colorGames: ColorGame[] = [
  {
    id: 'color-match',
    name: 'Color Match',
    iframeUrl: '/games/color-match/index.html',
    description: 'Match colors to create beautiful combinations and score points!',
    shortDescription: 'A fascinating color matching puzzle game that challenges your perception and reflexes.',
    videos: [
      {
        title: 'Getting Started',
        url: 'https://youtube.com/watch?v=example1',
        thumbnail: '/images/color-match/tutorial-1.jpg'
      },
      {
        title: 'Advanced Techniques',
        url: 'https://youtube.com/watch?v=example2',
        thumbnail: '/images/color-match/tutorial-2.jpg'
      },
      {
        title: 'Pro Tips',
        url: 'https://youtube.com/watch?v=example3',
        thumbnail: '/images/color-match/tutorial-3.jpg'
      }
    ],
    guides: [
      {
        step: 1,
        title: 'Basic Matching',
        description: 'Click on groups of three or more same-colored blocks to remove them.',
        image: '/images/color-match/guide-1.png'
      },
      {
        step: 2,
        title: 'Creating Combos',
        description: 'Chain multiple matches together for bonus points and special effects.',
        image: '/images/color-match/guide-2.png'
      },
      {
        step: 3,
        title: 'Power-ups',
        description: 'Collect special items to clear larger areas or change colors.',
        image: '/images/color-match/guide-3.png'
      }
    ],
    tags: ['puzzle', 'colors', 'matching', 'casual', 'relaxing'],
    comments: [
      {
        id: '1',
        user: 'ColorFan',
        content: 'Love this game! The color combinations are so satisfying.',
        rating: 5,
        likes: 42,
        date: '2024-01-15'
      }
    ],
    socialShare: {
      title: 'Color Match - The Ultimate Color Matching Puzzle!',
      description: 'Just scored 1000 points in Color Match! Can you beat my score?',
      hashtags: ['ColorMatch', 'PuzzleGame', 'Gaming']
    }
  }
  // 可以继续添加更多游戏...
]

export function getGameById(id: string): ColorGame | undefined {
  return colorGames.find(game => game.id === id)
}

export function getAllGames(): ColorGame[] {
  return colorGames
}

export function addGame(game: ColorGame) {
  colorGames.push(game)
}

export function updateGame(id: string, updates: Partial<ColorGame>) {
  const index = colorGames.findIndex(game => game.id === id)
  if (index !== -1) {
    colorGames[index] = { ...colorGames[index], ...updates }
  }
} 