export default function SeniorPage() {
  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Medlem</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Seniorgolf</h1>
          <p className="text-white/70 max-w-lg">
            Aktiviteter och tävlingar för seniorer på Ljunghusens Golfklubb.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {[
            {
              title: "Onsdagsgolf",
              desc: "Veckovis golftävling för seniorer varje onsdag.",
            },
            {
              title: "Löpande tävling",
              desc: "Fortlöpande tävlingsserie genom säsongen.",
            },
            {
              title: "Seriespel",
              desc: "Lagspel mot andra klubbar i regionen.",
            },
            {
              title: "Klubbmatcher",
              desc: "Interna matcher och sociala tillställningar.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold mb-3">Seniorprogrammet 2026</h2>
          <p className="text-sm text-gray-600">
            Tävlingsschema och live-resultat finns tillgängliga via Golfbox.
            Logga in på Min Golf för att se kommande tävlingar och anmäla dig.
          </p>
        </div>

        <div className="bg-[var(--color-forest)] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Frågor?</h2>
          <p className="text-white/70 text-sm mb-4">
            Kontakta kansliet för mer information om seniorprogrammet.
          </p>
          <a href="tel:040-458000" className="px-5 py-2.5 bg-[var(--color-gold)] text-[var(--color-forest)] text-sm font-medium rounded-lg hover:bg-[var(--color-gold-dark)] transition-colors">
            Ring 040-45 80 00
          </a>
        </div>
      </div>
    </>
  );
}
