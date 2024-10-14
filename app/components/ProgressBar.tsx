"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ProgressBar: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2;
    const total = 100;

    gsap.to(
      { value: 0 },
      {
        value: total,
        duration: duration,
        onUpdate: function () {
          if (progressBarRef.current) {
            progressBarRef.current.style.width = this.targets()[0].value + "%";
          }
        },
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div className="relative w-full bg-neutral-800 overflow-hidden">
      <div
        className="h-5 bg-white transition-all duration-500"
        ref={progressBarRef}
        style={{ width: "0%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
