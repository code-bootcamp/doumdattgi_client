/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "doumdattgi-client",
  compiler: {
    emotion: true
  }
};

module.exports = nextConfig;
