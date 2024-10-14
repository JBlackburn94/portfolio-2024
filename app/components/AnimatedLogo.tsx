import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "./Logo";

const AnimatedLogo: React.FC = () => {
  const logoRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (logoRef.current) {
      const path = logoRef.current.querySelector("path");

      if (path) {
        const length = path.getTotalLength();

        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = length.toString();

        gsap.to(path, {
          strokeDashoffset: 0,
          delay: 1,
          duration: 1.5,
          ease: "power1.out",
          onStart: () => {
            path.classList.remove("hidden-path");
          },
        });
      }
    }
  }, []);

  return (
    <div>
      <Logo ref={logoRef} />
    </div>
  );
};

export default AnimatedLogo;
