"use client";

import Link from "next/link";
import { ChevronLeft, Ellipsis } from "lucide-react";
import { useState, useEffect } from "react";

interface NavigationProps {
    title: string;
}

export default function Navigation({ title }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setIsScrolled(scrollPercent > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 py-4 z-50 gap-4 transition-all duration-200 
        ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
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
