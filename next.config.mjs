export default {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: true,
  output: 'standalone',
  basePath: "", // No basePath in local or production
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV !== 'development'
    ? 'https://smartscore.nathanprobert.ca' // Set prefix for production
    : '', // Empty assetPrefix for local dev
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/public/images/:path*',
      },
    ];
  },
};
