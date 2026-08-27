import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Cloud, FileSearch, Image, MessageCircle, Shield, Users, Wallet, Workflow } from "lucide-react";
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
    <div id="top" className="min-h-dvh bg-bg">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 scan-grid opacity-60" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
            <div>
              <p className="animate-fade-up font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
                {t(content.hero.kicker)}
              </p>
              <h1 className="animate-fade-up stagger-1 mt-4 max-w-xl text-[clamp(2rem,4vw,3.35rem)] font-medium leading-[1.12] tracking-[-0.03em] text-fg">
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
              <p className="animate-fade-up stagger-4 mt-8 text-sm text-faint">
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

        <section className="border-y border-border">
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
                <div className="font-mono text-2xl tabular-nums text-fg sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
          <HeaderBlock title={t(content.projectsTitle)} lead={t(content.projectsLead)} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {content.projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-[var(--radius-lg)] bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[11px] tracking-wider text-accent uppercase">
                    {t(project.category)}
                  </p>
                  <StatusChip status={project.status} />
                </div>
                <h3 className="mt-3 text-lg font-medium tracking-tight text-fg">
                  {t(project.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(project.summary)}</p>
                {project.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-sm text-muted">
                    {project.points.map((p, idx) => (
                      <li key={idx} className="pl-3 shadow-[inset_2px_0_0_var(--color-border)]">
                        {t(p)}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wide text-faint shadow-[var(--shadow-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="ops" className="border-t border-border bg-surface/50">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
            <HeaderBlock title={t(content.experienceTitle)} />
            <div className="mt-10 space-y-4">
              {content.experience.map((job) => (
                <article
                  key={job.id}
                  className="rounded-[var(--radius-lg)] bg-bg p-5 shadow-[var(--shadow-border)] sm:p-7"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-medium text-fg">{t(job.role)}</h3>
                    <p className="font-mono text-xs text-muted">{t(job.period)}</p>
                  </div>
                  <p className="mt-1 text-sm text-accent">{job.org}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{t(job.summary)}</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {job.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="rounded-[var(--radius-md)] bg-surface px-4 py-3 text-sm leading-relaxed text-fg/90 shadow-[var(--shadow-border)]"
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

        <section id="lab" className="border-t border-border">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
            <HeaderBlock title={t(content.labTitle)} lead={t(content.labLead)} />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.labItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-[var(--radius-lg)] bg-surface p-5 shadow-[var(--shadow-border)]"
                >
                  <div className="flex size-9 items-center justify-center rounded-[var(--radius-xs)] bg-surface-2 text-accent">
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
                  <h3 className="mt-3 text-sm font-medium text-fg">{t(item.title)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{t(item.body)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
          <HeaderBlock title={t(content.about.title)} lead={t(content.about.lead)} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {content.about.body.map((p, i) => (
                <p key={i}>{t(p)}</p>
              ))}
              <div className="mt-6 rounded-[var(--radius-md)] bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
                <p className="font-mono text-[11px] tracking-widest text-accent uppercase">
                  {t(content.educationTitle)}
                </p>
                <p className="mt-2 text-sm font-medium text-fg">
                  {t(content.profile.education.degree)}
                </p>
                <p className="mt-1 text-sm text-muted">{content.profile.education.school}</p>
              </div>
            </div>
            <div>
              <h3 className="font-mono text-[11px] tracking-widest text-accent uppercase">
                {t(content.skillsTitle)}
              </h3>
              <p className="mt-2 text-sm text-muted">{t(content.skillsLead)}</p>
              <div className="mt-5 space-y-5">
                {content.skillGroups.map((group) => (
                  <div key={group.id}>
                    <h4 className="text-sm font-medium text-fg">{t(group.title)}</h4>
                    <ul className="mt-2 space-y-1">
                      {group.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted">
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-mono text-[11px] tracking-widest text-faint uppercase">
                  {t(content.toolsTitle)}
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {content.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full px-3 py-1.5 text-xs text-fg shadow-[var(--shadow-border)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em] text-fg">
        {title}
      </h2>
      {lead ? <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{lead}</p> : null}
    </div>
  );
}

function StatusChip({ status }: { status: "active" | "core" | "ops" }) {
  const map = {
    active: { label: "ACTIVE", className: "text-pass" },
    core: { label: "CORE", className: "text-accent" },
    ops: { label: "OPS", className: "text-review" },
  } as const;
  const s = map[status];
  return (
    <span className={cn("font-mono text-[10px] tracking-widest", s.className)}>{s.label}</span>
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
    <div className="rounded-[var(--radius-md)] bg-bg p-4 shadow-[var(--shadow-border)]">
      <div className="flex size-9 items-center justify-center rounded-[var(--radius-xs)] bg-surface-2 text-accent">
        {icon}
      </div>
      <h3 className="mt-3 text-sm font-medium text-fg">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-muted">{body}</p>
    </div>
  );
}
