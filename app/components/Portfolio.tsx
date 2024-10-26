import PortfolioCard from "./PortfolioCard";
import { usePortfolioAnimation } from "../utils/animationHooks/useAnimations";
import artioBg from "../../public/artio-about.webp";
import beautySchoolBg from "../../public/beauty-school.webp";
import shiftMateBg from "../../public/shiftMate.webp";

const Portfolio = () => {
  usePortfolioAnimation();

  const portfolioItems = [
    {
      name: "Artio",
      image: artioBg,
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      description:
        "Artio are a band from Leeds, Uk. They approached me with a basic design for a single page website to promote their music, tour dates and merchandise.",
      liveLink: "https://www.artiomusic.com",
      githubLink: "https://github.com/JBlackburn94/artio",
    },
    {
      name: "Beauty School",
      image: beautySchoolBg,
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      description:
        "Beauty School are a band from Leeds, UK. I designed and built this website to promote their music, tour dates and merchandise. They wanted something modern that stands out from the variety of no-code websites that their peers use.",
      liveLink: "",
      githubLink: "",
    },
    {
      name: "ShiftMate",
      image: shiftMateBg,
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Nodemailer",
      ],
      description: "",
      liveLink: "",
      githubLink: "",
    },
  ];

  return (
    <section id="projects" className="portfolio-section h-screen pt-10">
      <h1>
        My <span className="font-playball text-blue-400">Work</span>
      </h1>
      <div className="relative w-full h-full flex justify-center items-end">
        {portfolioItems.map((item, index) => (
          <PortfolioCard
            key={index}
            name={item.name}
            image={item.image}
            tech={item.tech}
            description={item.description}
            liveLink={item.liveLink}
            githubLink={item.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
