'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { projectsData } from '@/data/projects';
import ProjectHero from '@/components/sections/ProjectHero';
import ProjectDetails from '@/components/sections/ProjectDetails';
import { notFound } from 'next/navigation';

export default function ProjectContent({ id }: { id: string }) {
    const { language } = useLanguage();
    const project = projectsData[id];

    if (!project) {
        return notFound();
    }

    const content = project[language] || project['en'];
    const common = project['common'];

    return (
        <>
            <ProjectHero
                title={content.title}
                description={content.description}
                tags={content.tags}
                video={common.video}
                image={common.image}
                githubUrl={common.githubUrl}
            />

            <ProjectDetails
                challenge={content.challenge}
                solution={content.solution}
                techStack={common.techStack}
                features={content.features}
                role={content.role}
                timeline={content.timeline}
            />
        </>
    );
}
