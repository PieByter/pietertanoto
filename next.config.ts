import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['*'],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
