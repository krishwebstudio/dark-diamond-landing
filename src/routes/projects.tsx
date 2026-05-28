import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import projects from "@/data/projects.json";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — KrishWebStudio" },
      {
        name: "description",
        content:
          "A curated selection of premium websites engineered by KrishWebStudio for ambitious brands.",
      },
      { property: "og:title", content: "Projects — KrishWebStudio" },
      {
        property: "og:description",
        content: "Premium websites engineered by KrishWebStudio.",
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

const WHATSAPP_URL =
  "https://wa.me/918058816140?text=Hi%20KrishWebStudio,%20I%20am%20interested%20in%20a%20premium%20website%20for%20my%20business.";

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl md:text-2xl tracking-tight">
            Krish<span className="gold-text">WebStudio</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
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

      <section className="hero-radial pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center fade-up">
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-primary mb-5">
            Selected Work
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Premium websites, <span className="gold-text italic">engineered</span> to perform.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated look at the brands we've crafted bespoke digital experiences for.
          </p>
        </div>
      </section>

      <section className="pb-28 md:pb-36 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p) => (
            <article
              key={p.id}
              className="lux-card group bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              </div>
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[0.65rem] uppercase tracking-[0.2em] text-primary/90 border border-primary/30 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-3 leading-tight">
                  {p.title}
                </h2>
                <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-[var(--gold-soft)] transition-colors text-sm font-medium tracking-wide self-start"
                >
                  View Project <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

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
