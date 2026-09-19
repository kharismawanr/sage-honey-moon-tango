import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { Lock, Unlock, ShieldCheck, ArrowLeft, KeyRound, Eye, EyeOff, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/content-store";
import { useI18n } from "@/lib/i18n";
import { site, type SiteContent } from "@/content/site";
import { isStudioUnlocked, lockStudio, CORRECT_PIN, AUTH_STORAGE_KEY } from "@/components/passcode-modal";

export const Route = createFileRoute("/studio")({ component: StudioPage });

function StudioPage() {
  const { t } = useI18n();
  const { content, setContent, reset, exportJson, importJson, isCustom } = useContent();
  const [draft, setDraft] = useState(() => JSON.stringify(content, null, 2));
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const inputPinRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Authentication check
  const [isAuth, setIsAuth] = useState(() => isStudioUnlocked());
  const [pinInput, setPinInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const unlocked = isStudioUnlocked();
    setIsAuth(unlocked);
    if (!unlocked) {
      setTimeout(() => inputPinRef.current?.focus(), 100);
    }
  }, []);

  function handleUnlock(enteredPin: string) {
    const cleaned = enteredPin.trim();
    if (cleaned === CORRECT_PIN) {
      setIsSuccess(true);
      setPinError(false);
      sessionStorage.setItem(AUTH_STORAGE_KEY, CORRECT_PIN);
      setTimeout(() => {
        setIsAuth(true);
      }, 400);
    } else {
      setPinError(true);
    }
  }

  function handleLock() {
    lockStudio();
    setIsAuth(false);
    navigate({ to: "/" });
  }

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

  // If not authenticated, display full PIN Lock Screen with real input + keypad
  if (!isAuth) {
    return (
      <div className="min-h-dvh bg-bg flex flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-[var(--radius-xl)] border border-slate-200/90 bg-surface p-7 shadow-xl border border-border text-center">
            <div
              className={`mx-auto flex size-16 items-center justify-center rounded-2xl transition-all duration-300 ${
                isSuccess
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                  : pinError
                    ? "bg-red-50 text-red-500 border border-red-200"
                    : "bg-blue-50 text-accent border border-blue-100 shadow-sm"
              }`}
            >
              {isSuccess ? <ShieldCheck className="size-8" /> : <KeyRound className="size-8" />}
            </div>

            <h1 className="mt-4 text-xl font-bold tracking-tight text-fg">
              {isSuccess ? "Akses Diterima" : "Verifikasi Passcode"}
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              {isSuccess
                ? "Membuka Content Studio..."
                : "Halaman dilindungi. Masukkan 6-digit passcode untuk mengakses Content Studio."}
            </p>

            {/* Input Form with Eye Toggle */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUnlock(pinInput);
              }}
              className="mt-6 space-y-3"
            >
              <div className="relative">
                <input
                  ref={inputPinRef}
                  type={showPassword ? "text" : "password"}
                  value={pinInput}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPinInput(val);
                    setPinError(false);
                    if (val.trim() === CORRECT_PIN) {
                      handleUnlock(val);
                    }
                  }}
                  autoFocus
                  placeholder="Masukkan passcode..."
                  className={`h-12 w-full rounded-xl border px-4 pr-12 text-center font-mono text-lg tracking-wider text-fg transition-all focus:outline-none ${
                    pinError
                      ? "border-red-500 bg-red-50/50 animate-shake focus:ring-2 focus:ring-red-300"
                      : isSuccess
                        ? "border-emerald-500 bg-emerald-50/40 text-emerald-700"
                        : "border-border bg-surface-2/60 focus:border-accent focus:bg-white focus:ring-2 focus:ring-blue-100"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
                  title={showPassword ? "Sembunyikan" : "Tampilkan"}
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>

              {pinError && (
                <p className="text-center text-xs font-medium text-red-500 animate-fade-up">
                  Passcode salah! Silakan coba lagi.
                </p>
              )}

              <button
                type="submit"
                disabled={isSuccess}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent font-medium text-white shadow-sm transition-all hover:bg-blue-700 active:scale-95 disabled:opacity-50"
              >
                Buka Studio
                <ArrowRight className="size-4" />
              </button>
            </form>

            {/* Touch Keypad */}
            <div className="mt-5 pt-4 border-t border-border">
              <p className="text-center text-[10px] font-mono text-faint uppercase tracking-wider mb-2">
                Atau Tekan Angka
              </p>
              <div className="grid grid-cols-3 gap-2">
                {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
                  <button
                    key={digit}
                    type="button"
                    onClick={() => {
                      const next = pinInput + digit;
                      setPinInput(next);
                      setPinError(false);
                      if (next.trim() === CORRECT_PIN) handleUnlock(next);
                    }}
                    className="flex h-10 items-center justify-center rounded-lg border border-border bg-surface-2/70 font-mono text-base font-semibold text-fg shadow-2xs transition-all active:scale-95 hover:bg-blue-50 hover:border-blue-200 hover:text-accent"
                  >
                    {digit}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setPinInput("");
                    setPinError(false);
                  }}
                  className="flex h-10 items-center justify-center rounded-lg font-mono text-xs font-medium text-muted hover:bg-slate-100 hover:text-fg"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const next = pinInput + "0";
                    setPinInput(next);
                    setPinError(false);
                    if (next.trim() === CORRECT_PIN) handleUnlock(next);
                  }}
                  className="flex h-10 items-center justify-center rounded-lg border border-border bg-surface-2/70 font-mono text-base font-semibold text-fg shadow-2xs transition-all active:scale-95 hover:bg-blue-50 hover:border-blue-200 hover:text-accent"
                >
                  0
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (pinInput.length > 0) {
                      setPinInput(pinInput.slice(0, -1));
                      setPinError(false);
                    }
                  }}
                  className="flex h-10 items-center justify-center rounded-lg font-mono text-xs text-muted hover:bg-slate-100 hover:text-fg"
                >
                  Del
                </button>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-border">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] font-semibold tracking-widest text-accent uppercase">Studio</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-fg">
              {t(content.studio.title)}
            </h1>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleLock}
            className="flex items-center gap-1.5 text-xs text-red-600 hover:bg-red-50 hover:border-red-200"
          >
            <Lock className="size-3.5" />
            Kunci Studio
          </Button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted">{t(content.studio.lead)}</p>
        {isCustom ? (
          <p className="mt-3 font-mono text-xs text-pass">{t(content.studio.saved)}</p>
        ) : null}

        <section className="mt-8 space-y-4 rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="text-sm font-semibold text-fg">Profile</h2>
          <Field
            label="Name"
            value={profile.name}
            onChange={(v) =>
              patchProfile({
                name: v,
                initials: v
                  .split(" ")
                  .map((w) => w[0])
                  .filter(Boolean)
                  .slice(0, 2)
                  .join("")
                  .toUpperCase(),
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

        <section className="mt-8 space-y-4 rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="text-sm font-semibold text-fg">Full content (JSON)</h2>
          <p className="text-xs text-muted">
            Edit projects, bilingual copy, skills. Keep the same shape.
          </p>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            spellCheck={false}
            className="mt-4 h-[420px] w-full resize-y rounded-[var(--radius-md)] border border-border bg-surface p-4 font-mono text-xs leading-relaxed text-fg shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
          {error ? <p className="mt-2 text-sm text-flag">{error}</p> : null}
          {notice ? <p className="mt-2 text-sm text-pass">{notice}</p> : null}

          <div className="flex flex-wrap gap-2 pt-2">
            <Button onClick={saveJson}>Apply JSON</Button>
            <Button variant="secondary" onClick={download}>
              {t(content.studio.export)}
            </Button>
            <Button
              variant="secondary"
              onClick={() => fileRef.current?.click()}
            >
              {t(content.studio.import)}
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                reset();
                setDraft(JSON.stringify(site, null, 2));
                setNotice("Reset to defaults");
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
                const f = e.target.files?.[0];
                if (!f) return;
                const text = await f.text();
                try {
                  importJson(text);
                  setDraft(text);
                  setError(null);
                  setNotice("Imported");
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Invalid JSON");
                }
              }}
            />
          </div>
        </section>

        <p className="mt-6 text-xs text-muted">
          <Link to="/" className="text-accent hover:underline">
            &larr; Back to site
          </Link>
        </p>
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
      <span className="text-xs font-medium text-muted">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-fg shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
    </label>
  );
}
