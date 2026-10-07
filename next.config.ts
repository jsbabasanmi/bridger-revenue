import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The app lives inside a large multi-project folder that also has a stray
  // lockfile in the home directory, so pin the tracing root to this app.
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
