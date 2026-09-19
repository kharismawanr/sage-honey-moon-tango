/**
 * ============================================================
 *  EDIT THIS FILE to update the portfolio.
 *  Semua teks ada di sini — tidak perlu menyentuh komponen.
 *
 *  Setiap teks punya `en` (default) dan `id`.
 *  Ganti "Your Name", email, LinkedIn, lalu sesuaikan project.
 * ============================================================
 */

export type Lang = "en" | "id";

export type Localized = { en: string; id: string };

export type Project = {
  id: string;
  title: Localized;
  category: Localized;
  summary: Localized;
  points: Localized[];
  tags: string[];
  status: "active" | "core" | "ops";
};

export type Experience = {
  id: string;
  role: Localized;
  org: string;
  period: Localized;
  summary: Localized;
  points: Localized[];
};

export type SkillGroup = {
  id: string;
  title: Localized;
  items: Localized[];
};

export type Stat = {
  id: string;
  value: string;
  label: Localized;
};

export const site = {
  profile: {
    name: "Kharismawan Ramadhan",
    initials: "KR",
    title: {
      en: "Project Manager, Data Operations",
      id: "Project Manager, Data Operations",
    } satisfies Localized,
    specialty: {
      en: "Data annotation · Identity fraud review",
      id: "Anotasi data · Review fraud identitas",
    } satisfies Localized,
    company: "PT Advance Intelligence Indonesia",
    years: 7,
    location: { en: "Indonesia", id: "Indonesia" } satisfies Localized,
    email: "kharismawan.ramadhan@gmail.com",
    phone: "+6281380927827",
    phoneDisplay: "+62 813-8092-7827",
    linkedin: "https://www.linkedin.com/in/kharismawan-ramadhan-314346159/",
    education: {
      degree: {
        en: "B.Eng. Industrial Engineering",
        id: "S1 Teknik Industri",
      },
      school: "Universitas Gunadarma",
    },
    availability: {
      en: "Open to operations, identity, and AI-ops conversations",
      id: "Terbuka untuk percakapan operations, identity, dan AI-ops",
    } satisfies Localized,
  },

  nav: {
    work: { en: "Work", id: "Karya" } satisfies Localized,
    ops: { en: "Operations", id: "Operasional" } satisfies Localized,
    lab: { en: "Lab", id: "Lab" } satisfies Localized,
    about: { en: "About", id: "Tentang" } satisfies Localized,
    contact: { en: "Contact", id: "Kontak" } satisfies Localized,
    studio: { en: "Edit content", id: "Edit konten" } satisfies Localized,
  },

  hero: {
    kicker: {
      en: "Manual review · Annotation ops · Adversarial testing",
      id: "Manual review · Operasi anotasi · Uji adversarial",
    } satisfies Localized,
    headline: {
      en: "I run the human layer of identity AI.",
      id: "Saya menjalankan lapisan manusia di identity AI.",
    } satisfies Localized,
    sub: {
      en: "Seven years as Project Manager, Data Operations at PT Advance Intelligence Indonesia — staffing annotation, guarding quality, and red-teaming eKYC products: liveness, forgery, face compare, IQA, and OCR.",
      id: "Tujuh tahun sebagai Project Manager, Data Operations di PT Advance Intelligence Indonesia — mengatur anotasi, menjaga kualitas, dan menguji produk eKYC: liveness, forgery, face compare, IQA, dan OCR.",
    } satisfies Localized,
    primaryCta: { en: "See the work", id: "Lihat karya" } satisfies Localized,
    secondaryCta: { en: "Get in touch", id: "Hubungi" } satisfies Localized,
    scanLabel: { en: "Live review viewport", id: "Viewport review" } satisfies Localized,
  },

  stats: [
    {
      id: "years",
      value: "7",
      label: { en: "Years in data ops", id: "Tahun di data ops" },
    },
    {
      id: "reviewers",
      value: "40",
      label: { en: "Reviewers on MRP", id: "Reviewer di MRP" },
    },
    {
      id: "vendors",
      value: "2",
      label: { en: "Active vendors", id: "Vendor aktif" },
    },
    {
      id: "lines",
      value: "5+",
      label: { en: "eKYC product lines", id: "Lini produk eKYC" },
    },
  ] satisfies Stat[],

  about: {
    title: { en: "About", id: "Tentang" } satisfies Localized,
    lead: {
      en: "Identity models only work if the data, the reviewers, and the attacks are honest. That is the job.",
      id: "Model identitas hanya andal jika datanya, reviewernya, dan serangannya jujur. Itu pekerjaannya.",
    } satisfies Localized,
    body: [
      {
        en: "Every day I analyse faces and identity documents — national IDs, passports, driver licenses — to decide whether a client is under attack from fraudsters. Print, screen, mask, injection, deepfake: the artefacts change, the operational question does not.",
        id: "Setiap hari saya menganalisa wajah dan dokumen identitas — KTP, paspor, SIM — untuk menentukan apakah klien terkena serangan fraudster. Print, layar, topeng, injeksi, deepfake: artefaknya berubah, pertanyaan operasionalnya tidak.",
      },
      {
        en: "Annotation work arrives from R&D. I break it into tasks, staff part-time annotators, watch the deadline, and own the quality of what comes back. When the product needs humans in the loop, I run crowdtesting. When it needs to fail safely, I act like the attacker.",
        id: "Pekerjaan anotasi datang dari R&D. Saya pecah menjadi task, salurkan ke annotator paruh waktu, jaga deadline, dan tanggung jawab pada kualitas hasil. Jika produk butuh manusia di loop, saya jalankan crowdtesting. Jika perlu gagal dengan aman, saya berperan sebagai penyerang.",
      },
      {
        en: "I also run the unglamorous machinery: monthly annotator payroll, Coupa PR/PO and invoices, hiring, shift planning, and training so accuracy and handling time hold as the queue moves.",
        id: "Saya juga menjalankan mesin yang jarang terlihat: payroll annotator bulanan, Coupa PR/PO dan invoice, hiring, perencanaan shift, dan training agar akurasi serta handling time tetap terjaga.",
      },
    ] satisfies Localized[],
  },

  skillsTitle: { en: "Capabilities", id: "Kapabilitas" } satisfies Localized,
  skillsLead: {
    en: "A stack that sits between research, vendors, and production identity traffic.",
    id: "Stack yang berdiri di antara riset, vendor, dan traffic identitas produksi.",
  } satisfies Localized,

  skillGroups: [
    {
      id: "identity",
      title: { en: "Identity & fraud", id: "Identitas & fraud" },
      items: [
        { en: "Face and ID document review", id: "Review wajah dan dokumen identitas" },
        { en: "Forgery and print / screen attacks", id: "Forgery serta serangan print / layar" },
        { en: "Liveness injection & 3D mask tests", id: "Injeksi liveness & uji topeng 3D" },
        { en: "Deepfake attack testing", id: "Uji serangan deepfake" },
        { en: "IQA and OCR analysis", id: "Analisa IQA dan OCR" },
      ],
    },
    {
      id: "ops",
      title: { en: "Operations", id: "Operasional" },
      items: [
        { en: "Annotation program management", id: "Manajemen program anotasi" },
        { en: "Quality and deadline control", id: "Kontrol kualitas dan deadline" },
        { en: "Vendor & workforce management", id: "Manajemen vendor & tenaga kerja" },
        { en: "Shift planning and payroll", id: "Perencanaan shift dan payroll" },
        { en: "Coupa PR / PO / invoices", id: "Coupa PR / PO / invoice" },
      ],
    },
    {
      id: "ai",
      title: { en: "AI-assisted ops", id: "Ops berbantuan AI" },
      items: [
        { en: "Cursor, Claude Code, OpenCode", id: "Cursor, Claude Code, OpenCode" },
        { en: "OpenClaw, Hermes agent", id: "OpenClaw, Hermes agent" },
        { en: "Auto task creation on annotation platforms", id: "Otomasi pembuatan task di platform anotasi" },
        { en: "Payroll platform automation", id: "Otomasi platform penggajian" },
        { en: "Reviewer training for accuracy & AHT", id: "Training reviewer untuk akurasi & AHT" },
      ],
    },
  ] satisfies SkillGroup[],

  experienceTitle: { en: "Experience", id: "Pengalaman" } satisfies Localized,
  experience: [
    {
      id: "advance",
      role: {
        en: "Project Manager, Data Operations — Data Annotation",
        id: "Project Manager, Data Operations — Data Annotation",
      },
      org: "PT Advance Intelligence Indonesia",
      period: { en: "7 years · present", id: "7 tahun · saat ini" },
      summary: {
        en: "Own the operational path from R&D spec to labelled data, live manual review, and adversarial tests on eKYC products (liveness detection, forgery detection, and related identity stack).",
        id: "Memegang jalur operasional dari spek R&D ke data teranotasi, manual review live, dan uji adversarial pada produk eKYC (liveness detection, forgery detection, dan stack identitas terkait).",
      },
      points: [
        {
          en: "Run annotation programs: receive flow from R&D, staff part-time annotators, hit deadlines, audit quality.",
          id: "Menjalankan program anotasi: terima alur dari R&D, salurkan ke annotator paruh waktu, kejar deadline, audit kualitas.",
        },
        {
          en: "Lead Manual Review Platform (MRP) across 2 vendors and 40 reviewers — hiring, shifts, payroll, accuracy and handling-time training.",
          id: "Memimpin Manual Review Platform (MRP) di 2 vendor dan 40 reviewer — hiring, shift, payroll, training akurasi dan handling time.",
        },
        {
          en: "Red-team liveness and document pipelines: inject liveness, 3D masks, screen replay, deepfake image attacks.",
          id: "Red-team pipeline liveness dan dokumen: injeksi liveness, topeng 3D, screen replay, serangan gambar deepfake.",
        },
        {
          en: "Operate Coupa for funding requests, PR, PO, and invoices; close monthly annotator payroll.",
          id: "Mengoperasikan Coupa untuk request dana, PR, PO, dan invoice; menutup payroll annotator bulanan.",
        },
      ],
    },
  ] satisfies Experience[],

  projectsTitle: { en: "Selected programs", id: "Program terpilih" } satisfies Localized,
  projectsLead: {
    en: "The same desk covers labelling, live review, product testing, and the payroll that keeps the queue moving.",
    id: "Meja yang sama mengurus labelling, review live, testing produk, dan payroll yang menjaga antrean bergerak.",
  } satisfies Localized,

  projects: [
    {
      id: "mrp",
      title: { en: "Manual Review Platform", id: "Manual Review Platform" },
      category: { en: "Workforce ops", id: "Ops tenaga kerja" },
      summary: {
        en: "Current program: two vendors, forty reviewers. Hiring, shift math, payroll, and training so accuracy and handling time stay inside the bar.",
        id: "Program saat ini: dua vendor, empat puluh reviewer. Hiring, perhitungan shift, payroll, dan training agar akurasi serta handling time tetap dalam batas.",
      },
      points: [
        {
          en: "Own end-to-end reviewer operations, not just headcount.",
          id: "Memegang operasional reviewer end-to-end, bukan hanya headcount.",
        },
        {
          en: "Train for accuracy and handling time as volume moves.",
          id: "Melatih akurasi dan handling time seiring volume.",
        },
      ],
      tags: ["MRP", "Hiring", "Shifts", "Payroll", "QA"],
      status: "active",
    },
    {
      id: "annotation",
      title: { en: "Annotation delivery", id: "Delivery anotasi" },
      category: { en: "Data ops", id: "Data ops" },
      summary: {
        en: "R&D hands over a data flow. I turn it into tasks, staff part-timers, and ship labelled sets on deadline without letting quality drift.",
        id: "R&D menyerahkan alur data. Saya ubah menjadi task, staff annotator paruh waktu, dan kirim set teranotasi sesuai deadline tanpa membiarkan kualitas turun.",
      },
      points: [
        {
          en: "Tasking, staffing, QC, and deadline ownership in one loop.",
          id: "Tasking, staffing, QC, dan ownership deadline dalam satu loop.",
        },
      ],
      tags: ["Annotation", "QC", "Deadline"],
      status: "core",
    },
    {
      id: "face-compare",
      title: { en: "Face Compare", id: "Face Compare" },
      category: { en: "eKYC product", id: "Produk eKYC" },
      summary: {
        en: "Annotation and review for face-to-document and face-to-face matching — catching mismatches before they become onboarding fraud.",
        id: "Anotasi dan review untuk pencocokan wajah-ke-dokumen dan wajah-ke-wajah — menangkap mismatch sebelum menjadi fraud onboarding.",
      },
      points: [],
      tags: ["Face", "Match", "Onboarding"],
      status: "core",
    },
    {
      id: "liveness",
      title: { en: "Liveness Detection", id: "Liveness Detection" },
      category: { en: "eKYC product", id: "Produk eKYC" },
      summary: {
        en: "Product testing and fraud simulation against the liveness stack used in eKYC — including injection, 3D masks, and screen attacks.",
        id: "Testing produk dan simulasi fraud terhadap stack liveness eKYC — termasuk injeksi, topeng 3D, dan serangan layar.",
      },
      points: [],
      tags: ["Liveness", "Injection", "Mask", "Screen"],
      status: "core",
    },
    {
      id: "forgery",
      title: { en: "Forgery Detection", id: "Forgery Detection" },
      category: { en: "eKYC product", id: "Produk eKYC" },
      summary: {
        en: "Document attack review on IDs, passports, and driver licenses — print, recapture, and composite forgeries.",
        id: "Review serangan dokumen pada KTP, paspor, dan SIM — print, recapture, dan forgeri komposit.",
      },
      points: [],
      tags: ["ID", "Passport", "DL", "Forgery"],
      status: "core",
    },
    {
      id: "iqa",
      title: { en: "IQA Analysis", id: "Analisa IQA" },
      category: { en: "eKYC product", id: "Produk eKYC" },
      summary: {
        en: "Image-quality annotation and crowdtesting so blur, glare, crop, and capture issues fail closed instead of poisoning the model.",
        id: "Anotasi kualitas gambar dan crowdtesting agar blur, silau, crop, dan masalah capture gagal dengan aman, bukan meracuni model.",
      },
      points: [],
      tags: ["IQA", "Capture", "Cards"],
      status: "core",
    },
    {
      id: "ocr",
      title: { en: "OCR Analysis", id: "Analisa OCR" },
      category: { en: "eKYC product", id: "Produk eKYC" },
      summary: {
        en: "Field-level review of extracted identity text — names, numbers, dates — against the source document.",
        id: "Review tingkat field atas teks identitas hasil ekstraksi — nama, nomor, tanggal — terhadap dokumen sumber.",
      },
      points: [],
      tags: ["OCR", "Fields", "Documents"],
      status: "core",
    },
    {
      id: "crowd",
      title: { en: "Crowdtesting", id: "Crowdtesting" },
      category: { en: "Product QA", id: "QA produk" },
      summary: {
        en: "Recruit and run people against R&D apps — typically liveness and card IQA — to see whether the product behaves in the wild.",
        id: "Mencari dan menjalankan orang untuk mengetes app R&D — biasanya liveness dan IQA kartu — untuk melihat apakah produk berjalan normal di lapangan.",
      },
      points: [],
      tags: ["Crowd", "Liveness", "IQA"],
      status: "ops",
    },
    {
      id: "redteam",
      title: { en: "Fraud red team", id: "Red team fraud" },
      category: { en: "Adversarial", id: "Adversarial" },
      summary: {
        en: "Do what fraudsters do: inject liveness, wear 3D masks, replay screens, generate deepfakes, and file the findings back to product.",
        id: "Melakukan apa yang fraudster lakukan: injeksi liveness, topeng 3D, replay layar, membuat deepfake, dan mengembalikan temuan ke produk.",
      },
      points: [],
      tags: ["Deepfake", "Mask", "Injection", "Replay"],
      status: "core",
    },
    {
      id: "automation",
      title: { en: "Ops automation", id: "Otomasi ops" },
      category: { en: "Internal tools", id: "Tools internal" },
      summary: {
        en: "Agent-assisted workflows that auto-create annotation tasks and drive the payroll platform — less copy-paste, fewer missed cycles.",
        id: "Alur berbantuan agent yang membuat task anotasi otomatis dan menggerakkan platform payroll — lebih sedikit copy-paste, lebih sedikit siklus terlewat.",
      },
      points: [],
      tags: ["Agents", "Cursor", "Claude Code", "Payroll"],
      status: "ops",
    },
    {
      id: "expense",
      title: { en: "Family expense tracker", id: "Expense tracker keluarga" },
      category: { en: "Home lab", id: "Home lab" },
      summary: {
        en: "Tracks my spend, my wife's, and shared household costs. Hermes Agent sits on WhatsApp — log an expense by chat, no need to open the app.",
        id: "Mencatat pengeluaran saya, istri, dan pengeluaran bersama. Hermes Agent di WhatsApp — catat lewat chat, tanpa buka aplikasinya.",
      },
      points: [
        {
          en: "WhatsApp → Hermes Agent → home server, so capture happens in the conversation you already use.",
          id: "WhatsApp → Hermes Agent → home server, jadi pencatatan terjadi di percakapan yang sudah dipakai.",
        },
      ],
      tags: ["n8n", "Hermes", "WhatsApp", "Self-hosted"],
      status: "ops",
    },
  ] satisfies Project[],

  toolsTitle: { en: "Desk stack", id: "Stack di meja" } satisfies Localized,
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
    "Nextcloud",
  ],

  opsCards: [
    {
      id: "ann",
      title: { en: "Annotation", id: "Anotasi" },
      body: {
        en: "R&D flow → tasks → part-time annotators → QC → deadline.",
        id: "Alur R&D → task → annotator paruh waktu → QC → deadline.",
      },
    },
    {
      id: "mrp",
      title: { en: "MRP", id: "MRP" },
      body: {
        en: "2 vendors · 40 reviewers · hiring, shifts, payroll, training.",
        id: "2 vendor · 40 reviewer · hiring, shift, payroll, training.",
      },
    },
    {
      id: "red",
      title: { en: "Red team", id: "Red team" },
      body: {
        en: "Injection, 3D mask, screen replay, deepfake attack tests.",
        id: "Injeksi, topeng 3D, screen replay, uji serangan deepfake.",
      },
    },
    {
      id: "coupa",
      title: { en: "Coupa + payroll", id: "Coupa + payroll" },
      body: {
        en: "PR / PO / invoices and monthly annotator payroll close.",
        id: "PR / PO / invoice dan tutup payroll annotator bulanan.",
      },
    },
  ],

  labTitle: { en: "Home lab", id: "Home lab" } satisfies Localized,
  labLead: {
    en: "Off hours I tinker with AI agents and a self-hosted stack — the same ops instinct, pointed at the house.",
    id: "Di luar jam kerja saya mengulik AI agent dan stack self-hosted — insting ops yang sama, diarahkan ke rumah.",
  } satisfies Localized,
  labItems: [
    {
      id: "n8n",
      title: { en: "n8n", id: "n8n" },
      body: {
        en: "Workflow automation for the services on the home server.",
        id: "Otomasi workflow untuk layanan di home server.",
      },
    },
    {
      id: "hermes",
      title: { en: "Hermes Agent", id: "Hermes Agent" },
      body: {
        en: "Problem-solving partner and reminder system — also the WhatsApp front door for logging expenses.",
        id: "Teman problem solving dan pengingat — sekaligus pintu WhatsApp untuk mencatat pengeluaran.",
      },
    },
    {
      id: "immich",
      title: { en: "Immich", id: "Immich" },
      body: {
        en: "Self-hosted photo backup.",
        id: "Backup foto self-hosted.",
      },
    },
    {
      id: "nextcloud",
      title: { en: "Nextcloud", id: "Nextcloud" },
      body: {
        en: "Backup for important files.",
        id: "Backup file-file penting.",
      },
    },
    {
      id: "expense",
      title: { en: "Expense tracker", id: "Expense tracker" },
      body: {
        en: "Personal, spouse, and shared spend — input via WhatsApp chat to Hermes, written to the home server.",
        id: "Pengeluaran pribadi, istri, dan bersama — input lewat chat WA ke Hermes, tersimpan di home server.",
      },
    },
  ],

  educationTitle: { en: "Education", id: "Pendidikan" } satisfies Localized,

  contactTitle: { en: "Contact", id: "Kontak" } satisfies Localized,
  contactLead: {
    en: "For annotation programs, manual review operations, identity-fraud testing, or a note about the lab.",
    id: "Untuk program anotasi, operasional manual review, pengujian fraud identitas, atau obrolan soal lab.",
  } satisfies Localized,

  footer: {
    mark: {
      en: "Identity review operations",
      id: "Operasi review identitas",
    } satisfies Localized,
    editHint: {
      en: "Content is editable in this browser via Edit content. Export JSON and paste it into site.ts to make it permanent.",
      id: "Konten bisa diedit di browser ini lewat Edit konten. Export JSON lalu tempel ke site.ts agar permanen.",
    } satisfies Localized,
  },

  studio: {
    title: { en: "Content studio", id: "Studio konten" } satisfies Localized,
    lead: {
      en: "Changes save in this browser only. Export JSON and give it to your AI (or paste into src/content/site.ts) to publish permanently.",
      id: "Perubahan hanya tersimpan di browser ini. Export JSON dan berikan ke AI Anda (atau tempel ke src/content/site.ts) agar terbit permanen.",
    } satisfies Localized,
    saved: { en: "Saved locally", id: "Tersimpan lokal" } satisfies Localized,
    reset: { en: "Reset to default", id: "Kembali ke default" } satisfies Localized,
    export: { en: "Export JSON", id: "Export JSON" } satisfies Localized,
    import: { en: "Import JSON", id: "Import JSON" } satisfies Localized,
    back: { en: "Back to site", id: "Kembali ke situs" } satisfies Localized,
  },

  verdicts: [
    { code: "PASS", label: { en: "Liveness hold", id: "Liveness lolos" } },
    { code: "FLAG", label: { en: "Print attack", id: "Serangan print" } },
    { code: "RETRY", label: { en: "IQA fail", id: "IQA gagal" } },
    { code: "REVIEW", label: { en: "Face mismatch", id: "Wajah tidak cocok" } },
  ],
};

export type SiteContent = typeof site;

export function tx(lang: Lang, value: Localized): string {
  return value[lang] || value.en;
}
