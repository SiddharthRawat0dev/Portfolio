import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siddharth Rawat — Graphic Designer, Paphos Cyprus" },
      {
        name: "description",
        content:
          "Concept-led graphic design, motion, and brand campaigns by Siddharth Rawat. Posters, event branding, motion graphics — based in Paphos, Cyprus.",
      },
      {
        property: "og:title",
        content: "Siddharth Rawat — Graphic Designer",
      },
      {
        property: "og:description",
        content:
          "Posters. Campaigns. Motion. Brand. Design work that earns a second look.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const SRC = "https://siddharthrawat0dev.github.io/siddharthrawatforphone.github.io";

type Project = {
  num: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  cta?: { label: string; href: string };
};

const PROJECTS: Project[] = [
  {
    num: "01",
    tag: "Brand Campaign · Concept",
    title: "Apple Create — “Same Idea. New Tools.”",
    desc: "A concept campaign for Apple's creative tools division. Sheet music meets digital waveform — creativity hasn't changed, only the tools have.",
    img: `${SRC}/apple1.jpg`,
    alt: "Apple Create Poster 1",
  },
  {
    num: "02",
    tag: "Brand Campaign · Concept",
    title: "Apple Create — Poster 2",
    desc: "A split visual contrasting a hand-drawn sketchbook with a fully rendered digital world. Same character, two eras.",
    img: `${SRC}/apple2.jpg`,
    alt: "Apple Create Poster 2",
  },
  {
    num: "03",
    tag: "Ad Campaign · Concept",
    title: "Garmin — Travel Brilliantly",
    desc: "A glowing neon route traced across a dark mountain aerial — dramatic, data-rich, visceral. Designed to feel like the watch itself is narrating the adventure.",
    img: `${SRC}/garmin1.jpg`,
    alt: "Garmin Travel Brilliantly",
  },
  {
    num: "04",
    tag: "Ad Campaign · Concept",
    title: "Garmin — Train Brilliantly",
    desc: "A luminous trail cutting through cracked-earth texture. Sparse stats, maximum impact.",
    img: `${SRC}/garmin2.jpg`,
    alt: "Garmin Train Brilliantly",
  },
  {
    num: "05",
    tag: "Ad Campaign · Concept",
    title: "Garmin — Beyond Limits",
    desc: "Pure performance data turned into art — 200+ BPM, VO₂ max, pace, calories. Measure what matters.",
    img: `${SRC}/garmin3.jpg`,
    alt: "Garmin Beyond Limits",
  },
  {
    num: "06",
    tag: "Motion Graphics · Teaser",
    title: "VIRUS — Movie Teaser",
    desc: "A fully original concept — what if a virus became a film? Built end-to-end in After Effects with glitch typography and terminal UI.",
    img: `${SRC}/virus.png`,
    alt: "VIRUS Movie Teaser",
    cta: {
      label: "Request the teaser file →",
      href: "mailto:sidincyprus@gmail.com?subject=VIRUS%20Teaser%20File%20Request",
    },
  },
  {
    num: "07",
    tag: "Event Branding · Poster",
    title: "Porto Coffee Festival 2026",
    desc: "Vintage typographic poster. Warm chocolate tones, retro letterpress layering, and mixed type scales for tactile warmth.",
    img: `${SRC}/porto.webp`,
    alt: "Porto Coffee Festival",
  },
  {
    num: "08",
    tag: "Event Branding · Poster",
    title: "Berline EDM Festival",
    desc: "Explosive paint-splash in deep magenta. Heavy uppercase against fluid brush-script — the same tension the dancefloor promises.",
    img: `${SRC}/edm.webp`,
    alt: "Berline EDM Festival",
  },
  {
    num: "09",
    tag: "Event Branding · Poster",
    title: "Barcelona Architecture Exhibition",
    desc: "Bold primary colours referencing Catalonian heritage. Simple volumetric blocks mirror architecture as the art of assembling forms.",
    img: `${SRC}/barcelona.webp`,
    alt: "Barcelona Architecture Exhibition",
  },
];

const SKILLS: Array<[string, number]> = [
  ["Graphic Design", 95],
  ["Art Direction", 90],
  ["Video Editing", 88],
  ["Photography", 85],
  ["Videography", 82],
  ["Motion Graphics", 80],
  ["Paid Ads", 78],
];

const TOOLS = [
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
  "InDesign",
  "DaVinci Resolve",
  "CapCut",
  "Figma",
  "Meta Ads",
];

const SERVICES = [
  { icon: "🎨", title: "Graphic Design", desc: "Posters, brand campaigns, event branding, typography, and art direction. Concept-led work built to make an impression." },
  { icon: "🎬", title: "Video Editing", desc: "From short-form social reels to full productions — I edit on CapCut, Adobe Premiere Pro, and DaVinci Resolve. Fast turnaround, clean cuts." },
  { icon: "📷", title: "Photography", desc: "Eye for composition, light, and story. Available for shoots — product, portrait, event, and lifestyle." },
  { icon: "🎥", title: "Videography", desc: "On-location filming for events, brands, and content creators. I capture footage that gives the edit somewhere to go." },
  { icon: "📢", title: "Paid Ads", desc: "I design and run ad campaigns — from the creative to the targeting. Meta, Instagram, and more. Already made concepts for Garmin and Apple? Imagine what I can do for your brand.", badge: "AVAILABLE FOR HIRE", cta: { label: "LET'S RUN YOUR ADS →", href: "mailto:sidincyprus@gmail.com?subject=Paid%20Ads%20Inquiry" } },
  { icon: "✨", title: "Motion Graphics", desc: "Full motion graphics projects from scratch — like the VIRUS teaser. If you need something that moves, I'll make it.", badge: "AVAILABLE FOR HIRE", cta: { label: "GET IN TOUCH →", href: "mailto:sidincyprus@gmail.com?subject=Motion%20Graphics%20Inquiry" } },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Portfolio() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight")
        setLightboxIdx((i) => (i === null ? i : (i + 1) % PROJECTS.length));
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) =>
          i === null ? i : (i - 1 + PROJECTS.length) % PROJECTS.length,
        );
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIdx]);


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a
            href="#top"
            className="font-display text-lg italic font-bold text-primary tracking-tight"
          >
            Siddharth<span className="text-foreground">.</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="tap inline-flex items-center justify-center rounded-md border border-border px-3 text-xs font-semibold uppercase tracking-widest text-foreground hover:bg-secondary"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border/60 bg-background">
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 text-sm">
              {[
                ["About", "#about"],
                ["Work", "#work"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    onClick={closeMenu}
                    href={href}
                    className="tap flex items-center border-b border-border/40 py-3 font-medium uppercase tracking-widest text-muted-foreground hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden px-5 pt-14 pb-20 sm:pt-24 sm:pb-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--grad-warm)" }}
        />
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-sm bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground">
            Graphic Designer · Paphos, Cyprus
          </span>
          <h1 className="mt-6 text-balance leading-[0.92] tracking-tight">
            <span className="block font-display italic font-bold text-[clamp(3rem,18vw,7rem)] text-foreground">
              Siddharth
            </span>
            <span className="block font-sans font-extrabold uppercase text-[clamp(3rem,18vw,7rem)] text-primary -mt-1">
              Rawat
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Posters. Campaigns. Motion. Brand. I design work that earns a
            second look — then a third.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="tap inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="tap inline-flex items-center justify-center rounded-md border border-border bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-widest text-foreground transition hover:bg-secondary"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border/60 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>About</SectionLabel>
          <h2 className="reveal mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Designer. Storyteller.{" "}
            <em className="text-primary not-italic">Problem solver.</em>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p className="reveal">
              I'm Siddharth — a graphic designer with a sharp eye for
              concept-led work. From brand campaigns for Apple and Garmin
              concepts to event posters and motion graphics teasers, I build
              visuals that carry an idea all the way through.
            </p>
            <p className="reveal">
              Based in Paphos, Cyprus. I work across print, digital, and
              motion — bringing a marketing background to every project.
              Great design isn't just beautiful, it moves people.
            </p>
          </div>

          <div className="reveal mt-6 flex flex-wrap gap-2">
            {[
              "Poster Design",
              "Brand Campaigns",
              "Event Branding",
              "Motion Graphics",
              "Typography",
              "Art Direction",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["9+", "Projects"],
              ["3+", "Campaigns"],
              ["Print", "& Digital"],
              ["CY", "Based"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="reveal rounded-lg border border-border bg-card p-4"
              >
                <dt className="font-display text-2xl font-bold text-primary">
                  {n}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-border/60 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Projects
          </h2>

          <p className="reveal mt-3 text-xs text-muted-foreground">
            Tap any image to view it larger.
          </p>

          <ul className="mt-8 space-y-10 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={p.num}
                project={p}
                onOpen={() => setLightboxIdx(i)}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-border/60 px-5 py-16"
      >
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            What I do
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="reveal rounded-xl border border-border bg-card p-5"
              >
                <div className="text-2xl">{s.icon}</div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base italic font-bold text-foreground">
                    {s.title}
                  </h3>
                  {s.badge && (
                    <span className="rounded-sm bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary-foreground">
                      {s.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                {s.cta && (
                  <a
                    href={s.cta.href}
                    className="tap mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
                  >
                    {s.cta.label}
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12">
            <SectionLabel>Skill Level</SectionLabel>
            <ul className="mt-5 space-y-4">
              {SKILLS.map(([name, pct]) => (
                <SkillBar key={name} name={name} pct={pct} />
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <SectionLabel>Tools & Software</SectionLabel>
            <div className="reveal mt-5 flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-border/60 px-5 py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--grad-warm)" }}
        />
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="reveal mt-3 font-display text-4xl font-bold leading-[1.05] text-balance sm:text-5xl">
            Let's make<br />
            something{" "}
            <em className="text-primary not-italic">great.</em>
          </h2>
          <p className="reveal mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Open to freelance projects, collaborations, and full-time
            opportunities. Based in Paphos, Cyprus — working with clients
            worldwide.
          </p>
          <div className="reveal mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:sidincyprus@gmail.com"
              className="tap inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
            >
              sidincyprus@gmail.com
            </a>
            <a
              href="tel:+35794526261"
              className="tap inline-flex items-center justify-center rounded-md border border-border bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-widest text-foreground transition hover:bg-secondary"
            >
              +357 94 526 261
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-5 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Siddharth Rawat</span>
          <a
            href="#top"
            className="font-semibold uppercase tracking-widest hover:text-primary"
          >
            Back to top ↑
          </a>
        </div>
      </footer>

      {lightboxIdx !== null && (
        <Lightbox
          project={PROJECTS[lightboxIdx]}
          index={lightboxIdx}
          total={PROJECTS.length}
          onClose={() => setLightboxIdx(null)}
          onPrev={() =>
            setLightboxIdx(
              (i) =>
                i === null ? i : (i - 1 + PROJECTS.length) % PROJECTS.length,
            )
          }
          onNext={() =>
            setLightboxIdx((i) =>
              i === null ? i : (i + 1) % PROJECTS.length,
            )
          }
        />
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
      <span className="h-px w-6 bg-primary" />
      {children}
    </span>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <li className="reveal group">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${project.title} larger`}
        className="relative block w-full overflow-hidden rounded-xl border border-border bg-secondary/30 aspect-[4/5] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-secondary" />
        )}
        <img
          src={project.img}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition duration-700 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-[1.03]`}
        />
        <span className="absolute left-3 top-3 rounded bg-background/80 px-2 py-1 font-mono text-[10px] font-bold text-primary backdrop-blur">
          {project.num} / 09
        </span>
        <span className="absolute right-3 bottom-3 rounded-full bg-background/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur opacity-0 transition group-hover:opacity-100">
          Tap to expand ↗
        </span>
      </button>
      <div className="mt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
          {project.tag}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.desc}
        </p>
        {project.cta && (
          <a
            href={project.cta.href}
            className="tap mt-3 inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:underline"
          >
            {project.cta.label}
          </a>
        )}
      </div>
    </li>
  );
}

function Lightbox({
  project,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
        <span className="font-mono text-xs font-bold text-primary">
          {project.num} / {String(total).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="tap inline-flex items-center justify-center rounded-md border border-border px-3 text-xs font-semibold uppercase tracking-widest text-foreground hover:bg-secondary"
        >
          Close ✕
        </button>
      </div>

      {/* scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 lg:flex-row lg:items-start lg:gap-10 lg:py-10">
          <div className="relative flex-1">
            <img
              src={project.img}
              alt={project.alt}
              className="mx-auto block max-h-[70vh] w-full rounded-xl object-contain lg:max-h-[80vh]"
            />
          </div>
          <div className="lg:w-[340px] lg:shrink-0 lg:pt-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
              {project.tag}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              {project.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {project.desc}
            </p>
            {project.cta && (
              <a
                href={project.cta.href}
                className="tap mt-5 inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
              >
                {project.cta.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-background/80 px-4 py-3">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous project"
          className="tap inline-flex flex-1 items-center justify-center rounded-md border border-border px-4 text-xs font-bold uppercase tracking-widest text-foreground hover:bg-secondary"
        >
          ← Prev
        </button>
        <span className="font-mono text-xs text-muted-foreground">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next project"
          className="tap inline-flex flex-1 items-center justify-center rounded-md bg-primary px-4 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:opacity-90"
        >
          Next →
        </button>
      </div>
    </div>
  );
}


function SkillBar({ name, pct }: { name: string; pct: number }) {
  const ref = useRef<HTMLLIElement | null>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setW(pct);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);

  return (
    <li ref={ref}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {pct}%
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-[width] duration-[1200ms] ease-out"
          style={{
            width: `${w}%`,
            background: "var(--grad-warm)",
          }}
        />
      </div>
    </li>
  );
}
