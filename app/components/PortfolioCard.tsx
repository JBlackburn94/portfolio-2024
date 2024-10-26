import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { SiToyota, SiTypescript } from "react-icons/si";

interface PortfolioCardProps {
  background: StaticImageData;
  projectName: string;
  liveLink: string;
  githubLink: string;
}

const PortfolioCard = ({
  background,
  projectName,
  liveLink,
  githubLink,
}: PortfolioCardProps) => {
  return (
    <div className="w-[350px] relative overflow-hidden rounded-t-[40px] mt-10 p-5">
      <div className="absolute top-0 left-0 bg-orange-400 text-black h-full w-full z-20 bg-opacity-40 backdrop-blur-md flex flex-col gap-2 p-5">
        <h2 className="font-bold">{projectName}</h2>
        <Link
          className="bg-black text-white px-4 py-2 w-3/4 rounded-md text-center hover:bg-orange-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
          href={liveLink}
          target="_blank"
        >
          Live Site
        </Link>
        <Link
          className="bg-black text-white px-4 py-2 w-3/4 rounded-md text-center hover:bg-orange-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
          href={githubLink}
          target="_blank"
        >
          Repo
        </Link>
        <h3 className="font-bold mt-5">Tech</h3>
        <ul className="flex gap-4 justify-center items-center"></ul>
      </div>
      <img
        src={background.src}
        alt="Artio portfolio card background image"
        className="absolute h-full w-full object-cover top-0 left-0 z-10"
      />
    </div>
  );
};

export default PortfolioCard;
