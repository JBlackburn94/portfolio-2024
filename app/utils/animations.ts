import gsap from "gsap";

const tl = gsap.timeline();

export const headerAnimaton = () => {
  gsap.fromTo(
    ".header",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 3, ease: "power4.out" }
  );
};

export const navOpenAnimation = () => {
  gsap.set(".nav-link", { y: 100 });
  tl.to(".hamburger", {
    y: 2,
    scaleY: 0.8,
    duration: 0.1,
  })
    .to(".hamburger", {
      y: -32,
      scaleY: 1.2,
      delay: 0.1,
      duration: 0.1,
    })
    .to(".mobile-menu", {
      height: "100%",
      duration: 0.1,
    })
    .to(".nav-link", {
      y: 0,
      stagger: 0.1,
    })
    .to(".close", {
      y: -32,
      scaleY: 1.2,
      duration: 0.1,
    })
    .to(".close", {
      y: -28,
      scaleY: 1,
    });
};

export const navCloseAnimation = () => {
  tl.to(".close", {
    y: -2,
    scaleY: 1.2,
    delay: 0.1,
    duration: 0.1,
  })
    .to(".close", {
      y: 30,
      scaleY: 0.8,
      duration: 0.1,
    })
    .to(".nav-link", {
      y: 100,
      stagger: -0.1,
    })
    .to(".mobile-menu", {
      height: 0,
      duration: 0.1,
    })
    .to(".hamburger", {
      y: 2,
      scaleY: 0.8,
      duration: 0.1,
    })
    .to(".hamburger", {
      y: 0,
      scaleY: 1,
    });
};
