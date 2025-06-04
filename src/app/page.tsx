"use client";

import ProjectCard from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { catMessages, projects } from "@/lib/data";
import { File, Globe, Moon, Sun } from "lucide-react";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGit, FaGithub, FaLinkedin, FaLinux, FaReact } from "react-icons/fa";
import { FaCat } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiPrisma, SiTypescript } from "react-icons/si";
import { toast } from "sonner";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleMeow = () => {
    const randomWord =
      catMessages[Math.floor(Math.random() * catMessages.length)];
    toast.success(randomWord);
  };

  return (
    <div className="min-h-screen flex flex-col gap-16 p-8 w-full font-sans">
      <div className=" flex flex-col w-full gap-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col ">
            <h1 className=" font-bold text-2xl tracking-tighter flex items-center gap-2 ">
              danodoms
              {/* <RiVerifiedBadgeFill className="size-4" /> */}
              <Globe className="size-4" />
            </h1>
            <p className="opacity-50 font-mono">Web Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="size-12 ">
              <AvatarImage src="/images/profile.webp" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Separator />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="opacity-50 text-sm">About</h2>
        </div>

        <div className="flex flex-col gap-4 text-pretty font-mono">
          <p>
            Hello! I&apos;m <strong>Dominador Dano Jr.</strong>, a developer
            passionate about building user-focused tools for the web and beyond,
            specializing in <strong>React</strong> and <strong>Next.js</strong>.
          </p>

          <p>
            I started out as a freelance graphic designer and music producer
            before moving into development. That
            <strong> creative background</strong> still shapes the way I
            approach my work, balancing usability, visual clarity, and technical
            precision.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          {/* <ModeToggle /> */}

          <Link
            href="https://github.com/danodoms"
            className="text-sm flex gap-1 opacity-50 items-center "
            target="_blank"
          >
            <FaGithub className="size-4" />
            {/* GitHub */}
          </Link>

          <Link
            href="https://linkedin.com/in/danodoms"
            className="text-sm flex gap-1 opacity-50 items-center"
            target="_blank"
          >
            <FaLinkedin className="size-4" />
            {/* LinkedIn */}
          </Link>

          <p className="text-sm flex gap-1 opacity-50 items-center">
            <IoMdMail className="size-4" />
            danodoms@gmail.com
          </p>

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
      </div>

      <div className="flex flex-col gap-4 transition-all">
        <div className="flex gap-2">
          {/* <div
            className="md:flex gap-2  items-center cursor-pointer hover:opacity-100 opacity-50 hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <Minimize2 className="size-3" />
            ) : (
              <Maximize2 className="size-3" />
            )}
          </div> */}
          <h2 className="opacity-50 text-sm">Projects</h2>
        </div>

        <div
          // className={`flex flex-col gap-8 md:grid-cols-2 ${isExpanded ? "" : "md:grid"} transition-all`}
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
      </div>

      <div className="flex flex-col gap-4">
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
      </div>

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
          href="/dominador-dano-jr-resume.pdf"
          target="_blank"
          className="flex gap-2  items-center cursor-pointer hover:opacity-100 opacity-50"
          onClick={handleMeow}
        >
          <File className="size-4" />
          <p className="text-sm underline font-mono">view resume</p>
        </Link>
      </div>

      <GitHubCalendar username="danodoms" />

      <Separator />

      <p className="text-sm tracking-tight opacity-50 text-center mb-4 font-mono">
        © 2025. All rights reserved.
      </p>
    </div>
  );
}
