import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "کتابچه طبقه دوم - دانشکده مدیریت و اقتصاد دانشگاه گیلان",
  description: "سفره اعضای دانشکده مدیریت و اقتصاد حسابداری - دانشگاه گیلان",
  keywords: ["دانشگاه گیلان", "مدیریت", "اقتصاد", "حسابداری", "کتابچه طبقه دوم"],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: [
      { url: '/icon.png', type: 'image/png' }
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icon.png" sizes="512x512" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
