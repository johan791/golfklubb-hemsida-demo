export default function ReglerEtikettPage() {
  const RULES = [
    {
      title: "Banpersonal har företräde",
      text: "Banpersonal har alltid företräde på banan och ger klartecken när ni kan slå. Handlingar som äventyrar personalens säkerhet leder till disciplinära åtgärder.",
    },
    {
      title: "Speltempo",
      text: "Rekommenderad rondtid för en fyrboll är fyra timmar i avslappnat tempo. Klubbens Marshal övervakar speltempot under säsong och kan uppmana spelare som inte följer reglerna att lämna banan.",
    },
    {
      title: "Genomsläpp",
      text: "En boll anses förlorad om den inte hittas inom tre minuter. Grupper ska släppa igenom snabbare spel när söktiden överskrids eller när det finns ett tomt hål framför.",
    },
    {
      title: "Bunkerskötsel",
      text: "Hela bunkerkrattan ska placeras i bunkern med skaftet i spelriktningen. Krattning är obligatorisk när bunkrar beträds.",
    },
    {
      title: "Banskösel",
      text: "Torvor ska läggas tillbaka på fairway. Nedslagsmärken på green ska lagas.",
    },
    {
      title: "Klädkod",
      text: "Proper klädsel krävs. Kepsar och mössor är tillåtna utomhus men ska tas av inomhus i klubbhuset.",
    },
    {
      title: "Avfall",
      text: "Använda snuspåsar och cigarettfimpar får inte lämnas i naturen.",
    },
    {
      title: "Hastighetsgräns",
      text: "30 km/h gäller i hela Ljungskogens område för att värna om naturmiljön.",
    },
    {
      title: "Dragvagnar",
      text: "Dragvagnar är inte tillåtna i ljungområdena.",
    },
    {
      title: "Hundar",
      text: "Hundar ska hållas kopplade och avföring ska plockas upp. Hundar är inte tillåtna under tävlingar.",
    },
  ];

  return (
    <>
      <section className="bg-[var(--color-forest)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[var(--color-gold)] text-sm font-medium tracking-widest uppercase mb-2">Banan</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Regler & etikett</h1>
          <p className="text-white/70 max-w-lg">
            Hjälp oss att hålla banan i toppskick och skapa en trevlig upplevelse för alla.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-4">
          {RULES.map((rule) => (
            <div key={rule.title} className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-sm mb-2">{rule.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{rule.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
