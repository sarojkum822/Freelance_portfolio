import Link from "next/link";
import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { type ProjectItem, projectsData } from "@/data/projects";

const sectionConfig: Array<{ id: string; title: string; subtitle: string; category: ProjectItem["category"] }> = [
  {
    id: "apps",
    title: "App Projects",
    subtitle: "Mobile and app-first builds designed for strong product UX.",
    category: "app",
  },
  {
    id: "websites",
    title: "Websites with Next.js",
    subtitle: "Fast, modern marketing and portfolio websites built with Next.js.",
    category: "website",
  },
  {
    id: "react-web-apps",
    title: "Web Apps with React",
    subtitle: "Feature-rich product dashboards and workflows powered by React.",
    category: "web-app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(108,99,255,0.16),transparent_35%),radial-gradient(circle_at_80%_5%,rgba(0,229,160,0.12),transparent_30%)]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#111119]/90">
        <nav className="mx-auto flex h-20 w-[92%] max-w-6xl items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight text-[#1f2937] dark:text-[#e5e7eb]">
            BuildPerHour
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {sectionConfig.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="text-sm font-medium text-[#1f2937] transition hover:text-black dark:text-[#e5e7eb]">
                {section.title}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/">
              <Button variant="secondary">Back Home</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-[92%] max-w-6xl py-12 md:py-16">
        {sectionConfig.map((section) => {
          const sectionProjects = projectsData.filter((project) => project.category === section.category);
          return (
            <section key={section.id} id={section.id} className="mb-14 scroll-mt-28 md:mb-18">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b8f69] dark:text-[#00e5a0]">Projects</p>
                <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">{section.title}</h2>
                <p className="mt-2 text-muted-foreground">{section.subtitle}</p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {sectionProjects.map((project) => (
                  <article className="overflow-hidden rounded-2xl border border-black/20 bg-white/90 shadow-sm dark:border-white/20 dark:bg-white/10" key={project.title}>
                    <a href={project.image} target="_blank" rel="noreferrer" aria-label={`Open full image for ${project.title}`}>
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        width={1200}
                        height={700}
                        className="h-44 w-full bg-slate-100 object-contain dark:bg-slate-900"
                      />
                    </a>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl font-semibold">{project.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-black/15 px-3 py-1 text-xs dark:border-white/15">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.projectUrl && (
                        <a href={project.projectUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-medium text-[#6c63ff] transition hover:opacity-80">
                          Visit project ↗
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
