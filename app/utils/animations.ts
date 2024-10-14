import gsap from "gsap";

export const headerAnimaton = () => {
  gsap.fromTo(
    ".header",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 3, ease: "power4.out" }
  );
};
