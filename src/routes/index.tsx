import { createFileRoute } from "@tanstack/react-router";
import {
  Wrench, Gauge, Zap, Snowflake, CircleGauge, Cog, Settings2, Car,
  PaintBucket, Sofa, Truck, ShieldCheck, MapPin, Instagram, Facebook,
  Phone, ArrowUpRight, Droplets, Disc3,
} from "lucide-react";
import logo from "@/assets/garage-britanica-logo.png";
import heroImg from "@/assets/evoque-hero.png";
import heroVideo from "@/assets/video.mp4";
import engineImg from "@/assets/engine-detail.jpg";
import workshopImg from "@/assets/workshop-wide.jpg";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garage Britânica — Assistência Técnica Premium" },
      { name: "description", content: "Centro automotivo premium na Barra da Tijuca: mecânica completa, elétrica, funilaria, suspensão pneumática e consultoria automotiva." },
      { property: "og:title", content: "Garage Britânica" },
      { property: "og:description", content: "Assistência técnica premium para o seu veículo na Barra da Tijuca." },
      { property: "og:image", content: logo },
      { property: "twitter:image", content: logo },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/5521991983003";
const WHATSAPP_GENERAL = "https://wa.me/5521991983003?text=Ol%C3%A1%21+Gostaria+de+agendar+um+atendimento+na+Garage+Brit%C3%A2nica.+Poderia+me+ajudar%3F";


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
          <img src={logo} alt="Garage Britânica" className="h-11 w-11 rounded-full object-contain" />
          <div className="leading-tight">
            <div className="text-display text-base tracking-wider text-cream">GARAGE BRITÂNICA</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Assistência Técnica Premium</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#sobre" className="text-sm text-muted-foreground hover:text-cream">Sobre</a>
          <a href="#servicos" className="text-sm text-muted-foreground hover:text-cream">Serviços</a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-cream">Contato</a>
        </nav>
        <a href={WHATSAPP_GENERAL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition hover:bg-accent/90">
          <Phone className="h-3.5 w-3.5" /> Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-20 bg-grid-pattern">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroImg}
        className="absolute inset-0 h-full w-full object-cover opacity-40 select-none"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      <div className="absolute inset-0 grain" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-between px-6 py-16">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-cream/70 font-semibold text-shadow-sporty">
          <span className="h-px w-10 bg-accent" />
          Est. Barra da Tijuca · Rio de Janeiro
        </div>

        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent text-shadow-sporty">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Oficina Mecânica Premium & Performance
          </div>
          <h1 className="text-display text-5xl leading-[0.95] text-cream sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-shadow-sporty">
            Especialista em<br />
            <span className="text-accent">Land Rover</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg text-shadow-sporty">
            Um centro automotivo premium completo onde a engenharia de precisão encontra a paixão por performance.
            Do diagnóstico computadorizado completo à suspensão pneumática — cuidamos do seu importado no padrão que ele exige.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP_GENERAL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground shadow-glow transition hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98]">
              Agendar no WhatsApp
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#servicos" className="inline-flex items-center gap-3 rounded-sm border border-cream/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition hover:bg-cream/10 hover:border-cream/65">
              Nossos Serviços
            </a>
          </div>
        </div>

        <div className="grid gap-6 border-t border-cream/15 pt-8 text-cream/80 sm:grid-cols-3">
          <Stat n="20+" label="Serviços Especializados" />
          <Stat n="100%" label="Equipamentos Originais" />
          <Stat n="Premium" label="Padrão de Atendimento" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-l-2 border-accent pl-4">
      <div className="text-display text-3xl font-bold text-cream sm:text-4xl tracking-tight text-shadow-sporty">{n}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">{label}</div>
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
    <section id="servicos" className="relative border-t border-border bg-card/40 py-28 bg-grid-pattern">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent font-semibold">Serviços Premium</p>
            <h2 className="mt-4 text-display text-4xl leading-tight sm:text-6xl uppercase">
              Catálogo de Serviços<br />de Alta Performance.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground font-medium">
            Tudo o que seu veículo necessita, executado com padrões rigorosos e precisão técnica —
            da manutenção básica à suspensão pneumática avançada. Clique em um serviço para agendar via WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceGroups.map((g) => (
            <article key={g.title} className="group relative overflow-hidden rounded-sm border border-border bg-background/60 p-8 transition hover:border-accent/40">
              <div className="mb-6 flex items-baseline justify-between border-b border-border/60 pb-4">
                <h3 className="text-display text-2xl uppercase tracking-wider text-cream">{g.title}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="grid gap-3.5">
                {g.items.map(({ icon: Icon, label }) => {
                  const messageText = `Olá! Gostaria de agendar o serviço de *${label}* na Garage Britânica.`;
                  const url = `${WHATSAPP}?text=${encodeURIComponent(messageText)}`;
                  return (
                    <li key={label}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn flex items-center justify-between gap-4 rounded-sm border border-border/80 bg-background/30 p-4 transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:-translate-y-0.5 hover:shadow-glow-sm animate-pulse-glow-button"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 text-accent group-hover/btn:bg-accent group-hover/btn:text-accent-foreground group-hover/btn:scale-105 transition-all duration-300 animate-pulse-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="text-sm font-semibold tracking-wide text-foreground/90 group-hover/btn:text-cream transition-colors">
                            {label}
                          </span>
                        </div>
                        <ArrowUpRight className="h-4.5 w-4.5 text-muted-foreground group-hover/btn:text-accent group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
                      </a>
                    </li>
                  );
                })}
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
      <img src={workshopImg} alt="Oficina Garage Britânica" loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-accent font-semibold">Pronto para começar?</p>
        <h2 className="mt-6 text-display text-4xl leading-[1.05] text-cream sm:text-6xl md:text-7xl uppercase">
          Agende uma avaliação<br />sem compromisso.
        </h2>
        <a href={WHATSAPP_GENERAL} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent-foreground shadow-glow hover:bg-accent/90">
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
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-semibold">Visite ou ligue</p>
          <h2 className="mt-4 text-display text-4xl leading-tight sm:text-5xl uppercase">Estamos prontos para receber você.</h2>
          <div className="mt-10 space-y-6">
            <ContactRow icon={MapPin} title="Endereço" lines={["Estrada do João, 3816 — João", "Barra da Tijuca, Rio de Janeiro"]} href="https://maps.google.com/?q=Estrada+do+Joao+3816+Barra+da+Tijuca+Rio+de+Janeiro" />
            <ContactRow icon={Phone} title="WhatsApp" lines={["+55 21 99198-3003"]} href={WHATSAPP_GENERAL} />
            <ContactRow icon={Instagram} title="Instagram" lines={["@land.barra"]} href="https://instagram.com/land.barra" />
            <ContactRow icon={Facebook} title="Facebook" lines={["Land Barra"]} href="https://facebook.com/land.barra" />
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-sm border border-border bg-card p-10">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
          <img src={logo} alt="Garage Britânica" className="relative h-24 w-24 rounded-full object-contain bg-background" />
          <h3 className="relative mt-6 text-display text-2xl uppercase tracking-wider">Garage Britânica</h3>
          <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
            Assistência técnica premium para todas as marcas. Trabalhamos com transparência,
            qualidade de oficina autorizada e o cuidado de quem entende de carro.
          </p>
          <a href={WHATSAPP_GENERAL} target="_blank" rel="noreferrer" className="relative mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground hover:bg-accent/90">
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
          <img src={logo} alt="" className="h-7 w-7 rounded-full object-contain" />
          <span className="uppercase tracking-widest">Garage Britânica © {new Date().getFullYear()}</span>
        </div>
        <span className="uppercase tracking-widest">Garage Britânica · Assistência Técnica Premium</span>
      </div>
    </footer>
  );
}
