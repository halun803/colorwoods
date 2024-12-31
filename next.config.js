/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // 其他配置...
  
  // 如果需要的话，添加以下配置来处理静态文件
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    })
    return config
  },

  // 添加静态文件处理
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: '*',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://scratch.mit.edu https://*.scratch.mit.edu https://turbowarp.org;"
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig 