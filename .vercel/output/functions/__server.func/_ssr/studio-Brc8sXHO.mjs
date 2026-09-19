import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, O as ArrowLeft, S as EyeOff, _ as KeyRound, g as Lock, l as ShieldCheck, x as Eye } from "../_libs/lucide-react.mjs";
import { a as useI18n, i as site, r as useContent } from "./router-Cxrfl9rl.mjs";
import { a as SiteHeader, c as lockStudio, n as Button, r as CORRECT_PIN, s as isStudioUnlocked, t as AUTH_STORAGE_KEY } from "./site-header-kJZVAozY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-Brc8sXHO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudioPage() {
	const { t } = useI18n();
	const { content, setContent, reset, exportJson, importJson, isCustom } = useContent();
	const [draft, setDraft] = (0, import_react.useState)(() => JSON.stringify(content, null, 2));
	const [error, setError] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const fileRef = (0, import_react.useRef)(null);
	const inputPinRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	const [isAuth, setIsAuth] = (0, import_react.useState)(() => isStudioUnlocked());
	const [pinInput, setPinInput] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [pinError, setPinError] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const unlocked = isStudioUnlocked();
		setIsAuth(unlocked);
		if (!unlocked) setTimeout(() => inputPinRef.current?.focus(), 100);
	}, []);
	function handleUnlock(enteredPin) {
		if (enteredPin.trim() === "282482") {
			setIsSuccess(true);
			setPinError(false);
			sessionStorage.setItem(AUTH_STORAGE_KEY, CORRECT_PIN);
			setTimeout(() => {
				setIsAuth(true);
			}, 400);
		} else setPinError(true);
	}
	function handleLock() {
		lockStudio();
		setIsAuth(false);
		navigate({ to: "/" });
	}
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
	if (!isAuth) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1 flex items-center justify-center p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-sm rounded-[var(--radius-xl)] border border-slate-200/90 bg-surface p-7 shadow-xl border border-border text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mx-auto flex size-16 items-center justify-center rounded-2xl transition-all duration-300 ${isSuccess ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105" : pinError ? "bg-red-50 text-red-500 border border-red-200" : "bg-blue-50 text-accent border border-blue-100 shadow-sm"}`,
						children: isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-8" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-xl font-bold tracking-tight text-fg",
						children: isSuccess ? "Akses Diterima" : "Verifikasi Passcode"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted",
						children: isSuccess ? "Membuka Content Studio..." : "Halaman dilindungi. Masukkan 6-digit passcode untuk mengakses Content Studio."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							handleUnlock(pinInput);
						},
						className: "mt-6 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: inputPinRef,
									type: showPassword ? "text" : "password",
									value: pinInput,
									onChange: (e) => {
										const val = e.target.value;
										setPinInput(val);
										setPinError(false);
										if (val.trim() === "282482") handleUnlock(val);
									},
									autoFocus: true,
									placeholder: "Masukkan passcode...",
									className: `h-12 w-full rounded-xl border px-4 pr-12 text-center font-mono text-lg tracking-wider text-fg transition-all focus:outline-none ${pinError ? "border-red-500 bg-red-50/50 animate-shake focus:ring-2 focus:ring-red-300" : isSuccess ? "border-emerald-500 bg-emerald-50/40 text-emerald-700" : "border-border bg-surface-2/60 focus:border-accent focus:bg-white focus:ring-2 focus:ring-blue-100"}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowPassword(!showPassword),
									className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 hover:text-slate-600 transition-colors",
									title: showPassword ? "Sembunyikan" : "Tampilkan",
									children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
								})]
							}),
							pinError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-xs font-medium text-red-500 animate-fade-up",
								children: "Passcode salah! Silakan coba lagi."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: isSuccess,
								className: "flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent font-medium text-white shadow-sm transition-all hover:bg-blue-700 active:scale-95 disabled:opacity-50",
								children: ["Buka Studio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 pt-4 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-[10px] font-mono text-faint uppercase tracking-wider mb-2",
							children: "Atau Tekan Angka"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2",
							children: [
								[
									"1",
									"2",
									"3",
									"4",
									"5",
									"6",
									"7",
									"8",
									"9"
								].map((digit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										const next = pinInput + digit;
										setPinInput(next);
										setPinError(false);
										if (next.trim() === "282482") handleUnlock(next);
									},
									className: "flex h-10 items-center justify-center rounded-lg border border-border bg-surface-2/70 font-mono text-base font-semibold text-fg shadow-2xs transition-all active:scale-95 hover:bg-blue-50 hover:border-blue-200 hover:text-accent",
									children: digit
								}, digit)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setPinInput("");
										setPinError(false);
									},
									className: "flex h-10 items-center justify-center rounded-lg font-mono text-xs font-medium text-muted hover:bg-slate-100 hover:text-fg",
									children: "Clear"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										const next = pinInput + "0";
										setPinInput(next);
										setPinError(false);
										if (next.trim() === "282482") handleUnlock(next);
									},
									className: "flex h-10 items-center justify-center rounded-lg border border-border bg-surface-2/70 font-mono text-base font-semibold text-fg shadow-2xs transition-all active:scale-95 hover:bg-blue-50 hover:border-blue-200 hover:text-accent",
									children: "0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										if (pinInput.length > 0) {
											setPinInput(pinInput.slice(0, -1));
											setPinError(false);
										}
									},
									className: "flex h-10 items-center justify-center rounded-lg font-mono text-xs text-muted hover:bg-slate-100 hover:text-fg",
									children: "Del"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 pt-3 border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), "Kembali ke Beranda"]
						})
					})
				]
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] font-semibold tracking-widest text-accent uppercase",
						children: "Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-2xl font-semibold tracking-tight text-fg",
						children: t(content.studio.title)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: handleLock,
						className: "flex items-center gap-1.5 text-xs text-red-600 hover:bg-red-50 hover:border-red-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), "Kunci Studio"]
					})]
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
					className: "mt-8 space-y-4 rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-fg",
							children: "Profile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							value: profile.name,
							onChange: (v) => patchProfile({
								name: v,
								initials: v.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase()
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							value: profile.email,
							onChange: (v) => patchProfile({ email: v })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							value: profile.phone,
							onChange: (v) => patchProfile({
								phone: v,
								phoneDisplay: v
							})
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
					className: "mt-8 space-y-4 rounded-[var(--radius-lg)] border border-slate-200/80 bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-fg",
							children: "Full content (JSON)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Edit projects, bilingual copy, skills. Keep the same shape."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: draft,
							onChange: (e) => setDraft(e.target.value),
							spellCheck: false,
							className: "mt-4 h-[420px] w-full resize-y rounded-[var(--radius-md)] border border-border bg-surface p-4 font-mono text-xs leading-relaxed text-fg shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
							className: "flex flex-wrap gap-2 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: saveJson,
									children: "Apply JSON"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									onClick: download,
									children: t(content.studio.export)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									onClick: () => fileRef.current?.click(),
									children: t(content.studio.import)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => {
										reset();
										setDraft(JSON.stringify(site, null, 2));
										setNotice("Reset to defaults");
									},
									children: t(content.studio.reset)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileRef,
									type: "file",
									accept: "application/json",
									className: "hidden",
									onChange: async (e) => {
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
									}
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-accent hover:underline",
						children: "← Back to site"
					})
				})
			]
		})]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-fg shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
		})]
	});
}
//#endregion
export { StudioPage as component };
