import React from "react";
import Hero from "./Hero";
import About from "./About";
import { useBackgroundScroll } from "../utils/animationHooks/useAnimations";

export default function LandingSection() {
  useBackgroundScroll();

  return (
    <section
      id="landing-section"
      className="h-[2560px] overflow-hidden relative flex justify-normal items-center mt-[-105px]"
    >
      <Hero />
      <About />
      <div className="background-image absolute h-[2560px] w-[7000px] bg-gradient-to-r from-blue-700 to-black via-indigo-900 top-0 left-0 z-0"></div>
    </section>
  );
}
