"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ArrowUpRight, Check, CodeXml } from "lucide-react";
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

  return (
    <div className="flex flex-col gap-2 rounded-none transition-all border font-sans">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            // jump: true,
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
                      <div className="absolute inset-0 bg-gray-200 rounded-none animate-pulse" />
                    )}
                    <Image
                      src={image}
                      alt="Project Image"
                      fill
                      loading="eager"
                      onLoad={() => setImageLoading(false)}
                      className={`object-cover rounded-none hover:opacity-75 transition-all ${imageLoading ? "bg-muted" : ""}`}
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
            className="font-bold tracking-tighter text-xl flex gap-1 items-center"
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
