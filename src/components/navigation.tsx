"use client";

import Link from "next/link";
import { ChevronLeft, Ellipsis } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";

interface NavigationProps {
    title: string;
    className?: string;
    isDynamic?: boolean; // if true, auto-hide until scroll
}

export default function Navigation({
    title,
    className,
    isDynamic = false,
}: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (!isDynamic) return; // skip scroll listener if not dynamic

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setIsScrolled(scrollPercent > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDynamic]);

    return (
        <header
            className={clsx(
                "sticky top-0 py-4 z-50 gap-4 transition-all duration-200",
                className,
                isDynamic
                    ? isScrolled
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    : "opacity-100 translate-y-0 pointer-events-auto"
            )}
        >
            <div className="max-w-5xl mx-auto flex justify-between gap-4 w-full items-center">
                <Link href="/" className="bg-liquid-glass p-3 rounded-full">
                    <ChevronLeft />
                </Link>

                <h1 className="font-bold tracking-tighter text-2xl bg-liquid-glass px-4 py-2 rounded-full">
                    {title}
                </h1>

                <div className="bg-liquid-glass p-3 rounded-full">
                    <Ellipsis />
                </div>
            </div>
        </header>
    );
}
