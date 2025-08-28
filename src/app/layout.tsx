import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans, Lato } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ThemeScript from "@/components/themeScript";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const revalidate = 0;

// 预加载所有字体
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// 定义不同模板的字体配置
const fontConfigs = {
  "001": lato,
  "002": lato,
  "003": lato,
  "004": lato,
  "005": openSans,
  "006": openSans,
  "007": openSans,
  "008": openSans,
  "009": openSans,
  "010": openSans,
  "011": openSans,
};

// 获取当前模板的字体
const getTemplateFont = () => {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "001";
  return fontConfigs[templateId] || lato; // 默认使用 Lato
};

// 生成内联样式，确保主题变量优先设置
const getInitialThemeStyles = () => {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "001";
  return `
        :root {
            --main-color-light: var(--main-color-light-${templateId});
            --main-color-normal: var(--main-color-normal-${templateId});
            --main-color-deep: var(--main-color-deep-${templateId});
        }
    `;
};

export const metadata: Metadata = {
  title: {
    default: "B2B Solutions - Enterprise Business Solutions",
    template: "%s | B2B Solutions",
  },
  description:
    "Empowering businesses with innovative solutions for growth and success in the digital age.",
  keywords: [
    "B2B",
    "business solutions",
    "enterprise",
    "digital transformation",
    "business growth",
  ],
  authors: [{ name: "B2B Solutions Team" }],
  creator: "B2B Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://b2bsolutions.com",
    siteName: "B2B Solutions",
    title: "B2B Solutions - Enterprise Business Solutions",
    description:
      "Empowering businesses with innovative solutions for growth and success",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "B2B Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Solutions - Enterprise Business Solutions",
    description: "Empowering businesses with innovative solutions",
    creator: "@b2bsolutions",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 获取模板id
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "001";

  // 动态导入对应模板
  // const IndexLayoutTemplateModule = dynamic import(
  //   `@/templates/${templateId}/indexLayoutTemplate`
  // );
  // const IndexLayoutTemplate = IndexLayoutTemplateModule.default;

  // 方案1：使用明确的路径映射
  const getTemplate = (templateId: string) => {
    switch (templateId) {
      case "template1":
        return import("@/templates/template1/indexLayoutTemplate");
      default:
        return import("@/templates/template1/indexLayoutTemplate");
    }
  };
  const IndexLayoutTemplate = dynamic(() =>
    getTemplate(templateId).then((mod) => mod.default)
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 内联样式优先设置主题变量 */}
        <style dangerouslySetInnerHTML={{ __html: getInitialThemeStyles() }} />
        {/* 优先加载主题脚本 */}
        <ThemeScript />
      </head>
      <body className={`${inter.className} bg-white overflow-x-hidden`}>
        <IndexLayoutTemplate>{children}</IndexLayoutTemplate>
        {/* <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div> */}
      </body>
    </html>
  );
}
