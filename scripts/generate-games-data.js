const fs = require('fs');
const path = require('path');

// 游戏目录路径
const gamesDir = path.join(__dirname, '../public/overtherainbowbest/games');

// 获取所有游戏目录
const gameDirectories = fs.readdirSync(gamesDir)
  .filter(dir => fs.statSync(path.join(gamesDir, dir)).isDirectory());

// 生成游戏数据
const games = gameDirectories.map(dir => {
  const id = dir;
  const title = id.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // 检查图片扩展名
  const imageExtensions = ['.png', '.jpg', '.jpeg'];
  const imageExt = imageExtensions.find(ext => 
    fs.existsSync(path.join(__dirname, `../public/overtherainbowbest/images/${id}${ext}`))
  ) || '.png';

  return {
    id,
    title,
    image: `/overtherainbowbest/images/${id}${imageExt}`,
    path: `/overtherainbowbest/games/${id}/index.html`
  };
});

// 添加合成西瓜游戏
games.unshift({
  id: "suikagame",
  title: "合成西瓜",
  description: "将相同的水果合并成更大的水果",
  image: "/overtherainbowbest/images/suika.png",
  path: "/suikagame/index.html"
});

// 写入文件
const gamesData = {
  games,
  lastUpdated: new Date().toISOString()
};

fs.writeFileSync(
  path.join(__dirname, '../public/voertherainbowbest/games-data.json'),
  JSON.stringify(gamesData, null, 2)
);

console.log(`Generated data for ${games.length} games`); 