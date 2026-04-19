export default function DokumentPage() {
  const ANNUAL_DOCS = [
    "Årsmöteshandlingar LJGK 2026",
    "Bilaga 1: Årsredovisning LJGK",
    "Bilaga 2: Årsredovisning Golfab",
    "Bilaga 3: Årsredovisning Klubbhus AB",
    "Bilaga 4: Motioner & Styrelsens Svar",
    "Bilaga 5: Årsavgifter 2025–2027",
    "Beslutsärende Slaghall",
    "Projekt Slaghall LJGK",
    "Protokoll Årsmöte 2026-01-24",
  ];

  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Om klubben</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Stadgar & dokument</h1>
          <p className="text-white/70 max-w-lg">
            Stadgar, årsmöteshandlingar och andra viktiga dokument.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Stadgar */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Stadgar & styrande dokument</h2>
          <div className="space-y-3">
            {[
              { name: "Stadgar", note: "Antagna 2023-01-28" },
              { name: "Verksamhetsinriktning 2024–2028", note: "Strategisk plan" },
              { name: "Fullmakt Årsmöte", note: "Formulär" },
              { name: "Skötselplan 2025", note: "Banskötsel" },
            ].map((doc) => (
              <div key={doc.name} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div>
                  <p className="text-sm font-medium">{doc.name}</p>
                  <p className="text-xs text-gray-400">{doc.note}</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gray-300">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">Motioner ska vara inlämnade före 30 november.</p>
        </div>

        {/* Årsmöte 2026 */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Årsmöte 2026</h2>
          <div className="space-y-2">
            {ANNUAL_DOCS.map((doc) => (
              <div key={doc} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <p className="text-sm text-gray-600">{doc}</p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gray-300">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Äldre årsmöten */}
        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8">
          <h2 className="text-lg font-bold mb-3">Äldre årsmöteshandlingar</h2>
          <p className="text-sm text-gray-600">
            Handlingar från årsmöten 2012–2025 finns tillgängliga.
            Kontakta kansliet om du behöver åtkomst till äldre dokument.
          </p>
        </div>
      </div>
    </>
  );
}
