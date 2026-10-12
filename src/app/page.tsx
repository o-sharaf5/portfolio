import { projects, stackMarquee, principles, type Project } from "@/lib/data";

function Nav() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-paper/10 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 font-mono text-xs tracking-widest uppercase">
        <a href="#top" className="text-paper">
          Omar<span className="text-acid">.</span>Sharaf
        </a>
        <div className="hidden gap-8 text-muted sm:flex">
          <a href="#work" className="transition-colors hover:text-acid">
            Work
          </a>
          <a href="#approach" className="transition-colors hover:text-acid">
            Approach
          </a>
          <a href="#contact" className="transition-colors hover:text-acid">
            Contact
          </a>
        </div>
        <a
          href="https://github.com/o-sharaf5"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-acid/40 px-3 py-1.5 text-acid transition-all hover:bg-acid hover:text-ink"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-6 pb-24 pt-40"
    >
      {/* oversized ghost word */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 font-mono text-[26vw] leading-none font-bold text-paper/[0.03] select-none"
      >
        2026
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-6 font-mono text-xs tracking-[0.3em] text-acid uppercase">
          Full-stack web engineer · Casablanca → anywhere
        </p>
        <h1 className="text-[clamp(3rem,11vw,9.5rem)] leading-[0.9] font-bold tracking-tight">
          I build web
          <br />
          products that
          <br />
          <span className="text-acid">are already live.</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-md text-lg leading-relaxed text-muted">
            TypeScript · React · Next.js — with auth, payments, and job queues
            underneath. Four shipped projects, every one running in a tab you
            can open right now.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-acid opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-acid" />
            </span>
            Open to full-stack roles
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...stackMarquee, ...stackMarquee];
  return (
    <div className="overflow-hidden border-y border-paper/10 bg-ink-soft py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm tracking-widest uppercase">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-10 text-muted">
            {s}
            <span className="text-acid">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-paper/10 bg-ink-soft transition-all duration-300 hover:border-acid/50 hover:shadow-[0_0_60px_-15px] hover:shadow-acid/30 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      {/* fake browser bar */}
      <div className="flex items-center gap-3 border-b border-paper/10 px-4 py-3">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="size-2.5 rounded-full bg-paper/15" />
          <span className="size-2.5 rounded-full bg-acid/60" />
        </span>
        <span className="truncate font-mono text-[11px] text-muted">
          {project.urlSlug}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-baseline justify-between">
          <span className="font-mono text-xs text-muted">{project.index}</span>
          <span className="font-mono text-[10px] tracking-widest text-acid uppercase">
            live demo
          </span>
        </div>
        <h3
          className={`font-bold tracking-tight transition-colors group-hover:text-acid ${
            large ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {project.name}
        </h3>
        <p className="mt-1.5 font-mono text-xs tracking-wide text-muted uppercase">
          {project.tagline}
        </p>
        {large && (
          <p className="mt-5 max-w-lg leading-relaxed text-muted">
            {project.description}
          </p>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.stack.slice(0, large ? 6 : 3).map((t) => (
            <span
              key={t}
              className="border border-paper/15 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted uppercase"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-paper/10 pt-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-acid"
          >
            → open the app
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-acid"
          >
            code ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-14 flex items-end justify-between">
        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Selected <span className="text-acid">work</span>
        </h2>
        <span className="hidden font-mono text-xs tracking-widest text-muted uppercase sm:block">
          04 shipped · all live
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <ProjectCard project={projects[0]} large />
        <ProjectCard project={projects[1]} large />
        <ProjectCard project={projects[2]} />
        <ProjectCard project={projects[3]} />
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="border-y border-paper/10 bg-ink-soft">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <h2 className="mb-14 text-5xl font-bold tracking-tight sm:text-6xl">
          How I <span className="text-acid">work</span>
        </h2>
        <div className="grid gap-px overflow-hidden rounded-xl border border-paper/10 bg-paper/10 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.number}
              className="bg-ink-soft p-8 transition-colors hover:bg-ink"
            >
              <div className="mb-6 font-mono text-5xl font-bold text-paper/10">
                {p.number}
              </div>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32 text-center">
      <p className="mb-6 font-mono text-xs tracking-[0.3em] text-acid uppercase">
        Let&apos;s talk
      </p>
      <a
        href="mailto:os.omarsharaf@gmail.com"
        className="block text-[clamp(1.8rem,6vw,4.5rem)] leading-tight font-bold tracking-tight transition-colors hover:text-acid"
      >
        os.omarsharaf@gmail.com
      </a>
      <div className="mt-12 flex flex-wrap justify-center gap-8 font-mono text-sm tracking-widest uppercase">
        <a
          href="https://github.com/o-sharaf5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-acid"
        >
          GitHub ↗
        </a>
        <a href="#top" className="text-muted transition-colors hover:text-acid">
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
      <footer className="border-t border-paper/10 py-8 text-center font-mono text-xs tracking-widest text-muted uppercase">
        © 2026 Omar Sharaf — built with Next.js · deployed on Vercel
      </footer>
    </>
  );
}
