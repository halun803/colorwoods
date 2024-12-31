export function getGameUrl(path: string) {
  // 开发环境使用本地文件
  if (process.env.NODE_ENV === 'development') {
    return path;
  }
  
  // 生产环境使用 R2
  return `https://game-assets.${process.env.NEXT_PUBLIC_CF_ACCOUNT}.r2.cloudflarestorage.com${path}`;
} 