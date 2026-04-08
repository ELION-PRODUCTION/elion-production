import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteLayout } from "@/layouts/SiteLayout";
import { developmentSlate } from "@/projects/slate";
import en from "@/localization/en.json";

export default function HomePage() {
  return (
    <SiteLayout>
      <Header />
      <Hero
        eyebrow={en["hero.eyebrow"]}
        title={en["hero.title"]}
        description={en["hero.description"]}
        actions={
          <>
            <a className="button button--primary" href="/docs/investors/overview">
              {en["hero.primaryCta"]}
            </a>
            <a className="button button--ghost" href="#projects">
              {en["hero.secondaryCta"]}
            </a>
          </>
        }
      />

      <main className="shell">
        <section id="projects">
          <div className="grid">
            {developmentSlate.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
