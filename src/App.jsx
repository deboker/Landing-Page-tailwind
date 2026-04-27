const navItems = ["Problém", "Riešenie", "Proces", "FAQ"];

const trustBadges = ["Fast delivery", "Mobile-first", "SEO-ready", "Lead capture"];

const painPoints = [
  ["Nejasná ponuka", "Návštevník nerozumie, prečo má reagovať práve teraz."],
  ["Slabý prvý dojem", "Starý dizajn znižuje dôveru ešte pred prečítaním textu."],
  ["Žiadny zber leadov", "Záujem sa stratí, ak stránka nemá jasný ďalší krok."],
  ["Pomalý launch", "Kampaň čaká na web, namiesto toho aby už zbierala dopyty."],
];

const benefits = [
  "Moderný vizuál a jasná hierarchia",
  "Predajná štruktúra od hero sekcie po CTA",
  "Responzívny layout pre mobil, tablet aj desktop",
  "Rýchle načítanie a SEO základy",
  "Kontaktný alebo lead capture formulár",
  "Pripravené na analytiku a kampane",
];

const features = [
  ["Hero, ktorý predáva", "Silný headline, dôvera a CTA viditeľné hneď po otvorení.", "lg:col-span-2"],
  ["Lead capture form", "Formulár pripravený na dopyty, predregistrácie alebo konzultácie.", ""],
  ["Mobile-first dizajn", "Stránka pôsobí prémiovo aj na malom displeji.", ""],
  ["SEO basics", "Technické základy pre indexáciu, rýchlosť a zdieľanie.", ""],
  ["Speed optimized", "Ľahká štruktúra, čistý kód a minimum zbytočností.", ""],
  ["Tracking ready", "Pripravené napojenie na meranie kampaní a konverzií.", ""],
  ["AI-assisted copy", "Krátke texty s jasným benefitom a menej prázdnych fráz.", ""],
  ["Easy future edits", "Sekcie sú postavené tak, aby sa dali rozumne rozširovať.", "lg:col-span-2"],
];

const useCases = [
  "Nový produkt",
  "Lokálna služba",
  "AI tool alebo SaaS",
  "Event či workshop",
  "B2B ponuka",
  "Špeciálna promo kampaň",
];

const animationShowcase = [
  ["Magnetic CTA", "Tlačidlá reagujú zdvihom, leskom a jemným posunom šípky."],
  ["Scroll reveal", "Karty sa objavia postupne až keď vstúpia do viewportu."],
  ["Live dashboard", "Hero mockup má pulzujúce metriky, rastúce grafy a pohyb v pozadí."],
  ["Bento hover", "Feature bloky sa na hover jemne zdvihnú, rozsvietia a ukážu gradient linku."],
  ["FAQ micro-motion", "Otázky majú plynulé otvorenie a rotáciu ovládacieho prvku."],
  ["Reduced motion", "Používateľom s obmedzením animácií sa pohyb automaticky stlmí."],
];

const steps = [
  ["01", "Pošlete ideu a obsah", "Stačí brief, odkazy, poznámky alebo existujúca prezentácia."],
  ["02", "Navrhneme štruktúru", "Z ponuky vytvoríme jasný príbeh, sekcie a konverzný tok."],
  ["03", "Dizajn a polish", "Doladíme vizuál, responzivitu, texty a CTA prvky."],
  ["04", "Launch a leady", "Stránka je pripravená na reklamy, odkazovanie a meranie."],
];

const faqs = [
  ["Ako rýchlo sa dá landing page spustiť?", "Pri dodanom obsahu často v priebehu niekoľkých dní. Presný termín závisí od rozsahu a počtu revízií."],
  ["Dá sa napojiť na formulár alebo CRM?", "Áno. Formulár môže posielať dopyty e-mailom alebo sa pripraviť na napojenie na CRM, newsletter či automatizáciu."],
  ["Bude stránka mobilná?", "Áno. Návrh je mobile-first, takže prvá priorita je rýchly a prehľadný zážitok na telefóne."],
  ["Môžeme ju použiť pre reklamy?", "Áno. Štruktúra je vhodná pre Google, Meta, LinkedIn alebo priame kampane."],
  ["Dajú sa texty a obrázky meniť neskôr?", "Áno. Sekcie sú pripravené tak, aby sa obsah dal upravovať bez prekopania celej stránky."],
];

