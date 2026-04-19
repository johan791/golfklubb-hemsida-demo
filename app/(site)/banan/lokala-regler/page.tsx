export default function LokalReglerPage() {
  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Banan</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Slope & lokala regler</h1>
          <p className="text-white/70 max-w-lg">
            Lokala regler och slope-värden för Ljunghusens Golfklubb 2026.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Lokala regler */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Lokala regler 2026</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Speltempo</h3>
              <p>Max rondtid: 3 timmar 59 minuter. Max 4 minuters paus efter hål 9.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Vintergreener</h3>
              <p>
                Spelare måste ta lättnad från markerade vintergreener (vit linje) enligt regel 16.1b.
                Dropp inom en klubblängd från närmaste punkt utanför det begränsade området,
                inte närmare hålet. Puttning från vintergreenerna är tillåten.
              </p>
              <p className="text-gray-400 mt-1">
                Straff: 2 slag (slagspel) eller förlust av hål (matchspel).
              </p>
            </div>
          </div>
        </div>

        {/* Slope */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-4">Slope-värden</h2>
          <p className="text-xs text-gray-400 mb-4">Gäller från april 2021</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-medium text-gray-900">Bana</th>
                  <th className="text-right py-2 px-4 font-medium text-gray-900">Herrar</th>
                  <th className="text-right py-2 pl-4 font-medium text-gray-900">Damer</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Hål 1–18</td>
                  <td className="text-right py-2 px-4">133</td>
                  <td className="text-right py-2 pl-4">117</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Hål 19–9</td>
                  <td className="text-right py-2 px-4">166</td>
                  <td className="text-right py-2 pl-4">122</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Hål 19–27</td>
                  <td className="text-right py-2 px-4">86</td>
                  <td className="text-right py-2 pl-4">59</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Hål 10–27</td>
                  <td className="text-right py-2 px-4">165</td>
                  <td className="text-right py-2 pl-4">180</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
