import Image from "next/image";

const SLINGOR = [
  {
    name: "Slinga 1–9",
    holes: "1–9",
    desc: "De klassiska öppningshålen med varierande terräng och strategiska bunkrar.",
    overview: "https://caddee-prod-media.s3.amazonaws.com/course-images/9266c845-a553-497f-9101-383807d1ccae/overview-normal_web_umbAZMl.png",
  },
  {
    name: "Slinga 10–18",
    holes: "10–18",
    desc: "Länkshål utmed kusten med vind som ständig följeslagare.",
    overview: "https://caddee-prod-media.s3.amazonaws.com/course-images/9266c845-a553-497f-9101-383807d1ccae/overview-normal_web_umbAZMl.png",
  },
  {
    name: "Slinga 19–27",
    holes: "19–27",
    desc: "Bollrännan — en kompakt 9-hålsslinga, perfekt för en snabb rond.",
    overview: "https://caddee-prod-media.s3.amazonaws.com/course-images/0bdc6dc5-c007-47ca-bf42-2e375a63a69e/overview-normal_web_oO51KNa.png",
  },
];

export default function BananPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="https://golfiskane.se/wp-content/uploads/2014/04/ljunghusens_gk_img_0174_1220x522.jpg"
          alt="Ljunghusens linksbana"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)] via-[var(--color-forest)]/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Banan</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">27 hål i naturreservat</h1>
          <p className="text-white/70 max-w-lg">
            Linksgolf i världsklass sedan 1932. Tre slingor som utmanar alla spelare
            — från nybörjare till scratch.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Slingor med bankartor */}
        <h2 className="text-2xl font-bold mb-6">Våra tre slingor</h2>
        <div className="space-y-8 mb-12">
          {SLINGOR.map((s) => (
            <div key={s.name} className="bg-white border border-gray-100 rounded-xl overflow-hidden sm:flex">
              <div className="relative sm:w-80 aspect-[4/3] sm:aspect-auto shrink-0 bg-[var(--color-sand)]">
                <Image
                  src={s.overview}
                  alt={`Bankarta ${s.name}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-sand)] flex items-center justify-center text-lg font-bold text-[var(--color-forest)] mb-4">
                  {s.holes.split("–")[0]}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Practical info */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold mb-3">Starttider</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Vardagar</span>
                <span className="font-medium text-gray-900">08:30–20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Helger</span>
                <span className="font-medium text-gray-900">09:00–20:00</span>
              </div>
              <p className="text-gray-400 pt-2 text-xs">18-hålsronder startar vid hål 10. Bokning via Golfbox.</p>
            </div>
          </div>

          <div className="bg-[var(--color-sand)] rounded-xl p-6">
            <h3 className="font-semibold mb-3">Driving range</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Öppettider</span>
                <span className="font-medium text-gray-900">06:00–21:00 dagligen</span>
              </div>
              <p className="text-gray-400 pt-2 text-xs">Perfekt för uppvärmning eller träning. Toalett finns vid driving range för 9-hålsspelare.</p>
            </div>
          </div>
        </div>

        {/* Webcam */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Banförhållanden just nu</h2>
          <div className="relative aspect-video max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="https://liveevent.se/webbkamera/ljunghusensgk/ljunghusen_1280.jpg"
              alt="Webbkamera Ljunghusens Golfklubb"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 768px"
              unoptimized
            />
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              LIVE
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-4">Bra att veta</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Naturreservat", text: "Banan ligger i skyddat naturreservat. Visa hänsyn och följ markerade stigar." },
              { title: "Golfbilar", text: "Golfbilar får inte köras i ljungen. Körkort och läkarintyg krävs." },
              { title: "Miljöcertifierad", text: "Vi är en miljöcertifierad golfklubb med fokus på hållbarhet." },
              { title: "Kiosk hål 10", text: "Tillfälligt stängd för renovering. Faciliteter finns i klubbhuset." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