const financeIcons = [
  {
    label: "Euro",
    path: "M15.7 5.3A6.8 6.8 0 0 0 5 9H3v2h1.6a7.4 7.4 0 0 0 0 2H3v2h2a6.8 6.8 0 0 0 10.7 3.7l-1.4-1.5A4.7 4.7 0 0 1 7.4 15H13v-2H6.7a5.3 5.3 0 0 1 0-2H13V9H7.4a4.7 4.7 0 0 1 6.9-2.2l1.4-1.5Z",
  },
  {
    label: "Dollar",
    path: "M13 2h-2v2.1C8.8 4.5 7.3 5.9 7.3 8c0 2.5 2 3.4 4.4 4.1 2.1.6 2.9 1 2.9 2.2 0 1.1-1 1.8-2.6 1.8-1.8 0-3.1-.8-4.1-2L6.4 15.6c1.1 1.5 2.7 2.4 4.6 2.7V21h2v-2.7c2.3-.3 3.8-1.8 3.8-4 0-2.6-2-3.5-4.6-4.2-2-.6-2.7-1-2.7-2.1 0-1 .9-1.7 2.3-1.7 1.5 0 2.5.6 3.3 1.6l1.5-1.5A5.8 5.8 0 0 0 13 4.1V2Z",
  },
  {
    label: "Bitcoin",
    path: "M13 2v2h1.1c2.1 0 3.6 1.2 3.6 3.1 0 1.2-.6 2.1-1.6 2.6 1.4.5 2.2 1.6 2.2 3.2 0 2.2-1.7 3.6-4.2 3.6H13V19h-2v-2.5H9V19H7v-2.5H5V14h1.4V6H5V3.5h2V2h2v1.5h2V2h2Zm-3.6 7h3.8c1 0 1.7-.6 1.7-1.5S14.2 6 13.2 6H9.4v3Zm0 5h4.3c1.1 0 1.8-.6 1.8-1.6 0-1-.7-1.6-1.9-1.6H9.4V14Z",
  },
  {
    label: "Coin",
    path: "M12 3C7 3 3 5 3 7.5v9C3 19 7 21 12 21s9-2 9-4.5v-9C21 5 17 3 12 3Zm0 2c4.2 0 7 1.4 7 2.5S16.2 10 12 10 5 8.6 5 7.5 7.8 5 12 5Zm7 5.4v2.1c0 1.1-2.8 2.5-7 2.5s-7-1.4-7-2.5v-2.1c1.6 1 4.1 1.6 7 1.6s5.4-.6 7-1.6Zm-7 8.6c-4.2 0-7-1.4-7-2.5v-2.1c1.6 1 4.1 1.6 7 1.6s5.4-.6 7-1.6v2.1c0 1.1-2.8 2.5-7 2.5Z",
  },
  {
    label: "Card",
    path: "M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Zm0 3v2h16V8H4Zm0 5v4h16v-4H4Zm2 2h5v1H6v-1Z",
  },
  {
    label: "Growth",
    path: "M4 19h16v2H2V3h2v16Zm3-2 4-4 3 3 6-7v4h2V5h-8v2h4.6L14 13.5l-3-3-5.4 5.4L7 17Z",
  },
];

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

