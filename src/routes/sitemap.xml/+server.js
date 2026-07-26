export const prerender = true;

const BASE = "https://azuredream.netlify.app";
const LAST_MODIFIED = "2026-03-03";

const pages = [
  { path: "/", changefreq: "weekly", priority: "1" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/join", changefreq: "weekly", priority: "0.9" },
  { path: "/staff", changefreq: "monthly", priority: "0.7" },
  { path: "/hall-of-fame", changefreq: "monthly", priority: "0.7" }
];

export function GET() {
  const urls = pages
    .map(
      (page) =>
        `  <url>\n    <loc>${BASE}${page.path}</loc>\n    <lastmod>${LAST_MODIFIED}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" }
  });
}
