import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-20 gap-16">
      <div className=" flex flex-col w-full gap-4">
        <Avatar className="size-20">
          <AvatarImage src="https://avatars.githubusercontent.com/u/165539900?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold tracking-tighter">
            Dominador Dano Jr.
          </h1>
          <p>Fullstack Web Developer - React/Next JS</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold">About</h2>
        <div className="flex flex-col gap-2">
          <p>
            Hello! I'm Joshua Guo, a Designer specializing in modernist and
            minimalist approaches. I craft elegant solutions where form follows
            function.
          </p>

          <p>
            Currently completing my Master's in Computer Science at UC Boulder
            while developing personal projects: a minimalist design system, data
            visualization tools, and a curated 3D asset marketplace. Feel free
            to reach out to me (/ ) if you have any questions or just want to
            chat.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Projects</h2>
        <div className="flex flex-col gap-2">
          <p>
            Hello! I'm Joshua Guo, a Designer specializing in modernist and
            minimalist approaches. I craft elegant solutions where form follows
            function.
          </p>

          <p>
            Currently completing my Master's in Computer Science at UC Boulder
            while developing personal projects: a minimalist design system, data
            visualization tools, and a curated 3D asset marketplace. Feel free
            to reach out to me (/ ) if you have any questions or just want to
            chat.
          </p>
        </div>
      </div>
    </div>
  );
}
