import { useEffect, useState } from "react";
import { Calendar, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, WHATSAPP_URL } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[74px] w-full max-w-[1320px] items-center justify-between px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-display text-[13px] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary-glow transition-all duration-400 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            className="btn-primary-glow hidden items-center gap-2 rounded-sm px-5 py-3 font-display text-[13px] font-medium sm:inline-flex"
          >
            Agende seu horário
            <Calendar className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost-line inline-flex h-10 w-10 items-center justify-center rounded-sm lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex w-full max-w-[1320px] flex-col px-6 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-display text-sm text-muted-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              onClick={() => setOpen(false)}
              className="btn-primary-glow mt-4 inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 font-display text-[13px]"
            >
              Agende seu horário
              <Calendar className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
