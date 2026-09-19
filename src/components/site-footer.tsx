import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useContent } from "@/lib/content-store";
import { PasscodeModal, isStudioUnlocked } from "@/components/passcode-modal";

export function SiteFooter() {
  const { t } = useI18n();
  const { content } = useContent();
  const navigate = useNavigate();
  const [isPasscodeOpen, setIsPasscodeOpen] = useState(false);

  function handleStudioClick(e: React.MouseEvent) {
    e.preventDefault();
    if (isStudioUnlocked()) {
      navigate({ to: "/studio" });
    } else {
      setIsPasscodeOpen(true);
    }
  }

  return (
    <>
      <footer className="border-t border-border bg-surface/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-widest text-accent uppercase">
              {content.profile.initials}
            </p>
            <p className="mt-2 text-sm font-semibold text-fg">{content.profile.name}</p>
            <p className="mt-1 text-sm text-muted">{t(content.footer.mark)}</p>
          </div>
          <div className="max-w-md text-xs leading-relaxed text-faint">
            <p>{t(content.footer.editHint)}</p>
            <a
              href="/studio"
              onClick={handleStudioClick}
              className="mt-3 inline-flex h-11 items-center gap-1.5 text-sm font-medium text-accent hover:text-blue-700 transition-colors"
            >
              <Lock className="size-3.5" />
              {t(content.nav.studio)} &rarr;
            </a>
          </div>
        </div>
      </footer>

      <PasscodeModal
        isOpen={isPasscodeOpen}
        onClose={() => setIsPasscodeOpen(false)}
        onSuccess={() => navigate({ to: "/studio" })}
      />
    </>
  );
}
