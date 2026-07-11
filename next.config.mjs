/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // emit static HTML into ./out
  basePath: '/uniseek',          // served from /uniseek subpath, not root
  images: { unoptimized: true }, // next/image needs a server otherwise
};

export default nextConfig;
