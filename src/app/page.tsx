import Image from "next/image";
import {
  projects,
  stackMarquee,
  principles,
  type Project,
} from "@/lib/data";

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-2xl">
          Omar Sharaf
        </a>
        <div className="hidden items-center gap-8 font-mono text-[11px] tracking-[0.2em] uppercase sm:flex">
          <a href="#work" className="text-ink-soft transition-colors hover:text-flame">
            Work
          </a>
          <a href="#approach" className="text-ink-soft transition-colors hover:text-flame">
            Approach
          </a>
          <a href="#contact" className="text-ink-soft transition-colors hover:text-flame">
            Contact
          </a>
          <a
            href="https://github.com/o-sharaf5"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink px-3 py-1.5 transition-colors hover:bg-ink hover:text-paper"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
      {/* magazine issue line */}
      <div className="mb-12 flex items-center justify-between border-b border-ink pb-3 font-mono text-[11px] tracking-[0.25em] uppercase">
        <span>Portfolio — Vol. 01</span>
        <span className="hidden sm:block">The Hague, Netherlands</span>
        <span>Oct 2026</span>
      </div>

      <h1 className="font-serif text-[clamp(3.2rem,10vw,8.5rem)] leading-[0.95]">
        Full-stack engineer
        <br />
        with a designer&apos;s
        <br />
        <span className="italic text-flame">eye for detail.</span>
      </h1>

      <div className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
        <p className="text-lg leading-relaxed text-ink-soft sm:col-span-2">
          I&apos;m{" "}
          <span className="font-semibold text-ink">Omar Sharaf</span> — I build
          web products end to end in TypeScript, React, and Next.js:
          auth,
          payments, job queues, and interfaces that feel considered. Four
          projects below, every one running live right now.
        </p>
        <div className="flex flex-col gap-4 font-mono text-xs tracking-[0.15em] uppercase">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-flame opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-flame" />
            </span>
            Open to full-stack roles
          </div>
          <a
            href="#work"
            className="text-ink-soft transition-colors hover:text-flame"
          >
            ↓ Read the work
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...stackMarquee, ...stackMarquee];
  return (
    <div className="overflow-hidden border-y border-line bg-paper-deep py-4">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap font-mono text-xs tracking-[0.2em] uppercase">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-8 text-ink-soft">
            {s}
            <span className="text-flame">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectSpread({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="border-t border-line py-16 sm:py-20">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          flip ? "lg:[&>figure]:order-2" : ""
        }`}
      >
        {/* screenshot */}
        <figure className="group relative">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} live demo`}
            className="block overflow-hidden rounded-lg border border-ink/15 shadow-[0_24px_60px_-30px_rgba(23,21,15,0.45)] transition-transform duration-300 group-hover:-translate-y-1"
          >
            <Image
              src={project.image}
              alt={`${project.name} — ${project.tagline}`}
              width={1600}
              height={1000}
              priority={project.index === "01"}
              className="w-full"
            />
          </a>
          <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-ink-soft uppercase">
            <span>{project.urlSlug}</span>
            <span className="text-flame">live ↗</span>
          </figcaption>
        </figure>

        {/* copy */}
        <div>
          <div className="mb-5 flex items-baseline gap-4">
            <span className="font-mono text-sm text-flame">
              ({project.index})
            </span>
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-ink-soft uppercase">
              shipped · 2026
            </span>
          </div>
          <h3 className="font-serif text-5xl sm:text-6xl">{project.name}</h3>
          <p className="mt-2 font-mono text-xs tracking-[0.15em] text-ink-soft uppercase">
            {project.tagline}
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.15em] uppercase">
            {project.stack.map((t) => (
              <li key={t} className="text-ink">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4 font-mono text-xs tracking-[0.15em] uppercase">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink px-5 py-2.5 text-paper transition-colors hover:bg-flame"
            >
              Live demo
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-5 py-2.5 transition-colors hover:bg-ink hover:text-paper"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6">
      <div className="flex items-end justify-between py-14">
        <h2 className="font-serif text-5xl sm:text-6xl">Selected work</h2>
        <span className="hidden font-mono text-[11px] tracking-[0.25em] text-ink-soft uppercase sm:block">
          04 projects · 04 live demos
        </span>
      </div>
      {projects.map((p, i) => (
        <ProjectSpread key={p.name} project={p} flip={i % 2 === 1} />
      ))}
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-16 font-serif text-5xl sm:text-6xl">
          How I <span className="italic text-flame">work</span>
        </h2>
        <div className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.number} className="border-t border-paper/20 pt-6">
              <div className="mb-3 font-mono text-xs tracking-[0.25em] text-flame">
                {p.number} —
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-paper/60">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 text-center">
      <p className="mb-8 font-mono text-xs tracking-[0.3em] text-flame uppercase">
        ✦ Let&apos;s talk
      </p>
      <a
        href="mailto:os.omarsharaf@gmail.com"
        className="font-serif text-[clamp(1.9rem,6.5vw,5rem)] leading-tight transition-colors hover:text-flame"
      >
        os.omarsharaf@gmail.com
      </a>
      <div className="mt-12 flex flex-wrap justify-center gap-8 font-mono text-xs tracking-[0.2em] uppercase">
        <a
          href="https://github.com/o-sharaf5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-soft underline-offset-4 transition-colors hover:text-flame hover:underline"
        >
          GitHub ↗
        </a>
        <a
          href="#top"
          className="text-ink-soft underline-offset-4 transition-colors hover:text-flame hover:underline"
        >
          Back to top ↑
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Work />
        <Approach />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center font-mono text-[10px] tracking-[0.25em] text-ink-soft uppercase">
        © 2026 Omar Sharaf — set in Instrument Serif &amp; Inter · built with
        Next.js
      </footer>
    </>
  );
}
