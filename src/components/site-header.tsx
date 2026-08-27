import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useContent } from "@/lib/content-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();
  const { content } = useContent();

  const links = [
    { href: "/#work", label: content.nav.work },
    { href: "/#ops", label: content.nav.ops },
    { href: "/#lab", label: content.nav.lab },
    { href: "/#about", label: content.nav.about },
    { href: "/#contact", label: content.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <a href="#top" className="flex min-h-11 items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-[var(--radius-xs)] bg-surface-2 font-mono text-[11px] tracking-wider text-accent shadow-[var(--shadow-border)]">
            {content.profile.initials}
          </span>
          <span className="hidden text-sm text-fg sm:block">{content.profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex h-11 items-center px-3 text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              {t(l.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div
            className="flex rounded-[var(--radius-sm)] p-0.5 shadow-[var(--shadow-border)]"
            role="group"
            aria-label="Language"
          >
            {(["en", "id"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "h-9 min-w-11 rounded-[6px] px-2.5 font-mono text-[11px] tracking-wider uppercase transition-colors duration-150",
                  lang === code ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
                )}
              >
                {code}
              </button>
            ))}
          </div>
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link to="/studio">{t(content.nav.studio)}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
