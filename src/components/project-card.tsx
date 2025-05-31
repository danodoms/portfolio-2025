import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description?: string;
  images: string[];
  impacts: string[];
  liveLink?: string;
  repoLink?: string;
};

export default function ProjectCard({
  title = "Project Title",
  description,
  images = [""],
  impacts,
  liveLink,
  repoLink,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl transition-all">
      <div className="relative aspect-video w-full rounded-xl">
        <Link href={liveLink ?? ""} target="_blank">
          <Image
            src={images[0]}
            alt="Project Image"
            fill
            className="object-cover rounded-xl hover:opacity-75 transition-all"
          />
        </Link>
      </div>

      <div className="flex flex-col mt-2">
        <Link
          className="font-bold tracking-tighter text-xl flex gap-1 items-center"
          href={liveLink ?? ""}
          target="_blank"
        >
          <h2>{title}</h2>

          {liveLink && <ArrowUpRight className="size-4" />}
        </Link>

        {description && (
          <p className="text-sm tracking-tight opacity-50 text-balance mt-2">
            {description}
          </p>
        )}

        <div className="gap-1 flex flex-col mt-2">
          {impacts.map((impact, index) => (
            <p
              key={index}
              className="flex gap-2 items-center opacity-50 text-sm"
            >
              <Check className="size-4" />
              {impact}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
