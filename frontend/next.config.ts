import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Sadece geliştirme sırasında LAN erişimini izinli kıl
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.1.38:3000',
  ],
};

export default nextConfig;
