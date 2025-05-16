/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "leonardo.ai",
     
      },
    ],
  },
};

export default nextConfig;
