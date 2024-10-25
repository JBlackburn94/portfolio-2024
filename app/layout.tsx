import type { Metadata } from "next";
import { Roboto, Playball } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--roboto",
});

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--playball",
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
        className={`${playball.variable} ${roboto.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
