import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s16736.pcdn.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "optizign.net",
      },
      {
        protocol: "https",
        hostname: "optizign.net",
      },
    ],
  },
};

export default nextConfig;
