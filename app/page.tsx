import PageLoader from "../app/components/PageLoader";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
