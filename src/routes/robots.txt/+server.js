export const prerender = true;

export function GET() {
  const body = ["User-Agent: *", "Allow: /", "", "Sitemap: https://azuredream.netlify.app/sitemap.xml", ""].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain" }
  });
}
