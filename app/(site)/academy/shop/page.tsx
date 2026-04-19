export default function ShopPage() {
  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Akademi & Shop</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Shop</h1>
          <p className="text-white/70 max-w-lg">
            Kläder, klubbor och tillbehör från de stora märkena. Golfstore-partner med garanterat lägsta pris.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Sortiment</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { title: "Klubbor", desc: "Drivrar, järnset, wedgar och puttrar" },
              { title: "Kläder", desc: "Herr, dam och junior från ledande märken" },
              { title: "Tillbehör", desc: "Bollar, handskar, bags och skor" },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--color-sand)] rounded-lg p-4">
                <p className="font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Som Golfstore-partner erbjuder vi <strong>garanterat lägsta pris</strong>. Vår personal
            hjälper dig hitta rätt utrustning oavsett om du är nybörjare eller tävlingsspelare.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Verkstad</h2>
          <p className="text-sm text-gray-600">
            Vi erbjuder klubbreparation och service i vår verkstad. Gripbyten, loft/lie-justering
            och annat underhåll för att hålla din utrustning i toppskick.
          </p>
        </div>

        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8">
          <h2 className="text-lg font-bold mb-3">Kontakt</h2>
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
