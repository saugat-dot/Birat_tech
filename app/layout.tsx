import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://birattech.com"),

  title: {
    default: "BiratTech | Software Solutions Nepal",
    template: "%s | BiratTech",
  },

  description:
    "BiratTech is a software company in Biratnagar, Nepal delivering website development, mobile applications, custom software, cloud hosting and AI automation.",

  keywords: [
    "BiratTech",
    "BiratTech Nepal",
    "software company Nepal",
    "software company Biratnagar",
    "website development Nepal",
    "web design Nepal",
    "custom software Nepal",
    "mobile app development Nepal",
    "AI automation Nepal",
    "cloud hosting Nepal",
    "software solutions Nepal",
  ],

  authors: [
    {
      name: "BiratTech",
    },
  ],

  creator: "BiratTech",

  publisher: "BiratTech",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BiratTech | Software Solutions Nepal",
    description:
      "Professional website development, custom software and mobile applications from Nepal.",
    url: "https://birattech.com",
    siteName: "BiratTech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "BiratTech Software Solutions Nepal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BiratTech | Software Solutions Nepal",
    description:
      "Website development, software and digital solutions from Nepal.",
    images: ["/favicon.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "https://birattech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}