import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const staticCacheHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=86400, stale-while-revalidate=604800",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/dangitalk.html", destination: "/dangitalk", permanent: true },
      { source: "/dangitalk.htm", destination: "/dangitalk", permanent: true },
      { source: "/dang-v7.html", destination: "/dangitalk", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/company-v6.html", destination: "/", permanent: true },
      { source: "/ping.html", destination: "https://ping.ai.kr/", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/images/:path*", headers: staticCacheHeaders },
      { source: "/videos/:path*", headers: staticCacheHeaders },
      { source: "/renewal/assets/:path*", headers: staticCacheHeaders },
    ];
  },
};

export default nextConfig;
