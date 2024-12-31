'use client'

interface ScratchGameProps {
  projectId: string;
  width?: number;
  height?: number;
}

export function ScratchGame({ projectId, width = 485, height = 402 }: ScratchGameProps) {
  return (
    <div className="relative w-full" style={{ paddingBottom: `${(height / width) * 100}%` }}>
      <iframe 
        src={`https://turbowarp.org/${projectId}/embed`}
        className="absolute top-0 left-0 w-full h-full"
        allowTransparency={true}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        allow="autoplay; fullscreen *"
      />
    </div>
  )
} 