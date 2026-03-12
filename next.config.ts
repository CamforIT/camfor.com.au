import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
  },
  // redirects() and headers() are not supported with static export.
  // Old Wix URLs (/home, /about-us, /our-services, /contact-us, /our-projects)
  // will need redirect rules in the DNS/CDN layer if still required.
};

export default nextConfig;
