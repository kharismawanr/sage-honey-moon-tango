import { useI18n } from "@/lib/i18n";
import { useContent } from "@/lib/content-store";

export function ScanViewport() {
  const { t } = useI18n();
  const { content } = useContent();

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-surface p-3 shadow-[var(--shadow-border)]">
      <div className="relative min-h-[340px] overflow-hidden rounded-[var(--radius-lg)] border border-border/70 bg-bg scan-grid sm:min-h-[400px]">
        {/* Top Header Strip */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-border/60 bg-surface/75 px-4 py-3 backdrop-blur-xs">
          <span className="font-mono text-[11px] font-medium tracking-wider text-muted uppercase">
            {t(content.hero.scanLabel)}
          </span>
          <span className="flex items-center gap-2 font-mono text-[11px] font-medium text-pass">
            <span className="size-2 animate-pulse rounded-full bg-pass" />
            REC
          </span>
        </div>

        {/* Center ID Card with Original Abstract Silhouette */}
        <div className="absolute left-1/2 top-[46%] z-10 w-[min(78%,280px)] -translate-x-1/2 -translate-y-1/2">
          <div className="relative aspect-[3/4] rounded-[var(--radius-md)] border border-border bg-surface-2 shadow-[var(--shadow-border)]">
            <div className="absolute left-3 top-3 right-3 z-10 flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold tracking-widest text-faint">
                eKYC
              </span>
              <span className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                ID-04
              </span>
            </div>

            {/* Original Abstract Face Silhouette */}
            <div className="absolute left-1/2 top-[38%] h-[42%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-surface border border-border/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              <div className="absolute left-1/2 top-[38%] size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border" />
              <div className="absolute bottom-3 left-1/2 h-8 w-16 -translate-x-1/2 rounded-t-full bg-border" />
            </div>

            <div className="absolute inset-x-4 bottom-5 space-y-2">
              <div className="h-1.5 w-3/4 rounded-full bg-border" />
              <div className="h-1.5 w-1/2 rounded-full bg-border" />
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                <div className="h-full w-2/3 rounded-full bg-accent/80" />
              </div>
            </div>
            <Reticule />
          </div>
        </div>

        {/* Laser Scan Line */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div className="animate-scan absolute inset-x-8 h-[2px] bg-accent/75 shadow-[0_0_16px_var(--color-accent)]" />
        </div>

        {/* Bottom Verdict Badges */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {content.verdicts.map((v) => (
              <div
                key={v.code}
                className="rounded-[var(--radius-sm)] border border-border/70 bg-bg/85 px-2.5 py-2 shadow-[var(--shadow-border)] backdrop-blur-sm"
              >
                <div
                  className={
                    "font-mono text-[10px] font-semibold tracking-widest " +
                    (v.code === "PASS"
                      ? "text-pass"
                      : v.code === "FLAG"
                        ? "text-flag"
                        : v.code === "RETRY"
                          ? "text-review"
                          : "text-accent")
                  }
                >
                  {v.code}
                </div>
                <div className="mt-0.5 truncate text-[11px] text-muted">{t(v.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Reticule() {
  return (
    <svg
      className="pointer-events-none absolute inset-2 text-accent/60"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path d="M8 22 V8 H22" stroke="currentColor" strokeWidth="1.4" />
      <path d="M78 8 H92 V22" stroke="currentColor" strokeWidth="1.4" />
      <path d="M92 78 V92 H78" stroke="currentColor" strokeWidth="1.4" />
      <path d="M22 92 H8 V78" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
