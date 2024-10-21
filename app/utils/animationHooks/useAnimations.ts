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

export const useHeroBgScroll = () => {
  useGSAP(() => {
    gsap.to("#hero-image", {
      scale: 4,
      opacity: 0,
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom+=1000 top",
        scrub: true,
        pin: true,
        toggleActions: "play none none reverse",
      },
    });
  });
};

export const useHeroContentScroll = () => {
  useGSAP(() => {
    gsap.to("#hero-content", {
      y: -100,
      scale: 2,
      color: "#000000",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom+=200 top",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  });
};

export const useHeroAnimation = () => {
  useGSAP(() => {
    tl.to("#hero-subheading-container", {
      yPercent: -80,
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "center top",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    })
      .to("#hero-heading", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#hero-content",
          start: "10% top",
          end: "center top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
      .to("#hero-subheading-one", {
        y: -100,
        duration: 5,
        scrollTrigger: {
          trigger: "#hero-content",
          start: "bottom top",
          end: "bottom+=300 top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
      .to("#hero-subheading-two", {
        y: -60,
        duration: 5,
        scrollTrigger: {
          trigger: "#hero-content",
          start: "bottom+=100 top",
          end: "bottom+=400 top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });
  });
};

export const useAboutSectionParallax = () => {
  useGSAP(() => {
    tl.to("#about-section", {
      backgroundColor: "#000000",
      scrollTrigger: {
        trigger: "#about-section",
        start: "top top",
        end: "bottom+=500 top",
        scrub: true,
        pin: true,
        toggleActions: "play none none reverse",
      },
    })
      .to("#about-header", {
        scale: 150,
        rotate: 100,
        scrollTrigger: {
          trigger: "#about-section",
          start: "top top",
          end: "80% top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
      .to("#about-header", {
        display: "none",
        scrollTrigger: {
          trigger: "#about-section",
          start: "80% top",
          end: "bottom+=100 top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });
  });
};
