import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/call-cash", destination: "/", permanent: true },
      { source: "/call-cash/terms", destination: "/terms", permanent: true },
      { source: "/call-cash/privacy", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
