import React from "react";
import { StaticImageData } from "next/image";

interface PortfolioCardProps {
  name: string;
  liveLink: string;
  githubLink: string;
  description: string;
  tech: string[];
  image: StaticImageData;
}

const PortfolioCard = ({
  name,
  image,
  tech,
  description,
  liveLink,
  githubLink,
}: PortfolioCardProps) => {
  return (
    <div className="portfolio-card bg-blue-400 opacity-0 h-[90%] w-[350px] absolute bottom-0 rounded-t-[40px]">
      <div className="h-[40%] w-full rounded-t-[40px] overflow-hidden relative">
        <h2 className="absolute bottom-0 z-20 font-bold text-white py-1 px-5 backdrop-blur-md w-full">
          {name}
        </h2>
        <img
          src={image.src}
          alt={`${name} promo image`}
          className="absolute h-full w-full object-cover z-10"
        />
      </div>
      <div className="h-[40%] w-full py-2 px-5">
        <h5 className="font-bold">Tech</h5>
        <hr />
        <ul className="mt-2 text-sm flex justify-start items-center gap-2">
          {tech.map((t) => (
            <li key={t} className="text-white">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[20%] w-full py-2 px-5">
        <p className="text-sm text-white">{description}</p>
        <div className="mt-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Live Site
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-blue-500 underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
