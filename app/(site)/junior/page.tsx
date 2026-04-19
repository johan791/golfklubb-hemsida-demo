import Image from "next/image";

const PROGRAMS = [
  {
    name: "Team Future 6–8 år",
    age: "6–8 år",
    desc: "Introduktion till golf med fokus på grunderna: grepp, sving och spel. 55 min/vecka vår/höst med spel på kortbanan.",
    price: "3 650",
    coach: "Ebba Björnberg",
    color: "bg-green-50 border-green-200",
  },
  {
    name: "Team Future 9–12 år",
    age: "9–12 år",
    desc: "För nya och återkommande golfare. Fokus på spel och glädje med fri tillgång till kortbanan. 55 min/vecka vår/höst. Rangekort på 7 300 kr ingår.",
    price: "3 650",
    coach: "Gustav Ågren",
    color: "bg-blue-50 border-blue-200",
  },
  {
    name: "Team Future 9–12 år (helår)",
    age: "9–12 år · hcp under 36",
    desc: "Kräver tidigare träningserfarenhet. 55 min/vecka vinter/vår/höst plus fysträning. Rangekort på 10 000 kr ingår.",
    price: "4 850",
    coach: "Gustav Ågren",
    color: "bg-blue-50 border-blue-200",
  },
  {
    name: "Team Future 13–18 år",
    age: "13–18 år",
    desc: "Utvecklingsfokus för erfarna spelare. Mål: erhålla handicap. 55 min/vecka vår/höst. Rangekort på 7 300 kr, tillgång till övningsbanan.",
    price: "3 650",
    coach: "Gustav Ågren",
    color: "bg-purple-50 border-purple-200",
  },
  {
    name: "Team Future 13–18 år (helår)",
    age: "13–18 år · hcp under 36",
    desc: "Kräver tidigare träning. 55 min/vecka plus vinterträning med fysik. Rangekort på 10 000 kr ingår.",
    price: "4 850",
    coach: "Gustav Ågren",
    color: "bg-purple-50 border-purple-200",
  },
  {
    name: "Team Junior (tävling)",
    age: "13–17 år · hcp 0–12",
    desc: "För aktiva tävlingsspelare i Teen Tour/regionala tävlingar. 55 min/vecka vinter, 90 min/vecka vår/höst plus spel. Rangekort på 12 000 kr.",
    price: "5 600",
    coach: "Gustav Ågren",
    color: "bg-amber-50 border-amber-200",
  },
  {
    name: "Team Ljunghusen",
    age: "16–21 år · inbjudan",
    desc: "Elitgrupp för de som siktar på collegegolf eller proffskarriär. Inbjudan baserad på golfförmåga, träningsambition och mognad.",
    price: "Inbjudan",
    coach: "Fredrik Theander",
    color: "bg-red-50 border-red-200",
  },
];

export default function JuniorPage() {
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
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Junior</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Golf för unga</h1>
          <p className="text-white/70 max-w-lg">
            Träningsprogram för 6–21 år. Från lek och rörelse till elitsatsning
            — alla nivåer välkomna.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Träningsgrupper */}
        <h2 className="text-2xl font-bold mb-6">Träningsgrupper</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {PROGRAMS.map((g) => (
            <div key={g.name} className={`rounded-xl p-6 border ${g.color}`}>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{g.age}</div>
              <h3 className="font-bold text-lg mb-2">{g.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{g.desc}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-200/50">
                <span className="text-lg font-bold text-[var(--color-forest)]">
                  {g.price === "Inbjudan" ? "Inbjudan" : `${g.price} kr`}
                </span>
                <span className="text-xs text-gray-400">{g.coach}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Medlemskap */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold mb-1">Juniormedlemskap</h2>
              <p className="text-sm text-gray-500">0–21 år. Obegränsad spelrätt, träningsanläggningar, samarbetsgreenfee och tävlingsdeltagande.</p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-3xl font-bold text-[var(--color-forest)]">3 800 <span className="text-lg font-normal text-gray-400">kr/år</span></div>
              <p className="text-xs text-gray-400">Inträdesavgift: 3 800 kr</p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold mb-3">Grönt kort</h3>
            <p className="text-sm text-gray-600">
              Juniorer behöver grönt kort för att spela på banan. Kontakta våra tränare för mer info.
            </p>
          </div>
          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold mb-3">Tävlingar</h3>
            <p className="text-sm text-gray-600">
              Juniorer tävlar regelbundet — både internt och mot andra klubbar.
              Anmälan via Golfbox.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-forest)] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Intresserad?</h2>
          <p className="text-white/70 text-sm mb-4">
            Kontakta kansliet för mer information om juniorprogrammet och anmälan. Anmälan till träning öppnar tidigt varje år.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:040-458000" className="px-5 py-2.5 bg-[var(--color-gold)] text-[var(--color-forest)] text-sm font-medium rounded-lg hover:bg-[var(--color-gold-dark)] transition-colors">
              Ring 040-45 80 00
            </a>
            <a href="mailto:info@ljgk.se" className="px-5 py-2.5 border border-white/30 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
              Maila info@ljgk.se
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
