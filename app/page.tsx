"use client";

import { motion } from "framer-motion";
import { Menu, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { SectionReveal } from "@/components/section-reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { teamData } from "@/data/team";
import { testimonialsData } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#testimonials" },
];

const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "70+" },
  { label: "Industry Experience", value: "1 Year" },
  { label: "Core Team Members", value: "14" },
];

const processSteps = [
  "Discovery Call",
  "Proposal & Scope",
  "Build & Iterate",
  "Launch & Support",
];

const trustedBy = ["Startup Founders", "Local Businesses", "Growing Teams", "Agencies"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(108,99,255,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(0,229,160,0.15),transparent_30%)]" />

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-xl transition-all",
          scrolled && "bg-white/95",
        )}
      >
        <nav className="mx-auto flex h-20 w-[92%] max-w-6xl items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight text-[#1f2937]">
            BuildPerHour
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1f2937] transition hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a href="#hire-us">
              <Button>Hire Us</Button>
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              className="rounded-full border border-black/25 p-2 text-[#1f2937]"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-black/10 bg-white/95 px-6 py-5 backdrop-blur-xl dark:border-white/10 dark:bg-[#111119]/95 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-[#1f2937]"
                >
                  {link.label}
                </a>
              ))}
              <a href="#hire-us" onClick={() => setMenuOpen(false)}>
                <Button className="w-full">Hire Us</Button>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto w-[92%] max-w-6xl">
        <section className="py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="overflow-hidden rounded-3xl border border-black/15 bg-[#f8f8f6] px-7 py-10 shadow-sm dark:border-white/20 dark:bg-[#f8f8f6] md:px-14 md:py-16">
              <p className="inline-flex rounded-full border border-black/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1f2937]">
                On-Demand Tech Delivery
              </p>
              <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-[#1f2937] md:text-6xl">
                Build websites and apps with a reliable delivery partner.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-[#1f2937] md:text-lg">
                BuildPerHour helps businesses ship web and mobile products with clear scope, milestone-based execution, and transparent communication.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a href="#hire-us">
                  <Button size="lg">Post Your Requirement</Button>
                </a>
                <a href="#portfolio">
                  <Button size="lg" variant="secondary">
                    Explore Work
                  </Button>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-black/15 bg-white px-6 py-5 dark:border-white/20 dark:bg-white">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted By</p>
              <div className="mt-4 grid gap-3 text-center sm:grid-cols-2 md:grid-cols-4">
                {trustedBy.map((item) => (
                  <p key={item} className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold tracking-wide text-[#1f2937] dark:border-white/15 dark:text-[#1f2937]">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                  className="rounded-2xl border border-black/20 bg-white/90 p-5 shadow-sm dark:border-white/20 dark:bg-white/10"
                >
                  <p className="font-heading text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <SectionReveal id="services" className="py-16 md:py-20">
          <SectionTitle title="Services" subtitle="Focused solutions for ambitious product teams." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-black/20 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(108,99,255,0.2)] dark:border-white/20 dark:bg-white/10"
              >
                <service.icon className="mb-4 text-[#6c63ff]" size={26} />
                <h3 className="font-heading text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/15 px-3 py-1 text-xs dark:border-white/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="process" className="py-16 md:py-20">
          <SectionTitle title="Process" subtitle="Clear collaboration from first call to post-launch support." />
          <div className="relative mt-10 grid gap-4 md:grid-cols-4">
            <div className="absolute left-0 top-5 hidden h-px w-full bg-gradient-to-r from-[#6c63ff]/40 via-[#00e5a0]/40 to-[#6c63ff]/40 md:block" />
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="relative rounded-2xl border border-black/20 bg-white/90 p-5 shadow-sm dark:border-white/20 dark:bg-white/10"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b8f69] dark:text-[#00e5a0]">
                  Step {index + 1}
                </p>
                <p className="font-heading text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="portfolio" className="py-16 md:py-20">
          <SectionTitle title="Portfolio" subtitle="Selected projects shipped for startups and growth teams." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projectsData.map((project) => (
              <article className="overflow-hidden rounded-2xl border border-black/20 bg-white/90 shadow-sm dark:border-white/20 dark:bg-white/10" key={project.title}>
                <a href={project.image} target="_blank" rel="noreferrer" aria-label={`Open full image for ${project.title}`}>
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={1200}
                    height={700}
                    className="h-40 w-full bg-slate-100 object-contain dark:bg-slate-900"
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
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-[#6c63ff] transition hover:opacity-80"
                    >
                      Visit project ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/projects">
              <Button size="lg" variant="secondary">
                More Projects
              </Button>
            </Link>
          </div>
        </SectionReveal>

        <SectionReveal id="team" className="py-16 md:py-20">
          <SectionTitle title="Team" subtitle="Specialists who combine strategy, craft, and reliable delivery." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {teamData.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-black/20 bg-white/90 p-6 shadow-sm dark:border-white/20 dark:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6c63ff]/20 font-heading font-bold text-[#6c63ff]">
                  {member.initials}
                </div>
                <h3 className="font-heading text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-[#0b8f69] dark:text-[#00e5a0]">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.bio}</p>
                <div className="mt-4 flex gap-4 text-sm">
                  <a href={member.portfolioUrl} target="_blank" rel="noreferrer" className="text-[#6c63ff] transition hover:opacity-80">
                    View Portfolio ↗
                  </a>
                  <a href={member.linkedInUrl} target="_blank" rel="noreferrer" className="text-muted-foreground transition hover:text-foreground">
                    LinkedIn ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="testimonials" className="py-16 md:py-20">
          <SectionTitle title="Testimonials" subtitle="What clients say after shipping with DevCraft Studio." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonialsData.map((item) => (
              <article
                key={item.clientName}
                className="rounded-2xl border border-black/20 bg-white/90 p-6 shadow-sm dark:border-white/20 dark:bg-white/10"
              >
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} size={16} className="fill-[#00e5a0] text-[#00e5a0]" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-muted-foreground">&quot;{item.quote}&quot;</p>
                <p className="mt-5 font-heading text-lg font-semibold">{item.clientName}</p>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="hire-us" className="py-16 md:py-24">
          <div className="rounded-3xl border border-[#6c63ff]/35 bg-gradient-to-br from-[#6c63ff]/20 via-transparent to-[#00e5a0]/15 p-8 text-center md:p-14">
            <h2 className="font-heading text-3xl font-bold md:text-5xl">Contact Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Email us at <span className="font-semibold text-foreground">sarojkum822@gmail.com</span>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:sarojkum822@gmail.com">
                <Button size="lg">Contact Us</Button>
              </a>
            </div>
          </div>
        </SectionReveal>
      </main>

      <footer className="border-t border-black/10 py-10 dark:border-white/10">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-lg font-bold">BuildPerHour</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} BuildPerHour. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b8f69] dark:text-[#00e5a0]">
        {title}
      </p>
      <h2 className="font-heading text-3xl font-bold md:text-4xl">{subtitle}</h2>
    </div>
  );
}
