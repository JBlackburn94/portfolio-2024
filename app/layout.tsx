import type { Metadata } from "next";
import { Inter, Gupter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--inter",
});

const gupter = Gupter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--gupter",
});

export const metadata: Metadata = {
  title: "Jason Blackburn | Frontend Developer Portfolio",
  description:
    "Discover the work of Jason Blackburn, a frontend developer specializing in TypeScript, Next.js, and Tailwind CSS. Explore my projects and get in touch for freelance opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gupter.variable} ${inter.variable} antialiased text-white`}
      >
        {children}
      </body>
    </html>
  );
}
