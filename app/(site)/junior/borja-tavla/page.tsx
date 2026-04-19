export default function BorjaTavlaPage() {
  const STEPS = [
    {
      step: "1",
      title: "Klubbens egna tävlingar",
      desc: "Resan börjar med Ljunghusens interna tävlingar. Spela mot andra juniorer, utveckla dina färdigheter och känn gemenskapen i klubben. Det perfekta stället att ta dina första steg i tävlingsgolf.",
    },
    {
      step: "2",
      title: "Regionala tävlingar",
      desc: "När du är redo kan du tävla i Rookietour och Slaget om Skåne, arrangerade av Skånes Golfförbund. Mät dig mot juniorer från andra klubbar i regionen och samla värdefull tävlingserfarenhet.",
    },
    {
      step: "3",
      title: "Nationell nivå",
      desc: "De mest ambitiösa juniorerna kan delta i Svenska Juniortourerna, arrangerade av Svenska Golfförbundet. Tävla på nationell nivå och testa dina färdigheter mot landets bästa juniorer.",
    },
  ];

  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Junior</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Börja tävla</h1>
          <p className="text-white/70 max-w-lg">
            Tre steg från klubbtävlingar till nationell nivå. Så kommer du igång med tävlingsgolf.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-6 mb-12">
          {STEPS.map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white text-lg font-bold shrink-0">
                {item.step}
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 flex-1">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold mb-3">Tävlingsformat</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-sm mb-1">Rookietour</h3>
              <p className="text-sm text-gray-600">Arrangeras av Skånes Golfförbund. Perfekt för nya tävlingsspelare.</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Slaget om Skåne</h3>
              <p className="text-sm text-gray-600">Regional tävlingsserie för juniorer i Skåne.</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Svenska Juniortourerna</h3>
              <p className="text-sm text-gray-600">Nationella tävlingsserier via Svenska Golfförbundet.</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Interna tävlingar</h3>
              <p className="text-sm text-gray-600">Klubbens egna juniortävlingar under säsongen.</p>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-forest)] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Vill du börja tävla?</h2>
          <p className="text-white/70 text-sm mb-4">
            Prata med våra tränare för att hitta rätt nivå och tävlingsformat.
          </p>
          <a href="mailto:gustav@ljgk.se" className="px-5 py-2.5 bg-[var(--color-gold)] text-[var(--color-forest)] text-sm font-medium rounded-lg hover:bg-[var(--color-gold-dark)] transition-colors">
            Kontakta Gustav Ågren
          </a>
        </div>
      </div>
    </>
  );
}
