export default function DrivingRangePage() {
  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Banan</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Driving range & träningsområden</h1>
          <p className="text-white/70 max-w-lg">
            Allt du behöver för att träna och värma upp inför rundan.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Range */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Driving range</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Öppettider</p>
              <p className="text-sm text-gray-600 font-medium">Dagligen 06:00–21:00</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Karaktär</p>
              <p className="text-sm text-gray-600">Kort och smal, med angränsande hål bredvid</p>
            </div>
          </div>
          <h3 className="font-semibold text-sm mb-3">Rangebollar</h3>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { balls: "20 bollar", price: "20 kr" },
              { balls: "40 bollar", price: "35 kr" },
              { balls: "60 bollar", price: "50 kr" },
            ].map((item) => (
              <div key={item.balls} className="bg-[var(--color-sand)] rounded-lg p-3 text-center">
                <div className="text-sm text-gray-500">{item.balls}</div>
                <div className="font-bold text-[var(--color-forest)]">{item.price}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Betalning med kort eller via Golfmore-appen (10 % extra värde vid laddning).
            Greenfee-gäster kan köpa koder i receptionen.
          </p>
        </div>

        {/* Träningsområden */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Träningsområden</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Puttinggreener", detail: "5 stycken" },
              { name: "Pitchinggreen", detail: "1 styck" },
              { name: "Chippinggreener", detail: "3 stycken" },
              { name: "Par 3-bana", detail: "40–60 meter, med riktiga greener, bunkrar och vattenhinder" },
            ].map((item) => (
              <div key={item.name} className="bg-[var(--color-sand)] rounded-lg p-4">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-sm text-gray-500">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Träningsområden är väderberoende och följer i regel banans öppettider.
          </p>
        </div>

        {/* Golfmore */}
        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8">
          <h2 className="text-lg font-bold mb-3">Golfmore-appen</h2>
          <p className="text-sm text-gray-600 mb-3">
            Ladda ditt rangekort digitalt via Golfmore-appen och få 10 % extra i värde på varje laddning.
            Tillgänglig för Android och Apple.
          </p>
        </div>
      </div>
    </>
  );
}
