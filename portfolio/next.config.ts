import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Conditionally set basePath based on environment
  basePath: process.env.NODE_ENV === 'production' ? '/42bitstogo.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  trailingSlash: true,
}

export default nextConfig