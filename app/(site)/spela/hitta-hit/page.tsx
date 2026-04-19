export default function HittaHitPage() {
  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Gäst</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Hitta hit</h1>
          <p className="text-white/70 max-w-lg">
            Vägbeskrivning och praktisk information för besökare.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Adress</h2>
          <p className="text-lg font-medium text-[var(--color-forest)] mb-2">Kinells väg 34, 236 42 Höllviken</p>
          <p className="text-sm text-gray-600">
            Från Malmö tar det cirka 30 minuter att köra hit. Klubben ligger på
            Falsterbonäset i sydvästra Skåne, genom Ljungskogens bostadsområde.
          </p>
        </div>

        {/* Map */}
        <div className="mb-6 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=Ljunghusens+Golfklubb,+Kinells+väg,+Höllviken&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ljunghusens Golfklubb på kartan"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold text-sm mb-2">Sommartrafik</h3>
            <p className="text-sm text-gray-600">
              Falsterbonäset är populärt sommartid. Räkna med väntetider vid broöppning
              vid Falsterbokanalen.
            </p>
          </div>
          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold text-sm mb-2">Hastighetsgräns</h3>
            <p className="text-sm text-gray-600">
              30 km/h gäller i hela Ljungskogens område för att värna om naturmiljön.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
          <h2 className="text-lg font-bold mb-3">Kontakt</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Telefon</p>
              <a href="tel:040-458000" className="font-medium text-[var(--color-forest)] hover:underline">040-45 80 00</a>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</p>
              <a href="mailto:info@ljgk.se" className="font-medium text-[var(--color-forest)] hover:underline">info@ljgk.se</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
