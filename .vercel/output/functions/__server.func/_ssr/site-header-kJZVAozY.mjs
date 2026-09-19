import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Cpu, D as ArrowRight, E as Briefcase, S as EyeOff, T as ChevronRight, a as User, d as Minimize2, g as Lock, h as Mail, l as ShieldCheck, m as Maximize2, p as Menu, s as Sun, t as X, u as Moon, x as Eye, y as FlaskConical } from "../_libs/lucide-react.mjs";
import { a as useI18n, n as useTheme, r as useContent } from "./router-Cxrfl9rl.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-kJZVAozY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg shadow-sm shadow-blue-500/25 hover:bg-blue-700",
			secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-surface-2 hover:text-accent",
			ghost: "bg-transparent text-muted hover:text-accent hover:bg-surface-2"
		},
		size: {
			md: "h-11 px-4 text-sm rounded-[var(--radius-sm)]",
			sm: "h-9 px-3 text-xs rounded-[var(--radius-xs)]",
			lg: "h-12 px-5 text-sm rounded-[var(--radius-md)]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var CORRECT_PIN = "282482";
var AUTH_STORAGE_KEY = "studio_unlocked";
function isStudioUnlocked() {
	if (typeof window === "undefined") return false;
	return sessionStorage.getItem(AUTH_STORAGE_KEY) === CORRECT_PIN;
}
function lockStudio() {
	if (typeof window !== "undefined") sessionStorage.removeItem(AUTH_STORAGE_KEY);
}
function PasscodeModal({ isOpen, onClose, onSuccess }) {
	const [pin, setPin] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [isError, setIsError] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const inputRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			setPin("");
			setIsError(false);
			setIsSuccess(false);
			setTimeout(() => inputRef.current?.focus(), 50);
		}
	}, [isOpen]);
	function verifyPin(inputToVerify) {
		if (inputToVerify.trim() === "282482") {
			setIsSuccess(true);
			setIsError(false);
			sessionStorage.setItem(AUTH_STORAGE_KEY, CORRECT_PIN);
			setTimeout(() => {
				onClose();
				if (onSuccess) onSuccess();
				else navigate({ to: "/studio" });
			}, 400);
		} else setIsError(true);
	}
	function handleSubmit(e) {
		e.preventDefault();
		verifyPin(pin);
	}
	function handleDigitClick(d) {
		if (pin.length >= 10 || isSuccess) return;
		const nextPin = pin + d;
		setPin(nextPin);
		setIsError(false);
		if (nextPin === "282482") verifyPin(nextPin);
	}
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-up",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-sm rounded-[var(--radius-xl)] border border-slate-200/90 bg-surface p-6 shadow-2xl border border-border transition-all",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex size-14 items-center justify-center rounded-2xl transition-all duration-300 ${isSuccess ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105" : isError ? "bg-red-50 text-red-500 border border-red-200" : "bg-blue-50 text-accent border border-blue-100 shadow-sm"}`,
							children: isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-7" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-semibold tracking-tight text-fg",
							children: isSuccess ? "Akses Diterima" : "Verifikasi Passcode"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted",
							children: isSuccess ? "Membuka Content Studio..." : "Masukkan passcode 6-digit untuk membuka Content Studio"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: inputRef,
								type: showPassword ? "text" : "password",
								value: pin,
								onChange: (e) => {
									const val = e.target.value;
									setPin(val);
									setIsError(false);
									if (val.trim() === "282482") verifyPin(val);
								},
								placeholder: "Masukkan passcode...",
								className: `h-12 w-full rounded-xl border px-4 pr-12 text-center font-mono text-lg tracking-wider text-fg transition-all focus:outline-none ${isError ? "border-red-500 bg-red-50/50 animate-shake focus:ring-2 focus:ring-red-300" : isSuccess ? "border-emerald-500 bg-emerald-50/40 text-emerald-700" : "border-border bg-surface-2/60 focus:border-accent focus:bg-white focus:ring-2 focus:ring-blue-100"}`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowPassword(!showPassword),
								className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 hover:text-slate-600 transition-colors",
								title: showPassword ? "Sembunyikan" : "Tampilkan",
								children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
							})]
						}),
						isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
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
					className: "mt-4 pt-4 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-[10px] font-mono text-faint uppercase tracking-wider mb-2",
						children: "Keypad Sentuh"
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
								onClick: () => handleDigitClick(digit),
								className: "flex h-10 items-center justify-center rounded-lg border border-border bg-surface-2/70 font-mono text-base font-semibold text-fg shadow-2xs transition-all active:scale-95 hover:bg-blue-50 hover:border-blue-200 hover:text-accent",
								children: digit
							}, digit)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setPin("");
									setIsError(false);
								},
								className: "flex h-10 items-center justify-center rounded-lg font-mono text-xs font-medium text-muted hover:bg-slate-100 hover:text-fg",
								children: "Clear"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleDigitClick("0"),
								className: "flex h-10 items-center justify-center rounded-lg border border-border bg-surface-2/70 font-mono text-base font-semibold text-fg shadow-2xs transition-all active:scale-95 hover:bg-blue-50 hover:border-blue-200 hover:text-accent",
								children: "0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									if (pin.length > 0) {
										setPin(pin.slice(0, -1));
										setIsError(false);
									}
								},
								className: "flex h-10 items-center justify-center rounded-lg font-mono text-xs text-muted hover:bg-slate-100 hover:text-fg",
								children: "Del"
							})
						]
					})]
				})
			]
		})
	});
}
function SiteHeader() {
	const { lang, setLang, t } = useI18n();
	const { content } = useContent();
	const { theme, toggleTheme } = useTheme();
	const navigate = useNavigate();
	const [isDrawerOpen, setIsDrawerOpen] = (0, import_react.useState)(false);
	const [isMinimized, setIsMinimized] = (0, import_react.useState)(false);
	const [isPasscodeOpen, setIsPasscodeOpen] = (0, import_react.useState)(false);
	const links = [
		{
			href: "/#work",
			label: content.nav.work,
			icon: Briefcase
		},
		{
			href: "/#ops",
			label: content.nav.ops,
			icon: Cpu
		},
		{
			href: "/#lab",
			label: content.nav.lab,
			icon: FlaskConical
		},
		{
			href: "/#about",
			label: content.nav.about,
			icon: User
		},
		{
			href: "/#contact",
			label: content.nav.contact,
			icon: Mail
		}
	];
	function handleStudioClick(e) {
		if (e) e.preventDefault();
		if (isStudioUnlocked()) {
			setIsDrawerOpen(false);
			navigate({ to: "/studio" });
		} else setIsPasscodeOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 border-b border-border/80 bg-surface/85 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsDrawerOpen(true),
							className: "group flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-fg shadow-xs transition-all duration-200 hover:border-accent hover:bg-surface-2 hover:text-accent active:scale-95",
							"aria-label": "Open sidebar menu",
							title: "Menu Navigasi",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5 transition-transform duration-200 group-hover:scale-110" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "group flex min-h-11 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative size-8 overflow-hidden rounded-full border-2 border-accent shadow-sm shadow-accent/25 transition-transform group-hover:scale-105",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/profile.jpeg",
									alt: content.profile.name,
									className: "size-full object-cover object-top"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold tracking-tight text-fg transition-colors group-hover:text-accent",
									children: content.profile.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "hidden font-mono text-[10px] text-muted sm:inline-block",
									children: [content.profile.initials, " • Data Operations"]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						"aria-label": "Primary",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "inline-flex h-11 items-center px-3 text-sm font-medium text-muted transition-colors duration-150 hover:text-accent",
							children: t(l.label)
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggleTheme,
								className: "flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-fg shadow-xs transition-all duration-200 hover:border-accent hover:text-accent hover:bg-surface-2 active:scale-95",
								title: theme === "dark" ? "Mode Terang (Putih & Biru)" : "Mode Malam (Night Mode)",
								"aria-label": "Toggle Theme",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 text-amber-400 transition-transform duration-300 hover:rotate-45" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4 text-accent transition-transform duration-300 hover:-rotate-12" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex rounded-[var(--radius-sm)] bg-surface-2 p-0.5 shadow-[var(--shadow-border)] border border-border",
								role: "group",
								"aria-label": "Language",
								children: ["en", "id"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLang(code),
									className: cn("h-8 min-w-10 rounded-[6px] px-2.5 font-mono text-[11px] font-medium tracking-wider uppercase transition-all duration-150", lang === code ? "bg-accent font-semibold text-accent-fg shadow-sm" : "text-muted hover:text-fg"),
									children: code
								}, code))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: handleStudioClick,
								className: "hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5 text-accent" }), t(content.nav.studio)]
							})
						]
					})
				]
			})
		}),
		isDrawerOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 animate-fade-in",
				onClick: () => setIsDrawerOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: cn("fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-surface/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-in-out animate-slide-left", isMinimized ? "w-20" : "w-80 max-w-[85vw]"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border p-4",
						children: [!isMinimized ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-accent shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/profile.jpeg",
									alt: content.profile.name,
									className: "size-full object-cover object-top"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-surface" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-sm font-semibold text-fg truncate",
									children: content.profile.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted truncate",
									children: content.profile.company
								})]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative size-10 overflow-hidden rounded-full border-2 border-accent shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/profile.jpeg",
									alt: content.profile.name,
									className: "size-full object-cover object-top"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsMinimized(!isMinimized),
								className: "rounded-lg p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-accent",
								title: isMinimized ? "Maximize Sidebar" : "Minimize Sidebar",
								"aria-label": isMinimized ? "Maximize Sidebar" : "Minimize Sidebar",
								children: isMinimized ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsDrawerOpen(false),
								className: "rounded-lg p-1.5 text-muted transition-colors hover:bg-surface-2 hover:text-fg",
								title: "Close",
								"aria-label": "Close",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex-1 overflow-y-auto p-3 space-y-1",
						"aria-label": "Sidebar Navigation",
						children: [
							!isMinimized && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-faint",
								children: "Menu Utama"
							}),
							links.map((l) => {
								const Icon = l.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: l.href,
									onClick: () => setIsDrawerOpen(false),
									className: cn("group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-all duration-150 hover:bg-surface-2 hover:text-accent hover:translate-x-1", isMinimized && "justify-center px-0 hover:translate-x-0"),
									title: isMinimized ? t(l.label) : void 0,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 shrink-0 text-muted transition-colors group-hover:text-accent" }),
										!isMinimized && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex-1 transition-colors group-hover:text-accent font-medium",
											children: t(l.label)
										}),
										!isMinimized && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent" })
									]
								}, l.href);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 mt-3 border-t border-border",
								children: [!isMinimized && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-faint",
									children: "Admin Tools"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleStudioClick,
									className: cn("group w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-all duration-150 hover:bg-surface-2 hover:text-accent hover:translate-x-1 text-left", isMinimized && "justify-center px-0 hover:translate-x-0"),
									title: isMinimized ? `${t(content.nav.studio)} (Protected)` : void 0,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-5 shrink-0 text-accent transition-transform group-hover:scale-110" }),
										!isMinimized && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-accent leading-none",
												children: t(content.nav.studio)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[11px] text-muted leading-none",
												children: "Password Protected"
											})]
										}),
										!isMinimized && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] font-medium text-accent",
											children: "PIN"
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border p-3 bg-surface-2/40",
						children: !isMinimized ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between px-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-muted",
									children: "Mode Tampilan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: toggleTheme,
									className: "flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-fg shadow-2xs hover:border-accent hover:text-accent",
									children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-3.5 text-accent" }), "Night Mode"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-3.5 text-amber-500" }), "Light Mode"] })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1.5 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLang("en"),
									className: cn("flex-1 h-8 rounded-lg font-mono text-xs font-medium transition-all", lang === "en" ? "bg-accent text-accent-fg shadow-xs" : "bg-surface text-muted hover:text-fg border border-border"),
									children: "English"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLang("id"),
									className: cn("flex-1 h-8 rounded-lg font-mono text-xs font-medium transition-all", lang === "id" ? "bg-accent text-accent-fg shadow-xs" : "bg-surface text-muted hover:text-fg border border-border"),
									children: "Indonesia"
								})]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggleTheme,
								className: "p-1 text-muted hover:text-accent",
								title: "Toggle Theme",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4 text-accent" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs font-bold uppercase text-accent",
								children: lang
							})]
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasscodeModal, {
			isOpen: isPasscodeOpen,
			onClose: () => setIsPasscodeOpen(false),
			onSuccess: () => {
				setIsDrawerOpen(false);
				navigate({ to: "/studio" });
			}
		})
	] });
}
//#endregion
export { SiteHeader as a, lockStudio as c, PasscodeModal as i, Button as n, cn as o, CORRECT_PIN as r, isStudioUnlocked as s, AUTH_STORAGE_KEY as t };
