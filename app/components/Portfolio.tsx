import PortfolioCard from "./PortfolioCard";
import artioBg from "../../public/artio-about.webp";

const Portfolio = () => {
  return (
    <section id="projects" className="h-screen pt-10">
      <h1>
        My <span className="font-playball text-orange-400">Work</span>
      </h1>
      <div className="flex w-full h-full justify-center">
        <PortfolioCard
          background={artioBg}
          projectName="Artio"
          liveLink="https://www.artiomusic.com"
          githubLink="https://github.com/JBlackburn94/artio"
        />
      </div>
    </section>
  );
};

export default Portfolio;
