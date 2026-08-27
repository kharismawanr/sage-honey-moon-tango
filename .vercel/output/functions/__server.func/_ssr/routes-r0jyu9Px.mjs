import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FileSearch, i as Shield, n as Users, o as ArrowRight, t as Workflow } from "../_libs/lucide-react.mjs";
import { i as useI18n, n as useContent } from "./router-g3_3KJzQ.mjs";
import { n as SiteHeader, r as cn, t as Button } from "./site-header-CJ_QInQb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-r0jyu9Px.js
var import_jsx_runtime = require_jsx_runtime();
function SiteFooter() {
	const { t } = useI18n();
	const { content } = useContent();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-widest text-accent uppercase",
					children: content.profile.initials
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg",
					children: content.profile.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: t(content.footer.mark)
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md text-xs leading-relaxed text-faint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(content.footer.editHint) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/studio",
					className: "mt-3 inline-flex h-11 items-center text-sm text-accent hover:text-fg",
					children: t(content.nav.studio)
				})]
			})]
		})
	});
}
function ScanViewport() {
	const { t } = useI18n();
	const { content } = useContent();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden rounded-[var(--radius-xl)] bg-surface p-3 shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[var(--radius-lg)] bg-bg scan-grid min-h-[340px] sm:min-h-[400px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] tracking-wider text-muted uppercase",
						children: t(content.hero.scanLabel)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 font-mono text-[11px] text-pass",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-pass" }), "REC"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-1/2 top-[46%] z-10 w-[min(78%,280px)] -translate-x-1/2 -translate-y-1/2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[3/4] rounded-[var(--radius-md)] shadow-[var(--shadow-border)] bg-surface-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-3 top-3 right-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] tracking-widest text-faint",
									children: "eKYC"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-accent",
									children: "ID-04"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-1/2 top-[38%] h-[42%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-surface shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-[38%] size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-3 left-1/2 h-8 w-16 -translate-x-1/2 rounded-t-full bg-border" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-4 bottom-5 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-3/4 rounded-full bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1/2 rounded-full bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 h-1 w-full overflow-hidden rounded-full bg-surface",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 bg-accent/80" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reticule, {})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 z-10 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-scan absolute inset-x-8 h-px bg-accent/70 shadow-[0_0_16px_var(--color-accent)]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 z-20 p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: content.verdicts.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[var(--radius-sm)] bg-bg/80 px-2.5 py-2 shadow-[var(--shadow-border)] backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] tracking-widest " + (v.code === "PASS" ? "text-pass" : v.code === "FLAG" ? "text-flag" : v.code === "RETRY" ? "text-review" : "text-accent"),
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
		className: "pointer-events-none absolute inset-2 text-accent/50",
		viewBox: "0 0 100 100",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 22 V8 H22",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M78 8 H92 V22",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 78 V92 H78",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 92 H8 V78",
				stroke: "currentColor",
				strokeWidth: "1.2"
			})
		]
	});
}
function Home() {
	const { t } = useI18n();
	const { content } = useContent();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-dvh bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 scan-grid opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "animate-fade-up font-mono text-[11px] tracking-[0.18em] text-accent uppercase",
								children: t(content.hero.kicker)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "animate-fade-up stagger-1 mt-4 max-w-xl text-[clamp(2rem,4vw,3.35rem)] font-medium leading-[1.12] tracking-[-0.03em] text-fg",
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
								className: "animate-fade-up stagger-4 mt-8 text-sm text-faint",
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
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4",
						children: content.stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("px-4 py-6 sm:px-6", i !== 0 && "border-l border-border", i === 2 && "border-t border-border md:border-t-0", i === 3 && "border-t border-border md:border-t-0"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-2xl tabular-nums text-fg sm:text-3xl",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted sm:text-sm",
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
						className: "mt-10 grid gap-3 sm:grid-cols-2",
						children: content.projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group rounded-[var(--radius-lg)] bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] tracking-wider text-accent uppercase",
										children: t(project.category)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, { status: project.status })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-lg font-medium tracking-tight text-fg",
									children: t(project.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: t(project.summary)
								}),
								project.points.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1.5 text-sm text-muted",
									children: project.points.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "pl-3 shadow-[inset_2px_0_0_var(--color-border)]",
										children: t(p)
									}, idx))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wide text-faint shadow-[var(--shadow-border)]",
										children: tag
									}, tag))
								})
							]
						}, project.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "ops",
					className: "border-t border-border bg-surface/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBlock, { title: t(content.experienceTitle) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 space-y-4",
								children: content.experience.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-[var(--radius-lg)] bg-bg p-5 shadow-[var(--shadow-border)] sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-medium text-fg",
												children: t(job.role)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-xs text-muted",
												children: t(job.period)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-accent",
											children: job.org
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-relaxed text-muted",
											children: t(job.summary)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-5 grid gap-3 sm:grid-cols-2",
											children: job.points.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "rounded-[var(--radius-md)] bg-surface px-4 py-3 text-sm leading-relaxed text-fg/90 shadow-[var(--shadow-border)]",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderBlock, {
						title: t(content.about.title),
						lead: t(content.about.lead)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4 text-base leading-relaxed text-muted",
							children: content.about.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(p) }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-mono text-[11px] tracking-widest text-accent uppercase",
								children: t(content.skillsTitle)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: t(content.skillsLead)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-5",
								children: content.skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-medium text-fg",
									children: t(group.title)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1",
									children: group.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-sm text-muted",
										children: t(item)
									}, idx))
								})] }, group.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-mono text-[11px] tracking-widest text-faint uppercase",
									children: t(content.toolsTitle)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: content.tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full px-3 py-1.5 text-xs text-fg shadow-[var(--shadow-border)]",
										children: tool
									}, tool))
								})]
							})
						] })]
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
								className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${content.profile.email}`,
										children: content.profile.email
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: content.profile.linkedin,
										target: "_blank",
										rel: "noreferrer",
										children: "LinkedIn"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-sm text-faint",
								children: t(content.contactNote)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
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
			className: "text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em] text-fg",
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
			className: "text-pass"
		},
		core: {
			label: "CORE",
			className: "text-accent"
		},
		ops: {
			label: "OPS",
			className: "text-review"
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("font-mono text-[10px] tracking-widest", s.className),
		children: s.label
	});
}
function OpsCard({ icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-md)] bg-bg p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-9 items-center justify-center rounded-[var(--radius-xs)] bg-surface-2 text-accent",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-sm font-medium text-fg",
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
