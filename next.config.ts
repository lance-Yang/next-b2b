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
  // 启用压缩
  compress: true,
  // 实验性功能配置
  experimental: {
    // 启用进一步的图片优化
    optimizePackageImports: ['framer-motion', 'lucide-react', 'swiper'],
  },
  // 服务器外部包（替代过时的 serverComponentsExternalPackages）
  serverExternalPackages: [],

  // 配置重定向（如果需要）
  async redirects() {
    return [];
  },
  // 配置头部（如果需要）
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
