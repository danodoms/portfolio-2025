import ProjectCard from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { File } from "lucide-react";
import Link from "next/link";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGit, FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-16 p-8">
      <div className=" flex flex-col w-full gap-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col ">
            <h1 className=" font-bold text-2xl tracking-tighter flex items-center gap-2">
              danodoms
              <RiVerifiedBadgeFill className="size-4" />
            </h1>
            <p className="opacity-70">Full-Stack Web Developer</p>
          </div>
          <Avatar className="size-12 ">
            <AvatarImage src="https://avatars.githubusercontent.com/u/165539900?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <Separator />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold">About</h2>
        <div className="flex flex-col gap-2 text-pretty">
          <p>
            Hello! I'm Dominador Dano Jr., a developer passionate about building
            thoughtful, user-focused tools for the web and beyond. I specialize
            in React and Next.js, with a strong eye for detail and clean design.
          </p>

          <p>
            I started out as a freelance designer and music producer before
            moving into development. That creative background still shapes the
            way I approach my work—balancing usability, visual clarity, and
            technical precision. Whether it's writing clean code or shipping
            thoughtful products, I aim to build things that are purposeful and
            accessible.
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
          />

          <ProjectCard
            title="XR Vision"
            description="AI-Powered Rice Leaf NPK Deficiency Detector Mobile App"
            images={["/images/evento/evento-3.webp"]}
            impacts={["On-device AI processing", "Realtime image analysis"]}
            liveLink="https://github.com/danodoms/XR-Vision"
          />

          <ProjectCard
            title="Biometric Attendance"
            description="Fingerprint based attendance system with DTR generation"
            images={["/images/bio-attendance/bio-attendance-1.webp"]}
            impacts={["On-device AI processing", "Realtime image analysis"]}
            liveLink="https://github.com/danodoms/fingerprint-attendance"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Technologies</h2>
        <div className="flex flex-wrap gap-4">
          <FaReact />
          <SiNextdotjs />
          <RiTailwindCssFill />
          <FaGit />
          <SiTypescript />
          <BiLogoPostgresql />
        </div>
      </div>

      <Link href="/dominador-dano-jr-resume.pdf">
        <Button
          className="flex items-center cursor-pointer"
          variant="secondary"
        >
          <File />
          View CV
        </Button>
      </Link>

      <Separator />

      <p className="text-sm tracking-tight opacity-70 text-center mb-4">
        © 2025. All rights reserved.
      </p>
    </div>
  );
}
