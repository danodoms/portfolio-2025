import ProjectCard from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { File } from "lucide-react";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGit, FaGithub, FaLinkedin, FaLinux, FaReact } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiTailwindCssFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { SiNextdotjs, SiPrisma, SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-16 p-8 w-full">
      <div className=" flex flex-col w-full gap-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col ">
            <h1 className=" font-bold text-2xl tracking-tighter flex items-center gap-2 ">
              danodoms
              <RiVerifiedBadgeFill className="size-4" />
            </h1>
            <p className="opacity-50">Full-Stack Web Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="size-12 ">
              <AvatarImage src="https://avatars.githubusercontent.com/u/165539900?v=4" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Separator />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold">About</h2>
        <div className="flex flex-col gap-2 text-pretty">
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
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/danodoms"
            className="text-sm flex gap-1 opacity-50 items-center"
            target="_blank"
          >
            <FaLinkedin className="size-4" />
            LinkedIn
          </Link>

          <p className="text-sm flex gap-1 opacity-50 items-center">
            <IoMdMail className="size-4" />
            danodoms@gmail.com
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Projects</h2>
        <div className="flex flex-col gap-8 md:grid-cols-2 md:grid">
          <ProjectCard
            title="Dekada"
            description="Digital research repository"
            images={["/images/dekada/dekada-1.webp"]}
            impacts={[
              "Store 200+ undergraduate research",
              "Improved knowledge sharing",
            ]}
            liveLink="https://dekada.onrender.com/"
          />

          <ProjectCard
            title="evento"
            description="QR Code based events attendance"
            images={["/images/evento/evento-1.webp"]}
            impacts={[
              "Successfully serves 1,000+ users",
              "Attendance logging sped up by 5x",
            ]}
            liveLink="https://eventoportal.netlify.app"
            repoLink="https://github.com/danodoms/evento"
          />

          <ProjectCard
            title="XR Vision"
            description="AI-Powered Rice Leaf NPK Deficiency Detector Mobile App"
            images={["/images/evento/evento-3.webp"]}
            impacts={["On-device AI processing", "Realtime image analysis"]}
            liveLink="https://github.com/danodoms/XR-Vision"
            repoLink="https://github.com/danodoms/xr-vision"
          />

          <ProjectCard
            title="Biometric Attendance"
            description="Fingerprint based attendance system with DTR generation"
            images={["/images/bio-attendance/bio-attendance-2.webp"]}
            impacts={[
              "Secure, tamper-proof identity tracking",
              "Automated DTR generation",
            ]}
            liveLink="https://github.com/danodoms/fingerprint-attendance"
            repoLink="https://github.com/danodoms/fingerprint-attendance"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold mb-2">Technologies</h2>
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

      <Link href="/dominador-dano-jr-resume.pdf" target="_blank">
        <Button
          className="flex items-center cursor-pointer"
          variant="secondary"
        >
          <File />
          View CV
        </Button>
      </Link>

      <GitHubCalendar username="danodoms" />

      <Separator />

      <p className="text-sm tracking-tight opacity-50 text-center mb-4">
        © 2025. All rights reserved.
      </p>
    </div>
  );
}
