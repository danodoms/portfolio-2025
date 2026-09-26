"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
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
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === "/";

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push("/");
        }
    };

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
            <div
                aria-hidden="true"
                className="nav-blur pointer-events-none absolute top-0 -bottom-16 left-1/2 w-screen -translate-x-1/2 -z-10"
            />
            <div className="relative max-w-4xl mx-auto flex justify-center items-center w-full">
                {!isHome && (
                    <button
                        type="button"
                        onClick={handleBack}
                        aria-label="Back"
                        className="absolute left-0 cursor-pointer"
                    >
                        <ChevronLeft />
                    </button>
                )}

                <h1 className="font-bold tracking-tighter text-2xl">
                    {title}
                </h1>
            </div>
        </header>
    );
}
