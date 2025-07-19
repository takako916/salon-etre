import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // カスタムドメインの設定
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
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // 画像最適化
  images: {
    domains: ['salon-etre.vercel.app'],
  },
};

export default nextConfig;
