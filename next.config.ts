import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false, // Turbopackを無効化
  },
};

export default nextConfig;
