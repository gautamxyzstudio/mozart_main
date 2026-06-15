import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.join(__dirname, ".."),
    
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",  
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mozart-app.s3.ap-southeast-2.amazonaws.com",  
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: ["192.168.1.13:3000"],
};

export default nextConfig;
