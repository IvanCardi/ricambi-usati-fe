import MainContainer from "@/app/components/mainContainer";
import CategoryCard, { Category } from "./categoryCard";

export default function Ricambi() {
  const categories: Category[] = [
    {
      title: "Meccanica",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
        { name: "Pastiglie Freno", image: "/pastiglie.png" },
        {
          name: "Piantone Servosterzo",
          image: "/piantone.png",
        },
        { name: "Pinza Freno", image: "/pastiglie.png" },
        { name: "Pompa Carburante", image: "/pompa.png" },
      ],
    },
    {
      title: "Motori",
      image: "/motore.png",
      items: [
        { name: "Centralina Motore", image: "/centralina.png" },
        { name: "Coperchio Motore", image: "/coperchio.png" },
        { name: "Flauto Iniettori", image: "/flauto_iniettori.png" },
        {
          name: "Iniettori",
          image: "/iniettori.png",
        },
        { name: "Motore Semi Completo", image: "/motore_semi_completo.png" },
        {
          name: "Pompa Iniezione",
          image: "/pompa.png",
        },
        { name: "Turbina", image: "/turbina.png" },
      ],
    },
    {
      title: "Carrozzeria",
      image: "/carrozzeria.png",
      items: [
        { name: "Aste Ammortizzanti", image: "/aste_ammortizzanti.png" },
        { name: "Lamierati", image: "/lamierati.png" },
        { name: "Maniglie", image: "/maniglie.png" },
        {
          name: "Paraurti Anteriore",
          image: "/paraurti_anteriore.png",
        },
        {
          name: "Paraurti Posteriore",
          image: "/paraurti_posteriore.png",
        },
        {
          name: "Specchietti Retrovisori",
          image: "/specchietti_retrovisori.png",
        },
        {
          name: "Vetri Scendenti",
          image: "/vetri_scendenti.png",
        },
      ],
    },
    {
      title: "Fanaleria",
      image: "/fanaleria.png",
      items: [
        { name: "Fanaleria Anteriore", image: "/fanaleria_anteriore.png" },
        { name: "Fanaleria Posteriore", image: "/fanaleria_posteriore.png" },
        { name: "Frecce", image: "/frecce.png" },
      ],
    },
    {
      title: "Interni",
      image: "/interni.png",
      items: [
        { name: "Aletta Parasole", image: "/aletta_parasole.png" },
        { name: "Autoradio", image: "/autoradio.png" },
        { name: "Blocchetto Accensione", image: "/blocchetto_accensione.png" },
        {
          name: "Bocchette Aria",
          image: "/bocchette_aria.png",
        },
        { name: "Interruttori", image: "/interruttori.png" },
        {
          name: "Pannelli Porte",
          image: "/pannelli_porte.png",
        },
        {
          name: "Pedaliere",
          image: "/pedaliere.png",
        },
        {
          name: "Sedili",
          image: "/sedili.png",
        },
      ],
    },
    {
      title: "Sicurezza",
      image: "/sicurezza.png",
      items: [
        { name: "Airbag", image: "/airbag.png" },
        { name: "Attacchi cintura", image: "/attacchi_cintura.png" },
        { name: "Centralina Airbag", image: "/centralina.png" },
        { name: "Cintura di sicurezza", image: "/cintura_sicurezza.png" },
        { name: "Sensore", image: "/sensore.png" },
        { name: "Contatto Spiralato", image: "/contatto_spiralato.png" },
        { name: "Sensori Airbag", image: "/sensori_airbag.png" },
      ],
    },
    {
      title: "Cerchi",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
        { name: "Pastiglie Freno", image: "/pastiglie.png" },
        {
          name: "Piantone Servosterzo",
          image: "/piantone.png",
        },
        { name: "Pinza Freno", image: "/pastiglie.png" },
      ],
    },
    {
      title: "Pneumatici",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
        { name: "Pastiglie Freno", image: "/pastiglie.png" },
      ],
    },
    {
      title: "Moto",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
      ],
    },
  ];

  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-[#353535] from-5% via-[#616161] via-[15%] to-[#DBD9D9] to-40% pt-24">
      <MainContainer>
        <div className="flex flex-col gap-14">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </MainContainer>
    </div>
  );
}
