/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  swcMinify: true,
  images:{
    domains:["s4.anilist.co","artworks.thetvdb.com"]
  }
}

module.exports = nextConfig
