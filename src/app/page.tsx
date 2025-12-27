import Hero from "@/src/components/Hero";
import TechMarquee from "@/src/components/TechMarquee";
import CurrentlyLearning from "@/src/components/CurrentlyLearning";
import Experience from "@/src/components/Experience";
import ProjectsPreview from "@/src/components/ProjectsPreview";
import BlogPreview from "@/src/components/BlogPreview";
import ContactCTA from "@/src/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6">
        <Hero />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TechMarquee />
          </div>
          <CurrentlyLearning />
        </div>

        <Experience linkedinUrl="https://linkedin.com/in/USERNAME" />

        <ProjectsPreview />
        <BlogPreview />
        <ContactCTA />

        <div className="pb-20" />
      </div>
    </main>
  );
}