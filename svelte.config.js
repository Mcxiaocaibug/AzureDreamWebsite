import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: "404.html"
    }),
    prerender: {
      entries: ["*", "/robots.txt", "/sitemap.xml"]
    }
  }
};

export default config;
