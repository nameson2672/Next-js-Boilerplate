import type { NextConfig } from 'next';
import './src/lib/Env';

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: true,
  outputFileTracingIncludes: {
    '/': ['./migrations/**/*'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**', // Specific path
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io', // Entire domain
      },
    ],
  },
};

const nextConfig = baseConfig;
export default nextConfig;
