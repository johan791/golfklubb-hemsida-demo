export default function BokningsreglerPage() {
  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Banan</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Bokningsregler</h1>
          <p className="text-white/70 max-w-lg">
            Regler för tidsbokning på Ljunghusens Golfklubb.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Tidbokning */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Tidbokning</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              Max 5 bokade tider i systemet — varav högst 2 helg-/helgdagstider
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              Golf-ID krävs vid bokning
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              Femte tiden kan bokas samma dag om plats finns — ring 040-45 80 00 eller besök kansliet
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              Högsta tillåtna handicap på huvudslingan: 36,0 (totalt HCP 120,0 per tid)
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              9-hålsbanan: max handicap 54,0
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              Marshal/reception kan slå ihop 2-bollar till 4-bollar vid hög beläggning
            </li>
          </ul>
        </div>

        {/* Incheckning */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Incheckning & uteblivande</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              Checka in senast 15 minuter före starttid via receptionen eller Min Golf-appen
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              Avbokning senast 3 timmar före — annars 200 kr i no-show-avgift för medlemmar
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              Gäster betalar full greenfee vid uteblivande
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
              Upprepade överträdelser kan leda till bokningsspärr
            </li>
          </ul>
        </div>

        {/* Starttider */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Starttider per säsong</h2>
          <h3 className="font-semibold text-sm mb-3">Oktober–April</h3>
          <div className="space-y-1.5 text-sm text-gray-600 mb-4">
            <p>Mån–Tor: Rangebollar 06:00–08:20, bokningar från 08:30</p>
            <p>Fredag: Bokningar från 06:00</p>
            <p>Helg: Rangebollar 07:00–08:50, bokningar från 09:00</p>
          </div>
          <h3 className="font-semibold text-sm mb-3">Maj–September</h3>
          <div className="space-y-1.5 text-sm text-gray-600">
            <p>Mån–Tor: Rangebollar 07:00–08:20, bokningar från 08:30</p>
            <p>Fredag: Bokningar från 07:00</p>
            <p>Helg: Rangebollar 06:00–08:50, bokningar från 09:00</p>
            <p className="text-gray-400 text-xs mt-2">Startförbud mån–fre på sista 9 hålen 07:00–12:00</p>
          </div>
        </div>

        {/* Gästtider helg */}
        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold mb-3">Gästtider helg</h2>
          <p className="text-sm text-gray-600 mb-3">
            Specifika tider reserveras för gäster på helger: 11:40, 11:50, 12:40, 12:50, 13:40, 13:50, 14:40 och framåt.
          </p>
          <p className="text-sm text-gray-500">
            Obokade gästtider släpps till medlemmar 2 dagar innan.
          </p>
        </div>

        {/* Hundar */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
          <h2 className="text-lg font-bold mb-3">Hundar på banan</h2>
          <p className="text-sm text-gray-600">
            Hundar ska hållas kopplade och avföring ska plockas upp. Hundar är inte tillåtna under tävlingar.
          </p>
        </div>
      </div>
    </>
  );
}
