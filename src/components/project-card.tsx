"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ArrowUpRight, CodeXml, Loader2, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type ProjectCardProps = {
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
  const [imageLoading, setImageLoading] = useState(true);

  const gradients = [
    "from-blue-500 to-yellow-500",
    "from-pink-500 to-indigo-500",
    "from-red-500 to-cyan-500",
    "from-purple-500 to-orange-500",
    "from-emerald-500 to-fuchsia-500",
    "from-amber-500 to-violet-500",
    "from-teal-500 to-rose-500",
    "from-green-500 to-pink-500",
    "from-lime-500 to-purple-500",
    "from-cyan-500 to-red-500",
    "from-sky-500 to-amber-500",
    "from-orange-500 to-indigo-500",
    "from-rose-500 to-blue-500",
    "from-violet-500 to-yellow-500",
    "from-indigo-500 to-lime-500",
    "from-fuchsia-500 to-teal-500",
    "from-slate-500 to-orange-500",
    "from-zinc-500 to-emerald-500",
  ];

  const gradient = gradients[Math.floor(Math.random() * gradients.length)];
  return (
    <div className="flex flex-col rounded-none transition-all border font-sans bg-muted/50">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnFocusIn: false,
            stopOnInteraction: false,
            stopOnLastSnap: false,
            stopOnMouseEnter: false,
          }),
          Fade(),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video w-full rounded-none border-b">
                <Link href={liveLink ?? ""} target="_blank">
                  <div className="w-full h-full absolute inset-0">
                    {imageLoading && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-none animate-pulse flex items-center m-auto`}
                      >
                        {/* <h2 className="w-full font-bold text-center tracking-tight opacity-50 text-2xl">
                          {title}
                        </h2> */}
                        <Loader2 className="animate-spin size-16 opacity-50 text-center w-full" />
                      </div>
                    )}
                    <Image
                      src={image}
                      alt="Project Image"
                      fill
                      loading="lazy"
                      onLoad={() => setImageLoading(false)}
                      // className={`object-cover rounded-none hover:opacity-75 transition-all ${imageLoading ? "bg-muted" : ""}`}
                      className={`object-cover rounded-none hover:opacity-75 transition-all `}
                    />
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>

      <div className="flex flex-col p-4">
        <div className="flex justify-between">
          <Link
            className="font-bold tracking-tighter flex gap-1 items-center"
            href={liveLink ?? ""}
            target="_blank"
          >
            <h2>{title}</h2>

            {liveLink && <ArrowUpRight className="size-4" />}
          </Link>

          {repoLink && (
            <Link
              className="flex gap-1 items-center opacity-50 text-sm tracking-tight hover:underline"
              href={repoLink}
              target="_blank"
            >
              <CodeXml className="size-4" />
            </Link>
          )}
        </div>

        {description && (
          <p className="text-sm tracking-tight opacity-50 text-balance mt-2">
            {description}
          </p>
        )}

        <div className="gap-1 flex flex-col mt-2">
          {impacts.map((impact, index) => (
            <p key={index} className="flex gap-2 items-center text-sm">
              <Sparkle className="size-2" />
              {impact}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
