/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.joshuayetman.com",
      },
    ],
  },
  // your config options here
};

export default nextConfig;
