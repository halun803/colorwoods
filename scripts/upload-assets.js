const { exec } = require('child_process');
const path = require('path');

const BUCKET_NAME = 'game-assets';
const ASSETS_DIR = path.join(__dirname, '../public/overtherainbowbest/games');

// 上传游戏文件到 R2
async function uploadAssets() {
  console.log('Uploading assets to R2...');
  
  exec(`wrangler r2 bulk put ${ASSETS_DIR} --bucket=${BUCKET_NAME}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

uploadAssets(); 