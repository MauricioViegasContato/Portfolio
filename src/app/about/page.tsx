'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function AboutPage() {
    const { t, language } = useLanguage();
    const cvUrl = language === 'pt' ? '/cv_pt.pdf' : '/cv_en.pdf';

    return (
        <main className="min-h-screen pt-32 px-6 md:px-20 bg-black text-white flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-neon-cyan">
                {t.about.title}
            </h1>
            <div className="max-w-2xl space-y-8 text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                <p>
                    {t.about.story}
                </p>
                <p>
                    {t.about.traits}
                </p>
                <p className="border-l-2 border-neon-cyan pl-6 italic text-gray-400">
                    {t.about.goal}
                </p>
            </div>

            <div className="mt-16">
                <a href={cvUrl} download target="_blank" rel="noopener noreferrer">
                    <Button className="bg-neon-cyan text-black hover:bg-cyan-400 font-bold px-8 py-6 text-lg">
                        {t.about.cta}
                    </Button>
                </a>
            </div>
        </main>
    );
}
