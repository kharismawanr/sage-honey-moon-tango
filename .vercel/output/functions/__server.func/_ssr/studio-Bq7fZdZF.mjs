import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useI18n, n as useContent, r as site } from "./router-g3_3KJzQ.mjs";
import { n as SiteHeader, t as Button } from "./site-header-CJ_QInQb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-Bq7fZdZF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudioPage() {
	const { t } = useI18n();
	const { content, setContent, reset, exportJson, importJson, isCustom } = useContent();
	const [draft, setDraft] = (0, import_react.useState)(() => JSON.stringify(content, null, 2));
	const [error, setError] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const fileRef = (0, import_react.useRef)(null);
	const profile = content.profile;
	function patchProfile(partial) {
		const next = {
			...content,
			profile: {
				...content.profile,
				...partial
			}
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-widest text-accent uppercase",
					children: "Studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-medium tracking-tight text-fg",
					children: t(content.studio.title)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: t(content.studio.lead)
				}),
				isCustom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-xs text-pass",
					children: t(content.studio.saved)
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 space-y-4 rounded-[var(--radius-lg)] bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium text-fg",
							children: "Profile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							value: profile.name,
							onChange: (v) => patchProfile({
								name: v,
								initials: v.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							value: profile.email,
							onChange: (v) => patchProfile({ email: v })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "LinkedIn URL",
							value: profile.linkedin,
							onChange: (v) => patchProfile({ linkedin: v })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company",
							value: profile.company,
							onChange: (v) => patchProfile({ company: v })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 rounded-[var(--radius-lg)] bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium text-fg",
							children: "Full content (JSON)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "Edit projects, bilingual copy, skills. Keep the same shape."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: draft,
							onChange: (e) => setDraft(e.target.value),
							spellCheck: false,
							className: "mt-4 h-[420px] w-full resize-y rounded-[var(--radius-md)] bg-bg p-4 font-mono text-xs leading-relaxed text-fg shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-flag",
							children: error
						}) : null,
						notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-pass",
							children: notice
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									onClick: saveJson,
									children: "Apply JSON"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									onClick: download,
									children: t(content.studio.export)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									onClick: () => fileRef.current?.click(),
									children: t(content.studio.import)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									onClick: () => {
										reset();
										setDraft(JSON.stringify(site, null, 2));
										setNotice("Reset");
										setError(null);
									},
									children: t(content.studio.reset)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileRef,
									type: "file",
									accept: "application/json",
									className: "hidden",
									onChange: async (e) => {
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
									}
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-8 inline-flex h-11 items-center text-sm text-accent hover:text-fg",
					children: t(content.studio.back)
				})
			]
		})]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 h-11 w-full rounded-[var(--radius-sm)] bg-bg px-3 text-sm text-fg shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
		})]
	});
}
//#endregion
export { StudioPage as component };
