import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://azuredream.netlify.app"),
  title: {
    default: "AzureDream - AI驱动的未来级Minecraft服务器",
    template: "%s"
  },
  description:
    "AzureDream - AI驱动的未来级Minecraft服务器。体验下一代游戏服务器，感受AI带来的无限可能。",
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/images/logo.png"
  },
  openGraph: {
    siteName: "AzureDream",
    locale: "zh_CN",
    type: "website",
    images: ["/images/logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo.png"]
  }
};

export const viewport = {
  themeColor: "#040913"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
