import MainContainer from "@/app/components/mainContainer";
import CategoryCard, { Category } from "./categoryCard";

export default function Ricambi() {
  const categories: Category[] = [
    {
      name: "Meccanica",
      image: "/meccanica.png",
      value: "meccanica",
      subCategories: [
        {
          name: "Alternatore",
          image: "/alternatore.png",
          value: "alternatore",
        },
        { name: "Cambio", image: "/cambio.png", value: "cambio" },
        { name: "Collettore", image: "/collettore.png", value: "collettore" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
          value: "",
        },
        {
          name: "Pastiglie Freno",
          image: "/pastiglie.png",
          value: "pastiglie_freno",
        },
        {
          name: "Piantone Servosterzo",
          image: "/piantone.png",
          value: "piantone",
        },
        { name: "Pinza Freno", image: "/pastiglie.png", value: "pinza_freno" },
        {
          name: "Pompa Carburante",
          image: "/pompa.png",
          value: "pompa_carburante",
        },
      ],
    },
    {
      name: "Motori",
      image: "/motore.png",
      value: "",
      subCategories: [
        {
          name: "Centralina Motore",
          image: "/centralina.png",
          value: "centralina",
        },
        {
          name: "Coperchio Motore",
          image: "/coperchio.png",
          value: "coperchio_motore",
        },
        {
          name: "Flauto Iniettori",
          image: "/flauto_iniettori.png",
          value: "flauto_interni",
        },
        {
          name: "Iniettori",
          image: "/iniettori.png",
          value: "iniettori",
        },
        {
          name: "Motore Semi Completo",
          image: "/motore_semi_completo.png",
          value: "motore_semi_completo",
        },
        {
          name: "Pompa Iniezione",
          image: "/pompa.png",
          value: "pompa_iniezione",
        },
        { name: "Turbina", image: "/turbina.png", value: "turbina" },
      ],
    },
    {
      name: "Carrozzeria",
      image: "/carrozzeria.png",
      value: "carrozzeria",
      subCategories: [
        {
          name: "Aste Ammortizzanti",
          image: "/aste_ammortizzanti.png",
          value: "aste_ammortizzanti",
        },
        { name: "Lamierati", image: "/lamierati.png", value: "lamierati" },
        { name: "Maniglie", image: "/maniglie.png", value: "maniglie" },
        {
          name: "Paraurti Anteriore",
          image: "/paraurti_anteriore.png",
          value: "paraurti_amteriore",
        },
        {
          name: "Paraurti Posteriore",
          image: "/paraurti_posteriore.png",
          value: "paraurti_posteriore",
        },
        {
          name: "Specchietti Retrovisori",
          image: "/specchietti_retrovisori.png",
          value: "specchietti_retrovisori",
        },
        {
          name: "Vetri Scendenti",
          image: "/vetri_scendenti.png",
          value: "vetri_scendenti",
        },
      ],
    },
    {
      name: "Fanaleria",
      image: "/fanaleria.png",
      value: "fanaleria",
      subCategories: [
        {
          name: "Fanaleria Anteriore",
          image: "/fanaleria_anteriore.png",
          value: "anterire",
        },
        {
          name: "Fanaleria Posteriore",
          image: "/fanaleria_posteriore.png",
          value: "posteriore",
        },
        { name: "Frecce", image: "/frecce.png", value: "frecce" },
      ],
    },
    {
      name: "Interni",
      image: "/interni.png",
      value: "interni",
      subCategories: [
        {
          name: "Aletta Parasole",
          image: "/aletta_parasole.png",
          value: "aletta_parasole",
        },
        { name: "Autoradio", image: "/autoradio.png", value: "autoradio" },
        {
          name: "Blocchetto Accensione",
          image: "/blocchetto_accensione.png",
          value: "blocchetto_accensione",
        },
        {
          name: "Bocchette Aria",
          image: "/bocchette_aria.png",
          value: "bocchettone_aria",
        },
        {
          name: "Interruttori",
          image: "/interruttori.png",
          value: "interruttori",
        },
        {
          name: "Pannelli Porte",
          image: "/pannelli_porte.png",
          value: "pannelli_porte",
        },
        {
          name: "Pedaliere",
          image: "/pedaliere.png",
          value: "perdaliere",
        },
        {
          name: "Sedili",
          image: "/sedili.png",
          value: "sedili",
        },
      ],
    },
    {
      name: "Sicurezza",
      image: "/sicurezza.png",
      value: "sicurezza",
      subCategories: [
        { name: "Airbag", image: "/airbag.png", value: "airbag" },
        {
          name: "Attacchi cintura",
          image: "/attacchi_cintura.png",
          value: "attacchi_cinture",
        },
        {
          name: "Centralina Airbag",
          image: "/centralina.png",
          value: "centralina_airbag",
        },
        {
          name: "Cintura di sicurezza",
          image: "/cintura_sicurezza.png",
          value: "cintura",
        },
        { name: "Sensore", image: "/sensore.png", value: "sensore" },
        {
          name: "Contatto Spiralato",
          image: "/contatto_spiralato.png",
          value: "contatto_spiralato",
        },
        {
          name: "Sensori Airbag",
          image: "/sensori_airbag.png",
          value: "sensori_airbag",
        },
      ],
    },
    {
      name: "Cerchi",
      image: "/cerchi.png",
      value: "cerchi",
      subCategories: [
        { name: "Cerchio Ruota", image: "/cerchio_ruota.png", value: "ruota" },
        { name: "Copricerchi", image: "/copricerchi.png", value: "coperchi" },
        { name: "Collettore", image: "/collettore.png", value: "collettore" },
      ],
    },
    {
      name: "Pneumatici",
      image: "/pneumatici.png",
      value: "pneumatici",
      subCategories: [
        {
          name: "Kit Ruota di Scorta",
          image: "/kit_scorta.png",
          value: "kit_scorta",
        },
        {
          name: "Ruota di Scorta",
          image: "/ruota_scorta.png",
          value: "ruota_scorta",
        },
        { name: "Invernali", image: "/invernali.png", value: "invernali" },
        {
          name: "Quattro Stagioni",
          image: "/quattro_stagioni.png",
          value: "quattro_stagioni",
        },
        { name: "Estivi", image: "/estivi.png", value: "estivi" },
      ],
    },
    {
      name: "Moto",
      image: "/moto.png",
      value: "moto",
      subCategories: [
        {
          name: "Carrozzeria Moto",
          image: "/carrozzeria_moto.png",
          value: "carrozzeria",
        },
        {
          name: "Fanaleria Moro",
          image: "/fanaleria_moto.png",
          value: "fanaleria",
        },
        {
          name: "Meccanica Moto",
          image: "/meccanica_moto.png",
          value: "meccanica",
        },
        {
          name: "Parti Elettriche",
          image: "/parti_elettriche.png",
          value: "parti_elettriche",
        },
        {
          name: "Pneumatici Moto",
          image: "/pneumatici_moto.png",
          value: "pneumatici",
        },
        {
          name: "Telaio Moto",
          image: "/telaio_moto.png",
          value: "telaio",
        },
      ],
    },
  ];

  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-[#353535] from-5% via-[#616161] via-[15%] to-[#DBD9D9] to-40% pt-24">
      <MainContainer>
        <div className="flex flex-col gap-14">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </MainContainer>
    </div>
  );
}
