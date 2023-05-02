/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: 'jrs5di42lsg1',
    CONTENTFUL_ACCESS_KEY: 'gPXl9Cw5vaAs1kp5M69yrsWDA9oJg4A98qyie7gcDBY',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/jrs5di42lsg1/**',
      },
    ],
  },
}

module.exports = nextConfig

