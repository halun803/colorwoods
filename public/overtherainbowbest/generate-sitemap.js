const fs = require('fs');
const path = require('path');

// 配置
const config = {
    domain: 'https://overtherainbow.best',
    currentDate: new Date().toISOString().split('T')[0],
};

// 游戏数据
const gamesData = [
    // 英文游戏
    { id: 'bob-the-robber-2', priority: 0.8 },
    { id: 'vex3', priority: 0.8 },
    { id: 'vex4', priority: 0.8 },
    { id: 'vex5', priority: 0.8 },
    { id: '1v1lol', priority: 0.8 },
    { id: 'moto-x3m', priority: 0.8 },
    { id: 'retro-bowl', priority: 0.8 },
    { id: 'drive-mad', priority: 0.8 },
    { id: 'slope', priority: 0.8 },
    { id: '2048', priority: 0.8 },
    
    // 翻译后的游戏
    { id: 'zombie-duck-hunter', priority: 0.7 },
    { id: 'swat-vs-zombies', priority: 0.7 },
    { id: 'tank-battle', priority: 0.7 },
    { id: 'mummy-candy', priority: 0.7 },
    { id: 'halloween-memory', priority: 0.7 },
    { id: 'zombie-destroyer', priority: 0.7 },
    { id: 'sticky-monkey', priority: 0.7 },
    { id: 'plumber-puzzle', priority: 0.7 },
    { id: 'gold-miner', priority: 0.7 },
    { id: 'escape-run', priority: 0.7 },
    { id: 'fruit-pie', priority: 0.7 },
    { id: 'brick-laying', priority: 0.7 },
    { id: 'wanderer-vs-zombies', priority: 0.7 },
    { id: 'halloween-bubble-shooter', priority: 0.7 },
    { id: 'ninja-adventure', priority: 0.7 },
    { id: 'casino-card-memory', priority: 0.7 },
    { id: 'snake-eating-fruit', priority: 0.7 },
    { id: 'tank-defense', priority: 0.7 },
    { id: 'fishing-maniac', priority: 0.7 },
    { id: 'crazy-runner', priority: 0.7 },
    { id: 'spaceship', priority: 0.7 },
    { id: 'super-cowboy-run', priority: 0.7 },
    { id: 'duck-hunter', priority: 0.7 },
    { id: 'traffic-racing', priority: 0.7 },
    { id: 'girl-dress-up', priority: 0.7 },
    { id: 'candle-line', priority: 0.7 },
    { id: 'jelly-3', priority: 0.7 },
    { id: 'shoot-robbers', priority: 0.7 },
    { id: 'zombie-gunner', priority: 0.7 },
    { id: 'christmas-panda-run', priority: 0.7 },
    { id: 'speed-racing', priority: 0.7 },
    { id: 'christmas-match', priority: 0.7 },
    { id: 'christmas-balloon', priority: 0.7 },
    { id: 'kids-true-color', priority: 0.7 },
    { id: 'air-combat', priority: 0.7 },
    { id: 'shark-mission', priority: 0.7 },
    { id: 'stick-soldier', priority: 0.7 },
    { id: 'bubble-professor', priority: 0.7 },
    { id: 'ninja-game', priority: 0.7 },
    { id: 'candy-match-3', priority: 0.7 },
    { id: 'super-color-line', priority: 0.7 },
    { id: 'touch-ball', priority: 0.7 },
    { id: 'quick-dice', priority: 0.7 },
    { id: 'balloon-paradise', priority: 0.7 },
    { id: 'hot-jewel', priority: 0.7 },
    { id: 'smile-face-game', priority: 0.7 },
    { id: 'kids-math-game', priority: 0.7 },
    { id: 'zombie-uprising', priority: 0.7 },
    { id: 'super-target', priority: 0.7 },
    { id: 'super-car-puzzle', priority: 0.7 },
    { id: 'kids-crossword', priority: 0.7 },
    { id: 'xitaluoqika', priority: 0.7 },
    { id: 'car-physics', priority: 0.7 },
    { id: 'robot-x', priority: 0.7 },
    { id: 'memory-game', priority: 0.7 },
    { id: 'cartoon-candy-match3', priority: 0.7 },
    { id: 'bouncy-ball', priority: 0.7 },
    { id: 'jumping-bounce', priority: 0.7 },
    { id: 'fish-world-match3', priority: 0.7 },
    { id: 'easter-memory', priority: 0.7 }
];

// 生成sitemap内容
function generateSitemap() {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- 主页 -->
    <url>
        <loc>${config.domain}/</loc>
        <lastmod>${config.currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>

    <!-- 静态页面 -->
    <url>
        <loc>${config.domain}/about</loc>
        <lastmod>${config.currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>${config.domain}/privacy</loc>
        <lastmod>${config.currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.4</priority>
    </url>
    <url>
        <loc>${config.domain}/terms</loc>
        <lastmod>${config.currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.4</priority>
    </url>
    <url>
        <loc>${config.domain}/contact</loc>
        <lastmod>${config.currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>\n`;

    // 添加所有游戏页面
    gamesData.forEach(game => {
        sitemap += `    <url>
        <loc>${config.domain}/games/${game.id}</loc>
        <lastmod>${config.currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${game.priority}</priority>
    </url>\n`;
    });

    sitemap += '</urlset>';
    return sitemap;
}

// 写入文件
fs.writeFileSync('sitemap.xml', generateSitemap());
console.log(`Sitemap generated successfully with ${gamesData.length} games!`); 