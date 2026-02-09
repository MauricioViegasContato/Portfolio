'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
import { ExternalLink, Github } from 'lucide-react';

import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            id: "mpk",
            title: t.projects.p1.title,
            description: t.projects.p1.description,
            image: "/macbook_mockup.png",
            video: "/MPK.mp4",
            tags: ["Flutter", "Supabase", "Dart"],
            githubUrl: "https://github.com/MauricioViegasContato/MPK-Template.git"
        },
        {
            id: "jolo",
            title: t.projects.p2.title,
            description: t.projects.p2.description,
            image: "/macbook_mockup.png",
            video: "Jolo.mp4",
            tags: ["Flutter", "Firebase", "Dart"],
            githubUrl: "https://github.com/MauricioViegasContato/Jolo-Template.git"
        },
        {
            id: "fluentia",
            title: t.projects.p3.title,
            description: t.projects.p3.description,
            image: "/coming-soon.png",
            tags: ["OpenAI", "Gamification", "Speech API"],
            githubUrl: "https://github.com/MauricioViegasContato/FluentIA-Template.git"
        },
    ];

    return (
        <section className="py-24 bg-black relative" id="projects">
            <div className="container mx-auto px-4 md:px-12">
                <ScrollAnimationWrapper>
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        <span className="text-white">{t.projects.title.split(' ')[0]}</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
                            {t.projects.title.split(' ').slice(1).join(' ')}
                        </span>
                    </h2>
                </ScrollAnimationWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ProjectProps {
    id: string;
    title: string;
    description: string;
    image: string;
    video?: string;
    tags: string[];
    githubUrl?: string;
    index: number;
}

function ProjectCard({ id, title, description, image, video, tags, githubUrl, index }: ProjectProps) {
    return (
        <ScrollAnimationWrapper delay={index * 0.2}>
            <div className="group relative">
                {/* Visual Mockup Container */}
                <div className="relative aspect-video w-full mb-8 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 rounded-xl overflow-hidden border border-white/5 bg-gray-900">
                    {/* Glow behind */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-neon-purple/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {video ? (
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag: string) => (
                            <span key={tag} className="text-xs font-mono text-neon-cyan border border-neon-cyan/30 px-2 py-1 rounded bg-neon-cyan/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-3xl font-bold text-white group-hover:text-neon-purple transition-colors">
                        {title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex items-center gap-6 pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <Link
                            href={`/work/${id}`}
                            className="flex items-center gap-2 text-white hover:text-neon-cyan font-medium border-b border-transparent hover:border-neon-cyan transition-all"
                        >
                            Case Study <ExternalLink size={16} />
                        </Link>

                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white hover:text-white font-medium"
                            >
                                <Github size={18} /> Code
                            </a>
                        )}
                        {!githubUrl && (
                            <button className="flex items-center gap-2 text-white hover:text-white font-medium opacity-50 cursor-not-allowed">
                                <Github size={18} /> Code
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </ScrollAnimationWrapper>
    );
}
