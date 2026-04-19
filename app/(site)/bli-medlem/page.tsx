export default function BliMedlemPage() {
  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Medlemskap</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Bli medlem</h1>
          <p className="text-white/70 max-w-lg">
            Ansök om medlemskap i Ljunghusens Golfklubb. Anmäl dig till kölistan för att säkra din plats.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Krav */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">Krav för medlemskap</h2>
          <ul className="space-y-3">
            {[
              "Handicap under 36 (banans högsta tillåtna handicap)",
              "Anmälan till kölista krävs",
              "Administrativ köavgift: 200 kr per person och år (faktureras varje höst)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">Så ansöker du</h2>
          <div className="space-y-5">
            {[
              {
                step: "1",
                title: "Fyll i anmälan",
                text: "Ange namn, Golf-ID (eller 12-siffrigt personnummer), adress, postnummer, e-post och telefon. Uppge även om du har familjemedlemmar som är medlemmar i klubben.",
              },
              {
                step: "2",
                title: "Köavgift",
                text: "Du betalar 200 kr per år för att stå i kön. Avgiften faktureras varje höst.",
              },
              {
                step: "3",
                title: "Invänta plats",
                text: "Klubben kan inte förutse hur lång väntetiden blir — det beror på hur många som lämnar varje år.",
              },
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

        {/* Förtur */}
        <div className="bg-[var(--color-sand)] rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold mb-3">Förtur</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-gold)] mt-0.5">•</span>
              Make/maka till aktiv medlem har förtur
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-gold)] mt-0.5">•</span>
              Juniorer som deltar i klubbens juniorprogram har förtur
            </li>
          </ul>
        </div>

        {/* Viktigt */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold mb-3">Viktigt att veta</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Meddela klubben om du byter adress, e-post eller telefonnummer så att köregistret
            hålls uppdaterat. För befintliga klubbmedlemmar uppdateras uppgifter automatiskt via golfsystemet.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-forest)] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Kontakta kansliet</h2>
          <p className="text-white/70 text-sm mb-4">
            Hör av dig för att anmäla dig till kölistan eller ställa frågor om medlemskap.
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
