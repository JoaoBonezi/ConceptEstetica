import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  Droplets,
  Gauge,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Wrench,
} from "lucide-react";

import heroCar from "@/assets/hero-car.jpg";
import aboutDetailer from "@/assets/about-detailer.jpg";
import ctaCar from "@/assets/cta-car.jpg";
import { Navbar } from "@/components/site/Navbar";
import { Logo } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import {
  comparisons,
  contacts,
  differentials,
  gallery,
  navLinks,
  process,
  services,
  WHATSAPP_URL,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Concept Estética Automotiva | Cuidado, precisão e alto padrão" },
      {
        name: "description",
        content:
          "Detalhamento, polimento, higienização e proteção automotiva com precisão técnica e acabamento de alto padrão em Caxias do Sul/RS.",
      },
      {
        property: "og:title",
        content: "Concept Estética Automotiva | Cuidado, precisão e alto padrão",
      },
      {
        property: "og:description",
        content:
          "Seu carro merece mais do que limpeza. Detalhamento, proteção e conservação automotiva de alto padrão em Caxias do Sul/RS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const heroPills = [
  { icon: Sparkles, label: "Detalhamento" },
  { icon: Gauge, label: "Polimento" },
  { icon: ShieldCheck, label: "Proteção" },
  { icon: Droplets, label: "Conservação" },
];

const aboutTraits = [
  { icon: Sparkles, label: "Detalhamento" },
  { icon: Droplets, label: "Conservação" },
  { icon: Gauge, label: "Aparência" },
  { icon: ShieldCheck, label: "Proteção" },
  { icon: SprayCan, label: "Higienização" },
  { icon: Wrench, label: "Valorização" },
];

const differentialIcons = [Sparkles, Gauge, ShieldCheck, Droplets, Wrench];
const processIcons = [Calendar, Gauge, SprayCan, ShieldCheck];
const contactIcons = [MessageCircle, Phone, Instagram, MapPin, Clock];

function SectionLabel({ children }: { children: string }) {
  return <span className="eyebrow">{children}</span>;
}

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[92vh] pt-[74px]">
        <div className="absolute inset-0">
          <img
            src={heroCar}
            alt="Carro preto em estúdio de estética automotiva com iluminação azul"
            width={1920}
            height={1200}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(92vh-74px)] w-full max-w-[1320px] flex-col justify-center px-6 py-20 lg:px-10">
          <Reveal>
            <SectionLabel>Estética Automotiva</SectionLabel>
            <h1 className="mt-6 max-w-[16ch] text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02]">
              Seu carro merece mais do que limpeza.{" "}
              <span className="text-primary-glow">Merece cuidado.</span>
            </h1>
            <p className="mt-7 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground lg:text-base">
              Detalhamento, conservação e proteção automotiva com precisão técnica e
              acabamento de alto padrão — para quem trata o próprio veículo como ele
              merece.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                className="btn-primary-glow inline-flex items-center gap-2.5 rounded-sm px-7 py-4 font-display text-sm font-medium"
              >
                Agende seu horário
                <Calendar className="h-4 w-4" />
              </a>
              <a
                href="#servicos"
                className="btn-ghost-line inline-flex items-center gap-2.5 rounded-sm px-7 py-4 font-display text-sm font-medium"
              >
                Conheça nossos serviços
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 lg:hidden">
              {heroPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 font-display text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
                >
                  <p.icon className="h-3.5 w-3.5 text-primary-glow" />
                  {p.label}
                </span>
              ))}
            </div>
          </Reveal>

          <a
            href="#sobre"
            className="mt-16 inline-flex w-fit items-center gap-3 font-display text-[10px] tracking-[0.34em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-input">
              <ChevronDown className="h-3.5 w-3.5" />
            </span>
            Scroll
          </a>
        </div>

        <div className="absolute top-1/2 right-10 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
          {heroPills.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-3 font-display text-[11px] tracking-[0.22em] text-muted-foreground uppercase"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-background/50 backdrop-blur">
                <p.icon className="h-3.5 w-3.5 text-primary-glow" />
              </span>
              {p.label}
            </span>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-24 lg:py-32">
        <div className="hairline absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
          <Reveal>
            <SectionLabel>Sobre a Concept</SectionLabel>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12]">
              Estética automotiva é muito mais do que uma simples lavagem.
            </h2>
            <p className="mt-6 max-w-[58ch] leading-relaxed text-muted-foreground">
              É um cuidado completo que envolve detalhamento, conservação, proteção e
              valorização do seu veículo. Trabalhamos com técnicas e produtos de alta
              qualidade para preservar a pintura, o interior e cada detalhe do seu
              carro, proporcionando um resultado que impressiona e dura.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
              {aboutTraits.map((t) => (
                <div key={t.label}>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-surface">
                    <t.icon className="h-4 w-4 text-primary-glow" />
                  </span>
                  <p className="mt-3 font-display text-[13px]">{t.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="panel relative overflow-hidden rounded-md">
              <img
                src={aboutDetailer}
                alt="Profissional realizando polimento em carro escuro"
                loading="lazy"
                width={1200}
                height={1408}
                className="h-[420px] w-full object-cover lg:h-[560px]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="relative py-24 lg:py-32">
        <div className="hairline absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <SectionLabel>Nossos Serviços</SectionLabel>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <h2 className="max-w-[24ch] text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12]">
                Tudo o que seu carro precisa, em um só lugar.
              </h2>
              <p className="max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground">
                Um catálogo completo de cuidados automotivos, do dia a dia à correção
                técnica de pintura — escolha o serviço ideal e agende seu horário.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 90}>
                <article className="panel group flex h-full flex-col overflow-hidden rounded-md transition-all duration-500 hover:-translate-y-1.5 hover:border-border-strong">
                  <div className="relative overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={960}
                      height={688}
                      className="h-44 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-display text-[10px] tracking-[0.3em] text-primary-glow">
                      {s.n} / 12
                    </span>
                    <h3 className="mt-3 text-[17px] leading-snug">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      className="btn-ghost-line mt-6 inline-flex w-fit items-center gap-2 rounded-sm px-4 py-2.5 font-display text-[12px]"
                    >
                      Agendar serviço
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="relative bg-surface/40 py-24 lg:py-32">
        <div className="hairline absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <SectionLabel>Diferenciais</SectionLabel>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
              <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12]">
                Cuidado em cada detalhe.
              </h2>
              <p className="max-w-[48ch] text-[15px] leading-relaxed text-muted-foreground">
                O que nos diferencia é a combinação entre técnica, experiência e um
                olhar atento para cada detalhe. Cinco princípios que guiam todo serviço
                realizado.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {differentials.map((d, i) => {
              const Icon = differentialIcons[i] ?? Sparkles;
              return (
                <Reveal key={d.n} delay={i * 80}>
                  <div className="border-t border-border pt-6">
                    <Icon className="h-5 w-5 text-primary-glow" />
                    <h3 className="mt-5 text-base">{d.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                      {d.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="relative py-24 lg:py-32">
        <div className="hairline absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <SectionLabel>Antes e Depois</SectionLabel>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
              <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12]">
                Veja a diferença.
              </h2>
              <p className="max-w-[48ch] text-[15px] leading-relaxed text-muted-foreground">
                Arraste para comparar o antes e o depois dos nossos processos de
                correção e proteção.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {comparisons.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <BeforeAfter label={c.label} before={c.before} after={c.after} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="relative bg-surface/40 py-24 lg:py-32">
        <div className="hairline absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <SectionLabel>Galeria</SectionLabel>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
              <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12]">
                Nosso trabalho, em imagens.
              </h2>
              <p className="max-w-[48ch] text-[15px] leading-relaxed text-muted-foreground">
                Um recorte do que acontece por trás de cada serviço — da lavagem ao
                polimento final.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.label} delay={(i % 3) * 90}>
                <figure className="panel group relative overflow-hidden rounded-md">
                  <img
                    src={g.image}
                    alt={g.label}
                    loading="lazy"
                    width={960}
                    height={688}
                    className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/10 to-transparent" />
                  <figcaption className="absolute bottom-4 left-5 font-display text-[12px] tracking-[0.18em] uppercase">
                    {g.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="relative py-24 lg:py-32">
        <div className="hairline absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto grid w-full max-w-[1320px] gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <Reveal>
            <SectionLabel>Como funciona</SectionLabel>
            <h2 className="mt-6 max-w-[16ch] text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12]">
              Um processo simples e eficiente.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-muted-foreground">
              Do agendamento à entrega, em quatro etapas transparentes.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="panel h-full rounded-md p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-surface-2">
                      {(() => {
                        const Icon = processIcons[i] ?? Calendar;
                        return <Icon className="h-4 w-4 text-primary-glow" />;
                      })()}
                    </span>
                    <span className="font-display text-[11px] tracking-[0.28em] text-primary-glow">
                      {p.n}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-10">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <div className="panel relative overflow-hidden rounded-md">
              <img
                src={ctaCar}
                alt="Carro escuro em estúdio com iluminação azul"
                loading="lazy"
                width={1600}
                height={704}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/20" />
              <div className="relative flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-14">
                <div>
                  <SectionLabel>Agende seu horário</SectionLabel>
                  <h2 className="mt-5 max-w-[20ch] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.14]">
                    Seu carro merece esse cuidado.
                  </h2>
                  <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-muted-foreground">
                    Agende seu serviço e descubra uma nova experiência em estética
                    automotiva.
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  className="btn-primary-glow inline-flex w-fit items-center gap-2.5 rounded-sm px-7 py-4 font-display text-sm font-medium"
                >
                  Agendar meu horário
                  <Calendar className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative py-24 lg:py-32">
        <div className="hairline absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto grid w-full max-w-[1320px] gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <Reveal>
            <SectionLabel>Contato</SectionLabel>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12]">
              Fale com a gente.
            </h2>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-muted-foreground">
              Estamos prontos para atender você e trazer o melhor cuidado para o seu
              veículo. Escolha o canal que preferir.
            </p>
            <a
              href={WHATSAPP_URL}
              className="btn-primary-glow mt-8 inline-flex items-center gap-2.5 rounded-sm px-6 py-3.5 font-display text-[13px]"
            >
              Falar no WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((c, i) => {
              const Icon = contactIcons[i] ?? MessageCircle;
              return (
                <div key={c.label} className="bg-surface/60 p-6">
                  <Icon className="h-4 w-4 text-primary-glow" />
                  <p className="mt-4 font-display text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
                    {c.label}
                  </p>
                  <p className="mt-2 text-sm">{c.value}</p>
                </div>
              );
            })}
            <div className="bg-surface/60 p-6">
              <MapPin className="h-4 w-4 text-primary-glow" />
              <p className="mt-4 font-display text-[10px] tracking-[0.26em] text-muted-foreground uppercase">
                Localização
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                Mapa e endereço exato serão adicionados assim que confirmados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative pt-16 pb-10">
        <div className="hairline absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Logo />
              <p className="mt-6 max-w-[42ch] text-[13px] leading-relaxed text-muted-foreground">
                Estética, detalhamento e proteção automotiva com precisão técnica e
                cuidado de alto padrão.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-3 lg:justify-end">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-display text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hairline mt-12 h-px" />
          <div className="mt-6 flex flex-col gap-2 text-[11px] tracking-wide text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Concept Estética Automotiva. Todos os direitos reservados.</span>
            <span>Cuidado, precisão e alto padrão.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
