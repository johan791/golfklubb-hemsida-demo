import Image from "next/image";

const GREENFEE_18 = [
  {
    season: "Högsäsong",
    weeks: "v.16–39",
    senior: "1 500",
    junior: "750",
    guestSenior: "1 100",
    guestJunior: "600",
  },
  {
    season: "Mellansäsong",
    weeks: "v.10–15, 40–44",
    senior: "1 200",
    junior: "600",
    guestSenior: "800",
    guestJunior: "450",
  },
  {
    season: "Lågsäsong",
    weeks: "v.45–9",
    senior: "700",
    junior: "350",
    guestSenior: "300",
    guestJunior: "200",
  },
];

const GREENFEE_9 = [
  {
    season: "Högsäsong",
    weeks: "v.16–39",
    senior: "550",
    junior: "250",
    guestSenior: "450",
    guestJunior: "250",
  },
  {
    season: "Lågsäsong",
    weeks: "v.40–15",
    senior: "450",
    junior: "150",
    guestSenior: "250",
    guestJunior: "150",
  },
];

export default function SpelaPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="https://caddee-prod-media.s3.amazonaws.com/club-images/17192d22-2a36-48ff-8012-451cfe8d796f/header-normal_web.png"
          alt="Ljunghusens Golfklubb"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)] via-[var(--color-forest)]/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Gäst</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Spela på Ljunghusen</h1>
          <p className="text-white/70 max-w-lg">
            Upplev linksgolf i världsklass. Boka starttid, se priser och planera ditt besök.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Greenfee 18 hål */}
        <h2 className="text-2xl font-bold mb-6">Greenfee — 18 hål</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[var(--color-forest)] text-white">
                <th className="text-left px-4 py-3 font-medium">Säsong</th>
                <th className="text-right px-4 py-3 font-medium">Senior</th>
                <th className="text-right px-4 py-3 font-medium">Junior</th>
                <th className="text-right px-4 py-3 font-medium">Gäst till medl.</th>
                <th className="text-right px-4 py-3 font-medium">Junior gäst</th>
              </tr>
            </thead>
            <tbody>
              {GREENFEE_18.map((row) => (
                <tr key={row.season} className="border-t border-gray-100">
                  <td className="px-4 py-3">
                    <div className="font-medium">{row.season}</div>
                    <div className="text-xs text-gray-400">{row.weeks}</div>
                  </td>
                  <td className="text-right px-4 py-3 font-medium">{row.senior} kr</td>
                  <td className="text-right px-4 py-3">{row.junior} kr</td>
                  <td className="text-right px-4 py-3">{row.guestSenior} kr</td>
                  <td className="text-right px-4 py-3">{row.guestJunior} kr</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Greenfee 9 hål */}
        <h2 className="text-2xl font-bold mb-6">Greenfee — 9 hål</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[var(--color-forest)] text-white">
                <th className="text-left px-4 py-3 font-medium">Säsong</th>
                <th className="text-right px-4 py-3 font-medium">Senior</th>
                <th className="text-right px-4 py-3 font-medium">Junior</th>
                <th className="text-right px-4 py-3 font-medium">Gäst till medl.</th>
                <th className="text-right px-4 py-3 font-medium">Junior gäst</th>
              </tr>
            </thead>
            <tbody>
              {GREENFEE_9.map((row) => (
                <tr key={row.season} className="border-t border-gray-100">
                  <td className="px-4 py-3">
                    <div className="font-medium">{row.season}</div>
                    <div className="text-xs text-gray-400">{row.weeks}</div>
                  </td>
                  <td className="text-right px-4 py-3 font-medium">{row.senior} kr</td>
                  <td className="text-right px-4 py-3">{row.junior} kr</td>
                  <td className="text-right px-4 py-3">{row.guestSenior} kr</td>
                  <td className="text-right px-4 py-3">{row.guestJunior} kr</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-10">Betalning ska ske före spel. Utebliven betalning medför dubbel greenfee samt anmälan till disciplinnämnden.</p>

        {/* Boka */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">Boka starttid</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Boka via Golfbox", text: "Logga in på Golfbox för att se lediga tider." },
                { step: "2", title: "Starttider", text: "Vardagar 08:30–20:00 · Helger 09:00–20:00" },
                { step: "3", title: "Start vid hål 10", text: "18-hålsronder startar vid hål 10." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white text-sm font-medium shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">Kontakt</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Kansli</p>
                <a href="tel:040-458000" className="flex items-center gap-2 text-[var(--color-forest)] font-medium text-sm hover:underline">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  040-45 80 00
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:info@ljgk.se" className="flex items-center gap-2 text-[var(--color-forest)] font-medium text-sm hover:underline">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@ljgk.se
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Spelar du regelbundet? Med ett medlemskap från 5 500 kr/år får du obegränsad spelrätt.
              </p>
            </div>
          </div>
        </div>

        {/* Golfbil */}
        <div className="mt-8 bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-4">Uthyrning</h2>
          <p className="text-sm text-gray-500 mb-4">
            Banan ligger i ett naturreservat — golfbilar hyrs ut mot uppvisande av körkort och läkarintyg.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { label: "Golfbil gäst", price: "500 kr" },
              { label: "Golfbil medlem", price: "400 kr" },
              { label: "Golfbil 75+", price: "200 kr" },
              { label: "Klippkort (10 ggr)", price: "3 500 kr" },
              { label: "Dragvagn", price: "80 kr" },
            ].map((item) => (
              <div key={item.label} className="bg-[var(--color-sand)] rounded-lg p-4 text-center">
                <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                <div className="font-bold text-lg text-[var(--color-forest)]">{item.price}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-3">Boka via kansliet: 040-45 80 00.</p>
        </div>

        {/* Praktisk info */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold mb-3">Driving range</h3>
            <p className="text-sm text-gray-600">
              Öppen dagligen 06:00–21:00. Perfekt för uppvärmning före rundan.
            </p>
          </div>
          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold mb-3">Restaurang Nermans</h3>
            <p className="text-sm text-gray-600">
              Lunch efter rundan? Nermans har öppet dagligen 09:00–15:00.
              Tel: 040-45 35 81.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
