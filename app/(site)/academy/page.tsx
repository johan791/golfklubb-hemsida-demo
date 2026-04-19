import Image from "next/image";

const TRAINERS = [
  { name: "Lars Edvinsson", phone: "070-891 79 99", email: "lars@ljgk.se" },
  { name: "Gustav Ågren", phone: "070-975 19 29", email: "gustav@ljgk.se" },
  { name: "Fredrik Theander", phone: "076-860 50 03", email: "fredrik@ljgk.se" },
  { name: "Ebba Björnberg", phone: "070-818 24 69", email: "ebba@ljgk.se" },
  { name: "Markus Westerberg", phone: "070-512 28 13", email: "markus@ljgk.se" },
];

const LESSONS = [
  { duration: "25 min", price: "600 kr", desc: "Fokuserad teknikgenomgång" },
  { duration: "45 min", price: "950 kr", desc: "Fördjupad lektion med övningar" },
  { duration: "60 min", price: "1 200 kr", desc: "Full genomgång" },
];

export default function AcademyPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="https://golfiskane.se/wp-content/uploads/2014/04/ljunghusens_gk_img_0174_1220x522.jpg"
          alt="Ljunghusens Golfklubb banan"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)] via-[var(--color-forest)]/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Akademi & Shop</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Utveckla ditt spel</h1>
          <p className="text-white/70 max-w-lg">
            5 PGA-proffs som hjälper varje spelare att utvecklas utifrån sina egna förutsättningar.
            Spel, teknik, fysik och mental träning.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Lektioner */}
        <h2 className="text-2xl font-bold mb-6">Privatlektioner</h2>
        <div className="grid sm:grid-cols-3 gap-5 mb-6">
          {LESSONS.map((l) => (
            <div key={l.duration} className="bg-white border border-gray-100 rounded-xl p-6 text-center">
              <div className="text-sm text-gray-500 mb-1">{l.duration}</div>
              <div className="text-2xl font-bold text-[var(--color-forest)] mb-2">{l.price}</div>
              <p className="text-sm text-gray-400">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[var(--color-sand)] rounded-lg p-4 mb-12 text-sm text-gray-600">
          <strong>Grupp:</strong> +250 kr per extra person (max 4 totalt, 45/60 min) · <strong>Banspel:</strong> 9 hål 1 995 kr / 18 hål 2 995 kr (+450 kr/extra person, max 4)
          <br />Avbokning senast 24 timmar innan. Betalning i shop före lektion. Bokning via ProPlanner eller direkt med tränare.
        </div>

        {/* Kurser */}
        <h2 className="text-2xl font-bold mb-6">Kurser</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <div className="text-xs font-medium text-[var(--color-gold)] uppercase tracking-wide mb-2">Nybörjare</div>
            <h3 className="font-bold text-lg mb-2">Hitta dina grunder!</h3>
            <p className="text-sm text-gray-500 mb-3">Tydliga instruktioner, personlig videofeedback och övningar för range och hemmaträning. Max 3 deltagare.</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-[var(--color-forest)]">350 kr</span>
              <span className="text-sm text-gray-400">Instruktör: Gustav</span>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <div className="text-xs font-medium text-[var(--color-gold)] uppercase tracking-wide mb-2">Alla nivåer</div>
            <h3 className="font-bold text-lg mb-2">Lär dig slå längre!</h3>
            <p className="text-sm text-gray-500 mb-3">Fokus på driv och längd. Videofeedback och övningar för range och hemmaträning. Max 3 deltagare.</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-[var(--color-forest)]">350 kr</span>
              <span className="text-sm text-gray-400">Instruktör: Gustav</span>
            </div>
          </div>
        </div>

        {/* Tränare */}
        <h2 className="text-2xl font-bold mb-6">Våra PGA-proffs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {TRAINERS.map((t) => (
            <div key={t.name} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white font-bold text-sm shrink-0">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <a href={`tel:${t.phone.replace(/[- ]/g, "")}`} className="text-xs text-gray-500 hover:underline block">{t.phone}</a>
                <a href={`mailto:${t.email}`} className="text-xs text-[var(--color-forest-light)] hover:underline">{t.email}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Shop & Fitting */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3">Shop</h3>
            <p className="text-sm text-gray-600 mb-3">
              Golfstore-partner med garanterat lägsta pris på kläder, klubbor och tillbehör.
              Verkstad för klubbreparation.
            </p>
            <p className="text-sm text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 inline mr-1 -mt-0.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              040-45 25 61 ·{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 inline mr-1 -mt-0.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              shop@ljgk.se
            </p>
          </div>
          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3">Custom Fitting</h3>
            <p className="text-sm text-gray-600 mb-3">
              Fullt utrustad fitting-studio.
              Hitta utrustningen som passar ditt spel perfekt.
            </p>
            <p className="text-sm text-gray-500">Boka via shop@ljgk.se eller 040-45 25 61</p>
          </div>
        </div>
      </div>
    </>
  );
}
