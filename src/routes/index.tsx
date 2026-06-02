import { createFileRoute } from "@tanstack/react-router";
import {
  Wrench, Gauge, Zap, Snowflake, CircleGauge, Cog, Settings2, Car,
  PaintBucket, Sofa, Truck, ShieldCheck, MapPin, Instagram, Facebook,
  Phone, ArrowUpRight, Droplets, Disc3,
} from "lucide-react";
import logo from "@/assets/garage-britanica-logo.png.asset.json";
import heroImg from "@/assets/hero-garage.jpg";
import engineImg from "@/assets/engine-detail.jpg";
import workshopImg from "@/assets/workshop-wide.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Land Barra | Garage Britânica — Assistência Técnica Premium" },
      { name: "description", content: "Centro automotivo premium na Barra da Tijuca: mecânica completa, elétrica, funilaria, suspensão pneumática e consultoria automotiva." },
      { property: "og:title", content: "Land Barra | Garage Britânica" },
      { property: "og:description", content: "Assistência técnica premium para o seu veículo na Barra da Tijuca." },
      { property: "og:image", content: logo.url },
      { property: "twitter:image", content: logo.url },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/5521991983003";

const serviceGroups = [
  {
    title: "Manutenção & Fluidos",
    items: [
      { icon: Droplets, label: "Troca de óleo do motor e filtro" },
      { icon: Cog, label: "Fluido de transmissão automática" },
      { icon: Disc3, label: "Fluido de freio com diagnóstico" },
      { icon: Settings2, label: "Fluido de diferencial" },
      { icon: Snowflake, label: "Serviço de ar-condicionado" },
    ],
  },
  {
    title: "Reparos & Mecânica",
    items: [
      { icon: Gauge, label: "Diagnóstico computadorizado" },
      { icon: Cog, label: "Troca de correia dentada" },
      { icon: Zap, label: "Troca de bateria com programação" },
      { icon: Disc3, label: "Pastilhas e discos de freio" },
      { icon: Settings2, label: "Reparo de transmissão automática" },
      { icon: CircleGauge, label: "Direção hidráulica e eletrônica" },
      { icon: Wrench, label: "Motores diesel e gasolina" },
    ],
  },
  {
    title: "Especializados",
    items: [
      { icon: Zap, label: "Elétrica e eletrônica automotiva" },
      { icon: PaintBucket, label: "Funilaria e pintura" },
      { icon: Car, label: "Vidraçaria — troca de vidros" },
      { icon: Truck, label: "Transporte de veículos (delivery)" },
      { icon: Sofa, label: "Tapeçaria e teto" },
      { icon: CircleGauge, label: "Suspensão pneumática" },
    ],
  },
  {
    title: "Consultoria",
    items: [
      { icon: ShieldCheck, label: "Consultoria automotiva" },
      { icon: Car, label: "Auxílio na compra e venda de veículos" },
    ],
  },
];

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <ShowcaseStrip />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="Land Barra Garage Britânica" className="h-11 w-11 rounded-full object-contain" />
          <div className="leading-tight">
            <div className="text-display text-base tracking-wider text-cream">LAND BARRA</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Garage Britânica</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#sobre" className="text-sm text-muted-foreground hover:text-cream">Sobre</a>
          <a href="#servicos" className="text-sm text-muted-foreground hover:text-cream">Serviços</a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-cream">Contato</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition hover:bg-accent/90">
          <Phone className="h-3.5 w-3.5" /> Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-20">
      <img src={heroImg} alt="Garagem premium Land Barra" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-90" />
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-0 grain" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-between px-6 py-16">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-cream/70">
          <span className="h-px w-10 bg-cream/40" />
          Est. Barra da Tijuca · Rio de Janeiro
        </div>

        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-accent">Assistência Técnica Premium</p>
          <h1 className="text-display text-5xl leading-[0.95] text-cream sm:text-7xl md:text-8xl">
            Engenharia britânica.<br />
            <span className="text-stroke-cream">Cuidado artesanal.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Um centro automotivo completo onde precisão técnica encontra obsessão pelo detalhe.
            Do diagnóstico computadorizado à suspensão pneumática — seu carro nas mãos certas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-sm bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground shadow-glow transition hover:bg-accent/90">
              Falar no WhatsApp
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#servicos" className="inline-flex items-center gap-3 rounded-sm border border-cream/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-cream/10">
              Ver serviços
            </a>
          </div>
        </div>

        <div className="grid gap-6 border-t border-cream/15 pt-8 text-cream/80 sm:grid-cols-3">
          <Stat n="20+" label="Serviços especializados" />
          <Stat n="100%" label="Diagnóstico computadorizado" />
          <Stat n="Premium" label="Padrão de atendimento" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-display text-3xl text-cream sm:text-4xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.3em] text-cream/60">{label}</div>
    </div>
  );
}

