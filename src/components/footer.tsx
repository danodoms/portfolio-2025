import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/case-studies/evento", label: "Case Studies" },
  { href: "/resume", label: "Resume" },
];

const socials = [
  { href: "https://github.com/danodoms", label: "GitHub" },
  { href: "https://linkedin.com/in/danodoms", label: "LinkedIn" },
  { href: "mailto:danodoms@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative w-full px-8 py-64">
      <div
        aria-hidden="true"
        className="footer-glow pointer-events-none absolute inset-x-0 bottom-0 h-[32rem] blur-[110px]"
      />
      <div className="relative mx-auto grid max-w-4xl gap-24 md:grid-cols-2 md:items-center">
        {/* CTA */}
        <div className="flex flex-col items-start gap-6">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Let’s build something.
            </h2>
            <p className="mt-2 text-sm opacity-70">
              Have a project or a role in mind?
            </p>
          </div>

          <Link href="mailto:danodoms@gmail.com" className="w-fit shrink-0">
            <Button size="lg" className="cta-shine group rounded-full">
              Let’s connect
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>

        {/* links */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="flex flex-col items-start gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="w-fit opacity-80 transition-opacity hover:opacity-100"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3">
            {socials.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="inline-flex items-center gap-1 opacity-80 transition-opacity hover:opacity-100"
              >
                {label}
                <ArrowUpRight className="size-3.5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
