import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center px-8 py-24 text-center font-sans">
      <p className="relative text-sm opacity-50">404</p>

      <h1 className="relative mt-4 max-w-2xl text-balance text-4xl font-bold tracking-tighter md:text-5xl">
        This page ghosted us.
      </h1>

      <p className="relative mt-4 max-w-md text-pretty text-sm opacity-70">
        Broken link, or it moved somewhere else. Either way, no stress. Let&apos;s
        get you back home :D
      </p>

      <Link href="/" className="relative mt-8">
        <Button size="lg" className="cta-shine group rounded-full">
          Back home
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </Link>
    </main>
  );
}
