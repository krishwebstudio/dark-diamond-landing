import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo-cropped.jpg";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Palette,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Gauge,
  Target,
  Compass,
  PenTool,
  Rocket,
  Plus,
  Minus,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "KrishWebStudio — Premium Websites for Growing Businesses" },
      {
        name: "description",
        content:
          "KrishWebStudio crafts high-converting, bespoke websites engineered to scale revenue for growing businesses.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap",
      },

    ],
  }),
});

/* ---------- Reveal-on-scroll wrapper ---------- */
function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <As ref={ref as never} className={`reveal ${className}`}>
      {children}
    </As>
  );
}

/* ---------- Data ---------- */
const services = [
  {
    icon: Palette,
    title: "Bespoke Web Design",
    desc: "Tailor-made, pixel-perfect, premium visual experiences that uniquely reflect your brand identity and captivate your audience.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization & E-Commerce",
    desc: "Lightweight, lightning-fast architectures optimized for maximum lead generation, fluid user journeys, and seamless checkouts.",
  },
  {
    icon: ShieldCheck,
    title: "Managed Scaling & Performance",
    desc: "Secure hosting, bulletproof optimization, responsive design across all devices, and ongoing technical support so you can focus on running your business.",
  },
];

const metrics = [
  {
    icon: Sparkles,
    title: "100% Custom Architecture",
    desc: "No generic, slow templates — every line tailored to your brand.",
  },
  {
    icon: Gauge,
    title: "SEO & Speed Optimized",
    desc: "Built for instant loading and high Google rankings out of the box.",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    desc: "Designed strategically to turn visitors into paying leads.",
  },
];

const steps = [
  {
    icon: Compass,
    title: "Discovery & Strategy",
    desc: "We map out your business goals, audience, and user journeys before a single pixel is placed.",
  },
  {
    icon: PenTool,
    title: "Premium Design & Engineering",
    desc: "We build a bespoke, lightning-fast website unique to your brand and crafted to convert.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth Optimization",
    desc: "We deploy your site and continuously optimize it to start driving real, measurable sales.",
  },
];

const faqs = [
  {
    q: "How long does a premium website take to build?",
    a: "Typically 2 to 4 weeks, depending on the complexity and custom features required for your business.",
  },
  {
    q: "Will my website work well on mobile devices?",
    a: "Absolutely. Every site we engineer is 100% responsive and flawlessly optimized for smartphones, tablets, and desktops.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes, we offer managed performance packages to ensure your website remains secure, updated, and fast as your business expands.",
  },
];

/* ---------- FAQ accordion item ---------- */
function FaqItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border border-border rounded-2xl bg-card/50 backdrop-blur overflow-hidden transition-colors hover:border-primary/40">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 text-left px-6 md:px-8 py-6"
      >
        <span className="font-display text-lg md:text-xl text-foreground">{q}</span>
        <span className="shrink-0 w-9 h-9 rounded-full border border-primary/40 flex items-center justify-center text-primary transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 md:px-8 pb-6 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

const WHATSAPP_URL =
  "https://wa.me/918058816140?text=Hi%20KrishWebStudio,%20I%20am%20interested%20in%20a%20premium%20website%20for%20my%20business.";

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="max-w-7xl mx-auto pl-4 pr-6 md:pl-5 md:pr-10 py-4 flex items-center justify-between">
          <Link to="/" aria-label="KrishWebStudio — Home" className="flex items-center">
            <img
              src={logo}
              alt="KrishWebStudio logo"
              className="h-9 w-9 md:h-12 md:w-12 rounded-lg object-cover"
            />
          </Link>
          <div className="flex items-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <Link to="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>


      {/* HERO */}
      <section className="hero-radial relative pt-36 pb-28 md:pt-44 md:pb-36 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 text-[0.7rem] tracking-[0.25em] uppercase text-primary/90 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Premium Web Studio
          </div>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight">
            We craft <span className="gold-text italic">high-converting</span> websites for growing businesses.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your digital footprint with bespoke design and seamless functionality engineered to scale your revenue.
          </p>
          <div className="mt-12 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-magnetic gold-glow group inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-sm md:text-base tracking-wide"
            >
              Let's Build Your Site
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="mt-24 max-w-7xl mx-auto gold-divider opacity-60" />
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-primary mb-6">
              Our Philosophy
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight mb-10">
              The Reality of the <span className="gold-text">Modern Web</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                At <span className="text-foreground font-medium">KrishWebStudio</span>, we don't just write code or flip generic templates. We understand that your website isn't a digital business card—it's your{" "}
                <span className="text-foreground">24/7 digital storefront</span> and your most powerful sales asset.
              </p>
              <p>
                If your website isn't actively capturing leads, automating workflows, and building trust, it's costing you money. We bridge the gap between{" "}
                <span className="gold-text font-semibold">stunning aesthetics</span> and{" "}
                <span className="gold-text font-semibold">raw engineering</span> to turn traffic into paying clients.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* METRICS / WHY CHOOSE US */}
      <section className="py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-primary mb-4">
              Why Choose Us
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl">
              Built on <span className="gold-text">non-negotiable</span> standards
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={i} delay={i * 120}>
                  <div className="lux-card h-full bg-card/60 backdrop-blur border border-border rounded-2xl p-7 flex items-start gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl border border-primary/40 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-semibold mb-2">
                        {m.title}
                      </h3>
                      <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0A1024]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-20">
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-primary mb-4">
              What We Deliver
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight">
              Premium Facilities, <span className="gold-text">Engineered to Scale</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 140}>
                  <div className="lux-card group relative h-full bg-card border border-border rounded-2xl p-8 md:p-10">
                    <div className="absolute top-0 right-0 text-[6rem] font-display font-bold text-primary/10 leading-none pr-5 pt-3 select-none">
                      0{i + 1}
                    </div>
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-2xl md:text-[1.6rem] mb-4 leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-20">
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-primary mb-4">
              How We Work
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight">
              A simple, <span className="gold-text italic">three-step</span> process
            </h2>
          </Reveal>

          <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
            {/* horizontal connector */}
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 150} className="relative">
                  <div className="text-center px-2">
                    <div className="relative mx-auto w-14 h-14 rounded-full bg-background border border-primary/50 flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl md:text-2xl mb-3">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-[0.95rem] leading-relaxed max-w-sm mx-auto">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0A1024]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-primary mb-4">
              FAQ
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight">
              Questions, <span className="gold-text">answered.</span>
            </h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 100}>
                <FaqItem
                  q={f.q}
                  a={f.a}
                  open={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-10">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight mb-6">
            Ready to build something{" "}
            <span className="gold-text italic">exceptional?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Let's turn your vision into a revenue engine. Reach out and we'll get started.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-magnetic inline-flex items-center gap-3 border border-primary/50 text-primary px-7 py-3.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-sm tracking-wide"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with us on WhatsApp
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-[var(--gold-soft)] transition-colors text-sm tracking-wide"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with us on WhatsApp
          </a>
          <p className="font-display text-sm text-muted-foreground">
            © KrishWebStudio. Crafting Premium Web Solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}