function Marquee() {
  const words = ["Mecânica Completa", "Elétrica", "Funilaria", "Suspensão Pneumática", "Diagnóstico", "Ar-condicionado", "Transporte", "Consultoria"];
  return (
    <div className="border-y border-border bg-union py-5 overflow-hidden">
      <div className="flex animate-[scroll_40s_linear_infinite] gap-12 whitespace-nowrap text-display text-2xl uppercase tracking-widest text-cream">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            {w} <span className="text-cream/40">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img src={engineImg} alt="Detalhe técnico de motor" loading="lazy" width={1024} height={1024} className="rounded-sm shadow-elegant" />
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 items-center justify-center rounded-full bg-accent text-center text-display text-sm uppercase leading-tight tracking-widest text-accent-foreground sm:flex">
            Premium<br />Service
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Sobre nós</p>
          <h2 className="mt-4 text-display text-4xl leading-tight sm:text-5xl">
            Um espírito britânico na <span className="text-accent">Barra da Tijuca</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Inspirados pela tradição automotiva britânica — onde a engenharia é uma forma de
            arte — operamos como um centro automotivo completo. Mecânica, elétrica, funilaria
            e consultoria sob o mesmo teto, com a precisão que carros sérios merecem.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ["Diagnóstico", "Equipamentos computadorizados de última geração."],
              ["Especialistas", "Profissionais com domínio em motores diesel e gasolina."],
              ["Completo", "Da troca de óleo à suspensão pneumática."],
              ["Confiança", "Atendimento transparente e consultoria honesta."],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-accent/70 pl-4">
                <div className="text-display text-base uppercase tracking-wider">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative border-t border-border bg-card/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">O que fazemos</p>
            <h2 className="mt-4 text-display text-4xl leading-tight sm:text-6xl">
              Catálogo completo<br />de serviços.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Tudo o que seu veículo precisa, executado com método e padrão premium —
            do óleo do motor à suspensão pneumática.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceGroups.map((g) => (
            <article key={g.title} className="group relative overflow-hidden rounded-sm border border-border bg-background/60 p-8 transition hover:border-accent/60">
              <div className="mb-6 flex items-baseline justify-between border-b border-border/60 pb-4">
                <h3 className="text-display text-2xl uppercase tracking-wider text-cream">{g.title}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="space-y-3">
                {g.items.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-4 text-sm text-foreground/90">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary/30 text-cream">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseStrip() {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
      <img src={workshopImg} alt="Oficina Land Barra" loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-accent">Pronto para começar?</p>
        <h2 className="mt-6 text-display text-4xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
          Agende uma avaliação<br />sem compromisso.
        </h2>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent-foreground shadow-glow hover:bg-accent/90">
          <Phone className="h-4 w-4" /> +55 21 99198-3003
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Visite ou ligue</p>
          <h2 className="mt-4 text-display text-4xl leading-tight sm:text-5xl">Estamos prontos para receber você.</h2>
          <div className="mt-10 space-y-6">
            <ContactRow icon={MapPin} title="Endereço" lines={["Estrada do João, 3816 — João", "Barra da Tijuca, Rio de Janeiro"]} />
            <ContactRow icon={Phone} title="WhatsApp" lines={["+55 21 99198-3003"]} href={WHATSAPP} />
            <ContactRow icon={Instagram} title="Instagram" lines={["@land.barra"]} href="https://instagram.com/land.barra" />
            <ContactRow icon={Facebook} title="Facebook" lines={["Land Barra"]} href="https://facebook.com/" />
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-sm border border-border bg-card p-10">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
          <img src={logo.url} alt="Garage Britânica" className="relative h-24 w-24 rounded-full" />
          <h3 className="relative mt-6 text-display text-2xl uppercase tracking-wider">Garage Britânica</h3>
          <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
            Assistência técnica premium para todas as marcas. Trabalhamos com transparência,
            qualidade de oficina autorizada e o cuidado de quem entende de carro.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="relative mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground hover:bg-accent/90">
            Conversar agora <ArrowUpRight className="h-4 w-4" />
          </a>
        </aside>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, lines, href }: { icon: typeof MapPin; title: string; lines: string[]; href?: string }) {
  const content = (
    <div className="flex items-start gap-5 border-t border-border pt-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/30 text-cream">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{title}</div>
        {lines.map((l) => <div key={l} className="text-display text-lg text-cream">{l}</div>)}
      </div>
      {href && <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground" />}
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block transition hover:opacity-80">{content}</a> : content;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="" className="h-7 w-7 rounded-full" />
          <span className="uppercase tracking-widest">Land Barra © {new Date().getFullYear()}</span>
        </div>
        <span className="uppercase tracking-widest">Garage Britânica · Assistência Técnica Premium</span>
      </div>
    </footer>
  );
}
