import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SendMessage } from "@/components/ui/SendMessage";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const revalidate = 0;

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={`${inter.className} bg-white overflow-x-hidden`}>
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <SendMessage />
        </I18nProvider>
      </body>
    </html>
  );
}
