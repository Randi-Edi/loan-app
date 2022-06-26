/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "www.dmv.pa.gov"],
  },
};

module.exports = nextConfig
