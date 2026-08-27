import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/content-store";
import { useI18n } from "@/lib/i18n";
import { site, type SiteContent } from "@/content/site";

export const Route = createFileRoute("/studio")({ component: StudioPage });

function StudioPage() {
  const { t } = useI18n();
  const { content, setContent, reset, exportJson, importJson, isCustom } = useContent();
  const [draft, setDraft] = useState(() => JSON.stringify(content, null, 2));
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const profile = content.profile;

  function patchProfile(partial: Partial<typeof profile>) {
    const next: SiteContent = {
      ...content,
      profile: { ...content.profile, ...partial },
    };
    setContent(next);
    setDraft(JSON.stringify(next, null, 2));
    setNotice("Saved in this browser");
  }

  function saveJson() {
    try {
      importJson(draft);
      setError(null);
      setNotice("JSON applied");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }

  function download() {
    const blob = new Blob([exportJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-content.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-dvh bg-bg">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="font-mono text-[11px] tracking-widest text-accent uppercase">Studio</p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight text-fg">
          {t(content.studio.title)}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t(content.studio.lead)}</p>
        {isCustom ? (
          <p className="mt-3 font-mono text-xs text-pass">{t(content.studio.saved)}</p>
        ) : null}

        <section className="mt-8 space-y-4 rounded-[var(--radius-lg)] bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="text-sm font-medium text-fg">Profile</h2>
          <Field
            label="Name"
            value={profile.name}
            onChange={(v) =>
              patchProfile({
                name: v,
                initials: v
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0]?.toUpperCase() ?? "")
                  .join(""),
              })
            }
          />
          <Field
            label="Email"
            value={profile.email}
            onChange={(v) => patchProfile({ email: v })}
          />
          <Field
            label="Phone"
            value={profile.phone}
            onChange={(v) => patchProfile({ phone: v, phoneDisplay: v })}
          />
          <Field
            label="LinkedIn URL"
            value={profile.linkedin}
            onChange={(v) => patchProfile({ linkedin: v })}
          />
          <Field
            label="Company"
            value={profile.company}
            onChange={(v) => patchProfile({ company: v })}
          />
        </section>

        <section className="mt-6 rounded-[var(--radius-lg)] bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="text-sm font-medium text-fg">Full content (JSON)</h2>
          <p className="mt-1 text-xs text-muted">
            Edit projects, bilingual copy, skills. Keep the same shape.
          </p>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            spellCheck={false}
            className="mt-4 h-[420px] w-full resize-y rounded-[var(--radius-md)] bg-bg p-4 font-mono text-xs leading-relaxed text-fg shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
          {error ? <p className="mt-2 text-sm text-flag">{error}</p> : null}
          {notice ? <p className="mt-2 text-sm text-pass">{notice}</p> : null}
          <div className="mt-4 flex flex-wrap gap-2">
            <Button type="button" onClick={saveJson}>
              Apply JSON
            </Button>
            <Button type="button" variant="secondary" onClick={download}>
              {t(content.studio.export)}
            </Button>
            <Button type="button" variant="secondary" onClick={() => fileRef.current?.click()}>
              {t(content.studio.import)}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                reset();
                setDraft(JSON.stringify(site, null, 2));
                setNotice("Reset");
                setError(null);
              }}
            >
              {t(content.studio.reset)}
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const text = await file.text();
                try {
                  importJson(text);
                  setDraft(JSON.stringify(JSON.parse(text), null, 2));
                  setError(null);
                  setNotice("Imported");
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Import failed");
                }
              }}
            />
          </div>
        </section>

        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center text-sm text-accent hover:text-fg"
        >
          {t(content.studio.back)}
        </Link>
      </main>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs text-muted">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 h-11 w-full rounded-[var(--radius-sm)] bg-bg px-3 text-sm text-fg shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
    </label>
  );
}
