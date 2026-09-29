"use client";

import { cn } from "@/lib/utils";
import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { profileAscii } from "./profile-ascii";

const GLYPHS = "01#*+=-:.%@&$<>/\\|()[]{}!?";
const SOLID = "#";

/** Randomly swap characters to give a live "hologram" feel. */
function scramble(base: string, intensity: number, noise: number) {
  const lines = base.split("\n");
  let out = "";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      const r = Math.random();
      if (ch === SOLID) {
        out += r < intensity ? GLYPHS[(Math.random() * GLYPHS.length) | 0] : ch;
      } else if (ch === " ") {
        out += r < noise ? GLYPHS[(Math.random() * GLYPHS.length) | 0] : ch;
      } else {
        out += ch;
      }
    }
    if (i < lines.length - 1) out += "\n";
  }
  return out;
}

export default function AsciiHologram({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLPreElement>(null);
  const inView = useInView(ref, { margin: "200px" });
  const [text, setText] = useState(profileAscii);

  useEffect(() => {
    if (reduce || !inView) return;
    const id = setInterval(() => {
      setText(scramble(profileAscii, 0.12, 0.006));
    }, 160);
    return () => clearInterval(id);
  }, [reduce, inView]);

  return (
    <pre
      ref={ref}
      aria-label="ASCII silhouette of Dominador Dano Jr."
      className={cn(
        "w-fit whitespace-pre text-[5px] leading-[5px] text-foreground [text-shadow:0_0_8px_currentColor,0_0_28px_currentColor] sm:text-[6px] sm:leading-[6px]",
        className,
      )}
    >
      {text}
    </pre>
  );
}