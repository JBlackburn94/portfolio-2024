import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const skModernistBold = localFont({
  src: "./fonts/Sk-Modernist-Bold.woff",
  variable: "--font-modernist-bold",
  weight: "100 900",
});
const skModernistRegular = localFont({
  src: "./fonts/Sk-Modernist-Regular.woff",
  variable: "--font-modernist-reg",
  weight: "100 900",
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
        className={`${skModernistBold.variable} ${skModernistRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
