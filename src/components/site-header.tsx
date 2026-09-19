import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Briefcase,
  Cpu,
  FlaskConical,
  User,
  Mail,
  Lock,
  Maximize2,
  Minimize2,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useContent } from "@/lib/content-store";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PasscodeModal, isStudioUnlocked } from "@/components/passcode-modal";

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();
  const { content } = useContent();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPasscodeOpen, setIsPasscodeOpen] = useState(false);

  const links = [
    { href: "/#work", label: content.nav.work, icon: Briefcase },
    { href: "/#ops", label: content.nav.ops, icon: Cpu },
    { href: "/#lab", label: content.nav.lab, icon: FlaskConical },
    { href: "/#about", label: content.nav.about, icon: User },
    { href: "/#contact", label: content.nav.contact, icon: Mail },
  ];

  function handleStudioClick(e?: React.MouseEvent) {
    if (e) e.preventDefault();
    if (isStudioUnlocked()) {
      setIsDrawerOpen(false);
      navigate({ to: "/studio" });
    } else {
      setIsPasscodeOpen(true);
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
          {/* LEFT: Hamburger Button + Profile Branding */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="group flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-fg shadow-xs transition-all duration-200 hover:border-accent hover:bg-surface-2 hover:text-accent active:scale-95"
              aria-label="Open sidebar menu"
              title="Menu Navigasi"
            >
              <Menu className="size-5 transition-transform duration-200 group-hover:scale-110" />
            </button>

            <a href="#top" className="group flex min-h-11 items-center gap-2.5">
              <div className="relative size-8 overflow-hidden rounded-full border-2 border-accent shadow-sm shadow-accent/25 transition-transform group-hover:scale-105">
                <img
                  src="/profile.jpeg"
                  alt={content.profile.name}
                  className="size-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                  {content.profile.name}
                </span>
                <span className="hidden font-mono text-[10px] text-muted sm:inline-block">
                  {content.profile.initials} • Data Operations
                </span>
              </div>
            </a>
          </div>

          {/* CENTER: Desktop Nav Links */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex h-11 items-center px-3 text-sm font-medium text-muted transition-colors duration-150 hover:text-accent"
              >
                {t(l.label)}
              </a>
            ))}
          </nav>

          {/* RIGHT: Theme Toggle, Language Switcher & Protected Studio Button */}
          <div className="flex items-center gap-2">
            {/* Night / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-fg shadow-xs transition-all duration-200 hover:border-accent hover:text-accent hover:bg-surface-2 active:scale-95"
              title={theme === "dark" ? "Mode Terang (Putih & Biru)" : "Mode Malam (Night Mode)"}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="size-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="size-4 text-accent transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Language Switcher */}
            <div
              className="flex rounded-[var(--radius-sm)] bg-surface-2 p-0.5 shadow-[var(--shadow-border)] border border-border"
              role="group"
              aria-label="Language"
            >
              {(["en", "id"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={cn(
                    "h-8 min-w-10 rounded-[6px] px-2.5 font-mono text-[11px] font-medium tracking-wider uppercase transition-all duration-150",
                    lang === code
                      ? "bg-accent font-semibold text-accent-fg shadow-sm"
                      : "text-muted hover:text-fg",
                  )}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* Edit Content Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleStudioClick}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent"
            >
              <Lock className="size-3.5 text-accent" />
              {t(content.nav.studio)}
            </Button>
          </div>
        </div>
      </header>

      {/* LEFT DRAWER SIDEBAR WITH MINIMIZE & MAXIMIZE */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
            onClick={() => setIsDrawerOpen(false)}
          />

          <aside
            className={cn(
              "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-surface/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-in-out animate-slide-left",
              isMinimized ? "w-20" : "w-80 max-w-[85vw]",
            )}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-border p-4">
              {!isMinimized ? (
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-accent shadow-sm">
                    <img
                      src="/profile.jpeg"
                      alt={content.profile.name}
                      className="size-full object-cover object-top"
                    />
                    <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-surface" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-sm font-semibold text-fg truncate">{content.profile.name}</h2>
                    <p className="text-xs text-muted truncate">{content.profile.company}</p>
                  </div>
                </div>
              ) : (
                <div className="mx-auto">
                  <div className="relative size-10 overflow-hidden rounded-full border-2 border-accent shadow-sm">
                    <img
                      src="/profile.jpeg"
                      alt={content.profile.name}
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="rounded-lg p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-accent"
                  title={isMinimized ? "Maximize Sidebar" : "Minimize Sidebar"}
                  aria-label={isMinimized ? "Maximize Sidebar" : "Minimize Sidebar"}
                >
                  {isMinimized ? <Maximize2 className="size-4" /> : <Minimize2 className="size-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="rounded-lg p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                  title="Close"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-3 space-y-1" aria-label="Sidebar Navigation">
              {!isMinimized && (
                <p className="px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-faint">
                  Menu Utama
                </p>
              )}
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className={cn(
                      "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-all duration-150 hover:bg-surface-2 hover:text-accent hover:translate-x-1",
                      isMinimized && "justify-center px-0 hover:translate-x-0",
                    )}
                    title={isMinimized ? t(l.label) : undefined}
                  >
                    <Icon className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
                    {!isMinimized && (
                      <span className="flex-1 transition-colors group-hover:text-accent font-medium">
                        {t(l.label)}
                      </span>
                    )}
                    {!isMinimized && (
                      <ChevronRight className="size-4 text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                    )}
                  </a>
                );
              })}

              <div className="pt-3 mt-3 border-t border-border">
                {!isMinimized && (
                  <p className="px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-faint">
                    Admin Tools
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleStudioClick}
                  className={cn(
                    "group w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-all duration-150 hover:bg-surface-2 hover:text-accent hover:translate-x-1 text-left",
                    isMinimized && "justify-center px-0 hover:translate-x-0",
                  )}
                  title={isMinimized ? `${t(content.nav.studio)} (Protected)` : undefined}
                >
                  <Lock className="size-5 shrink-0 text-accent transition-transform group-hover:scale-110" />
                  {!isMinimized && (
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-accent leading-none">{t(content.nav.studio)}</p>
                      <p className="mt-1 text-[11px] text-muted leading-none">Password Protected</p>
                    </div>
                  )}
                  {!isMinimized && (
                    <span className="rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] font-medium text-accent">
                      PIN
                    </span>
                  )}
                </button>
              </div>
            </nav>

            {/* Bottom Panel with Theme Toggle & Language */}
            <div className="border-t border-border p-3 bg-surface-2/40">
              {!isMinimized ? (
                <div className="space-y-3">
                  {/* Theme Mode Toggle in Drawer */}
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-medium text-muted">Mode Tampilan</span>
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-fg shadow-2xs hover:border-accent hover:text-accent"
                    >
                      {theme === "dark" ? (
                        <>
                          <Moon className="size-3.5 text-accent" />
                          Night Mode
                        </>
                      ) : (
                        <>
                          <Sun className="size-3.5 text-amber-500" />
                          Light Mode
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setLang("en")}
                      className={cn(
                        "flex-1 h-8 rounded-lg font-mono text-xs font-medium transition-all",
                        lang === "en" ? "bg-accent text-accent-fg shadow-xs" : "bg-surface text-muted hover:text-fg border border-border",
                      )}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang("id")}
                      className={cn(
                        "flex-1 h-8 rounded-lg font-mono text-xs font-medium transition-all",
                        lang === "id" ? "bg-accent text-accent-fg shadow-xs" : "bg-surface text-muted hover:text-fg border border-border",
                      )}
                    >
                      Indonesia
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="p-1 text-muted hover:text-accent"
                    title="Toggle Theme"
                  >
                    {theme === "dark" ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4 text-accent" />}
                  </button>
                  <span className="font-mono text-xs font-bold uppercase text-accent">{lang}</span>
                </div>
              )}
            </div>
          </aside>
        </div>
      )}

      {/* Passcode Modal */}
      <PasscodeModal
        isOpen={isPasscodeOpen}
        onClose={() => setIsPasscodeOpen(false)}
        onSuccess={() => {
          setIsDrawerOpen(false);
          navigate({ to: "/studio" });
        }}
      />
    </>
  );
}
