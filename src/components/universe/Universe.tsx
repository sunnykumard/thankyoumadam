import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, Coffee, Map, Moon, Music, Pause, Play, RotateCcw, Heart, Sparkles, X, Mic, Upload, Volume2, VolumeX, ImageIcon } from "lucide-react";
import { couple, photos, storyBeats, rooms, letter, quiz, quizReveal, promises, closing, type Photo } from "@/content/universe";

const chapters = [
  { id: "story", label: "Story" },
  { id: "gallery", label: "Gallery" },
  { id: "rooms", label: "Rooms" },
  { id: "letter", label: "Letter" },
  { id: "quiz", label: "Quiz" },
  { id: "promises", label: "Promises" },
  { id: "voice", label: "Voice" },
  { id: "closing", label: "Finale" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

function Stars({ count = 40 }: { count?: number }) {
  const [stars, setStars] = useState<{ l: number; t: number; d: number; s: number }[]>([]);
  useEffect(() => setStars(Array.from({ length: count }, () => ({ l: Math.random() * 100, t: Math.random() * 100, d: Math.random() * 3, s: Math.random() * 2 + 1 }))), [count]);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span key={i} className="anim-twinkle absolute rounded-full bg-gold" style={{ left: `${s.l}%`, top: `${s.t}%`, width: s.s, height: s.s, animationDelay: `${s.d}s` }} />
      ))}
    </div>
  );
}

function Petals() {
  const [p, setP] = useState<{ l: number; d: number; dur: number }[]>([]);
  useEffect(() => setP(Array.from({ length: 18 }, () => ({ l: Math.random() * 100, d: Math.random() * 10, dur: 9 + Math.random() * 8 }))), []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {p.map((x, i) => (
        <span key={i} className="anim-fall absolute top-0 h-3 w-2 rounded-[60%_0] bg-rose opacity-70" style={{ left: `${x.l}%`, animationDelay: `${x.d}s`, animationDuration: `${x.dur}s` }} />
      ))}
    </div>
  );
}

function Floral({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 40" className={`text-sage ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M2 20 C30 20 40 8 60 20 S90 32 118 20" />
      <path d="M30 18c-4-8 2-12 6-10s0 8-6 10zM60 20c0-9 6-11 9-8s-3 8-9 8zM88 22c4-8 10-7 10-3s-5 5-10 3z" />
      <circle cx="60" cy="20" r="2" className="text-rose" fill="currentColor" />
    </svg>
  );
}

function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} data-chapter className={`grain relative scroll-mt-0 overflow-hidden px-5 py-24 sm:px-8 md:py-32 ${className}`}>
      <div className="relative z-10 mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({ kicker, title, light }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="reveal mb-14 text-center">
      <p className={`font-hand text-2xl ${light ? "text-gold" : "text-sage"}`}>{kicker}</p>
      <h2 className="mt-1 text-4xl font-medium italic sm:text-6xl">{title}</h2>
      <Floral className="mx-auto mt-4 w-32" />
    </div>
  );
}

function PhotoFrame({ photo, className = "" }: { photo: Photo; className?: string }) {
  return photo.src ? (
    <img src={photo.src} alt={photo.alt} loading="lazy" className={`aspect-[4/5] w-full object-cover ${className}`} />
  ) : (
    <div className={`bg-placeholder flex aspect-[4/5] w-full flex-col items-center justify-center gap-2 text-primary/70 ${className}`}>
      <ImageIcon className="h-8 w-8" aria-hidden />
      <span className="font-hand text-xl">Add your photo</span>
    </div>
  );
}

