import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Palette, TrendingUp, ShieldCheck, MessageCircle } from "lucide-react";

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
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});

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
    desc: "Secure hosting, bulletproof optimization, responsive design across all mobile devices, and ongoing technical support so you can focus entirely on running your business.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <a href="#" className="font-display text-2xl tracking-wide">
            Krish<span className="gold-text">WebStudio</span>
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero-radial relative pt-36 pb-28 md:pt-44 md:pb-36 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 text-xs tracking-widest uppercase text-primary/90 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Premium Web Studio
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight">
            We craft{" "}
            <span className="gold-text italic">high-converting</span> websites
            for growing businesses.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your digital footprint with bespoke design and seamless
            functionality engineered to scale your revenue.
          </p>
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="gold-glow group inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-sm md:text-base tracking-wide hover:bg-[var(--gold-soft)] transition-colors"
            >
              Let's Build Your Site
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* decorative line */}
        <div className="mt-24 max-w-7xl mx-auto flex items-center gap-4 opacity-60">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-10">
            The Reality of the <span className="gold-text">Modern Web</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              At <span className="text-foreground font-medium">KrishWebStudio</span>,
              we don't just write code or flip generic templates. We understand
              that your website isn't a digital business card—it's your{" "}
              <span className="text-foreground">24/7 digital storefront</span>{" "}
              and your most powerful sales asset.
            </p>
            <p>
              If your website isn't actively capturing leads, automating
              workflows, and building trust, it's costing you money. We bridge
              the gap between{" "}
              <span className="gold-text font-semibold">stunning aesthetics</span>{" "}
              and{" "}
              <span className="gold-text font-semibold">raw engineering</span> to
              turn traffic into paying clients.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0A1024]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              What We Deliver
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Premium Facilities, <span className="gold-text">Engineered to Scale</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-card border border-border rounded-2xl p-8 md:p-10 transition-all hover:border-primary/50 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 text-[6rem] font-display text-primary/10 leading-none pr-4 pt-2 select-none">
                    0{i + 1}
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl md:text-[1.6rem] mb-4 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
            Ready to build something{" "}
            <span className="gold-text italic">exceptional?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Let's turn your vision into a revenue engine. Reach out and we'll get
            started.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-primary/50 text-primary px-7 py-3.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-sm tracking-wide"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p className="font-display text-base text-muted-foreground">
            © KrishWebStudio. Crafting Premium Web Solutions.
          </p>
          <p className="text-xs text-muted-foreground/60">
            WhatsApp:{" "}
            <a
              href="https://wa.me/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              +00 000 000 0000
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
