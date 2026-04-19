import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "golfiskane.se" },
      { hostname: "caddee-prod-media.s3.amazonaws.com" },
      { hostname: "liveevent.se" },
      { hostname: "www.ljgk.se" },
    ],
  },
};

export default nextConfig;
