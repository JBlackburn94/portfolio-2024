import { useAboutSectionParallax } from "../utils/animationHooks/useAnimations";

const About = () => {
  useAboutSectionParallax();

  return (
    <section
      id="about-section"
      className="h-screen z-10 text-[#0b3d3a] bg-[#49f5ea]"
    >
      <h2 id="about-header" className="text-black text-[5rem]">
        About
      </h2>
    </section>
  );
};

export default About;
