import { ColorGame } from '@/types/color-game'

export const gameTemplate: ColorGame = {
  id: 'game-id', // 唯一标识符
  name: 'Game Name', // 游戏名称
  iframeUrl: '/games/game-id/index.html', // 游戏iframe地址
  description: 'Full game description here...', // 详细描述
  shortDescription: 'Short game description...', // 简短描述
  videos: [
    {
      title: 'Tutorial Video',
      url: 'https://youtube.com/watch?v=example',
      thumbnail: '/images/game-id/tutorial.jpg'
    }
  ],
  guides: [
    {
      step: 1,
      title: 'Getting Started',
      description: 'Step description...',
      image: '/images/game-id/guide-1.png'
    }
  ],
  tags: ['tag1', 'tag2'],
  comments: [
    {
      id: '1',
      user: 'Username',
      content: 'Game review...',
      rating: 5,
      likes: 0,
      date: new Date().toISOString()
    }
  ],
  socialShare: {
    title: 'Share title',
    description: 'Share description',
    hashtags: ['GameTag']
  }
} 