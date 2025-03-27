"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import MainContainer from "../components/mainContainer";
import SelectHero from "../components/select_hero";
import { Slider } from "@/components/ui/slider";

import { categories } from "../(sections)/ricambi/categoriesList";
import SelectCategory from "./select-category";

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
