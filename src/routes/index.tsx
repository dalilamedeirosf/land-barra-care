import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
  Wrench, Gauge, Zap, Snowflake, CircleGauge, Cog, Settings2, Car,
  PaintBucket, Sofa, Truck, ShieldCheck, MapPin, Instagram,
  Phone, ArrowUpRight, Droplets, Disc3,
} from "lucide-react";
import logo from "@/assets/garage-britanica-logo.png";
import heroImg from "@/assets/evoque-hero.png";
import heroVideo from "@/assets/video.mp4";
import levaTrazVideo from "@/assets/video2.mp4";
import engineImg from "@/assets/engine-detail.jpg";
import workshopImg from "@/assets/workshop-wide.png";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garage Britânica" },
      { name: "description", content: "Assistência técnica especializada para Land Rover. Manutenção, reparos e dicas valiosas. Junte-se à nossa comunidade! Siga para atualizações e ofertas exclusivas." },
      { property: "og:title", content: "Garage Britânica" },
      { property: "og:description", content: "Assistência técnica especializada para Land Rover. Manutenção, reparos e dicas valiosas. Junte-se à nossa comunidade! Siga para atualizações e ofertas exclusivas." },
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
    title: "Serviços",
    items: [
      { icon: Gauge, label: "Diagnóstico Computadorizado" },
      { icon: Cog, label: "Substituição do fluido transmissão automática" },
      { icon: Disc3, label: "Substituição fluido freio computadorizado" },
      { icon: Wrench, label: "Substituição correia dentada" },
      { icon: Zap, label: "Substituição da bateria com programação" },
      { icon: Droplets, label: "Substituição óleo e filtros do motor" },
      { icon: Disc3, label: "Substituição pastilhas e discos freios" },
      { icon: Cog, label: "Reparo de câmbio automático" },
      { icon: CircleGauge, label: "Reparo caixa direção hidráulica e eletrônica" },
      { icon: Wrench, label: "Reparo do motor diesel e gasolina" },
      { icon: Zap, label: "Serviço de elétrica e eletrônica" },
      { icon: Car, label: "Serviço de vidraçaria" },
      { icon: PaintBucket, label: "Serviço de repintura e funilaria" },
      { icon: Truck, label: "Serviço de leva e tráz seu veículo" },
      { icon: Sofa, label: "Serviço de capotaria banco e teto" },
      { icon: Settings2, label: "Serviço de troca fluidos do diferencial" },
      { icon: CircleGauge, label: "Serviço de suspensão pneumática" },
      { icon: Snowflake, label: "Serviço de ar condicionado" },
    ],
  },
  {
    title: "Consultorias",
    items: [
      { icon: ShieldCheck, label: "Serviço de consultoria automotiva" },
      { icon: Car, label: "Serviço de compra e venda do seu veículo" },
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
      <LevaTraz />
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
          <img src={logo} alt="Garage Britânica" className="h-15 w-auto object-contain" />
          <div className="leading-tight">
            <div className="text-display text-base tracking-wider text-cream">GARAGE BRITÂNICA</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Assistência Técnica Especializada</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#sobre" className="text-sm text-muted-foreground hover:text-cream">Sobre</a>
          <a href="#servicos" className="text-sm text-muted-foreground hover:text-cream">Serviços</a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-cream">Contato</a>
        </nav>
        <a href={WHATSAPP_GENERAL} target="_blank" rel="noreferrer" className="btn-premium inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
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
        className="absolute inset-0 h-full w-full object-cover select-none"
        style={{ filter: "brightness(1.85) contrast(1.05) saturate(1.05)" }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      <div className="absolute inset-0 grain" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-between px-6 py-16">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-cream/70 font-semibold text-shadow-sporty">
          <span className="h-px w-10 bg-accent" />
          Est. Barra da Tijuca · Rio de Janeiro
        </div>

        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent text-shadow-sporty">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Oficina Mecânica Especializada em Serviços Premium
          </div>
          <h1 className="text-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] font-bold uppercase tracking-wider text-shadow-sporty">
            <span className="block text-cream drop-shadow-[0_4px_20px_rgba(0,168,89,0.2)]">
              Garage Britânica
            </span>
            <span className="font-sans text-accent text-base sm:text-lg md:text-xl block mt-6 font-semibold tracking-wide uppercase drop-shadow-[0_0_15px_rgba(0,168,89,0.5)]">
              Manutenção de alto nível, para quem não aceita menos que o melhor!
            </span>
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP_GENERAL} target="_blank" rel="noreferrer" className="btn-premium group inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground">
              Agendar no WhatsApp
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#servicos" className="inline-flex items-center gap-3 rounded-sm border border-cream/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition hover:bg-cream/10 hover:border-cream/65">
              Ver Serviços
            </a>
          </div>
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
  const items = [
    { text: "Diagnóstico Computadorizado", icon: Gauge },
    { text: "Transmissão Automática",      icon: Cog },
    { text: "Fluido de Freio",             icon: Disc3 },
    { text: "Correia Dentada",             icon: Wrench },
    { text: "Bateria",                     icon: Zap },
    { text: "Óleo e Filtros",              icon: Droplets },
    { text: "Pastilhas e Discos",          icon: Disc3 },
    { text: "Câmbio Automático",           icon: Cog },
    { text: "Direção Hidráulica",          icon: CircleGauge },
    { text: "Motor Diesel e Gasolina",     icon: Wrench },
    { text: "Elétrica e Eletrônica",       icon: Zap },
    { text: "Vidraçaria",                  icon: Car },
    { text: "Repintura e Funilaria",       icon: PaintBucket },
    { text: "Leva e Tráz",                icon: Truck },
    { text: "Capotaria",                   icon: Sofa },
    { text: "Fluidos do Diferencial",      icon: Settings2 },
    { text: "Suspensão Pneumática",        icon: CircleGauge },
    { text: "Ar Condicionado",             icon: Snowflake },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 7, y: 0, shadowX: 0, shadowY: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalizado entre -0.5 e 0.5
    const xPct = (x / rect.width) - 0.5;
    const yPct = (y / rect.height) - 0.5;

    // Tilt no desktop: varia rotateX entre 2deg e 13deg, e rotateY de -9deg a 9deg
    const tiltX = 7 - (yPct * 12);
    const tiltY = xPct * 18;

    // Deslocamento de sombra em direção oposta à inclinação
    const shadowX = xPct * -30;
    const shadowY = 20 - (yPct * 30);

    setTilt({ x: tiltX, y: tiltY, shadowX, shadowY });
  };

  const handleMouseLeave = () => {
    // Retorna ao tilt padrão suavemente
    setTilt({ x: 7, y: 0, shadowX: 0, shadowY: 20 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="marquee-4d-wrap select-none"
      style={{
        '--tilt-x': `${tilt.x}deg`,
        '--tilt-y': `${tilt.y}deg`,
        '--shadow-x': `${tilt.shadowX}px`,
        '--shadow-y': `${tilt.shadowY}px`,
        '--shadow-x-deep': `${tilt.shadowX * 1.6}px`,
        '--shadow-y-deep': `${tilt.shadowY * 1.6}px`,
      } as React.CSSProperties}
    >
      <div className="marquee-4d-inner py-6 sm:py-5 md:py-6">
        <div className="marquee-track-move gap-14 sm:gap-16">
          {[...items, ...items, ...items, ...items, ...items].map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="flex items-center gap-5 sm:gap-7 shrink-0 group">
                <span className="text-accent/60 text-base sm:text-sm font-bold">◆</span>
                <span className="text-display text-[1.38rem] sm:text-[1.35rem] md:text-[1.55rem] uppercase tracking-[0.12em] sm:tracking-[0.14em] font-black text-transparent bg-clip-text bg-gradient-to-r from-cream via-white to-[#dddddd] drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                  {item.text}
                </span>
                <span className="relative flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-accent/20 blur-md animate-pulse-accent" />
                  <Icon className="relative h-7 w-7 sm:h-7 sm:w-7 text-accent drop-shadow-[0_0_10px_rgba(0,168,89,1)]" />
                </span>
              </span>
            );
          })}
        </div>
      </div>
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
            Mecânica<br />Especializada
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Sobre nós</p>
          <h2 className="mt-4 text-display text-4xl leading-tight sm:text-5xl font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-cream to-[#b0b0b0]">
            OFICINA COMPLETA: SEU CARRO SEMPRE PRONTO PARA A <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 via-accent to-emerald-700 drop-shadow-[0_0_15px_rgba(0,168,89,0.5)]">PRÓXIMA AVENTURA!</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-semibold">
            Tudo o que a sua <span className="text-accent font-bold">Land Rover</span> precisa!
          </p>

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
            <h2 className="mt-4 text-display text-4xl leading-[1.05] sm:text-6xl uppercase font-black text-transparent bg-clip-text bg-gradient-to-b from-cream via-cream to-muted-foreground/50 drop-shadow-[0_4px_15px_rgba(0,168,89,0.25)]">
              Catálogo de Serviços<br />de Alta Performance.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground font-medium">
            Tudo o que seu veículo necessita, executado com padrões rigorosos e precisão técnica —
            da manutenção básica à suspensão pneumática avançada. Clique em um serviço para agendar via WhatsApp.
          </p>
        </div>

        <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground/60 text-center mb-6 font-medium">
          ↓ Escolha um dos serviços abaixo clicando ↓
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceGroups.map((g) => (
            <article key={g.title} className="group relative overflow-hidden rounded-sm border border-border bg-background/60 p-8 transition hover:border-accent/40">
              <div className="mb-6 flex items-baseline justify-between border-b border-border/60 pb-4">
                <h3 className="text-display text-2xl uppercase tracking-wider text-cream">{g.title}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="grid gap-3.5">
                {g.items.map(({ icon: Icon, label }) => {
                  let messageText = `Olá! Gostaria de agendar o serviço de *${label}* na Garage Britânica.`;
                  if (label === "Diagnóstico Computadorizado") {
                    messageText = "Olá, gostaria de informações sobre o serviço de Diagnóstico Computadorizado";
                  } else if (label.toLowerCase().includes("transmissão automática")) {
                    messageText = "Olá, gostaria de informações sobre o serviço de SUBSTITUIÇÃO DO FLUIDO TRANSMISSÃO AUTOMÁTICA";
                  } else if (label.toLowerCase().includes("fluido freio computadorizado")) {
                    messageText = "Olá, gostaria de informações sobre o serviço de SUBSTITUIÇÃO FLUIDO FREIO COMPUTADORIZADO";
                  } else if (label.toLowerCase().includes("correia dentada")) {
                    messageText = "Olá, gostaria de informações sobre o serviço de SUBSTITUIÇÃO CORREIA DENTADA";
                  } else if (label.toLowerCase().includes("bateria com programação")) {
                    messageText = "Olá, gostaria de informações sobre o serviço de SUBSTITUIÇÃO DA BATERIA COM PROGRAMAÇÃO";
                  } else if (label.toLowerCase().includes("óleo e filtros do motor")) {
                    messageText = "Olá, gostaria de informações sobre o serviço de SUBSTITUIÇÃO ÓLEO E FILTROS DO MOTOR";
                  } else if (label.toLowerCase().includes("pastilhas e discos freios")) {
                    messageText = "Olá, gostaria de informações sobre o serviço de SUBSTITUIÇÃO PASTILHAS E DISCOS FREIOS";
                  } else if (label.toLowerCase().includes("reparo de câmbio automático")) {
                    messageText = "Olá, gostaria de informações sobre o serviço de REPARO DE CÂMBIO AUTOMÁTICO";
                  } else if (label.toLowerCase().includes("direção hidráulica e eletrônica")) {
                    messageText = "Olá, gostaria de informações sobre o serviço de REPARO CAIXA DIREÇÃO HIDRÁULICA E ELETRÔNICA";
                  } else if (label.toLowerCase().includes("motor diesel e gasolina")) {
                    messageText = "Olá, gostaria de informações sobre o serviço de REPARO DO MOTOR DIESEL E GASOLINA";
                  } else if (label.toLowerCase().includes("elétrica e eletrônica")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE ELÉTRICA E ELETRÔNICA";
                  } else if (label.toLowerCase().includes("serviço de vidraçaria")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE VIDRAÇARIA";
                  } else if (label.toLowerCase().includes("repintura e funilaria")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE REPINTURA E FUNILARIA";
                  } else if (label.toLowerCase().includes("leva e tráz seu veículo")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE LEVA E TRÁZ SEU VEÍCULO";
                  } else if (label.toLowerCase().includes("capotaria banco e teto")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE CAPOTARIA BANCO E TETO";
                  } else if (label.toLowerCase().includes("fluidos do diferencial")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE TROCA FLUIDOS DO DIFERENCIAL";
                  } else if (label.toLowerCase().includes("suspensão pneumática")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE SUSPENSÃO PNEUMÁTICA";
                  } else if (label.toLowerCase().includes("ar condicionado")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE AR CONDICIONADO";
                  } else if (label.toLowerCase().includes("consultoria automotiva")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE CONSULTORIA AUTOMATIVA ";
                  } else if (label.toLowerCase().includes("compra e venda do seu veículo")) {
                    messageText = "Olá, gostaria de informações sobre o SERVIÇO DE COMPRA E VENDA DO SEU VEÍCULO";
                  }

                  const url = `${WHATSAPP}?text=${encodeURIComponent(messageText)}`;
                  return (
                    <li key={label}>
                      <div className="btn-3d-wrapper">
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-3d-pulse group/btn flex items-center justify-between gap-4 rounded-sm p-4 transition-all duration-200"
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
                      </div>
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

function Node3D({ icon: Icon, label, rotate, delayS = 0 }: { icon: typeof Truck; label: string; rotate?: boolean; delayS?: number }) {
  const d = (offset: number) => `${delayS + offset}s`;
  return (
    <div className="flex flex-col items-center gap-4 cursor-default select-none group">
      {/* Float wrapper — slow levitation */}
      <div style={{ animation: `float-luxury 2.5s ease-in-out infinite`, animationDelay: d(0) }}>
        {/* 3D tilt sway */}
        <div
          className="relative w-32 h-32"
          style={{ animation: `tilt-sway 3s ease-in-out infinite`, animationDelay: d(0), transformStyle: 'preserve-3d' }}
        >
          {/* Breathing outer glow */}
          <div
            className="absolute -inset-8 rounded-full bg-accent/20 blur-3xl pointer-events-none"
            style={{ animation: `glow-breathe 1.8s ease-in-out infinite`, animationDelay: d(0) }}
          />

          {/* Ripple ring 1 */}
          <div
            className="absolute inset-0 rounded-full border-2 border-accent/60 pointer-events-none"
            style={{ animation: `ripple-ring 1.4s ease-out infinite`, animationDelay: d(0) }}
          />
          {/* Ripple ring 2 */}
          <div
            className="absolute inset-0 rounded-full border border-accent/40 pointer-events-none"
            style={{ animation: `ripple-ring 1.4s ease-out infinite`, animationDelay: d(0.9) }}
          />
          {/* Ripple ring 3 */}
          <div
            className="absolute inset-0 rounded-full border border-accent/25 pointer-events-none"
            style={{ animation: `ripple-ring 1.4s ease-out infinite`, animationDelay: d(1.8) }}
          />

          {/* 3D sphere */}
          <div
            className="absolute inset-0 rounded-full flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-500"
            style={{
              background: 'radial-gradient(circle at 32% 28%, oklch(0.45 0.20 155), oklch(0.09 0.04 155))',
              boxShadow: [
                'inset 0 4px 10px rgba(255,255,255,0.22)',
                'inset 0 -5px 10px rgba(0,0,0,0.6)',
                '5px 5px 0 oklch(0.06 0.025 155)',
                '10px 10px 0 oklch(0.04 0.015 155)',
                '15px 15px 20px rgba(0,0,0,0.4)',
                '0 0 55px rgba(0,168,89,0.7)',
                '0 22px 50px rgba(0,0,0,0.7)',
              ].join(', '),
            }}
          >
            <Icon
              className={`h-14 w-14 text-white drop-shadow-[0_0_16px_rgba(255,255,255,1)] transition-transform duration-300 ${rotate ? 'group-hover:rotate-45' : 'group-hover:scale-110'}`}
            />
          </div>

          {/* Specular highlight */}
          <div className="absolute top-4 left-6 w-9 h-6 rounded-full bg-white/20 blur-sm z-20 pointer-events-none" />
        </div>
      </div>

      {/* Label */}
      <span className="text-xs font-black tracking-[0.3em] uppercase text-accent bg-background/85 backdrop-blur-md px-5 py-1.5 rounded-sm border border-accent/40 shadow-[0_0_20px_rgba(0,168,89,0.35)]">
        {label}
      </span>
    </div>
  );
}

function LevaTraz() {
  return (
    <section id="leva-traz" className="relative border-t border-border min-h-screen overflow-hidden flex flex-col">

      {/* Full-section background video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 select-none">
        <source src={levaTrazVideo} type="video/mp4" />
      </video>
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-background/35" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full flex-1 px-6 pt-16 pb-16">

        {/* Full-viewport-width title */}
        <h2
          className="font-black uppercase text-center text-transparent bg-clip-text bg-gradient-to-b from-emerald-200 via-accent to-emerald-800 w-full leading-none tracking-tight"
          style={{ fontSize: 'clamp(4rem, 13vw, 14rem)', filter: 'drop-shadow(0 0 55px rgba(0,168,89,0.85))' }}
        >
          LEVA & TRAZ
        </h2>
        <p className="mt-6 text-cream/90 font-semibold text-lg md:text-xl text-center max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mb-14">
          O ciclo perfeito para o seu veículo sair rodando como novo.
        </p>

        {/* Full-width diagram */}
        <div className="relative w-full max-w-6xl mx-auto" style={{ minHeight: '520px' }}>

          {/* SVG Animated Arrows */}
          <div className="absolute inset-0 hidden md:block">
            <svg className="w-full h-full pointer-events-none" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M0 1.5 L8 5 L0 8.5 Z" fill="currentColor" className="text-accent" />
                </marker>
              </defs>
              {/* DELIVERY(500,70) → MECÂNICA(80,410) */}
              <path d="M 462 95 C 310 160 130 260 105 380" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 6" className="text-accent/70 animate-[dash_2s_linear_infinite]" markerEnd="url(#arrowhead)" />
              {/* MECÂNICA(80,410) → ESTÉTICA(920,410) */}
              <path d="M 150 435 C 400 500 600 500 850 435" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 6" className="text-accent/70 animate-[dash_2s_linear_infinite]" markerEnd="url(#arrowhead)" />
              {/* ESTÉTICA(920,410) → DELIVERY(500,70) */}
              <path d="M 895 380 C 870 260 690 160 538 95" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 6" className="text-accent/70 animate-[dash_2s_linear_infinite]" markerEnd="url(#arrowhead)" />
            </svg>
          </div>

          {/* Center logo — animated */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {/* Breathing outer glow */}
            <div
              className="absolute -inset-10 rounded-full bg-accent/15 blur-3xl pointer-events-none"
              style={{ animation: 'glow-breathe 1.8s ease-in-out infinite' }}
            />
            {/* Rotating gradient border ring */}
            <div
              className="absolute -inset-[3px] rounded-full pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, rgba(0,168,89,0.05), rgba(0,168,89,0.7), rgba(180,255,200,1), rgba(0,168,89,0.7), rgba(0,168,89,0.05))',
                animation: 'rotate-border 2s linear infinite',
              }}
            />
            {/* Main circle */}
            <div
              className="relative w-48 h-48 rounded-full bg-[oklch(0.10_0.03_155)] backdrop-blur-md flex items-center justify-center"
              style={{ boxShadow: '0 0 60px rgba(0,168,89,0.35), inset 0 0 30px rgba(0,168,89,0.1)' }}
            >
              <img
                src={logo}
                alt="Garage Britânica"
                className="w-36 object-contain opacity-95"
                style={{ animation: 'logo-breathe 2s ease-in-out infinite' }}
              />
            </div>
          </div>

          {/* Node: DELIVERY (top center) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <Node3D icon={Truck} label="DELIVERY" delayS={0} />
          </div>

          {/* Node: MECÂNICA (bottom left) */}
          <div className="absolute bottom-0 left-0 z-20 md:left-2">
            <Node3D icon={Wrench} label="MECÂNICA" rotate delayS={1.6} />
          </div>

          {/* Node: ESTÉTICA (bottom right) */}
          <div className="absolute bottom-0 right-0 z-20 md:right-2">
            <Node3D icon={PaintBucket} label="ESTÉTICA" delayS={0.9} />
          </div>

        </div>
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-4xl px-6 py-28">
      <div className="text-center">
        <h2 className="text-display text-4xl leading-tight sm:text-5xl uppercase mb-12">Estamos prontos para receber você.</h2>
        <div className="space-y-4 max-w-2xl mx-auto text-left">
          <ContactRow icon={MapPin} title="Endereço" lines={["Estrada do Joá, 3816 — Joá", "Barra da Tijuca, Rio de Janeiro"]} href="https://maps.google.com/?q=Estrada+do+Joa+3816+Barra+da+Tijuca+Rio+de+Janeiro" />
          <ContactRow icon={Phone} title="WhatsApp" lines={["+55 21 99198-3003"]} href={WHATSAPP_GENERAL} />
          <ContactRow icon={Instagram} title="Instagram" lines={["@land.barra"]} href="https://www.instagram.com/land.barra?igsh=MTYxMmZreTJmcXkyMA==" />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, lines, href }: { icon: typeof MapPin; title: string; lines: string[]; href?: string }) {
  const content = (
    <div className="flex items-start gap-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 text-accent group-hover/contact:bg-accent group-hover/contact:text-accent-foreground transition-all duration-300">
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{title}</div>
        {lines.map((l) => <div key={l} className="text-display text-lg text-cream">{l}</div>)}
      </div>
      {href && <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground group-hover/contact:text-accent group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5 transition-all duration-300" />}
    </div>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/contact fine-border-laser block p-5"
    >
      {content}
    </a>
  ) : (
    <div className="fine-border-laser block p-5">{content}</div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-12 w-auto object-contain" />
          <span className="uppercase tracking-widest">Garage Britânica © {new Date().getFullYear()}</span>
        </div>
        <span className="uppercase tracking-widest">Garage Britânica · Assistência Técnica Especializada</span>
      </div>
    </footer>
  );
}
