import type { NextConfig } from 'next';

const repoBase = '/talunza-technical-services-web';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repoBase,
  assetPrefix: repoBase,
  images: { unoptimized: true },
};

export default nextConfig;
