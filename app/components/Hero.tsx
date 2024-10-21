import { usePageLoadFadeIn } from "../utils/animationHooks/useAnimations";

const Hero = () => {
  usePageLoadFadeIn();

  return <section className="fade-in h-screen mt-[-100px]">Hero</section>;
};

export default Hero;
