import { Category } from "./categoryCard";

export const categories: Category[] = [
  {
    name: "Meccanica",
    image: "/meccanica.png",
    slug: "meccanica",
    subCategories: [
      {
        name: "Alternatore",
        image: "/alternatore.png",
        slug: "alternatore",
      },
      { name: "Cambio", image: "/cambio.png", slug: "cambio" },
      { name: "Collettore", image: "/collettore.png", slug: "collettore" },
      {
        name: "Motorino Avviamento",
        image: "/motorino.png",
        slug: "",
      },
      {
        name: "Pastiglie Freno",
        image: "/pastiglie.png",
        slug: "pastiglie_freno",
      },
      {
        name: "Piantone Servosterzo",
        image: "/piantone.png",
        slug: "piantone",
      },
      { name: "Pinza Freno", image: "/pastiglie.png", slug: "pinza_freno" },
      {
        name: "Pompa Carburante",
        image: "/pompa.png",
        slug: "pompa_carburante",
      },
    ],
  },
  {
    name: "Motori",
    image: "/motore.png",
    slug: "",
    subCategories: [
      {
        name: "Centralina Motore",
        image: "/centralina.png",
        slug: "centralina",
      },
      {
        name: "Coperchio Motore",
        image: "/coperchio.png",
        slug: "coperchio_motore",
      },
      {
        name: "Flauto Iniettori",
        image: "/flauto_iniettori.png",
        slug: "flauto_interni",
      },
      {
        name: "Iniettori",
        image: "/iniettori.png",
        slug: "iniettori",
      },
      {
        name: "Motore Semi Completo",
        image: "/motore_semi_completo.png",
        slug: "motore_semi_completo",
      },
      {
        name: "Pompa Iniezione",
        image: "/pompa.png",
        slug: "pompa_iniezione",
      },
      { name: "Turbina", image: "/turbina.png", slug: "turbina" },
    ],
  },
  {
    name: "Carrozzeria",
    image: "/carrozzeria.png",
    slug: "carrozzeria",
    subCategories: [
      {
        name: "Aste Ammortizzanti",
        image: "/aste_ammortizzanti.png",
        slug: "aste_ammortizzanti",
      },
      { name: "Lamierati", image: "/lamierati.png", slug: "lamierati" },
      { name: "Maniglie", image: "/maniglie.png", slug: "maniglie" },
      {
        name: "Paraurti Anteriore",
        image: "/paraurti_anteriore.png",
        slug: "paraurti_amteriore",
      },
      {
        name: "Paraurti Posteriore",
        image: "/paraurti_posteriore.png",
        slug: "paraurti_posteriore",
      },
      {
        name: "Specchietti Retrovisori",
        image: "/specchietti_retrovisori.png",
        slug: "specchietti_retrovisori",
      },
      {
        name: "Vetri Scendenti",
        image: "/vetri_scendenti.png",
        slug: "vetri_scendenti",
      },
    ],
  },
  {
    name: "Fanaleria",
    image: "/fanaleria.png",
    slug: "fanaleria",
    subCategories: [
      {
        name: "Fanaleria Anteriore",
        image: "/fanaleria_anteriore.png",
        slug: "anterire",
      },
      {
        name: "Fanaleria Posteriore",
        image: "/fanaleria_posteriore.png",
        slug: "posteriore",
      },
      { name: "Frecce", image: "/frecce.png", slug: "frecce" },
    ],
  },
  {
    name: "Interni",
    image: "/interni.png",
    slug: "interni",
    subCategories: [
      {
        name: "Aletta Parasole",
        image: "/aletta_parasole.png",
        slug: "aletta_parasole",
      },
      { name: "Autoradio", image: "/autoradio.png", slug: "autoradio" },
      {
        name: "Blocchetto Accensione",
        image: "/blocchetto_accensione.png",
        slug: "blocchetto_accensione",
      },
      {
        name: "Bocchette Aria",
        image: "/bocchette_aria.png",
        slug: "bocchettone_aria",
      },
      {
        name: "Interruttori",
        image: "/interruttori.png",
        slug: "interruttori",
      },
      {
        name: "Pannelli Porte",
        image: "/pannelli_porte.png",
        slug: "pannelli_porte",
      },
      {
        name: "Pedaliere",
        image: "/pedaliere.png",
        slug: "perdaliere",
      },
      {
        name: "Sedili",
        image: "/sedili.png",
        slug: "sedili",
      },
    ],
  },
  {
    name: "Sicurezza",
    image: "/sicurezza.png",
    slug: "sicurezza",
    subCategories: [
      { name: "Airbag", image: "/airbag.png", slug: "airbag" },
      {
        name: "Attacchi cintura",
        image: "/attacchi_cintura.png",
        slug: "attacchi_cinture",
      },
      {
        name: "Centralina Airbag",
        image: "/centralina.png",
        slug: "centralina_airbag",
      },
      {
        name: "Cintura di sicurezza",
        image: "/cintura_sicurezza.png",
        slug: "cintura",
      },
      { name: "Sensore", image: "/sensore.png", slug: "sensore" },
      {
        name: "Contatto Spiralato",
        image: "/contatto_spiralato.png",
        slug: "contatto_spiralato",
      },
      {
        name: "Sensori Airbag",
        image: "/sensori_airbag.png",
        slug: "sensori_airbag",
      },
    ],
  },
  {
    name: "Cerchi",
    image: "/cerchi.png",
    slug: "cerchi",
    subCategories: [
      { name: "Cerchio Ruota", image: "/cerchio_ruota.png", slug: "ruota" },
      { name: "Copricerchi", image: "/copricerchi.png", slug: "coperchi" },
      { name: "Collettore", image: "/collettore.png", slug: "collettore" },
    ],
  },
  {
    name: "Pneumatici",
    image: "/pneumatici.png",
    slug: "pneumatici",
    subCategories: [
      {
        name: "Kit Ruota di Scorta",
        image: "/kit_scorta.png",
        slug: "kit_scorta",
      },
      {
        name: "Ruota di Scorta",
        image: "/ruota_scorta.png",
        slug: "ruota_scorta",
      },
      { name: "Invernali", image: "/invernali.png", slug: "invernali" },
      {
        name: "Quattro Stagioni",
        image: "/quattro_stagioni.png",
        slug: "quattro_stagioni",
      },
      { name: "Estivi", image: "/estivi.png", slug: "estivi" },
    ],
  },
  {
    name: "Moto",
    image: "/moto.png",
    slug: "moto",
    subCategories: [
      {
        name: "Carrozzeria Moto",
        image: "/carrozzeria_moto.png",
        slug: "carrozzeria",
      },
      {
        name: "Fanaleria Moro",
        image: "/fanaleria_moto.png",
        slug: "fanaleria",
      },
      {
        name: "Meccanica Moto",
        image: "/meccanica_moto.png",
        slug: "meccanica",
      },
      {
        name: "Parti Elettriche",
        image: "/parti_elettriche.png",
        slug: "parti_elettriche",
      },
      {
        name: "Pneumatici Moto",
        image: "/pneumatici_moto.png",
        slug: "pneumatici",
      },
      {
        name: "Telaio Moto",
        image: "/telaio_moto.png",
        slug: "telaio",
      },
    ],
  },
];
