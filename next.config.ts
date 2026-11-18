import type { NextConfig } from 'next';

// Development branch ONLY: Technical Services now targets a real server-backed web
// app. A static GitHub Pages export is NOT a suitable host for authenticated jobs,
// protected quotations, durable customer requests or safe upload processing.
//
// Do not merge/release this runtime switch until hosting, database, secret custody,
// authenticated API and rollback are independently tested and founder-approved.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/technical';

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
