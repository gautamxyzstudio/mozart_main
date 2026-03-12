import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname :"images.unsplash.com",
        pathname:"/**"
      },
      {
        protocol: 'https',
        hostname: "i.pravatar.cc", // Yeh add kiya avatars ke liye
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