/* ---------------- Landing ---------------- */
function Landing({ onEnter }: { onEnter: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-night-sky fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center">
      <Stars count={70} />
      <p className="relative font-hand text-2xl text-gold">a keepsake for two</p>
      <h1 className="relative mt-2 text-5xl font-light italic sm:text-7xl">Our Little Universe</h1>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open the envelope"
        className={`group relative mt-28 h-44 w-64 sm:h-52 sm:w-80 ${open ? "env-open" : "anim-float"}`}
      >
        <div className="env-card absolute inset-x-4 top-4 bottom-2 flex items-center justify-center rounded bg-paper text-primary shadow-photo">
          <span className="font-hand text-2xl">{couple.names}</span>
        </div>
        <div className="absolute inset-0 rounded bg-rose shadow-photo" style={{ clipPath: "polygon(0 0,50% 55%,100% 0,100% 100%,0 100%)" }} />
        <div className="env-flap absolute inset-x-0 top-0 h-1/2 bg-secondary" style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }} />
        {!open && <Heart className="anim-glow absolute top-[40%] left-1/2 h-9 w-9 -translate-x-1/2 fill-primary text-primary" aria-hidden />}
      </button>
      <p className="relative mt-6 h-6 text-sm opacity-70">{open ? couple.dedication : "Tap the envelope"}</p>
      <button
        onClick={onEnter}
        className={`relative mt-6 inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3 font-serif text-lg italic text-gold transition hover:bg-gold hover:text-night focus-visible:outline-2 focus-visible:outline-gold ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        tabIndex={open ? 0 : -1}
      >
        <Sparkles className="h-4 w-4" aria-hidden /> Enter our little universe
      </button>
    </div>
  );
}

/* ---------------- Nav ---------------- */
function ChapterNav({ active }: { active: number }) {
  const go = (i: number) => document.getElementById(chapters[Math.max(0, Math.min(chapters.length - 1, i))]!.id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 h-1 bg-muted/50">
        <div className="h-full bg-gold transition-all duration-500" style={{ width: `${((active + 1) / chapters.length) * 100}%` }} />
      </div>
      <nav aria-label="Chapters" className="fixed top-1/2 right-3 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {chapters.map((c, i) => (
          <button key={c.id} onClick={() => go(i)} aria-label={`Go to ${c.label}`} aria-current={i === active} className="group flex items-center justify-end gap-2">
            <span className="rounded bg-paper/90 px-2 py-0.5 text-xs opacity-0 shadow transition group-hover:opacity-100 group-focus-visible:opacity-100">{c.label}</span>
            <span className={`block h-2.5 w-2.5 rounded-full border border-primary transition ${i === active ? "scale-125 bg-primary" : "bg-paper"}`} />
          </button>
        ))}
      </nav>
      <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border bg-paper/90 p-1 shadow-photo backdrop-blur">
        <button onClick={() => go(active - 1)} disabled={active === 0} aria-label="Previous chapter" className="rounded-full p-2 transition hover:bg-secondary disabled:opacity-30"><ChevronUp className="h-4 w-4" /></button>
        <span className="min-w-20 text-center font-serif text-sm italic">{active + 1}/{chapters.length} · {chapters[active]!.label}</span>
        <button onClick={() => go(active + 1)} disabled={active === chapters.length - 1} aria-label="Next chapter" className="rounded-full p-2 transition hover:bg-secondary disabled:opacity-30"><ChevronDown className="h-4 w-4" /></button>
      </div>
    </>
  );
}

function MusicToggle() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  if (!couple.musicSrc) {
    return (
      <div className="fixed top-4 right-4 z-40 flex items-center gap-2 rounded-full border bg-paper/90 px-3 py-2 text-xs text-muted-foreground shadow" title="Add a track you own in src/content/universe.ts (musicSrc)">
        <VolumeX className="h-4 w-4" aria-hidden /> No song added yet
      </div>
    );
  }
  const toggle = async () => {
    const a = ref.current!;
    if (playing) { a.pause(); setPlaying(false); } else { try { await a.play(); setPlaying(true); } catch { setPlaying(false); } }
  };
  return (
    <>
      <audio ref={ref} src={couple.musicSrc} loop preload="none" onEnded={() => setPlaying(false)} />
      <button onClick={toggle} aria-pressed={playing} aria-label={playing ? "Pause music" : "Play music"} className="fixed top-4 right-4 z-40 flex items-center gap-2 rounded-full border bg-paper/90 px-3 py-2 text-xs shadow transition hover:bg-secondary">
        {playing ? <Pause className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />} <span className="max-w-36 truncate">{playing ? couple.musicTitle : "Play our song"}</span>
      </button>
    </>
  );
}

/* ---------------- Sections ---------------- */
function Story() {
  return (
    <Section id="story">
      <div className="reveal text-center">
        <p className="font-hand text-2xl text-sage">since {couple.since}</p>
        <h2 className="mt-2 text-5xl font-light italic sm:text-7xl">{couple.names}</h2>
      </div>
      <div className="mt-20 space-y-24">
        {storyBeats.map((b, i) => (
          <div key={i} className={`reveal flex flex-col items-center gap-8 md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""}`}>
            <div className="polaroid w-56 shrink-0" style={{ transform: `rotate(${i % 2 ? 3 : -3}deg)` }}>
              <PhotoFrame photo={photos[i % photos.length]!} />
            </div>
            <div className={`max-w-md text-center md:text-left ${i % 2 ? "md:text-right" : ""}`}>
              <p className="font-hand text-3xl text-rose">{b.kicker}</p>
              <h3 className="text-3xl font-medium sm:text-4xl">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o! + 1) % photos.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o! - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  const p = open !== null ? photos[open] ?? null : null;
  return (
    <Section id="gallery" className="torn-top bg-secondary/40">
      <Heading kicker="the exhibition of us" title="Memory Gallery" />
      <div className="grid grid-cols-2 gap-6 sm:gap-10 md:grid-cols-3">
        {photos.map((ph, i) => (
          <button key={i} onClick={() => setOpen(i)} className={`polaroid reveal text-left hover:z-10 hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary ${i % 3 === 1 ? "md:mt-12" : ""}`} style={{ rotate: `${ph.tilt}deg` }} aria-label={`Open memory: ${ph.caption}`}>
            <PhotoFrame photo={ph} />
            <p className="mt-3 font-hand text-xl leading-tight text-primary">{ph.caption}</p>
            <p className="text-xs text-muted-foreground">{ph.date}</p>
          </button>
        ))}
      </div>
      {p && (
        <div role="dialog" aria-modal="true" aria-label={p.caption} className="fixed inset-0 z-[60] flex items-center justify-center bg-night/85 p-4 animate-in fade-in" onClick={() => setOpen(null)}>
          <div className="relative grid max-h-[90vh] w-full max-w-3xl overflow-auto rounded bg-paper md:grid-cols-2 animate-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
            <PhotoFrame photo={p} className="h-full" />
            <div className="p-6 sm:p-8">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">{p.date}</p>
              <h3 className="mt-2 text-3xl italic">{p.caption}</h3>
              <Floral className="my-4 w-24" />
              <p className="leading-relaxed">{p.memory}</p>
              <div className="mt-6 flex gap-2">
                <button onClick={() => setOpen((open! - 1 + photos.length) % photos.length)} className="rounded-full border px-4 py-1.5 text-sm hover:bg-secondary">← Prev</button>
                <button onClick={() => setOpen((open! + 1) % photos.length)} className="rounded-full border px-4 py-1.5 text-sm hover:bg-secondary">Next →</button>
              </div>
            </div>
            <button autoFocus onClick={() => setOpen(null)} aria-label="Close" className="absolute top-3 right-3 rounded-full bg-paper p-2 shadow hover:bg-secondary"><X className="h-4 w-4" /></button>
          </div>
        </div>
      )}
    </Section>
  );
}

const roomIcons = { coffee: Coffee, music: Music, map: Map, moon: Moon };
function Rooms() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const t = (i: number) => setFlipped((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  return (
    <Section id="rooms">
      <Heading kicker="step inside" title="Memory Rooms" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {rooms.map((r, i) => {
          const Icon = roomIcons[r.icon];
          return (
            <button key={i} onClick={() => t(i)} aria-pressed={flipped.has(i)} className={`flip reveal h-72 text-left ${flipped.has(i) ? "is-flipped" : ""}`}>
              <div className="flip-inner relative h-full w-full">
                <div className="flip-face absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-t-full border bg-paper p-6 shadow-photo transition hover:border-gold">
                  <Icon className="h-10 w-10 text-primary" aria-hidden />
                  <h3 className="text-center text-2xl italic">{r.title}</h3>
                  <span className="font-hand text-lg text-sage">{r.front}</span>
                </div>
                <div className="flip-face flip-back bg-night-sky absolute inset-0 flex items-center justify-center rounded-t-full p-8 text-center">
                  <p className="font-serif text-lg italic">{r.back}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

function Letter() {
  const [open, setOpen] = useState(false);
  return (
    <Section id="letter" className="bg-night-sky">
      <Stars />
      <Heading kicker="sealed with care" title="A Letter for You" light />
      {!open ? (
        <div className="flex justify-center">
          <button onClick={() => setOpen(true)} className="reveal group relative h-52 w-80 rounded bg-rose shadow-photo transition hover:-translate-y-1" aria-label="Break the seal and read the letter">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-secondary" style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }} />
            <span className="anim-glow absolute top-[38%] left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-110">
              <Heart className="h-6 w-6 fill-current" aria-hidden />
            </span>
            <span className="absolute inset-x-0 bottom-4 font-hand text-xl text-primary">tap to break the seal</span>
          </button>
        </div>
      ) : (
        <article className="mx-auto max-w-2xl rounded bg-paper p-8 text-foreground shadow-photo animate-in fade-in slide-in-from-bottom-8 duration-700 sm:p-14">
          <p className="font-hand text-3xl text-primary">{letter.to}</p>
          {letter.paragraphs.map((p, i) => <p key={i} className="mt-5 font-serif text-xl leading-relaxed">{p}</p>)}
          <p className="mt-10 font-serif italic">{letter.signoff}</p>
          <p className="font-hand text-3xl text-primary">{letter.from}</p>
          <button onClick={() => setOpen(false)} className="mt-8 text-sm text-muted-foreground underline-offset-4 hover:underline">Fold the letter back</button>
        </article>
      )}
    </Section>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = step >= quiz.length;
  const q = quiz[Math.min(step, quiz.length - 1)]!;
  const choose = (i: number) => { if (picked !== null) return; setPicked(i); if (i === q.answer) setScore((s) => s + 1); };
  const next = () => { setPicked(null); setStep((s) => s + 1); };
  const reset = () => { setStep(0); setPicked(null); setScore(0); };
  return (
    <Section id="quiz" className="torn-top bg-accent/40">
      <Heading kicker="how well do you know us?" title="The Memory Puzzle" />
      <div className="reveal mx-auto max-w-xl rounded-lg border bg-paper p-6 shadow-photo sm:p-10">
        {!done ? (
          <>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Question {step + 1} of {quiz.length}</p>
            <h3 className="mt-2 text-3xl italic">{q.q}</h3>
            <div className="mt-6 grid gap-3">
              {q.options.map((o, i) => {
                const state = picked === null ? "" : i === q.answer ? "border-sage bg-sage/15" : i === picked ? "border-destructive bg-destructive/10" : "opacity-50";
                return <button key={i} onClick={() => choose(i)} disabled={picked !== null} className={`rounded-md border px-4 py-3 text-left transition hover:border-primary ${state}`}>{o}</button>;
              })}
            </div>
            <div aria-live="polite" className="mt-5 min-h-8">
              {picked !== null && (
                <div className="flex items-center justify-between gap-4 animate-in fade-in">
                  <p className="font-hand text-2xl text-primary">{picked === q.answer ? q.right : q.wrong}</p>
                  <button onClick={next} className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:opacity-90">{step === quiz.length - 1 ? "Reveal" : "Next"}</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center animate-in zoom-in-95">
            <Sparkles className="anim-glow mx-auto h-10 w-10 text-gold" aria-hidden />
            <p className="mt-3 font-hand text-3xl text-sage">{score} / {quiz.length} memories found</p>
            <p className="mt-4 font-serif text-2xl italic">{quizReveal}</p>
            <button onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm hover:bg-secondary"><RotateCcw className="h-4 w-4" /> Play again</button>
          </div>
        )}
      </div>
    </Section>
  );
}

function Promises() {
  return (
    <Section id="promises">
      <Heading kicker="the next chapter" title="Promises & Futures" />
      <ol className="mx-auto max-w-2xl space-y-6">
        {promises.map((p, i) => (
          <li key={i} className="reveal flex items-start gap-5 rounded-lg border-l-2 border-gold bg-paper/70 p-5 transition hover:translate-x-1" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="anim-glow font-serif text-4xl text-gold italic">{String(i + 1).padStart(2, "0")}</span>
            <p className="pt-2 font-serif text-xl">{p}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Voice() {
  const [src, setSrc] = useState(couple.voiceSrc);
  useEffect(() => () => { if (src.startsWith("blob:")) URL.revokeObjectURL(src); }, [src]);
  return (
    <Section id="voice" className="bg-secondary/40">
      <Heading kicker="hear it from me" title="A Voice Note" />
      <div className="reveal mx-auto max-w-md rounded-lg border bg-paper p-8 text-center shadow-photo">
        <Mic className="mx-auto h-8 w-8 text-primary" aria-hidden />
        {src ? (
          <audio controls src={src} className="mt-5 w-full" />
        ) : (
          <p className="mt-4 text-muted-foreground">No voice note added yet. Pick a recording to listen — it stays on this device only.</p>
        )}
        <label className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2 text-sm transition hover:bg-secondary focus-within:outline-2 focus-within:outline-primary">
          <Upload className="h-4 w-4" aria-hidden /> Choose an audio file
          <input type="file" accept="audio/*" className="sr-only" onChange={(e) => { const f = e.target.files?.[0]; if (f) setSrc(URL.createObjectURL(f)); }} />
        </label>
      </div>
    </Section>
  );
}

function Closing({ onReplay }: { onReplay: () => void }) {
  return (
    <section id="closing" data-chapter className="bg-night-sky relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-28 text-center">
      <Stars count={80} />
      <Petals />
      <p className="relative font-hand text-2xl text-gold">{couple.names}</p>
      <h2 className="relative mt-2 text-6xl font-light italic sm:text-8xl">{closing.title}</h2>
      <p className="relative mt-4 max-w-md opacity-80">{closing.text}</p>
      <div className="relative mt-10 flex flex-wrap justify-center gap-3">
        <button onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-gold transition hover:bg-gold hover:text-night"><ChevronUp className="h-4 w-4" /> Back to the start</button>
        <button onClick={onReplay} className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-night transition hover:opacity-90"><Play className="h-4 w-4" /> Replay from the envelope</button>
      </div>
    </section>
  );
}

export function Universe() {
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState(0);
  useReveal();
  useEffect(() => {
    if (!entered) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setActive(chapters.findIndex((c) => c.id === e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("[data-chapter]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [entered]);
  useEffect(() => { document.body.style.overflow = entered ? "" : "hidden"; }, [entered]);

  return (
    <main className="font-sans">
      {!entered && <Landing onEnter={() => { setEntered(true); window.scrollTo(0, 0); }} />}
      {entered && <><ChapterNav active={active} /><MusicToggle /></>}
      <Story />
      <Gallery />
      <Rooms />
      <Letter />
      <Quiz />
      <Promises />
      <Voice />
      <Closing onReplay={() => { setEntered(false); window.scrollTo(0, 0); }} />
    </main>
  );
}