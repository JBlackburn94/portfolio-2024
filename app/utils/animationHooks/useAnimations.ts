import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const usePageLoadFadeIn = () => {
  useGSAP(() => {
    gsap.to(".fade-in", {
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      delay: 3.7,
    });
  });
};
