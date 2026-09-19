import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, b as FileSearch, c as Shield, f as MessageCircle, g as Lock, i as Users, n as Workflow, r as Wallet, v as Image, w as Cloud } from "../_libs/lucide-react.mjs";
import { a as useI18n, r as useContent } from "./router-Cxrfl9rl.mjs";
import { a as SiteHeader, i as PasscodeModal, n as Button, o as cn, s as isStudioUnlocked } from "./site-header-kJZVAozY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CU0X-IEb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SiteFooter() {
	const { t } = useI18n();
	const { content } = useContent();
	const navigate = useNavigate();
	const [isPasscodeOpen, setIsPasscodeOpen] = (0, import_react.useState)(false);
	function handleStudioClick(e) {
		e.preventDefault();
		if (isStudioUnlocked()) navigate({ to: "/studio" });
		else setIsPasscodeOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] font-bold tracking-widest text-accent uppercase",
					children: content.profile.initials
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-semibold text-fg",
					children: content.profile.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: t(content.footer.mark)
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md text-xs leading-relaxed text-faint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(content.footer.editHint) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/studio",
					onClick: handleStudioClick,
					className: "mt-3 inline-flex h-11 items-center gap-1.5 text-sm font-medium text-accent hover:text-blue-700 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }),
						t(content.nav.studio),
						" →"
					]
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasscodeModal, {
		isOpen: isPasscodeOpen,
		onClose: () => setIsPasscodeOpen(false),
		onSuccess: () => navigate({ to: "/studio" })
	})] });
}
function ScanViewport() {
	const { t } = useI18n();
	const { content } = useContent();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden rounded-[var(--radius-xl)] bg-surface p-3 shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-[340px] overflow-hidden rounded-[var(--radius-lg)] border border-border/70 bg-bg scan-grid sm:min-h-[400px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-border/60 bg-surface/75 px-4 py-3 backdrop-blur-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] font-medium tracking-wider text-muted uppercase",
						children: t(content.hero.scanLabel)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 font-mono text-[11px] font-medium text-pass",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 animate-pulse rounded-full bg-pass" }), "REC"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-1/2 top-[46%] z-10 w-[min(78%,280px)] -translate-x-1/2 -translate-y-1/2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[3/4] rounded-[var(--radius-md)] border border-border bg-surface-2 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-3 top-3 right-3 z-10 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] font-semibold tracking-widest text-faint",
									children: "eKYC"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] font-medium text-accent",
									children: "ID-04"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-1/2 top-[38%] h-[42%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-surface border border-border/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-[38%] size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-3 left-1/2 h-8 w-16 -translate-x-1/2 rounded-t-full bg-border" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-4 bottom-5 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-3/4 rounded-full bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1/2 rounded-full bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 rounded-full bg-accent/80" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reticule, {})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 z-10 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-scan absolute inset-x-8 h-[2px] bg-accent/75 shadow-[0_0_16px_var(--color-accent)]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 z-20 p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: content.verdicts.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[var(--radius-sm)] border border-border/70 bg-bg/85 px-2.5 py-2 shadow-[var(--shadow-border)] backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] font-semibold tracking-widest " + (v.code === "PASS" ? "text-pass" : v.code === "FLAG" ? "text-flag" : v.code === "RETRY" ? "text-review" : "text-accent"),
								children: v.code
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 truncate text-[11px] text-muted",
								children: t(v.label)
							})]
						}, v.code))
					})
				})
			]
		})
	});
}
function Reticule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "pointer-events-none absolute inset-2 text-accent/60",
		viewBox: "0 0 100 100",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 22 V8 H22",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M78 8 H92 V22",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 78 V92 H78",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 92 H8 V78",
				stroke: "currentColor",
				strokeWidth: "1.4"
			})
		]
	});
}
function Home() {
	const { t } = useI18n();
	const { content } = useContent();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/15 via-accent/5 to-transparent blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 scan-grid opacity-70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "animate-fade-up flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative size-12 overflow-hidden rounded-full border-2 border-accent shadow-md shadow-accent/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/profile.jpeg",
											alt: content.profile.name,
											className: "size-full object-cover object-top"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] font-semibold tracking-[0.18em] text-accent uppercase",
										children: t(content.hero.kicker)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-medium text-muted",
										children: [
											content.profile.name,
											" • ",
											content.profile.years,
											" Years Ops"
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "animate-fade-up stagger-1 mt-4 max-w-xl text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-fg",
									children: t(content.hero.headline)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "animate-fade-up stagger-2 mt-5 max-w-lg text-base leading-relaxed text-muted",
									children: t(content.hero.sub)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "animate-fade-up stagger-3 mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#work",
											children: [t(content.hero.primaryCta), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contact",
											children: t(content.hero.secondaryCta)
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "animate-fade-up stagger-4 mt-8 text-sm font-medium text-faint",
									children: [
										content.profile.company,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mx-2 text-border",
											children: "/"
										}),
										t(content.profile.title)
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-fade-up stagger-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanViewport, {})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-border bg-surface/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4",
						children: content.stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("px-4 py-6 sm:px-6", i !== 0 && "border-l border-border", i === 2 && "border-t border-border md:border-t-0", i === 3 && "border-t border-border md:border-t-0"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-2xl font-semibold tabular-nums text-fg sm:text-3xl",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs font-medium text-muted sm:text-sm",
								children: t(stat.label)
							})]
						}, stat.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "work",
					className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBlock, {
						title: t(content.projectsTitle),
						lead: t(content.projectsLead)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2",
						children: content.projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-border)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[var(--shadow-border-hover)] sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] font-semibold tracking-wider text-accent uppercase",
										children: t(project.category)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, { status: project.status })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-lg font-semibold tracking-tight text-fg transition-colors group-hover:text-accent",
									children: t(project.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: t(project.summary)
								}),
								project.points.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1.5 text-sm text-muted",
									children: project.points.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "pl-3 shadow-[inset_2px_0_0_var(--color-accent)]",
										children: t(p)
									}, idx))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide text-faint",
										children: tag
									}, tag))
								})
							]
						}, project.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "ops",
					className: "border-t border-border bg-surface-2/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBlock, { title: t(content.experienceTitle) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 space-y-4",
								children: content.experience.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-semibold text-fg",
												children: t(job.role)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-xs font-medium text-muted",
												children: t(job.period)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-medium text-accent",
											children: job.org
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-relaxed text-muted",
											children: t(job.summary)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-5 grid gap-3 sm:grid-cols-2",
											children: job.points.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "rounded-[var(--radius-md)] border border-border bg-surface-2 px-4 py-3 text-sm leading-relaxed text-fg",
												children: t(p)
											}, idx))
										})
									]
								}, job.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
								children: content.opsCards.map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpsCard, {
									icon: i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "size-4" }) : i === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" }) : i === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSearch, { className: "size-4" }),
									title: t(card.title),
									body: t(card.body)
								}, card.id))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "lab",
					className: "border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBlock, {
							title: t(content.labTitle),
							lead: t(content.labLead)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: content.labItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-border)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[var(--shadow-border-hover)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-9 items-center justify-center rounded-[var(--radius-xs)] border border-border bg-surface-2 text-accent",
										children: item.id === "n8n" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "size-4" }) : item.id === "hermes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }) : item.id === "immich" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4" }) : item.id === "nextcloud" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-sm font-semibold text-fg",
										children: t(item.title)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-muted",
										children: t(item.body)
									})
								]
							}, item.id))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBlock, {
						title: t(content.about.title),
						lead: t(content.about.lead)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface p-3 shadow-md shadow-accent/5 transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-lg)] bg-surface-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/profile.jpeg",
										alt: content.profile.name,
										className: "size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-3 left-3 right-3 text-white",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-base font-semibold",
												children: content.profile.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-white/90",
												children: t(content.profile.title)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-[11px] font-mono text-white/70",
												children: content.profile.company
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between px-1 py-1 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 font-medium text-pass",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-pass animate-pulse" }), t(content.profile.availability)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] text-faint",
									children: "KR / ID"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4 text-base leading-relaxed text-muted",
									children: content.about.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(p) }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[var(--radius-md)] border border-border bg-surface px-5 py-4 shadow-[var(--shadow-border)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[11px] font-semibold tracking-widest text-accent uppercase",
												children: t(content.educationTitle)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm font-semibold text-fg",
												children: t(content.profile.education.degree)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted",
												children: content.profile.education.school
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[var(--radius-md)] border border-border bg-surface px-5 py-4 shadow-[var(--shadow-border)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[11px] font-semibold tracking-widest text-accent uppercase",
												children: t(content.skillsTitle)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-sm font-semibold text-fg",
												children: [content.profile.years, " Years Operational Leadership"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted",
												children: t(content.skillsLead)
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-mono text-[11px] font-semibold tracking-widest text-accent uppercase",
										children: "Skill Focus & Specialization"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 grid gap-4 sm:grid-cols-2",
										children: content.skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border border-border bg-surface-2/60 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-sm font-semibold text-fg",
												children: t(group.title)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-1",
												children: group.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "text-xs text-muted flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-accent" }), t(item)]
												}, idx))
											})]
										}, group.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-mono text-[11px] font-semibold tracking-widest text-faint uppercase",
										children: t(content.toolsTitle)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-1.5",
										children: content.tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-fg shadow-[var(--shadow-border)] hover:border-accent hover:text-accent transition-colors",
											children: tool
										}, tool))
									})]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "contact",
					className: "border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBlock, {
								title: t(content.contactTitle),
								lead: t(content.contactLead)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${content.profile.email}`,
											children: content.profile.email
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `tel:${content.profile.phone}`,
											children: content.profile.phoneDisplay
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `https://wa.me/${content.profile.phone.replace(/^\+/, "")}`,
											target: "_blank",
											rel: "noreferrer",
											children: "WhatsApp"
										})
									}),
									content.profile.linkedin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: content.profile.linkedin,
											target: "_blank",
											rel: "noreferrer",
											children: "LinkedIn"
										})
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-muted",
								children: t(content.profile.availability)
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function HeaderBlock({ title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-fg",
			children: title
		}), lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-muted sm:text-base",
			children: lead
		}) : null]
	});
}
function StatusChip({ status }) {
	const s = {
		active: {
			label: "ACTIVE",
			className: "text-pass border-pass/30 bg-pass/10"
		},
		core: {
			label: "CORE",
			className: "text-accent border-accent/30 bg-accent/10"
		},
		ops: {
			label: "OPS",
			className: "text-review border-review/30 bg-review/10"
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("font-mono text-[10px] font-semibold tracking-widest rounded px-2 py-0.5 border", s.className),
		children: s.label
	});
}
function OpsCard({ icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-md)] border border-border bg-surface p-4 shadow-[var(--shadow-border)] transition-all hover:border-accent/40 hover:shadow-[var(--shadow-border-hover)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-9 items-center justify-center rounded-[var(--radius-xs)] border border-border bg-surface-2 text-accent",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-sm font-semibold text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs leading-relaxed text-muted",
				children: body
			})
		]
	});
}
//#endregion
export { Home as component };
