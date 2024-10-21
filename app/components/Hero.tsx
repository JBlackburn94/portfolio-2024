import Image from "next/image";
import {
  useHeroAnimation,
  useHeroBgScroll,
  useHeroContentScroll,
  usePageLoadFadeIn,
} from "../utils/animationHooks/useAnimations";
import heroBg from "../../public/hero-bg.svg";

const Hero = () => {
  usePageLoadFadeIn();
  useHeroBgScroll();
  useHeroContentScroll();
  useHeroAnimation();

  return (
    <section
      id="hero-section"
      className="hero-section relative flex justify-center items-center bg-[#49f5ea] fade-in h-screen mt-[-100px]"
    >
      <div
        id="hero-content"
        className="relative flex flex-col justify-center items-center h-screen max-w-1/2 overflow-hidden text-wrap"
      >
        <div
          id="hero-subheading-container"
          className="overflow-hidden h-[3rem] text-center flex flex-col"
        >
          <h2 id="hero-subheading-one" className="font-extralight">
            Hello!
          </h2>
          <h2 id="hero-subheading-two" className="font-extralight">
            Who am I?
          </h2>
        </div>
        <h1 id="hero-heading">My name is Jason.</h1>
        <div
          id="bio"
          className="absolute bottom-5 overflow-hidden w-1/2 scale-0"
        >
          <p>
            I&apos;m a Junior Frontend Developer from the UK. I utilise my
            creativity, and passion for technology to create immersive,
            responsive and accessible digital expierences.
          </p>
        </div>
      </div>
      <Image
        id="hero-image"
        src={heroBg}
        alt="Hero section background"
        className="absolute top-0 left-0 object-cover w-full h-full z-[-1]"
      />
    </section>
  );
};

export default Hero;
