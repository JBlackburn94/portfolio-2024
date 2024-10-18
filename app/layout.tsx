import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "./utils/lenis";
import Header from "./components/Header";

const skModernistBold = localFont({
  src: "./fonts/Sk-Modernist-Bold.woff",
  variable: "--font-modernist-bold",
});
const skModernistRegular = localFont({
  src: "./fonts/Sk-Modernist-Regular.woff",
  variable: "--font-modernist-reg",
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
        className={`${skModernistBold.variable} ${skModernistRegular.variable} antialiased bg-slate-950 text-slate-50`}
      >
        <Header />
        <ReactLenis root options={{ lerp: 0.05 }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
