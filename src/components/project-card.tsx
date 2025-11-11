"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ArrowUpRight, Loader2, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export type ProjectCardProps = {
  title: string;
  description?: string;
  images: string[];
  impacts: string[];
  liveLink?: string;
  repoLink?: string;
  isReversed?: boolean; // ✅ More descriptive
};

export default function ProjectCard({
  title = "Project Title",
  description,
  images = [""],
  impacts,
  liveLink,
  repoLink,
  isReversed = false,
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
    <div
      className={`flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""
        } rounded-none transition-all font-sans md:gap-16 gap-8 md:items-center`}
    >
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
        className={`flex-3/5`}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video w-full rounded-none">
                <Link href={liveLink ?? ""} target="_blank">
                  <div className="w-full h-full absolute inset-0">
                    {imageLoading && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-lg animate-pulse flex items-center m-auto`}
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
                      className={`object-fill rounded-lg hover:opacity-75 transition-all`}
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

      <div className={`flex flex-col flex-2/5 md:pt-0 gap-2`}>
        <div className="flex justify-between">
          <Link
            className="font-bold tracking-tighter flex gap-1 items-center hover:underline"
            href={liveLink ?? ""}
            target="_blank"
          >
            <h2>{title}</h2>

            {liveLink && <ArrowUpRight className="size-4 hover:scale-150 transition-all" />}
          </Link>
        </div>

        {description && (
          <p className="text-sm tracking-tight text-balance">{description}</p>
        )}

        <div className=" flex flex-col">
          {impacts.map((impact, index) => (
            <p
              key={index}
              className="flex gap-2 items-center text-sm opacity-50"
            >
              {impact}
              <Sparkle className="size-2" />
            </p>
          ))}
        </div>

        <div className="mt-2 gap-2 flex">
          {liveLink && (
            <Link href={liveLink}>
              <Button className="rounded-full">visit</Button>
            </Link>
          )}

          {repoLink && (
            <Link href={repoLink}>
              <Button variant="ghost" className="bg-liquid-glass rounded-full">view source</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
