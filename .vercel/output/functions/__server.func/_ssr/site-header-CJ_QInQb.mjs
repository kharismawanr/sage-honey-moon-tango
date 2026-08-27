import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useI18n, n as useContent } from "./router-g3_3KJzQ.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-CJ_QInQb.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg shadow-[var(--shadow-border)] hover:opacity-90",
			secondary: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-surface-2",
			ghost: "bg-transparent text-muted hover:text-fg hover:bg-surface-2"
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
function SiteHeader() {
	const { lang, setLang, t } = useI18n();
	const { content } = useContent();
	const links = [
		{
			href: "/#work",
			label: content.nav.work
		},
		{
			href: "/#ops",
			label: content.nav.ops
		},
		{
			href: "/#about",
			label: content.nav.about
		},
		{
			href: "/#contact",
			label: content.nav.contact
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-h-11 items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-8 items-center justify-center rounded-[var(--radius-xs)] bg-surface-2 font-mono text-[11px] tracking-wider text-accent shadow-[var(--shadow-border)]",
						children: content.profile.initials
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-sm text-fg sm:block",
						children: content.profile.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "inline-flex h-11 items-center px-3 text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: t(l.label)
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex rounded-[var(--radius-sm)] p-0.5 shadow-[var(--shadow-border)]",
						role: "group",
						"aria-label": "Language",
						children: ["en", "id"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(code),
							className: cn("h-9 min-w-11 rounded-[6px] px-2.5 font-mono text-[11px] tracking-wider uppercase transition-colors duration-150", lang === code ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"),
							children: code
						}, code))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/studio",
							children: t(content.nav.studio)
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { SiteHeader as n, cn as r, Button as t };
