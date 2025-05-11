import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Lost Billions",
  description: "Making sense of আওয়ামী লীগের লুটপাট",
  openGraph: {
    type: "website",
    url: "https://the-lost-billions.vercel.app/",
    title: "The Lost Billions",
    description: "Making sense of আওয়ামী লীগের লুটপাট",
    images: [
      {
        url: "https://the-lost-billions.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "The Lost Billions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
        {children}
        {/* </ThemeProvider> */}
        <Analytics />
      </body>
    </html>
  );
}
