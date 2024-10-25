import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import TextPlugin from "gsap/TextPlugin";

const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger, useGSAP, TextPlugin);

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

export const useHeroScroll = () => {
  useGSAP(() => {
    gsap.to(".hero", {
      color: "#000000",
      scale: 1.1,
      backgroundColor: "#ffffff",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom+=500 center",
        pin: true,
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.from("#heading", {
      x: 10,
      opacity: 0,
      duration: 1,
      delay: 4,
      stagger: 0.2,
    })
      .to("#animatedHeroText-2", {
        marginLeft: "90px",
        scrollTrigger: {
          trigger: "#animatedHeroText-2",
          start: "top top",
          end: "bottom+=250 top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })
      .to("#animatedHeroText-1", {
        top: 0,
        scrollTrigger: {
          trigger: "#animatedHeroText-2",
          start: "center+=100 top",
          end: "bottom+=250 top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })
      .to("#animatedHeroText-2 span:nth-child(1)", {
        text: "Creating",
        scrollTrigger: {
          trigger: "#animatedHeroText-2",
          start: "top top",
          end: "bottom+=250 top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })
      .to("#languageContainer", {
        opacity: 1,
        scrollTrigger: {
          trigger: "#languageContainer",
          start: "top top",
          end: "bottom+=250 top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })
      .to("#subheading-1", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#subheading-1",
          start: "top top",
          end: "bottom+=250 top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })
      .to("#subheading-2", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#subheading-1",
          start: "top top",
          end: "bottom+=250 top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
  });
};
