"use client";
import PageLoader from "../app/components/PageLoader";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import useLenisScroll from "./utils/useLenisScroll";

export default function Home() {
  useLenisScroll();

  return (
    <>
      <PageLoader />
      <Header />
      <main className="relative backdrop-blur-sm">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover opacity-50 z-[-1]"
        >
          <source
            src="https://2024-jb-portfolio.s3.eu-north-1.amazonaws.com/videos/hero-video.mp4"
            type="video/mp4"
          />
        </video>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
