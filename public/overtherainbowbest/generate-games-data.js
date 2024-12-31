const fs = require('fs');
const path = require('path');

// 游戏目录路径
const gamesDir = path.join(__dirname, 'games');
const imagesDir = path.join(__dirname, 'images');

// 获取所有游戏目录
const gameDirectories = fs.readdirSync(gamesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

// 构建游戏数据
const games = gameDirectories.map(gameDir => {
    // 获取游戏ID（目录名）
    const id = gameDir;
    
    // 构建游戏标题（将连字符替换为空格并首字母大写）
    const title = gameDir
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // 检查图片是否存在
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
    let imagePath = null;
    
    for (const ext of imageExtensions) {
        const fullImagePath = path.join(imagesDir, id + ext);
        if (fs.existsSync(fullImagePath)) {
            imagePath = `/images/${id}${ext}`;
            break;
        }
    }

    // 如果没有找到图片，使用默认图片
    if (!imagePath) {
        console.warn(`Warning: No image found for game ${id}`);
        imagePath = '/images/default-game.png';
    }

    // 始终使用带有 index.html 的路径
    const gamePath = `/games/${id}/index.html`;

    return {
        id,
        title,
        image: imagePath,
        path: gamePath
    };
});

// 按标题字母顺序排序
games.sort((a, b) => a.title.localeCompare(b.title));

// 构建最终的数据对象
const gamesData = {
    games,
    lastUpdated: new Date().toISOString()
};

// 写入 JSON 文件
fs.writeFileSync(
    path.join(__dirname, 'games-data.json'),
    JSON.stringify(gamesData, null, 2),
    'utf8'
);

console.log(`Generated games-data.json with ${games.length} games`);

// 验证所有游戏文件是否存在
games.forEach(game => {
    // 验证图片
    const imagePath = path.join(__dirname, game.image);
    if (!fs.existsSync(imagePath)) {
        console.error(`Error: Image not found for game ${game.id}: ${game.image}`);
    }
    
    // 验证游戏文件
    const gamePath = path.join(__dirname, 'games', game.id, 'index.html');
    if (!fs.existsSync(gamePath)) {
        console.error(`Error: Game file not found for ${game.id}: ${gamePath}`);
    }
}); 