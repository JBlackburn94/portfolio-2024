import { useHeroScroll } from "../utils/animationHooks/useAnimations";

const Hero = () => {
  useHeroScroll();

  return (
    <section className="hero mt-[-100px] h-screen w-full">
      <div className="leading-none">
        <h2 className="text-orange-400 text-base">Hello, I&apos;m Jason.</h2>
        <h1 className="overflow-y-hidden w-full uppercase font-bold relative">
          I{" "}
          <span
            id="animatedHeroText-1"
            className="font-playball absolute lowercase text-orange-400 top-[-50px]"
          >
            love
          </span>
          <span
            id="animatedHeroText-2"
            className="relative ml-0 overflow-hidden"
          >
            <span>Create</span>
          </span>
          <br /> Websites
        </h1>
        <h2 className="text-orange-400 text-base text-right">
          Frontend Developer
        </h2>
      </div>
    </section>
  );
};

export default Hero;
