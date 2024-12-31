const fs = require('fs');
const path = require('path');

// Google AdSense meta 标签
const adsenseMetaTag = `<meta name="google-adsense-account" content="ca-pub-1200771438844459">`;

// 游戏文件夹路径
const gamesPath = path.join(__dirname, 'games');

// 遍历games目录下的所有文件夹
fs.readdir(gamesPath, (err, directories) => {
    if (err) {
        console.error('Error reading games directory:', err);
        return;
    }

    directories.forEach(dir => {
        const indexPath = path.join(gamesPath, dir, 'index.html');
        
        // 检查index.html是否存在
        if (fs.existsSync(indexPath)) {
            fs.readFile(indexPath, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error reading ${indexPath}:`, err);
                    return;
                }

                let updatedContent = data;

                // 替换现有的 Google AdSense meta 标签
                if (data.includes('meta name="google-adsense-account"')) {
                    updatedContent = data.replace(
                        /<meta[^>]*google-adsense-account[^>]*>/g,
                        adsenseMetaTag
                    );
                } else {
                    // 如果没有找到 meta 标签，在 </head> 标签前添加
                    updatedContent = data.replace(
                        '</head>',
                        `    ${adsenseMetaTag}\n</head>`
                    );
                }

                // 写入更新后的内容
                fs.writeFile(indexPath, updatedContent, 'utf8', (err) => {
                    if (err) {
                        console.error(`Error writing to ${indexPath}:`, err);
                        return;
                    }
                    console.log(`Successfully updated meta tag in ${indexPath}`);
                });
            });
        }
    });
}); 