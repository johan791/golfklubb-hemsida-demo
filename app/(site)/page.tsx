import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    title: "Spela hos oss",
    desc: "Greenfee, bokning och allt du behöver för en dag på banan.",
    href: "/spela",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="19" cy="5" r="2" />
        <path d="M5 21l2-14h2l3 7h4" />
      </svg>
    ),
  },
  {
    title: "Medlemskap",
    desc: "Obegränsad spelrätt från 5 500 kr/år. Flera kategorier.",
    href: "/medlemskap",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Academy",
    desc: "5 PGA-proffs, lektioner från 600 kr, kurser och custom fitting.",
    href: "/academy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
  {
    title: "Junior",
    desc: "Program för 6–18 år. Träning, sommarskola och tävlingar.",
    href: "/junior",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "1932", label: "Grundad" },
  { value: "27", label: "Hål" },
  { value: "5", label: "PGA-proffs" },
  { value: "3", label: "Slingor" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="https://caddee-prod-media.s3.amazonaws.com/club-images/17192d22-2a36-48ff-8012-451cfe8d796f/header-normal_web.png"
          alt="Ljunghusens Golfklubb - linksbana vid havet"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-forest)]/90 via-[var(--color-forest)]/70 to-[var(--color-forest)]/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
              Falsterbonäset sedan 1932
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white animate-fade-in-up-delay-1">
              Ljunghusens
              <br />
              Golfklubb
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg animate-fade-in-up-delay-2">
              27 hål i ett unikt naturreservat på Falsterbonäset.
              Linksgolf i världsklass — sedan 1932.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up-delay-3">
              <Link
                href="/spela"
                className="px-6 py-3 bg-[var(--color-gold)] text-[var(--color-forest)] font-semibold rounded-lg hover:bg-[var(--color-gold-dark)] transition-colors"
              >
                Boka starttid
              </Link>
              <Link
                href="/medlemskap"
                className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Bli medlem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[var(--color-sand)] border-b border-[var(--color-sand-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[var(--color-sand-dark)]">
            {STATS.map((s) => (
              <div key={s.label} className="py-6 text-center">
                <div className="text-2xl font-bold text-[var(--color-forest)]">{s.value}</div>
                <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Välkommen till LJGK</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-[var(--color-gold)] transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-sand)] flex items-center justify-center text-[var(--color-forest)] mb-4 group-hover:bg-[var(--color-gold)]/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1.5 group-hover:text-[var(--color-forest-light)] transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Course image section */}
      <section className="bg-[var(--color-sand)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Golf i naturreservat</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ljunghusens Golfklubb ligger i ett unikt naturreservat på Falsterbonäset i Skåne.
                Vår 27-hålsbana erbjuder äkta linksgolf med tre slingor som utmanar spelare
                på alla nivåer. Med driving range, 5 PGA-proffs, restaurang Nermans och en
                välsorterad shop har vi allt du behöver.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/banan"
                  className="px-5 py-2.5 bg-[var(--color-forest)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-forest-light)] transition-colors"
                >
                  Utforska banan
                </Link>
                <Link
                  href="/kontakt"
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-white transition-colors"
                >
                  Kontakta oss
                </Link>
              </div>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://golfiskane.se/wp-content/uploads/2014/04/ljunghusens_gk_img_0174_1220x522.jpg"
                alt="Ljunghusens linksbana"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Webcam */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Live från banan</h2>
          <p className="text-gray-500 text-sm">Se aktuella förhållanden via vår webbkamera</p>
        </div>
        <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <Image
            src="https://liveevent.se/webbkamera/ljunghusensgk/ljunghusen_1280.jpg"
            alt="Webbkamera Ljunghusens Golfklubb - live från banan"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
            unoptimized
          />
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            LIVE
          </div>
        </div>
      </section>

      {/* Restaurant */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="relative bg-[var(--color-forest)] text-white rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-forest)] via-[var(--color-forest)]/95 to-[var(--color-forest)]/80" />
          <div className="relative p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Restaurang Nermans</h2>
              <p className="text-white/70 mb-4">
                Njut av lunch med utsikt över banan. Öppet dagligen 09:00–15:00.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 inline mr-1.5 -mt-0.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  040-45 35 81
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 inline mr-1.5 -mt-0.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@nermans.nu
                </span>
              </div>
            </div>
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10 text-[var(--color-gold)]/60">
                <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
