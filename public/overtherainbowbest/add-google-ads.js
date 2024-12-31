const fs = require('fs');
const path = require('path');

// Google Ads 代码
const googleAdsCode = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16800374224"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16800374224');
</script>
`;

// 游戏目录路径
const gamesDir = path.join(__dirname, 'games');

// 获取所有游戏目录
const gameDirectories = fs.readdirSync(gamesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

// 处理每个游戏的 index.html
gameDirectories.forEach(gameDir => {
    const indexPath = path.join(gamesDir, gameDir, 'index.html');
    
    try {
        if (fs.existsSync(indexPath)) {
            let content = fs.readFileSync(indexPath, 'utf8');
            
            // 检查是否已经包含 Google Ads 代码
            if (!content.includes('AW-16800374224')) {
                // 在 </head> 标签前插入 Google Ads 代码
                content = content.replace('</head>', `${googleAdsCode}\n</head>`);
                
                // 写回文件
                fs.writeFileSync(indexPath, content, 'utf8');
                console.log(`✅ Added Google Ads code to ${gameDir}/index.html`);
            } else {
                console.log(`ℹ️ Google Ads code already exists in ${gameDir}/index.html`);
            }
        } else {
            console.error(`❌ index.html not found for ${gameDir}`);
        }
    } catch (error) {
        console.error(`❌ Error processing ${gameDir}/index.html:`, error);
    }
});

console.log('Done adding Google Ads code to all games!'); 