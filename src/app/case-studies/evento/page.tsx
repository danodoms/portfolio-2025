"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { eventoCaseStudy as caseStudy } from "@/lib/data";
import Image from "next/image";
import type { ReactNode } from "react";

function Section({
    id,
    label,
    image,
    children,
}: {
    id: string;
    label: string;
    image?: string;
    children: ReactNode;
}) {
    return (
        <section id={id} className="mt-16 scroll-mt-24">
            <h2 className="opacity-50 text-sm">{label}</h2>
            <div className="mt-4 max-w-2xl space-y-4">{children}</div>
            {image && (
                <div className="relative mt-8 h-64 w-full md:h-96">
                    <Image
                        src={image}
                        alt={label}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="rounded-xl object-cover"
                    />
                </div>
            )}
        </section>
    );
}

export default function CaseStudyPage() {
    return (
        <>
        <main className="min-h-screen w-full text-pretty px-6 md:px-8 max-w-3xl mx-auto font-sans leading-relaxed">
            <Navigation title="evento" />

            {/* HEADER */}
            <header className="mt-4">
                <h1 className="md:text-4xl font-bold text-2xl text-balance">
                    {caseStudy.title}
                </h1>

                {caseStudy.stats && (
                    <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                        {caseStudy.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="flex items-baseline gap-2"
                            >
                                <dt className="font-medium">{stat.value}</dt>
                                <dd className="opacity-50">{stat.label}</dd>
                            </div>
                        ))}
                    </dl>
                )}
            </header>

            {caseStudy.about && (
                <Section id="about" label="About" image={caseStudy.aboutImage}>
                    <p>{caseStudy.about}</p>
                </Section>
            )}

            {caseStudy.problem && (
                <Section id="problem" label="Problem" image={caseStudy.problemImage}>
                    <p>{caseStudy.problem}</p>
                </Section>
            )}

            {caseStudy.challenge?.length > 0 && (
                <Section
                    id="challenge"
                    label="Challenge"
                    image={caseStudy.challengeImage}
                >
                    {caseStudy.challenge.map((item, idx) => (
                        <p key={idx}>{item}</p>
                    ))}
                </Section>
            )}

            {caseStudy.solution && (
                <Section id="solution" label="Solution" image={caseStudy.solutionImage}>
                    <p>{caseStudy.solution}</p>
                </Section>
            )}

            {caseStudy.results?.length > 0 && (
                <Section id="results" label="Results" image={caseStudy.resultsImage}>
                    {caseStudy.results.map((item, idx) => (
                        <p key={idx}>{item}</p>
                    ))}
                </Section>
            )}

            {caseStudy.conclusion?.length > 0 && (
                <Section
                    id="conclusion"
                    label="Conclusion"
                    image={caseStudy.conclusionImage}
                >
                    {caseStudy.conclusion.map((item, idx) => (
                        <p key={idx}>{item}</p>
                    ))}
                </Section>
            )}

            {/* TAKEAWAY */}
            {caseStudy.takeaway && (
                <section className="mt-20 mb-8">
                    <p className="text-2xl font-bold tracking-tight text-balance md:text-3xl">
                        {caseStudy.takeaway}
                    </p>
                </section>
            )}
        </main>
        <Footer />
        </>
    );
}
