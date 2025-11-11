"use client";

import Navigation from "@/components/navigation";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { catMessages, projects } from "@/lib/data";
import { File, Moon, MoveRight, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGit, FaGithub, FaLinkedin, FaLinux, FaReact } from "react-icons/fa";
import { FaCat } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiPrisma, SiTypescript } from "react-icons/si";
import { toast } from "sonner";
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleMeow = () => {
    const randomWord =
      catMessages[Math.floor(Math.random() * catMessages.length)];
    toast.success(randomWord);
  };

  return (
    <main className="min-h-screen w-full font-sans text-pretty px-4">
      <Navigation title="danodoms" isDynamic={true} />

      <header className="py-4 gap-4 mt-32">
        <div className="max-w-5xl mx-auto flex gap-4 w-full items-center justify-start">
          <h1
            className="font-bold tracking-tighter text-4xl"
          >
            danodoms
          </h1>
          {/* 
          {isScrolled && (
            <Avatar className="size-6 transition-all">
              <AvatarImage src="/images/profile.webp" alt="Profile Icon" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
          )} */}

        </div>
      </header>


      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        <section className="flex flex-col gap-4 font-mono" aria-label="About Section">
          <div className="flex flex-col gap-4 text-pretty">
            <p>
              <b className="bg-linear-to-br from-indigo-500 to-purple-300 text-transparent bg-clip-text">Hey, Dom here.</b> I’m a <>full-stack web developer</> specializing in React and Next.js. I build web applications that simplify workflows, improve efficiency, and help users get things done faster.
            </p>

            <p>
              My background in graphic design and music production shapes the way I approach development, combining usability, clarity, and practical solutions.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap items-center">
            <Link
              href="https://github.com/danodoms"
              className="text-sm flex gap-1 opacity-50 items-center "
              target="_blank"
              aria-label="View Github Profile"
            >
              <FaGithub className="size-4" />
              {/* GitHub */}
            </Link>

            <Link
              href="https://linkedin.com/in/danodoms"
              className="text-sm flex gap-1 opacity-50 items-center"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <FaLinkedin className="size-4" />
              {/* LinkedIn */}
            </Link>

            <Link href="mailto:danodoms@gmail.com" className="text-sm flex gap-1 opacity-50 items-center">
              <IoMdMail className="size-4" />
              {/* danodoms@gmail.com */}
            </Link>

            <div
              className="flex gap-2  items-center cursor-pointer hover:opacity-100 opacity-50 md:ml-auto"
              onClick={handleMeow}
            >
              <FaCat className="animate-bounce" />
              <p className="text-sm underline font-mono">say meow</p>
            </div>

            <div
              className="flex gap-2  items-center cursor-pointer hover:opacity-100 opacity-50"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}

              <p className="text-sm underline font-mono">theme</p>
            </div>
          </div>
        </section>


        {/* CASE STUDIES SECTION */}
        <section className="flex flex-col gap-4 transition-all">
          <div className="flex gap-2">
            <h2 className="opacity-50 text-sm">Case Studies</h2>
          </div>

          {/* CONTENT */}
          <div className="flex gap-4 md:gap-16 md:flex-row-reverse flex-col gap-8 items-center">

            {/* IMAGE */}
            <div className="mt-4 relative w-full h-64 md:h-80 md:flex-1">
              <Image
                src="/images/case-study/evento-about-1.jpg"
                alt="About"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 space-y-4">
              <h3 className="font-bold md:text-4xl text-3xl">
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
        </section>

        <section className="flex flex-col gap-4 transition-all">
          <div className="flex gap-2">
            <h2 className="opacity-50 text-sm">Projects</h2>
          </div>

          <div
            className={`flex flex-col md:gap-16 gap-8 transition-all`}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="opacity-50 mb-2 text-sm">Technologies</h2>
          <div className="flex flex-wrap gap-8 text-4xl">
            <FaReact />
            <SiNextdotjs />
            <RiTailwindCssFill />
            <FaGit />
            <SiTypescript />
            <BiLogoPostgresql />
            <SiPrisma />
            <FaLinux />
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h2 className="opacity-50 text-sm">Education</h2>
          </div>

          <div className="flex flex-col text-pretty font-mono">
            <p>BS in Information Technology</p>

            <div className="flex justify-between">
              <h2 className="opacity-50 text-sm font-mono">
                {" "}
                Davao Oriental State University
              </h2>
            </div>
          </div>

          <Link
            href="https://docs.google.com/document/d/1va_Q1utJ2FfEqzNlo83oPeY4iZJ5cNClXQSVSW1E4LA/edit?usp=sharing"
            target="_blank"
            className="flex gap-2  items-center cursor-pointer hover:opacity-100 opacity-50"
            onClick={handleMeow}
          >
            <File className="size-4" />
            <p className="text-sm underline font-mono">view resume</p>
          </Link>
        </div>

        <GitHubCalendar username="danodoms" />


      </div>


    </main>
  );
}
