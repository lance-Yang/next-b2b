import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 启用图片优化
    formats: ['image/webp', 'image/avif'],
    // 预加载配置
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 允许的图片域名（如果需要使用外部图片）
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 其他配置
  experimental: {
    // 启用进一步的图片优化
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
