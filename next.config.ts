import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    qualities: [75, 100],
  },
};

export default nextConfig;
