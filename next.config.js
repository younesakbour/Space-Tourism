/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/daxdgprva/image/upload/**',
      },
    ],
  },
}

module.exports = nextConfig
