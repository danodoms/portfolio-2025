"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { type CaseStudy, eventoCaseStudy as caseStudy } from "@/lib/data";
import Navigation from "@/components/navigation";

export default function CaseStudyPage() {
    return (
        <main className="min-h-screen w-full text-pretty px-8 max-w-3xl mx-auto font-sans mt-32">
            <Navigation title="evento" />

            {/* HEADER */}
            <h1 className="md:text-4xl font-bold text-2xl">
                {caseStudy.title}
            </h1>

            {/* ABOUT */}
            <section className="my-8">
                <h2 className="text-sm opacity-50">About</h2>
                <p className="mt-2">{caseStudy.about}</p>
            </section>

            {/* PROBLEM */}
            {caseStudy.problem && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Problem</h2>
                    <p className="mt-2">{caseStudy.problem}</p>
                </section>
            )}

            {/* CHALLENGE */}
            {caseStudy.challenge?.length > 0 && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Challenge</h2>
                    <div className="mt-2 list-disc list-inside space-y-4">
                        {caseStudy.challenge.map((item, idx) => (
                            <p key={idx}>{item}</p>
                        ))}
                    </div>
                </section>
            )}

            {/* SOLUTION */}
            {caseStudy.solution && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Solution</h2>
                    <p className="mt-2">{caseStudy.solution}</p>
                </section>
            )}

            {/* RESULTS */}
            {caseStudy.results?.length > 0 && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Results</h2>
                    <ul className="mt-2 list-disc list-inside">
                        {caseStudy.results.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* CONCLUSION */}
            {caseStudy.conclusion?.length > 0 && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Conclusion</h2>
                    <ul className="mt-2 list-disc list-inside">
                        {caseStudy.conclusion.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </section>
            )}

            <Separator className="my-16" />
        </main>
    );
}
