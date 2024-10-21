"use client";
import PageLoader from "../app/components/PageLoader";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Projects from "./components/Projects";
import useLenisScroll from "./utils/useLenisScroll";

export default function Home() {
  useLenisScroll();

  return (
    <>
      <PageLoader />
      <Header />
      <main className="font-inter">
        <LandingSection />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
