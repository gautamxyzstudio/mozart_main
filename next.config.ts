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
  allowedDevOrigins: ["192.168.1.33:3000"],
  async redirects() {
    return [
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/:path*",
        destination: "/services/:path*",
        permanent: true,
      },
      {
        source: "/youtube-channel-management",
        destination: "/services/youtube-channel-management",
        permanent: true,
      },
      {
        source: "/youtube-content-id",
        destination: "/services/youtube-content-id",
        permanent: true,
      },
      {
        source: "/Royalty-rights-Management",
        destination: "/services/royalty-rights-management",
        permanent: true,
      },
      {
        source: "/royalty-rights-management",
        destination: "/services/royalty-rights-management",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
