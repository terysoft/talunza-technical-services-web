import type { NextConfig } from 'next';

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '/talunza-technical-services-web';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repoBase,
  assetPrefix: repoBase,
  images: { unoptimized: true },
};

export default nextConfig;
