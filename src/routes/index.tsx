import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Cloud, Download, FileSearch, FileText, Image, MessageCircle, Shield, Users, Wallet, Workflow } from "lucide-react";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScanViewport } from "@/components/scan-viewport";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useContent } from "@/lib/content-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t } = useI18n();
  const { content } = useContent();

  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/15 via-accent/5 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute inset-0 scan-grid opacity-70" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
            <div>
              <div className="animate-fade-up flex items-center gap-3">
                <div className="relative size-12 overflow-hidden rounded-full border-2 border-accent shadow-md shadow-accent/20">
                  <img
                    src="/profile.jpeg"
                    alt={content.profile.name}
                    className="size-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                    {t(content.hero.kicker)}
                  </p>
                  <p className="text-xs font-medium text-muted">
                    {content.profile.name} • {content.profile.years} Years Ops
                  </p>
                </div>
              </div>

              <h1 className="animate-fade-up stagger-1 mt-4 max-w-xl text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-fg">
                {t(content.hero.headline)}
              </h1>
              <p className="animate-fade-up stagger-2 mt-5 max-w-lg text-base leading-relaxed text-muted">
                {t(content.hero.sub)}
              </p>
              <div className="animate-fade-up stagger-3 mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#work">
                    {t(content.hero.primaryCta)}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="#contact">{t(content.hero.secondaryCta)}</a>
                </Button>
              </div>
              <p className="animate-fade-up stagger-4 mt-8 text-sm font-medium text-faint">
                {content.profile.company}
                <span className="mx-2 text-border">/</span>
                {t(content.profile.title)}
              </p>
            </div>
            <div className="animate-fade-up stagger-2">
              <ScanViewport />
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="border-y border-border bg-surface/50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {content.stats.map((stat, i) => (
              <div
                key={stat.id}
                className={cn(
                  "px-4 py-6 sm:px-6",
                  i !== 0 && "border-l border-border",
                  i === 2 && "border-t border-border md:border-t-0",
                  i === 3 && "border-t border-border md:border-t-0",
                )}
              >
                <div className="font-mono text-2xl font-semibold tabular-nums text-fg sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-muted sm:text-sm">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
          <HeaderBlock title={t(content.projectsTitle)} lead={t(content.projectsLead)} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-border)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[var(--shadow-border-hover)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[11px] font-semibold tracking-wider text-accent uppercase">
                    {t(project.category)}
                  </p>
                  <StatusChip status={project.status} />
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                  {t(project.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(project.summary)}</p>
                {project.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-sm text-muted">
                    {project.points.map((p, idx) => (
                      <li key={idx} className="pl-3 shadow-[inset_2px_0_0_var(--color-accent)]">
                        {t(p)}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* OPS SECTION */}
        <section id="ops" className="border-t border-border bg-surface-2/40">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
            <HeaderBlock title={t(content.experienceTitle)} />
            <div className="mt-10 space-y-4">
              {content.experience.map((job) => (
                <article
                  key={job.id}
                  className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-fg">{t(job.role)}</h3>
                    <p className="font-mono text-xs font-medium text-muted">{t(job.period)}</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">{job.org}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{t(job.summary)}</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {job.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="rounded-[var(--radius-md)] border border-border bg-surface-2 px-4 py-3 text-sm leading-relaxed text-fg"
                      >
                        {t(p)}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {content.opsCards.map((card, i) => (
                <OpsCard
                  key={card.id}
                  icon={
                    i === 0 ? (
                      <Workflow className="size-4" />
                    ) : i === 1 ? (
                      <Users className="size-4" />
                    ) : i === 2 ? (
                      <Shield className="size-4" />
                    ) : (
                      <FileSearch className="size-4" />
                    )
                  }
                  title={t(card.title)}
                  body={t(card.body)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* LAB SECTION */}
        <section id="lab" className="border-t border-border">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
            <HeaderBlock title={t(content.labTitle)} lead={t(content.labLead)} />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.labItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-border)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[var(--shadow-border-hover)]"
                >
                  <div className="flex size-9 items-center justify-center rounded-[var(--radius-xs)] border border-border bg-surface-2 text-accent">
                    {item.id === "n8n" ? (
                      <Workflow className="size-4" />
                    ) : item.id === "hermes" ? (
                      <MessageCircle className="size-4" />
                    ) : item.id === "immich" ? (
                      <Image className="size-4" />
                    ) : item.id === "nextcloud" ? (
                      <Cloud className="size-4" />
                    ) : (
                      <Wallet className="size-4" />
                    )}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-fg">{t(item.title)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{t(item.body)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION WITH PORTRAIT PHOTO CARD */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
          <HeaderBlock title={t(content.about.title)} lead={t(content.about.lead)} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface p-3 shadow-md shadow-accent/5 transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/10">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-lg)] bg-surface-2">
                <img
                  src="/profile.jpeg"
                  alt={content.profile.name}
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-base font-semibold">{content.profile.name}</p>
                  <p className="text-xs text-white/90">{t(content.profile.title)}</p>
                  <p className="mt-0.5 text-[11px] font-mono text-white/70">{content.profile.company}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between px-1 py-1 text-xs text-muted">
                <span className="flex items-center gap-1.5 font-medium text-pass">
                  <span className="size-2 rounded-full bg-pass animate-pulse" />
                  {t(content.profile.availability)}
                </span>
                <span className="font-mono text-[11px] text-faint">KR / ID</span>
              </div>
            </div>

            {/* About text & Skills */}
            <div className="space-y-6">
              <div className="space-y-4 text-base leading-relaxed text-muted">
                {content.about.body.map((p, i) => (
                  <p key={i}>{t(p)}</p>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-md)] border border-border bg-surface px-5 py-4 shadow-[var(--shadow-border)]">
                  <p className="font-mono text-[11px] font-semibold tracking-widest text-accent uppercase">
                    {t(content.educationTitle)}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-fg">
                    {t(content.profile.education.degree)}
                  </p>
                  <p className="mt-1 text-sm text-muted">{content.profile.education.school}</p>
                </div>

                <div className="rounded-[var(--radius-md)] border border-border bg-surface px-5 py-4 shadow-[var(--shadow-border)]">
                  <p className="font-mono text-[11px] font-semibold tracking-widest text-accent uppercase">
                    {t(content.skillsTitle)}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-fg">
                    {content.profile.years} Years Operational Leadership
                  </p>
                  <p className="mt-1 text-sm text-muted">{t(content.skillsLead)}</p>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="font-mono text-[11px] font-semibold tracking-widest text-accent uppercase">
                  Skill Focus & Specialization
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {content.skillGroups.map((group) => (
                    <div key={group.id} className="rounded-lg border border-border bg-surface-2/60 p-4">
                      <h4 className="text-sm font-semibold text-fg">{t(group.title)}</h4>
                      <ul className="mt-2 space-y-1">
                        {group.items.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted flex items-center gap-2">
                            <span className="size-1 rounded-full bg-accent" />
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-mono text-[11px] font-semibold tracking-widest text-faint uppercase">
                  {t(content.toolsTitle)}
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {content.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-fg shadow-[var(--shadow-border)] hover:border-accent hover:text-accent transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
            <HeaderBlock title={t(content.contactTitle)} lead={t(content.contactLead)} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild>
                <a href={`mailto:${content.profile.email}`}>{content.profile.email}</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href={`tel:${content.profile.phone}`}>{content.profile.phoneDisplay}</a>
              </Button>
              <Button variant="secondary" asChild>
                <a
                  href={`https://wa.me/${content.profile.phone.replace(/^\+/, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
              {content.profile.linkedin ? (
                <Button variant="secondary" asChild>
                  <a href={content.profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </Button>
              ) : null}
              <Button
                variant="outline"
                className="border-accent/50 bg-accent/10 text-accent hover:bg-accent/20 font-medium shadow-xs"
                asChild
              >
                <a
                  href="/Kharismawan_Ramadhan_CV_2Page.pdf"
                  download="Kharismawan_Ramadhan_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted">{t(content.profile.availability)}</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function HeaderBlock({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-fg">
        {title}
      </h2>
      {lead ? <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{lead}</p> : null}
    </div>
  );
}

function StatusChip({ status }: { status: "active" | "core" | "ops" }) {
  const map = {
    active: { label: "ACTIVE", className: "text-pass border-pass/30 bg-pass/10" },
    core: { label: "CORE", className: "text-accent border-accent/30 bg-accent/10" },
    ops: { label: "OPS", className: "text-review border-review/30 bg-review/10" },
  } as const;
  const s = map[status];
  return (
    <span className={cn("font-mono text-[10px] font-semibold tracking-widest rounded px-2 py-0.5 border", s.className)}>
      {s.label}
    </span>
  );
}

function OpsCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-surface p-4 shadow-[var(--shadow-border)] transition-all hover:border-accent/40 hover:shadow-[var(--shadow-border-hover)]">
      <div className="flex size-9 items-center justify-center rounded-[var(--radius-xs)] border border-border bg-surface-2 text-accent">
        {icon}
      </div>
      <h3 className="mt-3 text-sm font-semibold text-fg">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-muted">{body}</p>
    </div>
  );
}
