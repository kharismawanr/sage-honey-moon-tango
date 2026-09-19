import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cxrfl9rl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var STORAGE_KEY$1 = "portfolio-lang";
var I18nContext = (0, import_react.createContext)(null);
function I18nProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY$1);
			if (stored === "en" || stored === "id") setLangState(stored);
		} catch {}
	}, []);
	const setLang = (0, import_react.useCallback)((next) => {
		setLangState(next);
		try {
			localStorage.setItem(STORAGE_KEY$1, next);
		} catch {}
		if (typeof document !== "undefined") document.documentElement.lang = next === "id" ? "id" : "en";
	}, []);
	const t = (0, import_react.useCallback)((value) => value[lang] || value.en, [lang]);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang,
		t
	}), [
		lang,
		setLang,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) throw new Error("useI18n must be used within I18nProvider");
	return ctx;
}
var site = {
	profile: {
		name: "Kharismawan Ramadhan",
		initials: "KR",
		title: {
			en: "Project Manager, Data Operations",
			id: "Project Manager, Data Operations"
		},
		specialty: {
			en: "Data annotation · Identity fraud review",
			id: "Anotasi data · Review fraud identitas"
		},
		company: "PT Advance Intelligence Indonesia",
		years: 7,
		location: {
			en: "Indonesia",
			id: "Indonesia"
		},
		email: "kharismawan.ramadhan@gmail.com",
		phone: "+6281380927827",
		phoneDisplay: "+62 813-8092-7827",
		linkedin: "",
		education: {
			degree: {
				en: "B.Eng. Industrial Engineering",
				id: "S1 Teknik Industri"
			},
			school: "Universitas Gunadarma"
		},
		availability: {
			en: "Open to operations, identity, and AI-ops conversations",
			id: "Terbuka untuk percakapan operations, identity, dan AI-ops"
		}
	},
	nav: {
		work: {
			en: "Work",
			id: "Karya"
		},
		ops: {
			en: "Operations",
			id: "Operasional"
		},
		lab: {
			en: "Lab",
			id: "Lab"
		},
		about: {
			en: "About",
			id: "Tentang"
		},
		contact: {
			en: "Contact",
			id: "Kontak"
		},
		studio: {
			en: "Edit content",
			id: "Edit konten"
		}
	},
	hero: {
		kicker: {
			en: "Manual review · Annotation ops · Adversarial testing",
			id: "Manual review · Operasi anotasi · Uji adversarial"
		},
		headline: {
			en: "I run the human layer of identity AI.",
			id: "Saya menjalankan lapisan manusia di identity AI."
		},
		sub: {
			en: "Seven years as Project Manager, Data Operations at PT Advance Intelligence Indonesia — staffing annotation, guarding quality, and red-teaming eKYC products: liveness, forgery, face compare, IQA, and OCR.",
			id: "Tujuh tahun sebagai Project Manager, Data Operations di PT Advance Intelligence Indonesia — mengatur anotasi, menjaga kualitas, dan menguji produk eKYC: liveness, forgery, face compare, IQA, dan OCR."
		},
		primaryCta: {
			en: "See the work",
			id: "Lihat karya"
		},
		secondaryCta: {
			en: "Get in touch",
			id: "Hubungi"
		},
		scanLabel: {
			en: "Live review viewport",
			id: "Viewport review"
		}
	},
	stats: [
		{
			id: "years",
			value: "7",
			label: {
				en: "Years in data ops",
				id: "Tahun di data ops"
			}
		},
		{
			id: "reviewers",
			value: "40",
			label: {
				en: "Reviewers on MRP",
				id: "Reviewer di MRP"
			}
		},
		{
			id: "vendors",
			value: "2",
			label: {
				en: "Active vendors",
				id: "Vendor aktif"
			}
		},
		{
			id: "lines",
			value: "5+",
			label: {
				en: "eKYC product lines",
				id: "Lini produk eKYC"
			}
		}
	],
	about: {
		title: {
			en: "About",
			id: "Tentang"
		},
		lead: {
			en: "Identity models only work if the data, the reviewers, and the attacks are honest. That is the job.",
			id: "Model identitas hanya andal jika datanya, reviewernya, dan serangannya jujur. Itu pekerjaannya."
		},
		body: [
			{
				en: "Every day I analyse faces and identity documents — national IDs, passports, driver licenses — to decide whether a client is under attack from fraudsters. Print, screen, mask, injection, deepfake: the artefacts change, the operational question does not.",
				id: "Setiap hari saya menganalisa wajah dan dokumen identitas — KTP, paspor, SIM — untuk menentukan apakah klien terkena serangan fraudster. Print, layar, topeng, injeksi, deepfake: artefaknya berubah, pertanyaan operasionalnya tidak."
			},
			{
				en: "Annotation work arrives from R&D. I break it into tasks, staff part-time annotators, watch the deadline, and own the quality of what comes back. When the product needs humans in the loop, I run crowdtesting. When it needs to fail safely, I act like the attacker.",
				id: "Pekerjaan anotasi datang dari R&D. Saya pecah menjadi task, salurkan ke annotator paruh waktu, jaga deadline, dan tanggung jawab pada kualitas hasil. Jika produk butuh manusia di loop, saya jalankan crowdtesting. Jika perlu gagal dengan aman, saya berperan sebagai penyerang."
			},
			{
				en: "I also run the unglamorous machinery: monthly annotator payroll, Coupa PR/PO and invoices, hiring, shift planning, and training so accuracy and handling time hold as the queue moves.",
				id: "Saya juga menjalankan mesin yang jarang terlihat: payroll annotator bulanan, Coupa PR/PO dan invoice, hiring, perencanaan shift, dan training agar akurasi serta handling time tetap terjaga."
			}
		]
	},
	skillsTitle: {
		en: "Capabilities",
		id: "Kapabilitas"
	},
	skillsLead: {
		en: "A stack that sits between research, vendors, and production identity traffic.",
		id: "Stack yang berdiri di antara riset, vendor, dan traffic identitas produksi."
	},
	skillGroups: [
		{
			id: "identity",
			title: {
				en: "Identity & fraud",
				id: "Identitas & fraud"
			},
			items: [
				{
					en: "Face and ID document review",
					id: "Review wajah dan dokumen identitas"
				},
				{
					en: "Forgery and print / screen attacks",
					id: "Forgery serta serangan print / layar"
				},
				{
					en: "Liveness injection & 3D mask tests",
					id: "Injeksi liveness & uji topeng 3D"
				},
				{
					en: "Deepfake attack testing",
					id: "Uji serangan deepfake"
				},
				{
					en: "IQA and OCR analysis",
					id: "Analisa IQA dan OCR"
				}
			]
		},
		{
			id: "ops",
			title: {
				en: "Operations",
				id: "Operasional"
			},
			items: [
				{
					en: "Annotation program management",
					id: "Manajemen program anotasi"
				},
				{
					en: "Quality and deadline control",
					id: "Kontrol kualitas dan deadline"
				},
				{
					en: "Vendor & workforce management",
					id: "Manajemen vendor & tenaga kerja"
				},
				{
					en: "Shift planning and payroll",
					id: "Perencanaan shift dan payroll"
				},
				{
					en: "Coupa PR / PO / invoices",
					id: "Coupa PR / PO / invoice"
				}
			]
		},
		{
			id: "ai",
			title: {
				en: "AI-assisted ops",
				id: "Ops berbantuan AI"
			},
			items: [
				{
					en: "Cursor, Claude Code, OpenCode",
					id: "Cursor, Claude Code, OpenCode"
				},
				{
					en: "OpenClaw, Hermes agent",
					id: "OpenClaw, Hermes agent"
				},
				{
					en: "Auto task creation on annotation platforms",
					id: "Otomasi pembuatan task di platform anotasi"
				},
				{
					en: "Payroll platform automation",
					id: "Otomasi platform penggajian"
				},
				{
					en: "Reviewer training for accuracy & AHT",
					id: "Training reviewer untuk akurasi & AHT"
				}
			]
		}
	],
	experienceTitle: {
		en: "Experience",
		id: "Pengalaman"
	},
	experience: [{
		id: "advance",
		role: {
			en: "Project Manager, Data Operations — Data Annotation",
			id: "Project Manager, Data Operations — Data Annotation"
		},
		org: "PT Advance Intelligence Indonesia",
		period: {
			en: "7 years · present",
			id: "7 tahun · saat ini"
		},
		summary: {
			en: "Own the operational path from R&D spec to labelled data, live manual review, and adversarial tests on eKYC products (liveness detection, forgery detection, and related identity stack).",
			id: "Memegang jalur operasional dari spek R&D ke data teranotasi, manual review live, dan uji adversarial pada produk eKYC (liveness detection, forgery detection, dan stack identitas terkait)."
		},
		points: [
			{
				en: "Run annotation programs: receive flow from R&D, staff part-time annotators, hit deadlines, audit quality.",
				id: "Menjalankan program anotasi: terima alur dari R&D, salurkan ke annotator paruh waktu, kejar deadline, audit kualitas."
			},
			{
				en: "Lead Manual Review Platform (MRP) across 2 vendors and 40 reviewers — hiring, shifts, payroll, accuracy and handling-time training.",
				id: "Memimpin Manual Review Platform (MRP) di 2 vendor dan 40 reviewer — hiring, shift, payroll, training akurasi dan handling time."
			},
			{
				en: "Red-team liveness and document pipelines: inject liveness, 3D masks, screen replay, deepfake image attacks.",
				id: "Red-team pipeline liveness dan dokumen: injeksi liveness, topeng 3D, screen replay, serangan gambar deepfake."
			},
			{
				en: "Operate Coupa for funding requests, PR, PO, and invoices; close monthly annotator payroll.",
				id: "Mengoperasikan Coupa untuk request dana, PR, PO, dan invoice; menutup payroll annotator bulanan."
			}
		]
	}],
	projectsTitle: {
		en: "Selected programs",
		id: "Program terpilih"
	},
	projectsLead: {
		en: "The same desk covers labelling, live review, product testing, and the payroll that keeps the queue moving.",
		id: "Meja yang sama mengurus labelling, review live, testing produk, dan payroll yang menjaga antrean bergerak."
	},
	projects: [
		{
			id: "mrp",
			title: {
				en: "Manual Review Platform",
				id: "Manual Review Platform"
			},
			category: {
				en: "Workforce ops",
				id: "Ops tenaga kerja"
			},
			summary: {
				en: "Current program: two vendors, forty reviewers. Hiring, shift math, payroll, and training so accuracy and handling time stay inside the bar.",
				id: "Program saat ini: dua vendor, empat puluh reviewer. Hiring, perhitungan shift, payroll, dan training agar akurasi serta handling time tetap dalam batas."
			},
			points: [{
				en: "Own end-to-end reviewer operations, not just headcount.",
				id: "Memegang operasional reviewer end-to-end, bukan hanya headcount."
			}, {
				en: "Train for accuracy and handling time as volume moves.",
				id: "Melatih akurasi dan handling time seiring volume."
			}],
			tags: [
				"MRP",
				"Hiring",
				"Shifts",
				"Payroll",
				"QA"
			],
			status: "active"
		},
		{
			id: "annotation",
			title: {
				en: "Annotation delivery",
				id: "Delivery anotasi"
			},
			category: {
				en: "Data ops",
				id: "Data ops"
			},
			summary: {
				en: "R&D hands over a data flow. I turn it into tasks, staff part-timers, and ship labelled sets on deadline without letting quality drift.",
				id: "R&D menyerahkan alur data. Saya ubah menjadi task, staff annotator paruh waktu, dan kirim set teranotasi sesuai deadline tanpa membiarkan kualitas turun."
			},
			points: [{
				en: "Tasking, staffing, QC, and deadline ownership in one loop.",
				id: "Tasking, staffing, QC, dan ownership deadline dalam satu loop."
			}],
			tags: [
				"Annotation",
				"QC",
				"Deadline"
			],
			status: "core"
		},
		{
			id: "face-compare",
			title: {
				en: "Face Compare",
				id: "Face Compare"
			},
			category: {
				en: "eKYC product",
				id: "Produk eKYC"
			},
			summary: {
				en: "Annotation and review for face-to-document and face-to-face matching — catching mismatches before they become onboarding fraud.",
				id: "Anotasi dan review untuk pencocokan wajah-ke-dokumen dan wajah-ke-wajah — menangkap mismatch sebelum menjadi fraud onboarding."
			},
			points: [],
			tags: [
				"Face",
				"Match",
				"Onboarding"
			],
			status: "core"
		},
		{
			id: "liveness",
			title: {
				en: "Liveness Detection",
				id: "Liveness Detection"
			},
			category: {
				en: "eKYC product",
				id: "Produk eKYC"
			},
			summary: {
				en: "Product testing and fraud simulation against the liveness stack used in eKYC — including injection, 3D masks, and screen attacks.",
				id: "Testing produk dan simulasi fraud terhadap stack liveness eKYC — termasuk injeksi, topeng 3D, dan serangan layar."
			},
			points: [],
			tags: [
				"Liveness",
				"Injection",
				"Mask",
				"Screen"
			],
			status: "core"
		},
		{
			id: "forgery",
			title: {
				en: "Forgery Detection",
				id: "Forgery Detection"
			},
			category: {
				en: "eKYC product",
				id: "Produk eKYC"
			},
			summary: {
				en: "Document attack review on IDs, passports, and driver licenses — print, recapture, and composite forgeries.",
				id: "Review serangan dokumen pada KTP, paspor, dan SIM — print, recapture, dan forgeri komposit."
			},
			points: [],
			tags: [
				"ID",
				"Passport",
				"DL",
				"Forgery"
			],
			status: "core"
		},
		{
			id: "iqa",
			title: {
				en: "IQA Analysis",
				id: "Analisa IQA"
			},
			category: {
				en: "eKYC product",
				id: "Produk eKYC"
			},
			summary: {
				en: "Image-quality annotation and crowdtesting so blur, glare, crop, and capture issues fail closed instead of poisoning the model.",
				id: "Anotasi kualitas gambar dan crowdtesting agar blur, silau, crop, dan masalah capture gagal dengan aman, bukan meracuni model."
			},
			points: [],
			tags: [
				"IQA",
				"Capture",
				"Cards"
			],
			status: "core"
		},
		{
			id: "ocr",
			title: {
				en: "OCR Analysis",
				id: "Analisa OCR"
			},
			category: {
				en: "eKYC product",
				id: "Produk eKYC"
			},
			summary: {
				en: "Field-level review of extracted identity text — names, numbers, dates — against the source document.",
				id: "Review tingkat field atas teks identitas hasil ekstraksi — nama, nomor, tanggal — terhadap dokumen sumber."
			},
			points: [],
			tags: [
				"OCR",
				"Fields",
				"Documents"
			],
			status: "core"
		},
		{
			id: "crowd",
			title: {
				en: "Crowdtesting",
				id: "Crowdtesting"
			},
			category: {
				en: "Product QA",
				id: "QA produk"
			},
			summary: {
				en: "Recruit and run people against R&D apps — typically liveness and card IQA — to see whether the product behaves in the wild.",
				id: "Mencari dan menjalankan orang untuk mengetes app R&D — biasanya liveness dan IQA kartu — untuk melihat apakah produk berjalan normal di lapangan."
			},
			points: [],
			tags: [
				"Crowd",
				"Liveness",
				"IQA"
			],
			status: "ops"
		},
		{
			id: "redteam",
			title: {
				en: "Fraud red team",
				id: "Red team fraud"
			},
			category: {
				en: "Adversarial",
				id: "Adversarial"
			},
			summary: {
				en: "Do what fraudsters do: inject liveness, wear 3D masks, replay screens, generate deepfakes, and file the findings back to product.",
				id: "Melakukan apa yang fraudster lakukan: injeksi liveness, topeng 3D, replay layar, membuat deepfake, dan mengembalikan temuan ke produk."
			},
			points: [],
			tags: [
				"Deepfake",
				"Mask",
				"Injection",
				"Replay"
			],
			status: "core"
		},
		{
			id: "automation",
			title: {
				en: "Ops automation",
				id: "Otomasi ops"
			},
			category: {
				en: "Internal tools",
				id: "Tools internal"
			},
			summary: {
				en: "Agent-assisted workflows that auto-create annotation tasks and drive the payroll platform — less copy-paste, fewer missed cycles.",
				id: "Alur berbantuan agent yang membuat task anotasi otomatis dan menggerakkan platform payroll — lebih sedikit copy-paste, lebih sedikit siklus terlewat."
			},
			points: [],
			tags: [
				"Agents",
				"Cursor",
				"Claude Code",
				"Payroll"
			],
			status: "ops"
		},
		{
			id: "expense",
			title: {
				en: "Family expense tracker",
				id: "Expense tracker keluarga"
			},
			category: {
				en: "Home lab",
				id: "Home lab"
			},
			summary: {
				en: "Tracks my spend, my wife's, and shared household costs. Hermes Agent sits on WhatsApp — log an expense by chat, no need to open the app.",
				id: "Mencatat pengeluaran saya, istri, dan pengeluaran bersama. Hermes Agent di WhatsApp — catat lewat chat, tanpa buka aplikasinya."
			},
			points: [{
				en: "WhatsApp → Hermes Agent → home server, so capture happens in the conversation you already use.",
				id: "WhatsApp → Hermes Agent → home server, jadi pencatatan terjadi di percakapan yang sudah dipakai."
			}],
			tags: [
				"n8n",
				"Hermes",
				"WhatsApp",
				"Self-hosted"
			],
			status: "ops"
		}
	],
	toolsTitle: {
		en: "Desk stack",
		id: "Stack di meja"
	},
	tools: [
		"Cursor",
		"Claude Code",
		"OpenCode",
		"OpenClaw",
		"Hermes",
		"Coupa",
		"Annotation platforms",
		"Payroll platforms",
		"n8n",
		"Immich",
		"Nextcloud"
	],
	opsCards: [
		{
			id: "ann",
			title: {
				en: "Annotation",
				id: "Anotasi"
			},
			body: {
				en: "R&D flow → tasks → part-time annotators → QC → deadline.",
				id: "Alur R&D → task → annotator paruh waktu → QC → deadline."
			}
		},
		{
			id: "mrp",
			title: {
				en: "MRP",
				id: "MRP"
			},
			body: {
				en: "2 vendors · 40 reviewers · hiring, shifts, payroll, training.",
				id: "2 vendor · 40 reviewer · hiring, shift, payroll, training."
			}
		},
		{
			id: "red",
			title: {
				en: "Red team",
				id: "Red team"
			},
			body: {
				en: "Injection, 3D mask, screen replay, deepfake attack tests.",
				id: "Injeksi, topeng 3D, screen replay, uji serangan deepfake."
			}
		},
		{
			id: "coupa",
			title: {
				en: "Coupa + payroll",
				id: "Coupa + payroll"
			},
			body: {
				en: "PR / PO / invoices and monthly annotator payroll close.",
				id: "PR / PO / invoice dan tutup payroll annotator bulanan."
			}
		}
	],
	labTitle: {
		en: "Home lab",
		id: "Home lab"
	},
	labLead: {
		en: "Off hours I tinker with AI agents and a self-hosted stack — the same ops instinct, pointed at the house.",
		id: "Di luar jam kerja saya mengulik AI agent dan stack self-hosted — insting ops yang sama, diarahkan ke rumah."
	},
	labItems: [
		{
			id: "n8n",
			title: {
				en: "n8n",
				id: "n8n"
			},
			body: {
				en: "Workflow automation for the services on the home server.",
				id: "Otomasi workflow untuk layanan di home server."
			}
		},
		{
			id: "hermes",
			title: {
				en: "Hermes Agent",
				id: "Hermes Agent"
			},
			body: {
				en: "Problem-solving partner and reminder system — also the WhatsApp front door for logging expenses.",
				id: "Teman problem solving dan pengingat — sekaligus pintu WhatsApp untuk mencatat pengeluaran."
			}
		},
		{
			id: "immich",
			title: {
				en: "Immich",
				id: "Immich"
			},
			body: {
				en: "Self-hosted photo backup.",
				id: "Backup foto self-hosted."
			}
		},
		{
			id: "nextcloud",
			title: {
				en: "Nextcloud",
				id: "Nextcloud"
			},
			body: {
				en: "Backup for important files.",
				id: "Backup file-file penting."
			}
		},
		{
			id: "expense",
			title: {
				en: "Expense tracker",
				id: "Expense tracker"
			},
			body: {
				en: "Personal, spouse, and shared spend — input via WhatsApp chat to Hermes, written to the home server.",
				id: "Pengeluaran pribadi, istri, dan bersama — input lewat chat WA ke Hermes, tersimpan di home server."
			}
		}
	],
	educationTitle: {
		en: "Education",
		id: "Pendidikan"
	},
	contactTitle: {
		en: "Contact",
		id: "Kontak"
	},
	contactLead: {
		en: "For annotation programs, manual review operations, identity-fraud testing, or a note about the lab.",
		id: "Untuk program anotasi, operasional manual review, pengujian fraud identitas, atau obrolan soal lab."
	},
	footer: {
		mark: {
			en: "Identity review operations",
			id: "Operasi review identitas"
		},
		editHint: {
			en: "Content is editable in this browser via Edit content. Export JSON and paste it into site.ts to make it permanent.",
			id: "Konten bisa diedit di browser ini lewat Edit konten. Export JSON lalu tempel ke site.ts agar permanen."
		}
	},
	studio: {
		title: {
			en: "Content studio",
			id: "Studio konten"
		},
		lead: {
			en: "Changes save in this browser only. Export JSON and give it to your AI (or paste into src/content/site.ts) to publish permanently.",
			id: "Perubahan hanya tersimpan di browser ini. Export JSON dan berikan ke AI Anda (atau tempel ke src/content/site.ts) agar terbit permanen."
		},
		saved: {
			en: "Saved locally",
			id: "Tersimpan lokal"
		},
		reset: {
			en: "Reset to default",
			id: "Kembali ke default"
		},
		export: {
			en: "Export JSON",
			id: "Export JSON"
		},
		import: {
			en: "Import JSON",
			id: "Import JSON"
		},
		back: {
			en: "Back to site",
			id: "Kembali ke situs"
		}
	},
	verdicts: [
		{
			code: "PASS",
			label: {
				en: "Liveness hold",
				id: "Liveness lolos"
			}
		},
		{
			code: "FLAG",
			label: {
				en: "Print attack",
				id: "Serangan print"
			}
		},
		{
			code: "RETRY",
			label: {
				en: "IQA fail",
				id: "IQA gagal"
			}
		},
		{
			code: "REVIEW",
			label: {
				en: "Face mismatch",
				id: "Wajah tidak cocok"
			}
		}
	]
};
var STORAGE_KEY = "portfolio-content-overlay-v2";
var ContentContext = (0, import_react.createContext)(null);
function cloneSite() {
	return structuredClone(site);
}
function ContentProvider({ children }) {
	const [content, setContentState] = (0, import_react.useState)(site);
	const [isCustom, setIsCustom] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw);
			if (parsed && parsed.profile && parsed.projects) {
				setContentState(parsed);
				setIsCustom(true);
			}
		} catch {}
	}, []);
	const persist = (0, import_react.useCallback)((next) => {
		setContentState(next);
		setIsCustom(true);
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
		} catch {}
	}, []);
	const reset = (0, import_react.useCallback)(() => {
		const fresh = cloneSite();
		setContentState(fresh);
		setIsCustom(false);
		try {
			localStorage.removeItem(STORAGE_KEY);
		} catch {}
	}, []);
	const exportJson = (0, import_react.useCallback)(() => JSON.stringify(content, null, 2), [content]);
	const importJson = (0, import_react.useCallback)((raw) => {
		const parsed = JSON.parse(raw);
		if (!parsed?.profile?.name || !Array.isArray(parsed.projects)) throw new Error("Invalid content file");
		persist(parsed);
	}, [persist]);
	const value = (0, import_react.useMemo)(() => ({
		content,
		isCustom,
		setContent: persist,
		reset,
		exportJson,
		importJson
	}), [
		content,
		isCustom,
		persist,
		reset,
		exportJson,
		importJson
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentContext.Provider, {
		value,
		children
	});
}
function useContent() {
	const ctx = (0, import_react.useContext)(ContentContext);
	if (!ctx) throw new Error("useContent must be used within ContentProvider");
	return ctx;
}
var ThemeContext = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return "dark";
		const saved = localStorage.getItem("theme");
		if (saved === "dark" || saved === "light") return saved;
		return "dark";
	});
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
			root.setAttribute("data-theme", "dark");
		} else {
			root.classList.remove("dark");
			root.setAttribute("data-theme", "light");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);
	function toggleTheme() {
		setThemeState((prev) => prev === "dark" ? "light" : "dark");
	}
	function setTheme(t) {
		setThemeState(t);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme,
			setTheme
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
var styles_default = "/assets/styles-UXfvqS5-.css";
var APP_NAME = "Identity Review Ops";
var Route$2 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Portfolio of a Project Manager, Data Operations - identity annotation, eKYC fraud review, and manual review operations."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$1 = () => import("./routes-CU0X-IEb.mjs");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./studio-Brc8sXHO.mjs");
var Route = createFileRoute("/studio")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	StudioRoute: Route.update({
		id: "/studio",
		path: "/studio",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useI18n as a, site as i, useTheme as n, useContent as r, router_exports as t };
