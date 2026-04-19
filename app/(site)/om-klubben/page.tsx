import Image from "next/image";

const TIMELINE = [
  { year: "1932", event: "Klubben grundas av AB Ljungskogens Strandbad med 9 hål. Södra Ljunghuset blir klubbhus." },
  { year: "1938", event: "Ljunghusens GK ansluts till Svenska Golfförbundet." },
  { year: "1953", event: "Medlemmarna tar över driften av klubben." },
  { year: "1957", event: "18-hålsbana färdigställs. Douglas Brasier och Bengt Polling designar layouten." },
  { year: "1965", event: "Nordens första 27-hålsbana invigs i juni. Nytt klubbhus med restaurang, shop och kontor." },
  { year: "1966", event: "JSM och Penfold Cup arrangeras på banan." },
  { year: "1972", event: "SM-tävlingar spelas på Ljunghusen." },
  { year: "1977", event: "Vagliano Trophy arrangeras." },
  { year: "1979", event: "SISM för damer. Nytt bevattningssystem installeras." },
  { year: "1980", event: "Stig Persson anställs som verkställande direktör." },
  { year: "1982", event: "Klubbhuset renoveras. Medlemsantalet når ca 1 200." },
  { year: "2002", event: "Brand i klubbhuset. Omfattande renovering genomförs." },
  { year: "2008", event: "Lounge och mötesrum byggs till." },
  { year: "2019", event: "Team European Championship arrangeras på banan." },
];

export default function OmKlubbenPage() {
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
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Om klubben</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Ljunghusens Golfklubb</h1>
          <p className="text-white/70 max-w-lg">
            En av Sveriges äldsta golfklubbar, grundad 1932 på Falsterbonäset.
            Nordens första 27-hålsbana sedan 1965.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold mb-4">Linksgolf vid havet</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ljunghusens Golfklubb ligger i ett unikt naturreservat på Falsterbonäset i sydvästra Skåne.
            Banan är en av Sveriges få äkta linksgolfbanor och gränsar till ett stort naturskyddat
            våtmarksområde, bara några meter från Östersjöns vita sandstränder.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Klubben är miljöcertifierad genom Golf Environment Organisation med dokumenterad flora
            (377 arter) och fauna (90 fågelarter). Tre slingor om 27 hål utmanar spelare på alla nivåer.
          </p>
        </div>

        {/* Facts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Grundad", value: "1932" },
            { label: "Hål", value: "27" },
            { label: "PGA-proffs", value: "5" },
            { label: "Medlemmar", value: "~1 200" },
          ].map((f) => (
            <div key={f.label} className="bg-[var(--color-sand)] rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-[var(--color-forest)]">{f.value}</div>
              <div className="text-sm text-gray-500 mt-1">{f.label}</div>
            </div>
          ))}
        </div>

        {/* Historia */}
        <h2 className="text-2xl font-bold mb-6">Klubbens historia</h2>
        <div className="space-y-0 mb-12">
          {TIMELINE.map((item, i) => (
            <div key={item.year} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {item.year.slice(2)}
                </div>
                {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1" />}
              </div>
              <div className="pb-6">
                <p className="font-semibold text-sm text-[var(--color-forest)]">{item.year}</p>
                <p className="text-sm text-gray-600">{item.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Miljö */}
        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-3">Miljöcertifierad golfklubb</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ljunghusens GK är miljöcertifierad genom Golf Environment Organisation (GEO).
            Banan ligger i ett naturreservat med ett rikt djur- och växtliv — 377 dokumenterade
            växtarter och 90 fågelarter. Vi arbetar aktivt med hållbarhet och naturvård.
          </p>
        </div>
      </div>
    </>
  );
}
