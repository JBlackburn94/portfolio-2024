import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-rows-4 grid-cols-4 place-items-center gap-2 font-light p-4 md:p-6 lg:p-8 h-screen bg-gradient-to-tl from-slate-950 to-slate-900">
      <div className="row-span-3 col-span-4">
        <p>Hello, I&apos;m Jason Blackburn</p>
        <h1 className="text-[3rem]">
          I&apos;m a Frontend <br />
          Developer
        </h1>
      </div>
      <div className="flex flex-col gap-5 col-span-2 row-span-1 h-full w-full">
        <p>
          I create beautiful digital experiences, utilising tools such as
          Next.js, Typescript, TailwindCSS and GSAP.
        </p>
        <Link
          href="#projects"
          className="font-semibold hover:ml-1 transition-all duration-200 ease-in-out"
        >
          View my recent work.
        </Link>
      </div>
      <div className="border border-white col-span-2 row-span-1 h-full w-full"></div>
    </section>
  );
};

export default Hero;
