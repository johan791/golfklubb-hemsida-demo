export default function CustomFittingPage() {
  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Akademi & Shop</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Custom Fitting</h1>
          <p className="text-white/70 max-w-lg">
            Hitta utrustningen som passar just ditt spel i vår fullt utrustade fitting-studio.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Så fungerar det</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Vid en custom fitting-session analyserar våra PGA-proffs ditt sving och dina bolldata
            för att hitta den optimala kombinationen av klubbhuvud, skaft, loft, lie och grepp.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Vi har en fullt utrustad fitting-studio med avancerad mätteknik.
            Sessionen genomförs av våra certifierade tränare som har djup erfarenhet
            av att matcha utrustning till spelare på alla nivåer.
          </p>
        </div>

        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold mb-3">Boka fitting</h2>
          <p className="text-sm text-gray-600 mb-4">
            Kontakta shoppen för att boka en tid för custom fitting.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Telefon</p>
              <a href="tel:040-452561" className="font-medium text-[var(--color-forest)] hover:underline">040-45 25 61</a>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</p>
              <a href="mailto:shop@ljgk.se" className="font-medium text-[var(--color-forest)] hover:underline">shop@ljgk.se</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
