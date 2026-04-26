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

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d={path} fill="currentColor" />
    </svg>
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

      <header className="relative border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#" className="group flex items-center gap-3" aria-label="LaunchPage Studio">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-500 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
              <span className="h-4 w-4 rounded-md bg-white/90" />
            </span>
            <span className="text-sm font-bold uppercase text-slate-100">LaunchPage</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#ponuka"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            Nezáväzná ponuka
          </a>
        </nav>

        <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-20">
          <div className="animate-rise">
            <SectionLabel dark>Pre launch, službu aj lead generation</SectionLabel>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Moderná landing page pre váš produkt, službu alebo kampaň.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Navrhneme rýchlu, responzívnu a predajne postavenú stránku, ktorá vysvetlí ponuku, získa dôveru a privedie návštevníka ku kontaktu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#ponuka" className="group rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-6 py-4 text-center text-sm font-bold text-slate-950 shadow-2xl shadow-cyan-500/25 transition hover:-translate-y-1 hover:shadow-cyan-400/40">
                Chcem landing page
                <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#features" className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/10">
                Pozrieť, čo obsahuje
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 backdrop-blur">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-rise-delayed">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-8 bottom-12 h-48 w-48 rounded-full bg-violet-500/25 blur-3xl" />
            <div className="floating-card relative rounded-[2rem] border border-white/15 bg-white/[0.08] p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
              <div className="rounded-[1.5rem] bg-slate-950/80 p-4 ring-1 ring-white/10">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-cyan-200">Campaign dashboard</p>
                    <p className="mt-1 text-xl font-bold">Launch flow</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">Live ready</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 p-4 text-slate-950">
                    <p className="text-sm font-semibold">Conversion score</p>
                    <p className="mt-6 text-5xl font-black">94%</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-sm text-slate-300">Lead form</p>
                    <div className="mt-5 space-y-3">
                      <div className="h-3 rounded-full bg-white/20" />
                      <div className="h-3 w-3/4 rounded-full bg-white/15" />
                      <div className="h-9 rounded-xl bg-gradient-to-r from-violet-400 to-cyan-300" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:col-span-2">
                    <div className="mb-4 flex items-center justify-between text-sm">
                      <span className="text-slate-300">Sekcie stránky</span>
                      <span className="text-cyan-200">8 blokov</span>
                    </div>
                    <div className="grid grid-cols-8 gap-2">
                      {[90, 60, 76, 48, 84, 68, 92, 58].map((height, index) => (
                        <div key={index} className="flex h-28 items-end rounded-xl bg-white/[0.04] p-1">
                          <span className="w-full rounded-lg bg-gradient-to-t from-cyan-300 to-violet-400" style={{ height: `${height}%` }} />
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
        <section id="problém" className="bg-slate-50 px-5 py-20 text-slate-950 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Problém</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">Dobrá ponuka nestačí, ak ju stránka nevie predať.</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {painPoints.map(([title, text]) => (
                  <article key={title} className="reveal-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
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

        <section id="riešenie" className="bg-white px-5 py-20 text-slate-950 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Riešenie</SectionLabel>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">Landing page launch pack postavený pre rýchle rozhodnutie.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Stránka nie je len pekná vizitka. Je to jasná cesta od prvého dojmu cez dôveru až po formulár, telefonát alebo rezerváciu konzultácie.
              </p>
            </div>
            <div className="grid gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 text-slate-950">
                    <Icon path="m9 16.2-3.5-3.5L4 14.2l5 5L20.5 7.7 19 6.2 9 16.2Z" />
                  </span>
                  <span className="font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-950 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel dark>Bento features</SectionLabel>
            <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Každá sekcia má jasnú úlohu: vysvetliť, presvedčiť, získať kontakt.</h2>
              <p className="max-w-md text-slate-300">Prémiový vzhľad, krátky obsah a komponenty pripravené na budúce úpravy.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {features.map(([title, text, span]) => (
                <article key={title} className={`reveal-card rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.09] ${span}`}>
                  <div className="mb-8 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-20 text-slate-950 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Use cases</SectionLabel>
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Pre ponuky, ktoré potrebujú samostatný predajný priestor.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <div key={item} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
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

        <section id="proces" className="bg-white px-5 py-20 text-slate-950 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Proces</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">Od idey po spustenú stránku bez zbytočného chaosu.</h2>
              <div className="grid gap-4">
                {steps.map(([number, title, text]) => (
                  <article key={number} className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[auto_1fr] sm:items-center">
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

        <section id="ponuka" className="bg-slate-950 px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel dark>Ponuka</SectionLabel>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">Landing Page Launch Pack</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Kompletný návrh a implementácia landing page pre konkrétnu ponuku, kampaň alebo launch.
              </p>
            </div>
            <article className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-8">
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
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
              <a href="mailto:hello@example.com" className="mt-8 block rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-6 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1">
                Získať nezáväznú ponuku
              </a>
            </article>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-20 text-slate-950 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Trust</SectionLabel>
            <div className="grid gap-4 lg:grid-cols-3">
              {["Stránka pôsobí profesionálne už v prvých sekundách.", "Konečne máme jasnú ponuku a formulár pre dopyty.", "Editovateľný placeholder testimonial pre klienta."].map((quote, index) => (
                <figure key={quote} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <blockquote className="text-lg font-semibold leading-8">"{quote}"</blockquote>
                  <figcaption className="mt-6 text-sm text-slate-500">Editable trust card {index + 1}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white px-5 py-20 text-slate-950 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">Časté otázky</h2>
            <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group p-6">
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

        <section className="bg-slate-950 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <SectionLabel dark>Final CTA</SectionLabel>
            <h2 className="text-4xl font-black leading-tight sm:text-6xl">Spustite stránku, ktorá vysvetlí ponuku a začne zbierať leady.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Pošlite krátky brief a pripravíme návrh, ktorý dá vašej kampani jasný smer.
            </p>
            <a href="mailto:hello@example.com" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100">
              Chcem landing page
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
