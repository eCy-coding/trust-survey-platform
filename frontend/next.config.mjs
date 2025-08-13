/** @type {import('next').NextConfig} */
const nextConfig = {
  // Geliştirmede LAN erişimine izin ver
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://192.168.1.38:3000',
    'http://192.168.1.38'
  ],
};
export default nextConfig;