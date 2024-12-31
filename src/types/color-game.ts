export interface GameVideo {
  title: string;
  url: string;
  thumbnail?: string;
}

export interface GameGuide {
  step: number;
  title: string;
  description: string;
  image?: string;
}

export interface GameComment {
  id: string;
  user: string;
  content: string;
  rating: number;
  likes: number;
  date: string;
}

export interface ColorGame {
  id: string;
  name: string;
  iframeUrl: string;
  image?: string;
  description: string;
  shortDescription: string;
  featured?: boolean;
  category?: string;
  difficulty?: string;
  tags?: string[];
} 