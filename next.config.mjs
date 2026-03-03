import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname
  },
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/about.html", destination: "/about" },
      { source: "/join.html", destination: "/join" },
      { source: "/staff.html", destination: "/staff" },
      { source: "/hall-of-fame.html", destination: "/hall-of-fame" }
    ];
  }
};

export default nextConfig;
