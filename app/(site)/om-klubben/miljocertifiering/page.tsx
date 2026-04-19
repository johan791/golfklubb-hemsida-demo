export default function MiljocertifieringPage() {
  const AREAS = [
    { title: "Landskap & ekosystem", desc: "Bevarande och förbättring av biologisk mångfald, livsmiljöer och landskapsvärden." },
    { title: "Vattenhantering", desc: "Ansvarsfull användning och skydd av vattenresurser." },
    { title: "Energi & resurser", desc: "Effektiv energianvändning och hållbar resurshantering." },
    { title: "Produkter & leverantörskedjor", desc: "Miljömedvetna val av produkter och material." },
    { title: "Miljökvalitet", desc: "Minimering av föroreningar och skydd av omgivande miljö." },
    { title: "Människor & samhällen", desc: "Positivt bidrag till lokalsamhället och socialt ansvar." },
  ];

  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Om klubben</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Miljöcertifiering</h1>
          <p className="text-white/70 max-w-lg">
            Ljunghusens GK är GEO Certified — bland de första i Sverige.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">GEO Certified™</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Ljunghusens Golfklubb är certifierad genom Golf Environment Organization (GEO),
            en ideell organisation grundad 1994 i samarbete mellan European Golf Association,
            R&A, European Tour och EU-representanter.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Vi var bland de första två svenska klubbarna att erhålla GEO Certified-status
            (tillsammans med Forsgårdens GK). Certifieringen kräver att man uppfyller
            omfattande och avancerade hållbarhetskrav inom sex områden.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Certifieringen genomgår oberoende verifiering vart tredje år, vilket gör den till
            den mest trovärdiga internationella miljöcertifieringen inom golf idag.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-6">Sex hållbarhetsområden</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {AREAS.map((area) => (
            <div key={area.title} className="bg-[var(--color-sand)] rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-1">{area.title}</h3>
              <p className="text-sm text-gray-500">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold mb-3">Natur på banan</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-[var(--color-forest)]">377</div>
              <p className="text-sm text-gray-500">Dokumenterade växtarter</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-forest)]">90</div>
              <p className="text-sm text-gray-500">Dokumenterade fågelarter</p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8">
          <h2 className="text-lg font-bold mb-3">Läs mer</h2>
          <p className="text-sm text-gray-600">
            Vår fullständiga GEO-rapport och miljöinventeringar finns tillgängliga på{" "}
            <a
              href="https://sustainable.golf/directory/ljunghusen-golf-club"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-forest)] font-medium hover:underline"
            >
              sustainable.golf
            </a>.
          </p>
        </div>
      </div>
    </>
  );
}