function FloatingFinanceIcons({ tone = "dark" }) {
  return (
    <div className={`finance-icons finance-icons-${tone}`} aria-hidden="true">
      {financeIcons.map((icon, index) => (
        <span key={icon.label} className={`finance-float finance-float-${index + 1}`}>
          <svg viewBox="0 0 24 24">
            <path d={icon.path} />
          </svg>
        </span>
      ))}
    </div>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <p className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase ${dark ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-200" : "border-cyan-700/20 bg-cyan-500/10 text-cyan-800"}`}>
      {children}
    </p>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_85%_5%,rgba(168,85,247,0.2),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_44%,#f8fafc_44%,#f8fafc_100%)]" />
      <div className="ambient-grid pointer-events-none fixed inset-0 -z-10 opacity-40" />
      <div className="scroll-line pointer-events-none fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400" />

      <header className="relative border-b border-white/10">
        <div className="hero-aurora pointer-events-none absolute inset-x-0 top-0 h-[42rem] opacity-70" />
        <FloatingFinanceIcons tone="dark" />
        <nav className="page-shell relative z-10 flex items-center justify-between py-5">
          <a href="#" className="group flex items-center gap-3 logo-pop" aria-label="LaunchPage Studio">
            <span className="logo-orbit grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-500 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
              <span className="h-4 w-4 rounded-md bg-white/90" />
            </span>
            <span className="text-sm font-bold uppercase text-slate-100">LaunchPage</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#ponuka"
            className="shine-button rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            Nezáväzná ponuka
          </a>
        </nav>

        <section className="hero-shell relative z-10 grid gap-10 pb-16 pt-10 sm:gap-12 sm:pb-20 sm:pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-28 lg:pt-20 2xl:gap-16 2xl:pb-36 2xl:pt-24">
          <div className="animate-rise">
            <SectionLabel dark>Pre launch, službu aj lead generation</SectionLabel>
            <h1 className="max-w-[72rem] text-[2.65rem] font-black leading-[0.95] text-white min-[390px]:text-5xl sm:text-6xl lg:text-7xl 2xl:max-w-[86rem] 2xl:text-8xl">
              Moderná landing page pre váš produkt, službu alebo kampaň.
              <span className="gradient-text block">Teraz s prémiovým pohybom.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl 2xl:max-w-3xl 2xl:text-2xl 2xl:leading-9">
              Navrhneme rýchlu, responzívnu a predajne postavenú stránku, ktorá vysvetlí ponuku, získa dôveru a privedie návštevníka ku kontaktu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#ponuka" className="shine-button group rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-6 py-4 text-center text-sm font-bold text-slate-950 shadow-2xl shadow-cyan-500/25 transition hover:-translate-y-1 hover:shadow-cyan-400/40">
                Chcem landing page
                <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#animacie" className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/10">
                Pozrieť, čo obsahuje
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 stagger-list">
              {trustBadges.map((badge, index) => (
                <span key={badge} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 backdrop-blur" style={{ "--delay": `${index * 90}ms` }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-rise-delayed">
            <div className="blob-one absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="blob-two absolute -right-8 bottom-12 h-48 w-48 rounded-full bg-violet-500/25 blur-3xl" />
            <div className="floating-card tilt-card relative rounded-[2rem] border border-white/15 bg-white/[0.08] p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
              <div className="rounded-[1.5rem] bg-slate-950/80 p-4 ring-1 ring-white/10 2xl:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-cyan-200">Campaign dashboard</p>
                    <p className="mt-1 text-xl font-bold">Launch flow</p>
                  </div>
                  <span className="live-pill rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">Live ready</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="metric-card rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 p-4 text-slate-950">
                    <p className="text-sm font-semibold">Conversion score</p>
                    <p className="counter-pop mt-6 text-5xl font-black">94%</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-sm text-slate-300">Lead form</p>
                    <div className="mt-5 space-y-3">
                      <div className="skeleton-line h-3 rounded-full bg-white/20" />
                      <div className="skeleton-line h-3 w-3/4 rounded-full bg-white/15" style={{ "--delay": "180ms" }} />
                      <div className="shine-button h-9 rounded-xl bg-gradient-to-r from-violet-400 to-cyan-300" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:col-span-2">
                    <div className="mb-4 flex items-center justify-between text-sm">
                      <span className="text-slate-300">Sekcie stránky</span>
                      <span className="text-cyan-200">8 blokov</span>
                    </div>
                    <div className="grid grid-cols-8 gap-2">
                      {[90, 60, 76, 48, 84, 68, 92, 58].map((height, index) => (
                        <div key={index} className="flex h-24 items-end rounded-xl bg-white/[0.04] p-1 sm:h-28 2xl:h-36">
                          <span className="bar-grow w-full rounded-lg bg-gradient-to-t from-cyan-300 to-violet-400" style={{ "--bar-height": `${height}%`, "--delay": `${index * 80}ms` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section id="problém" className="section-bg-light section-stars section-pad text-slate-950">
          <FloatingFinanceIcons tone="light" />
          <div className="page-shell relative z-10">
            <SectionLabel>Problém</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <h2 className="section-title">Dobrá ponuka nestačí, ak ju stránka nevie predať.</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {painPoints.map(([title, text], index) => (
                  <article key={title} className="reveal-card hover-lift rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-6 2xl:p-8" style={{ "--delay": `${index * 90}ms` }}>
                    <div className="icon-bounce mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                      <Icon path="M12 2 2 20h20L12 2Zm1 14h-2v2h2v-2Zm0-7h-2v5h2V9Z" />
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-3 text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="riešenie" className="section-bg-white section-orbs section-pad text-slate-950">
          <FloatingFinanceIcons tone="light" />
          <div className="page-shell relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center 2xl:gap-16">
            <div>
              <SectionLabel>Riešenie</SectionLabel>
              <h2 className="section-title">Landing page launch pack postavený pre rýchle rozhodnutie.</h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg 2xl:max-w-3xl 2xl:text-xl">
                Stránka nie je len pekná vizitka. Je to jasná cesta od prvého dojmu cez dôveru až po formulár, telefonát alebo rezerváciu konzultácie.
              </p>
            </div>
            <div className="grid gap-3">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="reveal-card hover-lift flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 2xl:p-5" style={{ "--delay": `${index * 70}ms` }}>
                  <span className="check-pulse grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 text-slate-950">
                    <Icon path="m9 16.2-3.5-3.5L4 14.2l5 5L20.5 7.7 19 6.2 9 16.2Z" />
                  </span>
                  <span className="font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section-bg-dark section-stars section-pad">
          <FloatingFinanceIcons tone="dark" />
          <div className="page-shell relative z-10">
            <SectionLabel dark>Bento features</SectionLabel>
            <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="section-title max-w-3xl text-white 2xl:max-w-5xl">Každá sekcia má jasnú úlohu: vysvetliť, presvedčiť, získať kontakt.</h2>
              <p className="max-w-md text-slate-300 2xl:max-w-xl 2xl:text-lg">Prémiový vzhľad, krátky obsah a komponenty pripravené na budúce úpravy.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
              {features.map(([title, text, span], index) => (
                <article key={title} className={`reveal-card glow-card rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.09] ${span}`} style={{ "--delay": `${index * 70}ms` }}>
                  <div className="gradient-rule mb-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="animacie" className="section-bg-white section-orbs section-pad text-slate-950">
          <FloatingFinanceIcons tone="light" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(168,85,247,0.12),transparent_30%)]" />
          <div className="page-shell relative">
            <SectionLabel>Animation lab</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <h2 className="section-title">Ukážka pohybu, ktorý vie stránku predať bez toho, aby rušil.</h2>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg 2xl:text-xl">
                  Toto je demonštračný set animácií: pohyblivé svetlá, živé metriky, reveal efekt, hover reakcie a CTA s leskom. Všetko beží v CSS a rešpektuje reduced motion.
                </p>
              </div>
              <div className="animation-stage rounded-[2rem] border border-slate-200 bg-slate-950 p-5 shadow-2xl shadow-cyan-950/20">
                <div className="stage-orbit">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="relative z-10 grid gap-3 sm:grid-cols-3">
                  <div className="demo-tile rounded-2xl bg-white p-4 text-slate-950">
                    <p className="text-sm font-bold">Leads</p>
                    <p className="mt-5 text-4xl font-black">128</p>
                  </div>
                  <div className="demo-tile rounded-2xl bg-cyan-300 p-4 text-slate-950" style={{ "--delay": "120ms" }}>
                    <p className="text-sm font-bold">CTR</p>
                    <p className="mt-5 text-4xl font-black">7.8%</p>
                  </div>
                  <div className="demo-tile rounded-2xl bg-violet-300 p-4 text-slate-950" style={{ "--delay": "240ms" }}>
                    <p className="text-sm font-bold">Speed</p>
                    <p className="mt-5 text-4xl font-black">A+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
              {animationShowcase.map(([title, text], index) => (
                <article key={title} className="reveal-card hover-lift rounded-3xl border border-slate-200 bg-slate-50 p-6" style={{ "--delay": `${index * 80}ms` }}>
                  <span className="mb-8 block h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_0_8px_rgba(6,182,212,0.12)]" />
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-bg-light section-stars section-pad text-slate-950">
          <FloatingFinanceIcons tone="light" />
          <div className="page-shell relative z-10">
            <SectionLabel>Use cases</SectionLabel>
            <h2 className="section-title max-w-3xl 2xl:max-w-5xl">Pre ponuky, ktoré potrebujú samostatný predajný priestor.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
              {useCases.map((item, index) => (
                <div key={item} className="reveal-card hover-lift group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl" style={{ "--delay": `${index * 80}ms` }}>
                  <div className="mb-8 h-12 w-12 rounded-2xl bg-slate-950 text-cyan-300 transition group-hover:rotate-3 group-hover:scale-105">
                    <div className="grid h-full place-items-center">
                      <Icon path="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 5.9 3.3L12 10.9 6.1 7.6 12 4.3ZM5 9.3l6 3.3v6.6l-6-3.3V9.3Zm14 6.6-6 3.3v-6.6l6-3.3v6.6Z" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proces" className="section-bg-white section-orbs section-pad text-slate-950">
          <div className="page-shell relative z-10">
            <SectionLabel>Proces</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <h2 className="section-title">Od idey po spustenú stránku bez zbytočného chaosu.</h2>
              <div className="grid gap-4">
                {steps.map(([number, title, text], index) => (
                  <article key={number} className="reveal-card process-step grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[auto_1fr] sm:items-center" style={{ "--delay": `${index * 110}ms` }}>
                    <span className="text-4xl font-black text-slate-300">{number}</span>
                    <div>
                      <h3 className="text-xl font-bold">{title}</h3>
                      <p className="mt-2 text-slate-600">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ponuka" className="section-bg-dark section-stars section-pad">
          <FloatingFinanceIcons tone="dark" />
          <div className="page-shell relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center 2xl:gap-14">
            <div>
              <SectionLabel dark>Ponuka</SectionLabel>
              <h2 className="section-title text-white">Landing Page Launch Pack</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg 2xl:max-w-2xl 2xl:text-xl">
                Kompletný návrh a implementácia landing page pre konkrétnu ponuku, kampaň alebo launch.
              </p>
            </div>
            <article className="tilt-card glow-card rounded-[2rem] border border-white/15 bg-white/[0.08] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-8">
              <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-2xl font-black">Launch Pack</h3>
                  <p className="mt-2 text-slate-300">Cena podľa rozsahu. Request quote.</p>
                </div>
                <span className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950">From €___</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["UX štruktúra", "Prémiový vizuál", "Responzívny frontend", "CTA a formulár", "SEO meta základy", "Analytics-ready"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-200">
                    <span className="check-dot h-2 w-2 rounded-full bg-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
              <a href="mailto:hello@example.com" className="shine-button mt-8 block rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-6 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1">
                Získať nezáväznú ponuku
              </a>
            </article>
          </div>
        </section>

        <section className="section-bg-light section-stars section-pad text-slate-950">
          <div className="page-shell relative z-10">
            <SectionLabel>Trust</SectionLabel>
            <div className="grid gap-4 lg:grid-cols-3">
              {["Stránka pôsobí profesionálne už v prvých sekundách.", "Konečne máme jasnú ponuku a formulár pre dopyty.", "Editovateľný placeholder testimonial pre klienta."].map((quote, index) => (
                <figure key={quote} className="reveal-card hover-lift rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" style={{ "--delay": `${index * 100}ms` }}>
                  <blockquote className="text-lg font-semibold leading-8">"{quote}"</blockquote>
                  <figcaption className="mt-6 text-sm text-slate-500">Editable trust card {index + 1}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-bg-white section-orbs section-pad text-slate-950">
          <div className="relative z-10 mx-auto w-[min(100%-2rem,60rem)] 2xl:w-[min(100%-8rem,72rem)]">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="section-title">Časté otázky</h2>
            <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50">
              {faqs.map(([question, answer], index) => (
                <details key={question} className="reveal-card faq-item group p-6" style={{ "--delay": `${index * 70}ms` }}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                    {question}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-950 text-white transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-bg-dark section-stars section-pad">
          <FloatingFinanceIcons tone="dark" />
          <div className="relative z-10 mx-auto w-[min(100%-2rem,72rem)] text-center 2xl:w-[min(100%-8rem,90rem)]">
            <SectionLabel dark>Final CTA</SectionLabel>
            <h2 className="text-4xl font-black leading-tight text-white sm:text-6xl 2xl:text-7xl">Spustite stránku, ktorá vysvetlí ponuku a začne zbierať leady.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg 2xl:max-w-3xl 2xl:text-xl">
              Pošlite krátky brief a pripravíme návrh, ktorý dá vašej kampani jasný smer.
            </p>
            <a href="mailto:hello@example.com" className="shine-button mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100">
              Chcem landing page
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
