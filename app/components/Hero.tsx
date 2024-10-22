import {
  useHeroAnimations,
  usePageLoadFadeIn,
} from "../utils/animationHooks/useAnimations";

const Hero = () => {
  usePageLoadFadeIn();
  useHeroAnimations();

  return (
    <section id="hero" className="mt-[-100px]">
      <h2 className="font-extralight">Hello!</h2>
      <h1>I&apos;m Jason.</h1>
      <p>
        A <span className="text-blue-700">Frontend Developer</span> from the UK.
      </p>
      <p className="mt-5 small font-extralight">
        TypeScript, Next.js, React, GSAP
      </p>
    </section>
  );
};

export default Hero;
