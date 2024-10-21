import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger, useGSAP);

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

export const useBackgroundScroll = () => {
  useGSAP(() => {
    tl.to(".background-image", {
      xPercent: -80,
      scrollTrigger: {
        trigger: ".background-image",
        start: "top top",
        end: "100% top",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    })
      .to("#sub-header", {
        scale: 0,
        scrollTrigger: {
          trigger: "#landing-section",
          start: "1% top",
          end: "8% top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
      .to("#header", {
        scale: 1.5,
        yPercent: -40,
        scrollTrigger: {
          trigger: "#landing-section",
          start: "top top",
          end: "100% top",
          scrub: true,
          pin: true,
          toggleActions: "play none none reverse",
        },
      });
  });
};
