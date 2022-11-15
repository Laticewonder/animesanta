/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["s4.anilist.co"]
  }
}

module.exports = nextConfig
