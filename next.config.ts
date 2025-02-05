import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w1ykti2tlyudg7ao.public.blob.vercel-storage.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
