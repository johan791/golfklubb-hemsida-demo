import Image from "next/image";

const ADMIN_STAFF = [
  { name: "Tony Björk", role: "VD/Klubbchef", email: "klubbchef@ljgk.se" },
  { name: "Katarina Evander", role: "Marknad/försäljning/kansliansvarig", email: "katarina@ljgk.se" },
  { name: "Anna Carlsson", role: "Ekonomi och kansli", email: "anna@ljgk.se" },
  { name: "Eric Tham", role: "Marshal", email: null },
];

const COURSE_STAFF = [
  { name: "Simon Månsson", role: "Banchef", email: "banchef@ljgk.se" },
  { name: "Martin Jernberg", role: "Mekaniker", email: null },
  { name: "Fredrik Goa", role: "Greenkeeper", email: null },
  { name: "Fabian Ramel", role: "Greenkeeper", email: null },
  { name: "Rickard Ekberg", role: "Greenkeeper", email: null },
  { name: "Linus Åberg", role: "Greenkeeper", email: null },
  { name: "Mattias Feuk", role: "Greenkeeper", email: null },
];

export default function KontaktPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="https://golfiskane.se/wp-content/uploads/2014/04/ljunghusens_gk_img_0174_1220x522.jpg"
          alt="Ljunghusens Golfklubb banan"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)] via-[var(--color-forest)]/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Kontakt</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Hör av dig</h1>
          <p className="text-white/70 max-w-lg">
            Vi finns här för att hjälpa dig. Kontakta kansliet, shop eller restaurangen.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Kansli</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Telefon</p>
                <a href="tel:040-458000" className="font-medium text-[var(--color-forest)] hover:underline">040-45 80 00</a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:info@ljgk.se" className="font-medium text-[var(--color-forest)] hover:underline">info@ljgk.se</a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Öppettider</p>
                <p className="text-gray-600">Vardag 08:30–16:00</p>
                <p className="text-gray-600">Helg 08:30–15:00</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Telefontider</p>
                <p className="text-gray-600">Vardag 09–12, 13–15</p>
                <p className="text-gray-600">Helg 09–13</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Shop & Träning</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Telefon</p>
                <a href="tel:040-452561" className="font-medium text-[var(--color-forest)] hover:underline">040-45 25 61</a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:shop@ljgk.se" className="font-medium text-[var(--color-forest)] hover:underline">shop@ljgk.se</a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Restaurang Nermans</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Telefon</p>
                <a href="tel:040-453581" className="font-medium text-[var(--color-forest)] hover:underline">040-45 35 81</a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:info@nermans.nu" className="font-medium text-[var(--color-forest)] hover:underline">info@nermans.nu</a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Öppettider</p>
                <p className="text-gray-600">Dagligen 09:00–15:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map embed */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=Ljunghusens+Golfklubb,+Kinells+väg,+Höllviken&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ljunghusens Golfklubb på kartan"
          />
        </div>

        {/* Administration */}
        <h2 className="text-2xl font-bold mb-6">Administration</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {ADMIN_STAFF.map((s) => (
            <div key={s.name} className="flex items-center gap-4 bg-[var(--color-sand)] rounded-xl p-4">
              <div className="w-11 h-11 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white font-bold text-xs shrink-0">
                {s.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-sm">{s.name}</p>
                <p className="text-xs text-gray-500">{s.role}</p>
                {s.email && (
                  <a href={`mailto:${s.email}`} className="text-xs text-[var(--color-forest-light)] hover:underline">{s.email}</a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bana */}
        <h2 className="text-2xl font-bold mb-6">Banpersonal</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {COURSE_STAFF.map((s) => (
            <div key={s.name} className="flex items-center gap-4 bg-[var(--color-sand)] rounded-xl p-4">
              <div className="w-11 h-11 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white font-bold text-xs shrink-0">
                {s.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-sm">{s.name}</p>
                <p className="text-xs text-gray-500">{s.role}</p>
                {s.email && (
                  <a href={`mailto:${s.email}`} className="text-xs text-[var(--color-forest-light)] hover:underline">{s.email}</a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hitta hit */}
        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-3">Hitta hit</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Adress:</strong> Kinells väg, 236 42 Höllviken
              </p>
              <p className="text-sm text-gray-600">
                Ljunghusens Golfklubb ligger på Falsterbonäset i sydvästra Skåne,
                bara några minuter från Höllviken och Skanör-Falsterbo.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Range & klubbhus</strong>
              </p>
              <p className="text-sm text-gray-600">
                Öppet dagligen 07:00–21:00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
