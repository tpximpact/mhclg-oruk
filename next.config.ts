import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  experimental: {
    serverComponentsHmrCache: false
  },
  images: {
    dangerouslyAllowSVG: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  redirects: async () => {
    return [
      {
        source: '/dashboard',
        destination: '/developers/dashboard',
        permanent: true
      }
    ]
  },
  headers: async () => {
    return [
      {
        source: '/specifications/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, immutable'
          }
        ]
      }
    ]
  }
}

export default nextConfig
