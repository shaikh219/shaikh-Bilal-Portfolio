/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true // Enable if you're using the App Router
  },
  images: {
    domains: [] // Add image domains here if needed
  }
};

module.exports = nextConfig;
