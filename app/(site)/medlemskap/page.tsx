import Image from "next/image";

const CATEGORIES = [
  {
    name: "Aktiv Senior",
    age: "31+ år",
    price: "12 400",
    entry: "39 600",
    features: ["Obegränsad spelrätt hela året", "Träningsområde", "3 gäster till reducerat pris", "Samarbetsgreenfee", "Tävlingsdeltagande", "Bagskåpshyra tillgänglig"],
    highlight: true,
  },
  {
    name: "Aktiv Ungdom",
    age: "22–30 år",
    price: "5 500",
    entry: "5 500",
    features: ["Obegränsad spelrätt", "Träningsområde", "Gästförmåner inkluderade", "Samarbetsgreenfee", "Tävlingsdeltagande", "Bagskåpshyra tillgänglig"],
    highlight: false,
  },
  {
    name: "Aktiv Junior",
    age: "0–21 år",
    price: "3 800",
    entry: "3 800",
    features: ["Obegränsad spelrätt", "Träningsanläggningar", "Samarbetsgreenfee", "Tävlingsdeltagande", "Seriespel"],
    highlight: false,
  },
  {
    name: "Vardagssenior",
    age: "31+ år",
    price: "9 400",
    entry: "39 600",
    features: ["Obegränsad spelrätt vardagar", "Helgspel till gästpris", "Träningsområde", "3 gästförmåner vardagar", "Samarbetsgreenfee vardagar"],
    highlight: false,
  },
  {
    name: "Begränsad Spelrätt",
    age: "",
    price: "2 600",
    entry: "—",
    features: ["1 rond per kalenderår inkluderad", "Därefter gästpris", "Träningsområde", "Kräver tidigare medlemskap"],
    highlight: false,
  },
  {
    name: "Passiv Medlem",
    age: "",
    price: "1 200",
    entry: "—",
    features: ["Ingen aktiv spelrätt", "Ingen gästrätt", "Behåll din plats i klubben"],
    highlight: false,
  },
];

export default function MedlemskapPage() {
  return (
    <>
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
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Medlemskap</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Bli en del av Ljunghusen</h1>
          <p className="text-white/70 max-w-lg">
            Välj det medlemskap som passar dig. Obegränsad spelrätt, gästförmåner och tillgång till alla våra faciliteter.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className={`rounded-xl p-6 border ${
                cat.highlight
                  ? "border-[var(--color-gold)] bg-white shadow-lg ring-1 ring-[var(--color-gold)]/20"
                  : "border-gray-100 bg-white"
              }`}
            >
              {cat.highlight && (
                <div className="text-xs font-medium text-[var(--color-gold)] uppercase tracking-wide mb-2">Populärast</div>
              )}
              <h3 className="font-bold text-lg">{cat.name}</h3>
              {cat.age && <p className="text-sm text-gray-500 mb-3">{cat.age}</p>}
              <div className="mb-4">
                <span className="text-3xl font-bold text-[var(--color-forest)]">{cat.price}</span>
                <span className="text-gray-400 text-sm ml-1">kr/år</span>
              </div>
              {cat.entry !== "—" && (
                <p className="text-xs text-gray-400 mb-4">
                  Inträdesavgift: {cat.entry} kr
                </p>
              )}
              <ul className="space-y-2 mb-4">
                {cat.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" className="w-4 h-4 mt-0.5 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bli medlem */}
        <div className="mt-10 bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-4">Bli medlem</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-sm mb-2">Krav</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-gold)] mt-0.5">•</span>
                  Handicap under 36
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-gold)] mt-0.5">•</span>
                  Anmälan till kölista krävs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-gold)] mt-0.5">•</span>
                  Köavgift: 200 kr/år
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2">Prioritet</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-gold)] mt-0.5">•</span>
                  Make/maka till aktiv medlem har förtur
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-gold)] mt-0.5">•</span>
                  Juniorer i juniorprogrammet har förtur
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[var(--color-sand)] rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Intresserad?</h2>
          <p className="text-gray-600 text-sm mb-4">
            Kontakta kansliet för att ställa dig i kö eller fråga om medlemskap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:040-458000" className="px-5 py-2.5 bg-[var(--color-forest)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-forest-light)] transition-colors">
              Ring 040-45 80 00
            </a>
            <a href="mailto:info@ljgk.se" className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-white transition-colors">
              Maila info@ljgk.se
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
