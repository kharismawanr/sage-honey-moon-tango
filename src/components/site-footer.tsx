import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useContent } from "@/lib/content-store";

export function SiteFooter() {
  const { t } = useI18n();
  const { content } = useContent();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-widest text-accent uppercase">
            {content.profile.initials}
          </p>
          <p className="mt-2 text-sm text-fg">{content.profile.name}</p>
          <p className="mt-1 text-sm text-muted">{t(content.footer.mark)}</p>
        </div>
        <div className="max-w-md text-xs leading-relaxed text-faint">
          <p>{t(content.footer.editHint)}</p>
          <Link
            to="/studio"
            className="mt-3 inline-flex h-11 items-center text-sm text-accent hover:text-fg"
          >
            {t(content.nav.studio)}
          </Link>
        </div>
      </div>
    </footer>
  );
}
