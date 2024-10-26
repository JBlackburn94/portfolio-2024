"use client";
import PageLoader from "../app/components/PageLoader";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import useLenisScroll from "./utils/useLenisScroll";

export default function Home() {
  useLenisScroll();

  return (
    <>
      <PageLoader />
      <Header />
      <main className="font-roboto overflow-x-hidden">
        <Hero />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
