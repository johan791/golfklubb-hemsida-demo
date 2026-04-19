export default function GolfresorPage() {
  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Akademi & Shop</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Golfresor</h1>
          <p className="text-white/70 max-w-lg">
            Ljunghusen Golf Academy arrangerar golfresor till spännande destinationer.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <div className="text-xs font-medium text-red-500 uppercase tracking-wide mb-2">Fullbokad</div>
          <h2 className="text-xl font-bold mb-2">Costa Navarino, Grekland</h2>
          <p className="text-sm text-gray-500 mb-4">14–21 mars 2026</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Arrangör: Ljunghusen Golf Academy. Denna resa är fullbokad — håll utkik
            för kommande resor!
          </p>
        </div>

        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8">
          <h2 className="text-lg font-bold mb-3">Kommande resor</h2>
          <p className="text-sm text-gray-600">
            Vi planerar nya golfresor löpande. Håll koll på hemsidan eller kontakta
            shoppen för att anmäla intresse.
          </p>
          <div className="mt-4 text-sm">
            <a href="mailto:shop@ljgk.se" className="text-[var(--color-forest)] font-medium hover:underline">
              shop@ljgk.se
            </a>
            <span className="text-gray-400 mx-2">·</span>
            <a href="tel:040-452561" className="text-[var(--color-forest)] font-medium hover:underline">
              040-45 25 61
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
