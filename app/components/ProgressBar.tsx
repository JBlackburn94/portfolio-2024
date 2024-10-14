"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ProgressBar: React.FC = () => {
  const progressTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const duration = 2;
    const total = 100;

    gsap.to(
      { value: 0 },
      {
        value: total,
        duration: duration,
        delay: 0.5,
        onUpdate: function () {
          if (progressTextRef.current) {
            progressTextRef.current.innerText =
              Math.floor(this.targets()[0].value) + "%";
          }
        },
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center text-white">
      <span className="text-xl font-bold" ref={progressTextRef}>
        0%
      </span>
    </div>
  );
};

export default ProgressBar;
