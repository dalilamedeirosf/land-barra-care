import { createFileRoute } from "@tanstack/react-router";
import {
  Wrench, Gauge, Zap, Snowflake, CircleGauge, Cog, Settings2, Car,
  PaintBucket, Sofa, Truck, ShieldCheck, MapPin, Instagram,
  Phone, ArrowUpRight, Droplets, Disc3,
} from "lucide-react";
import logo from "@/assets/garage-britanica-logo.png";
import heroImg from "@/assets/evoque-hero.png";
import heroVideo from "@/assets/video.mp4";
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
        className="absolute inset-0 h-full w-full object-cover select-none opacity-80 md:opacity-70"
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
            Oficina Mecânica Especializada Land Rover
          </div>
          <h1 className="text-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-cream font-black uppercase tracking-tighter text-shadow-sporty">
            <span className="block">Garage Britânica</span>
            <span className="text-accent text-lg sm:text-2xl md:text-3xl block mt-4 font-bold tracking-wide uppercase">
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
  const words = [
    "Diagnóstico Computadorizado",
    "Transmissão Automática",
    "Fluido de Freio",
    "Correia Dentada",
    "Bateria",
    "Óleo e Filtros",
    "Pastilhas e Discos",
    "Câmbio Automático",
    "Direção Hidráulica",
    "Motor Diesel e Gasolina",
    "Elétrica e Eletrônica",
    "Vidraçaria",
    "Repintura e Funilaria",
    "Leva e Tráz",
    "Capotaria",
    "Fluidos do Diferencial",
    "Suspensão Pneumática",
    "Ar Condicionado"
  ];
  return (
    <div className="border-y border-border bg-union py-5 overflow-hidden">
      <div className="flex animate-[scroll_10s_linear_infinite] gap-12 whitespace-nowrap text-display text-2xl uppercase tracking-widest text-cream">
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
            Mecânica<br />Especializada
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Sobre nós</p>
          <h2 className="mt-4 text-display text-3xl leading-tight sm:text-4xl font-black uppercase tracking-wide">
            OFICINA COMPLETA: SEU CARRO SEMPRE PRONTO PARA A <span className="text-accent">PRÓXIMA AVENTURA!</span>
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

function LevaTraz() {
  return (
    <section id="leva-traz" className="relative border-t border-border bg-card/25 py-24 overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-display text-6xl sm:text-7xl md:text-8xl leading-none font-black text-accent tracking-tighter uppercase">
            LEVA & TRAZ
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-cream/90 font-semibold max-w-2xl mx-auto">
            O ciclo perfeito para o seu veículo sair rodando como novo.
          </p>
        </div>

        {/* Circular Diagram on Desktop / Stacked List on Mobile */}
        <div className="relative mx-auto max-w-3xl h-[420px] sm:h-[480px] md:h-[520px] flex items-center justify-center">
          
          {/* SVG Animated Arrows (Desktop only) */}
          <div className="absolute inset-0 hidden md:block">
            <svg className="w-full h-full pointer-events-none" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M0 1.5 L8 5 L0 8.5 Z" fill="currentColor" className="text-accent" />
                </marker>
              </defs>
              
              {/* Arrow 1: DELIVERY to MECÂNICA */}
              <path
                d="M 270 120 C 180 160 120 250 135 320"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="text-accent/60 animate-[dash_2s_linear_infinite]"
                markerEnd="url(#arrowhead)"
              />
              
              {/* Arrow 2: MECÂNICA to ESTÉTICA */}
              <path
                d="M 170 380 C 250 410 350 410 430 380"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="text-accent/60 animate-[dash_2s_linear_infinite]"
                markerEnd="url(#arrowhead)"
              />
              
              {/* Arrow 3: ESTÉTICA to DELIVERY */}
              <path
                d="M 465 320 C 480 250 420 160 330 120"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="text-accent/60 animate-[dash_2s_linear_infinite]"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          </div>

          {/* Central Car Image (Evoque) */}
          <div className="absolute w-[260px] sm:w-[350px] md:w-[420px] z-10 transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-accent/15 rounded-full blur-2xl animate-pulse pointer-events-none" />
            <img
              src={heroImg}
              alt="Land Rover Evoque"
              className="w-full h-auto object-contain drop-shadow-[0_15px_40px_rgba(0,168,89,0.35)] relative z-10"
            />
          </div>

          {/* Nodes (DELIVERY, MECÂNICA, ESTÉTICA) */}
          
          {/* Node 1: DELIVERY (Top Center) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 md:top-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-accent/20 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-20 h-20 sm:w-26 sm:h-26 rounded-full border-2 border-accent bg-background/90 backdrop-blur-md flex flex-col items-center justify-center p-3 shadow-[0_0_15px_rgba(0,168,89,0.15)]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-accent animate-bounce" />
                </div>
                <div className="absolute -bottom-3 bg-accent text-accent-foreground text-[9px] sm:text-xs font-black tracking-widest px-3 py-0.5 rounded-sm shadow-md whitespace-nowrap">
                  DELIVERY
                </div>
              </div>
            </div>
          </div>

          {/* Node 2: MECÂNICA (Bottom Left) */}
          <div className="absolute bottom-6 left-4 z-20 md:bottom-16 md:left-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-accent/20 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-20 h-20 sm:w-26 sm:h-26 rounded-full border-2 border-accent bg-background/90 backdrop-blur-md flex flex-col items-center justify-center p-3 shadow-[0_0_15px_rgba(0,168,89,0.15)]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Wrench className="h-7 w-7 text-accent animate-pulse" />
                </div>
                <div className="absolute -bottom-3 bg-accent text-accent-foreground text-[9px] sm:text-xs font-black tracking-widest px-3 py-0.5 rounded-sm shadow-md whitespace-nowrap">
                  MECÂNICA
                </div>
              </div>
            </div>
          </div>

          {/* Node 3: ESTÉTICA (Bottom Right) */}
          <div className="absolute bottom-6 right-4 z-20 md:bottom-16 md:right-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-accent/20 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-20 h-20 sm:w-26 sm:h-26 rounded-full border-2 border-accent bg-background/90 backdrop-blur-md flex flex-col items-center justify-center p-3 shadow-[0_0_15px_rgba(0,168,89,0.15)]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Droplets className="h-7 w-7 text-accent" />
                </div>
                <div className="absolute -bottom-3 bg-accent text-accent-foreground text-[9px] sm:text-xs font-black tracking-widest px-3 py-0.5 rounded-sm shadow-md whitespace-nowrap">
                  ESTÉTICA
                </div>
              </div>
            </div>
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
