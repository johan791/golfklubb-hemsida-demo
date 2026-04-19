export default function BoendePage() {
  const HOTELS = [
    {
      name: "Strandvillan",
      desc: "20 unika rum, 5 km från klubben. Omgiven av hav, ljung och tallskog. SPA, 45 min till Köpenhamn, 25 min till Malmö.",
      url: "https://strandvillan.com/aktivitet/golf/",
    },
    {
      name: "Hotell Gässlingen",
      location: "Skanör",
      desc: "29 rum varav 3 sviter, 4 konferensrum. Skånskt jordnära hotell med pool, SPA och restaurang (120 platser).",
      url: "https://www.hotellgasslingen.com/",
    },
    {
      name: "Höllviksnäs",
      location: "Höllviken",
      desc: "Rum, villor och stugor med terrasser. Pool, bastu och restaurang med utsikt över Öresund. Tel: 040-45 91 50.",
      url: null,
    },
    {
      name: "Quality Hotel View",
      location: "Malmö",
      desc: "302 rum, 27 konferensrum. Restauranger, barlounge och golfsimulator.",
      url: "https://www.nordicchoicehotels.se/hotell/sverige/malmo/quality-hotel-view/",
    },
    {
      name: "Malmö Arena Hotel",
      location: "Malmö Hyllie",
      desc: "395 rum, 12 minuter från Köpenhamns flygplats. Skybar med utsikt, frukost inkluderad.",
      url: "https://malmoarenahotel.com/",
    },
    {
      name: "Hotell Dannegården",
      location: "Trelleborg",
      desc: "26 rum i restaurerad redarevilla från 1910. Relaxpool, bastu och restaurang.",
      url: "http://www.dannegarden.se/start/",
    },
  ];

  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Gäst</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Boende</h1>
          <p className="text-white/70 max-w-lg">
            Boka boende nära Ljunghusens Golfklubb. Från strandnära boutique till stadshotell i Malmö.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-5">
          {HOTELS.map((hotel) => (
            <div key={hotel.name} className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-1">{hotel.name}</h3>
              {hotel.location && (
                <p className="text-xs text-[var(--color-gold)] font-medium uppercase tracking-wide mb-2">{hotel.location}</p>
              )}
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{hotel.desc}</p>
              {hotel.url && (
                <a
                  href={hotel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-forest)] font-medium hover:underline"
                >
                  Besök hemsida →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[var(--color-sand)] rounded-xl p-6 sm:p-8">
          <h2 className="text-lg font-bold mb-3">Hitta hit</h2>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Adress:</strong> Kinells väg 34, 236 42 Höllviken
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Från Malmö tar det cirka 30 minuter att köra hit. Sommartid kan det uppstå
            väntetider vid broöppning vid Falsterbokanalen.
          </p>
          <p className="text-sm text-gray-600">
            30 km/h gäller i hela Ljungskogens område.
          </p>
        </div>
      </div>
    </>
  );
}
