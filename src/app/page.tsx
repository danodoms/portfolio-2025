"use client";

import Navigation from "@/components/navigation";
import AsciiHologram from "@/components/ascii-hologram";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { catMessages, projects } from "@/lib/data";
import AutoScroll from "embla-carousel-auto-scroll";
import { File, Moon, MoveRight, Sun, ArrowUpRight } from "lucide-react";
import { motion, MotionConfig, type MotionProps } from "motion/react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGit, FaGithub, FaLinkedin, FaLinux, FaReact } from "react-icons/fa";
import { FaCat } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiPrisma, SiTypescript } from "react-icons/si";
import { toast } from "sonner";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

const technologies = [
  FaReact,
  SiNextdotjs,
  RiTailwindCssFill,
  FaGit,
  SiTypescript,
  BiLogoPostgresql,
  SiPrisma,
  FaLinux,
];

const reveal: MotionProps = {
  initial: { y: 8, filter: "blur(4px)" },
  whileInView: { y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
};

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleMeow = () => {
    const randomWord =
      catMessages[Math.floor(Math.random() * catMessages.length)];
    toast.success(randomWord);
  };

  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen w-full font-sans text-pretty px-8">
      <Navigation title="danodoms" isDynamic={true} />

      <div className="flex flex-col gap-32 max-w-4xl mx-auto">
        <section className="flex flex-col md:grid md:grid-cols-2 gap-8 pt-16" aria-label="About Section">
          <div className="relative size-28 shrink-0 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--foreground)_15%,var(--background))] md:order-2 md:size-56 md:justify-self-center md:self-center">
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <AsciiHologram className="text-[3px] leading-[3px] text-foreground opacity-80 md:text-[6px] md:leading-[6px]" />
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full md:order-1">
            <h1 className="font-bold tracking-tighter text-2xl">
              danodoms
            </h1>
            <div className="flex flex-col gap-6 text-left text-pretty [font-family:var(--font-satoshi)]">
            <p>
              <b>Hey, Dom here.</b> If you’re reading this, then we’re friends now :D
            </p>

            <p>
            I’m a full-stack developer who’s shipped web and mobile projects for remote teams, usually working in React and TypeScript. Before development, I worked in design and music production.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap items-center">
            <Link
              href="https://github.com/danodoms"
              className="text-sm flex gap-1 items-center"
              target="_blank"
              aria-label="View Github Profile"
            >
              <FaGithub className="size-5" />
              {/* GitHub */}
            </Link>

            <Link
              href="https://linkedin.com/in/danodoms"
              className="text-sm flex gap-1 items-center"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <FaLinkedin className="size-5" />
              {/* LinkedIn */}
            </Link>

            <Link href="mailto:danodoms@gmail.com" className="text-sm flex gap-1 items-center">
              <IoMdMail className="size-5" />
              {/* danodoms@gmail.com */}
            </Link>

            <button
              type="button"
              aria-label="Make the cat talk"
              className="flex gap-2 items-center cursor-pointer"
              onClick={handleMeow}
            >
              <FaCat className="size-5 animate-bounce" />
            </button>

            <button
              type="button"
              aria-label="Toggle color theme"
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}

              <span className="text-sm underline">theme</span>
            </button>
          </div>

          <Link href="mailto:danodoms@gmail.com" className="w-fit">
            <Button
              variant="default"
              size="lg"
              className="cta-shine group rounded-full"
            >
              Let’s connect <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
          </div>
        </section>


        {/* CASE STUDIES SECTION */}
        <motion.section
          {...reveal}
          className="flex flex-col gap-4 transition-all"
        >
          <div className="flex gap-2">
            <h2 className="opacity-50 text-sm">Case Studies</h2>
          </div>

          {/* CONTENT */}
          <div className="flex gap-4 md:gap-16 md:flex-row-reverse flex-col gap-8 items-center">

            {/* IMAGE */}
            <div className="mt-4 relative w-full h-64 md:h-80 md:flex-1">
              <Image
                src="/images/case-study/evento-about-1.webp"
                alt="About"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 space-y-4">
              <h3 className="font-bold md:text-4xl text-3xl tracking-tight">
                How an organization reduced event check-in time by 80%
              </h3>

              {/* <p className="opacity-50">…while eliminating long queues and reducing errors by 95%</p> */}
              <p className="opacity-50">
                By digitizing attendance with QR code scanning, students check in in seconds, and organizers get real-time reports. This approach saved hours of manual work per event and provided accurate, reliable data for decision-making.
              </p>
              <Link href="/case-studies/evento">
                {/* <Button className="bg-linear-to-br from-indigo-500 to-purple-300 shadow-purple-300/30 shadow-lg text-foreground">
                  view case study <MoveRight />
                </Button> */}

                <Button variant="ghost" size="lg" className="bg-liquid-glass rounded-full">
                  view case study <MoveRight />
                </Button>
              </Link>
            </div>


          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="flex flex-col gap-4 transition-all"
        >
          <div className="flex gap-2">
            <h2 className="opacity-50 text-sm">Projects</h2>
          </div>

          <div
            className={`flex flex-col gap-32 transition-all`}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} className="flex flex-col gap-4">
          <h2 className="opacity-50 mb-2 text-sm">Technologies</h2>
          <Carousel
            opts={{ loop: true, align: "start", dragFree: true }}
            plugins={[
              AutoScroll({
                speed: 1,
                startDelay: 0,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          >
            <CarouselContent className="-ml-8">
              {[...technologies, ...technologies].map((Icon, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto pl-8 text-4xl"
                >
                  <Icon />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.section>

        <motion.div {...reveal} className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h2 className="opacity-50 text-sm">Education</h2>
          </div>

          <div className="flex flex-col text-pretty">
            <p>BS in Information Technology</p>

            <div className="flex justify-between">
              <h2 className="opacity-50 text-sm">
                {" "}
                Davao Oriental State University
              </h2>
            </div>
          </div>

          <Link
            href="/resume"
            target="_blank"
            className="flex gap-2 items-center cursor-pointer"
            // onClick={handleMeow}
          >
            <File className="size-4" />
            <p className="text-sm underline">view resume</p>
          </Link>
        </motion.div>

        <motion.div {...reveal}>
          <GitHubCalendar
            username="danodoms"
            colorScheme={resolvedTheme === "light" ? "light" : "dark"}
            theme={{
              light: ["#ebedf0", "#cfcfcf", "#9e9e9e", "#5c5c5c", "#1f1f1f"],
              dark: ["#2a2a2a", "#4d4d4d", "#7a7a7a", "#ababab", "#ededed"],
            }}
          />
        </motion.div>


      </div>


    </main>
    </MotionConfig>
  );
}
