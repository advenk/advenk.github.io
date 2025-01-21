import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove or leave basePath empty for a user/organization GH pages site:
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
};

export default nextConfig;