import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e40af',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://manecoguilan.netlify.app/'), // Replace with your actual Netlify URL
  title: "کتابچه طبقه دوم - دانشکده مدیریت و اقتصاد دانشگاه گیلان",
  description: "سفره اعضای دانشکده مدیریت و اقتصاد حسابداری - دانشگاه گیلان",
  keywords: ["دانشگاه گیلان", "مدیریت", "اقتصاد", "حسابداری", "کتابچه طبقه دوم"],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: '/icon.png',
  },
  openGraph: {
    title: "کتابچه طبقه دوم - دانشکده مدیریت و اقتصاد",
    description: "سفره اعضای دانشکده مدیریت و اقتصاد حسابداری",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'لوگوی دانشگاه گیلان',
      }
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preload" href="/header.png" as="image" fetchPriority="high" />
        <link rel="preload" href="/icon.png" as="image" />
        <link rel="preconnect" href="https://t.me" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.instagram.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.aparat.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://sada.guilan.ac.ir" />
        <link rel="dns-prefetch" href="https://ecent2.guilan.ac.ir" />
        <link rel="dns-prefetch" href="https://food.guilan.ac.ir" />
        <link rel="dns-prefetch" href="https://swf.ir" />
        <link rel="dns-prefetch" href="https://guilan.ac.ir" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
