const updatedAt = new Date("2026-03-03");

export default function sitemap() {
  return [
    {
      url: "https://azuredream.netlify.app/",
      lastModified: updatedAt,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://azuredream.netlify.app/about",
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://azuredream.netlify.app/join",
      lastModified: updatedAt,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://azuredream.netlify.app/staff",
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: "https://azuredream.netlify.app/hall-of-fame",
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
