import Projects from "@/components/sections/Projects";

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-24 bg-black">
            {/* Reusing Projects component for now, but in a full page context */}
            <div className="pt-10">
                <Projects />
            </div>
        </main>
    );
}
