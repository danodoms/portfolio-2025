"use client";

import Navigation from "@/components/navigation";
import { Separator } from "@/components/ui/separator";
import { eventoCaseStudy as caseStudy } from "@/lib/data";
import Image from "next/image";

export default function CaseStudyPage() {
    return (
        <main className="min-h-screen w-full text-pretty px-4 max-w-3xl mx-auto font-sans">
            <Navigation title="evento" />

            {/* HEADER */}
            <h1 className="md:text-4xl font-bold text-2xl mt-4">{caseStudy.title}</h1>

            {/* ABOUT */}
            {caseStudy.about && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">About</h2>
                    <p className="mt-2">{caseStudy.about}</p>
                    {caseStudy.aboutImage && (
                        <div className="mt-4 relative w-full h-64 md:h-80">
                            <Image
                                src={caseStudy.aboutImage}
                                alt="About"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    )}
                </section>
            )}

            {/* PROBLEM */}
            {caseStudy.problem && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Problem</h2>
                    <p className="mt-2">{caseStudy.problem}</p>
                    {caseStudy.problemImage && (
                        <div className="mt-4 relative w-full h-64 md:h-80">
                            <Image
                                src={caseStudy.problemImage}
                                alt="Problem"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    )}
                </section>
            )}

            {/* CHALLENGE */}
            {caseStudy.challenge?.length > 0 && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Challenge</h2>
                    <div className="mt-2 space-y-4">
                        {caseStudy.challenge.map((item, idx) => (
                            <p key={idx}>{item}</p>
                        ))}
                    </div>
                    {caseStudy.challengeImage && (
                        <div className="mt-4 relative w-full h-64 md:h-80">
                            <Image
                                src={caseStudy.challengeImage}
                                alt="Challenge"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    )}
                </section>
            )}

            {/* SOLUTION */}
            {caseStudy.solution && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Solution</h2>
                    <p className="mt-2">{caseStudy.solution}</p>
                    {caseStudy.solutionImage && (
                        <div className="mt-4 relative w-full h-64 md:h-80">
                            <Image
                                src={caseStudy.solutionImage}
                                alt="Solution"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    )}
                </section>
            )}

            {/* RESULTS */}
            {caseStudy.results?.length > 0 && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Results</h2>
                    <div className="mt-2 space-y-4">
                        {caseStudy.results.map((item, idx) => (
                            <p key={idx}>{item}</p>
                        ))}
                    </div>
                    {caseStudy.resultsImage && (
                        <div className="mt-4 relative w-full h-64 md:h-80">
                            <Image
                                src={caseStudy.resultsImage}
                                alt="Results"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    )}
                </section>
            )}

            {/* CONCLUSION */}
            {caseStudy.conclusion?.length > 0 && (
                <section className="my-8">
                    <h2 className="text-sm opacity-50">Conclusion</h2>
                    <div className="mt-2 space-y-4">
                        {caseStudy.conclusion.map((item, idx) => (
                            <p key={idx}>{item}</p>
                        ))}
                    </div>
                    {caseStudy.conclusionImage && (
                        <div className="mt-4 relative w-full h-64 md:h-80">
                            <Image
                                src={caseStudy.conclusionImage}
                                alt="Conclusion"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    )}
                </section>
            )}
        </main>
    );
}
