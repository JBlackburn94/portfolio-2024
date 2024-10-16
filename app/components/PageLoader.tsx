"use client";
import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import AnimatedLogo from "./AnimatedLogo";

const PageLoader: React.FC = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => setIsPageLoading(false);

    const timeout = setTimeout(handlePageLoad, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isPageLoading) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 h-full w-full z-50 bg-slate-950 flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <AnimatedLogo />
        <ProgressBar />
      </div>
    </div>
  );
};

export default PageLoader;
