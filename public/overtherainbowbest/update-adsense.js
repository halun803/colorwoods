const fs = require('fs');
const path = require('path');

// Google AdSense 代码
const adsenseCode = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1200771438844459"
    crossorigin="anonymous"></script>`;

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

                // 替换旧的 AdSense 代码
                const updatedContent = data.replace(
                    /<script[^>]*adsbygoogle[^>]*>[^<]*<\/script>/g,
                    adsenseCode
                );

                // 如果没有找到 AdSense 代码，在 </head> 标签前添加
                if (!data.includes('adsbygoogle')) {
                    const updatedContent = data.replace(
                        '</head>',
                        `    ${adsenseCode}\n</head>`
                    );
                }

                // 写入更新后的内容
                fs.writeFile(indexPath, updatedContent, 'utf8', (err) => {
                    if (err) {
                        console.error(`Error writing to ${indexPath}:`, err);
                        return;
                    }
                    console.log(`Successfully updated ${indexPath}`);
                });
            });
        }
    });
}); 