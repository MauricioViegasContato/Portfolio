'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { motion } from 'framer-motion';

interface ProjectDetailsProps {
    challenge: string;
    solution: string;
    techStack: { name: string; icon?: string }[];
    features: string[];
    role: string;
    timeline: string;
}

export default function ProjectDetails({ challenge, solution, techStack, features, role, timeline }: ProjectDetailsProps) {
    const { language } = useLanguage();

    const headers = {
        en: {
            challenge: 'The Challenge',
            solution: 'The Solution',
            features: 'Key Features',
            tech: 'Technologies',
            role: 'Role',
            timeline: 'Timeline'
        },
        pt: {
            challenge: 'O Desafio',
            solution: 'A Solução',
            features: 'Principais Funcionalidades',
            tech: 'Tecnologias',
            role: 'Papel',
            timeline: 'Prazo'
        }
    };

    const t = headers[language as keyof typeof headers] || headers.en;

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Narrative */}
                <div className="lg:col-span-2 space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-neon-cyan">01.</span> {t.challenge}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                            {challenge}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-neon-purple">02.</span> {t.solution}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                            {solution}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-green-400">03.</span> {t.features}
                        </h2>
                        <ul className="space-y-4">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Right Column: Stack & Sticky Info */}
                <div className="relative">
                    <div className="sticky top-24 p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-6">{t.tech}</h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map(tech => (
                                <span
                                    key={tech.name}
                                    className="px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-sm text-gray-300 flex items-center gap-2 hover:border-neon-cyan/50 transition-colors cursor-default"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">{t.role}</h4>
                            <p className="text-white font-medium">{role}</p>

                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 mt-6">{t.timeline}</h4>
                            <p className="text-white font-medium">{timeline}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
