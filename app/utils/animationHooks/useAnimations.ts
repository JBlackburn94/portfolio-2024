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

export const useHeroAnimations = () => {
  useGSAP(() => {
    tl.to("#hero", {
      backgroundColor: "#ffffff",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom+=500 top",
        pin: true,
        scrub: true,
        toggleActions: "play none none reverse",
      },
    })
      .to("#hero h2", {
        color: "#000000",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom+=500 top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
      .to("#hero h1", {
        color: "#000000",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom+=500 top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
      .to("#hero p", {
        color: "#000000",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom+=500 top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });
  });
};
