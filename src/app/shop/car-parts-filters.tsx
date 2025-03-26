"use client";
import { Slider } from "@/components/ui/slider";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Category } from "../(sections)/ricambi/categoryCard";
import MainContainer from "../components/mainContainer";
import SelectHero from "../components/select_hero";
import SelectCategory from "./select-category";

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
        value: "motorino_avviamento",
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
    value: "motori",
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

const cars = {
  Ford: {
    Focus: ["1.8 Diesel 115CV"],
  },
  BMW: {
    "3 Series": ["Base", "Sport Line", "M Sport", "Luxury Line", "M340i"],
    "5 Series": ["Base", "Sport Line", "M Sport", "Luxury Line", "M550i"],
    X3: ["Base", "xLine", "M Sport", "M40i", "X3 M Competition"],
    X5: ["Base", "xLine", "M Sport", "X5 M50i", "X5 M Competition"],
    i4: ["eDrive35", "eDrive40", "xDrive40", "M50", "M60"],
  },
  "Mercedes-Benz": {
    "A-Class": ["Base", "Progressive", "AMG Line", "Premium", "AMG A45 S"],
    "C-Class": ["Base", "Avantgarde", "AMG Line", "Night Edition", "AMG C63 S"],
    "E-Class": ["Base", "Avantgarde", "AMG Line", "Exclusive", "AMG E63 S"],
    GLC: ["Base", "Progressive", "AMG Line", "AMG GLC43", "AMG GLC63 S"],
    "S-Class": ["Base", "Exclusive", "AMG Line", "Maybach", "AMG S63"],
  },
  Audi: {
    A3: ["Base", "Business", "S line", "Black Edition", "RS3"],
    A4: ["Base", "Business", "Advanced", "S line", "RS4 Avant"],
    Q5: ["Base", "Business", "Advanced", "S line", "SQ5"],
    A6: ["Base", "Business", "Advanced", "S line", "RS6 Avant"],
    Q7: ["Base", "Business", "Advanced", "S line", "SQ7"],
  },
  Volkswagen: {
    Golf: ["Base", "Life", "Style", "R-Line", "Golf R"],
    Passat: ["Base", "Business", "Elegance", "R-Line", "GTE"],
    Tiguan: ["Base", "Life", "Elegance", "R-Line", "Tiguan R"],
    Polo: ["Base", "Life", "Style", "R-Line", "GTI"],
    "T-Roc": ["Base", "Style", "Sport", "R-Line", "T-Roc R"],
  },
  Toyota: {
    Yaris: ["Active", "Trend", "GR Sport", "Lounge", "GR Yaris"],
    Corolla: ["Active", "Style", "GR Sport", "Lounge", "Touring Sports"],
    RAV4: ["Active", "Style", "Lounge", "Adventure", "GR Sport"],
    "C-HR": ["Active", "Style", "GR Sport", "Lounge", "Premiere Edition"],
    "Land Cruiser": ["Active", "Lounge", "Executive", "Invincible", "GR Sport"],
  },
};

type CarBrand = keyof typeof cars;
type CarModel<Brand extends CarBrand> = keyof (typeof cars)[Brand];
type CarSetUp<
  Brand extends CarBrand,
  Model extends CarModel<Brand>
> = (typeof cars)[Brand][Model] extends string[]
  ? (typeof cars)[Brand][Model][number]
  : never;

export default function CarPartsFilters({
  initialBrand,
  initialModel,
  initialSetup,
  initialEndYear,
  initialStartYear,
  initialCategory,
}: {
  initialBrand?: string;
  initialModel?: string;
  initialSetup?: string;
  initialStartYear?: number;
  initialEndYear?: number;
  initialCategory?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCar, setSelectedCar] = useState<{
    brand?: CarBrand;
    model?: CarModel<CarBrand>;
    setup?: CarSetUp<CarBrand, CarModel<CarBrand>>;
  }>({
    brand: initialBrand ? (initialBrand as CarBrand) : undefined,
    model: initialModel ? (initialModel as CarModel<CarBrand>) : undefined,
    setup: initialSetup
      ? (initialSetup as CarSetUp<CarBrand, CarModel<CarBrand>>)
      : undefined,
  });
  const [range, setRange] = useState<number[]>([
    initialStartYear ?? 2000,
    initialEndYear ?? new Date().getFullYear(),
  ]);
  const [category, setCategory] = useState<string | undefined>(initialCategory);

  const onFilterApply = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCar && selectedCar.brand) {
      params.set("brand", selectedCar.brand);
    }

    if (selectedCar && selectedCar.model) {
      params.set("model", selectedCar.model);
    }

    if (selectedCar && selectedCar.setup) {
      params.set("setup", selectedCar.setup);
    }

    if (category) {
      params.set("category", category);
    }

    params.set("startYear", range[0].toString());
    params.set("endYear", range[1].toString());

    params.set("page", "1");

    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  return (
    <MainContainer>
      <div
        id="list"
        className="grid grid-cols-2 w-full md:flex justify-center items-center gap-5"
      >
        <SelectHero
          title={"Marca"}
          options={Object.keys(cars)}
          value={selectedCar.brand}
          onSelect={(brand) =>
            setSelectedCar({
              brand: brand as CarBrand,
            })
          }
        ></SelectHero>
        <SelectHero
          title="Modello"
          options={
            selectedCar.brand
              ? Object.keys(cars[selectedCar.brand as CarBrand] ?? [])
              : []
          }
          value={selectedCar.model}
          onSelect={(model) =>
            setSelectedCar((prev) => ({
              ...prev,
              model: model as CarModel<CarBrand>,
            }))
          }
        ></SelectHero>
        <SelectHero
          title="Allestimento"
          options={
            selectedCar.model
              ? cars[selectedCar.brand as CarBrand][
                  selectedCar.model as CarModel<CarBrand>
                ]
              : []
          }
          value={selectedCar.setup}
          onSelect={(setUp) =>
            setSelectedCar((prev) => ({
              ...prev,
              setup: setUp as CarSetUp<CarBrand, CarModel<CarBrand>>,
            }))
          }
        ></SelectHero>
        <SelectCategory
          title="Categorie"
          categories={[...categories]}
          onSelect={(cat) => setCategory(cat)}
          value={category}
        />
        <div className="flex flex-col items-center w-full gap-2">
          <span
            className={`text-sm text-center font-inter font-medium text-[#3A3A3A]`}
          >
            Anno di produzione
          </span>
          <Slider
            value={range}
            onValueChange={(newRange) => setRange(newRange)}
            max={new Date().getFullYear()}
            min={2000}
            step={1}
          />
          <span className={`text-sm text-center font-inter font-medium `}>
            {range[0]} - {range[1]}
          </span>
        </div>
        <div
          onClick={onFilterApply}
          className="bg-primary-green px-[20px] py-[5px] w-fit rounded-md cursor-pointer h-fit text-white font-semibold uppercase"
        >
          Applica
        </div>
      </div>
    </MainContainer>
  );
}
