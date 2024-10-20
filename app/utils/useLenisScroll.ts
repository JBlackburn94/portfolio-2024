import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const onScroll = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(onScroll);
    };

    requestAnimationFrame(onScroll);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenisScroll;
