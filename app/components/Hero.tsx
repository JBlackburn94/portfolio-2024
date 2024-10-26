import { useHeroScroll } from "../utils/animationHooks/useAnimations";

const Hero = () => {
  useHeroScroll();

  return (
    <section
      className="hero mt-[-100px] h-screen w-full"
      aria-labelledby="hero-section"
    >
      <div className="leading-none">
        <h2 id="subheading-1" className="text-blue-400 text-base">
          Hello, I&apos;m Jason.
        </h2>
        <h1 className="overflow-y-hidden w-full uppercase font-bold relative">
          I{" "}
          <span
            id="animatedHeroText-1"
            className="font-playball absolute lowercase text-blue-400 top-[-50px]"
          >
            love
          </span>
          <span
            id="animatedHeroText-2"
            className="relative ml-0 overflow-hidden"
            aria-live="polite"
          >
            <span>Create</span>
          </span>
          <br /> Websites.
        </h1>
        <h2 id="subheading-2" className="text-blue-400 text-base text-right">
          Frontend Developer
        </h2>
      </div>
      <div id="languageContainer" className="mt-2 text-sm opacity-0">
        <p>With React, Next.js, Typescript, TailwindCSS & GSAP</p>
      </div>
    </section>
  );
};

export default Hero;
