import PortfolioCard from "./PortfolioCard";
import { usePortfolioAnimation } from "../utils/animationHooks/useAnimations";
import artioBg from "../../public/artio-about.webp";

const Portfolio = () => {
  usePortfolioAnimation();

  const portfolioItems = [
    {
      name: "Artio",
      image: artioBg,
      tech: ["React", "Next.js", "TypeScript"],
      description: "A music streaming platform.",
      liveLink: "https://www.artiomusic.com",
      githubLink: "https://github.com/JBlackburn94/artio",
    },
    {
      name: "Project 2",
      image: artioBg,
      tech: ["React", "Next.js", "TypeScript"],
      description: "A music streaming platform.",
      liveLink: "https://www.artiomusic.com",
      githubLink: "https://github.com/JBlackburn94/artio",
    },
    {
      name: "Project 3",
      image: artioBg,
      tech: ["React", "Next.js", "TypeScript"],
      description: "A music streaming platform.",
      liveLink: "https://www.artiomusic.com",
      githubLink: "https://github.com/JBlackburn94/artio",
    },
    {
      name: "Project 4",
      image: artioBg,
      tech: ["React", "Next.js", "TypeScript"],
      description: "A music streaming platform.",
      liveLink: "https://www.artiomusic.com",
      githubLink: "https://github.com/JBlackburn94/artio",
    },
    // Add more portfolio items here
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
