"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ProgressBar from "./ProgressBar";
import AnimatedLogo from "./AnimatedLogo";

const PageLoader: React.FC = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const pageLoaderRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePageLoad = () => {
      if (pageLoaderRef.current) {
        gsap.to(logoRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
        gsap.to(pageLoaderRef.current, {
          y: "-100%",
          opacity: 0,
          delay: 0.5,
          duration: 0.5,
          ease: "power1.out",
          onComplete: () => setIsPageLoading(false),
        });
      }
    };

    const timeout = setTimeout(handlePageLoad, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isPageLoading) {
    return null;
  }

  return (
    <div
      ref={pageLoaderRef}
      className="fixed top-0 left-0 h-full w-full z-50 bg-blue-950 flex justify-center items-center"
    >
      <div ref={logoRef} className="flex flex-col gap-10">
        <AnimatedLogo />
        <ProgressBar />
      </div>
    </div>
  );
};

export default PageLoader;
