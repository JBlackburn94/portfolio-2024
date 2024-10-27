import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

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
    <div className="portfolio-card bg-blue-400 opacity-0 h-[95%] w-[80%] lg:w-[450px] absolute bottom-0 rounded-[40px]">
      <div className="h-[50%] w-full rounded-t-[40px] overflow-hidden relative">
        <h2 className="absolute bottom-0 z-20 font-bold text-white py-1 px-5 backdrop-blur-md w-full">
          {name}
        </h2>
        <img
          src={image.src}
          alt={`${name} promo image`}
          className="absolute top-0 left-0 h-full w-full object-cover z-10"
        />
      </div>
      <div className="h-[30%] w-full py-2 px-5">
        <h6 className="font-bold">Tech</h6>
        <ul className="mt-2 text-sm flex flex-wrap justify-start items-center gap-2">
          {tech.map((t) => (
            <li key={t} className="text-white">
              {t}
            </li>
          ))}
        </ul>
        <hr />
        <p className="text-sm text-white mt-4">{description}</p>
      </div>
      <div className="flex justify-start items-end gap-5 h-[10%] mt-10 w-full py-2 px-5">
        <Link href={liveLink} className="underline font-bold">
          Live Site
        </Link>
        <Link href={githubLink} className="underline font-bold">
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
