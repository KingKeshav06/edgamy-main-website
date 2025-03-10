import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
    ]
  },
}

export default nextConfig
