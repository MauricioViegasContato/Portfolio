import ProjectContent from '@/components/wrappers/ProjectContent';
import { projectsData } from '@/data/projects';

// Generates static paths for export
export function generateStaticParams() {
    return Object.keys(projectsData).map((id) => ({ id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <main className="bg-background min-h-screen">
            <ProjectContent id={id} />
        </main>
    );
}
