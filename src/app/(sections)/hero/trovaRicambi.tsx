"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SelectHero from "@/app/components/select_hero";

export function TrovaRicambi() {
  const [searchType, setSearchType] = useState<"VEICOLO" | "N. DI SERIE">(
    "VEICOLO"
  );

  const [range, setRange] = useState<number[]>([
    1970,
    new Date().getFullYear(),
  ]);

  const cars = {
    BMW: {
      "3 Series": ["Base", "Sport Line", "M Sport", "Luxury Line", "M340i"],
      "5 Series": ["Base", "Sport Line", "M Sport", "Luxury Line", "M550i"],
      X3: ["Base", "xLine", "M Sport", "M40i", "X3 M Competition"],
      X5: ["Base", "xLine", "M Sport", "X5 M50i", "X5 M Competition"],
      i4: ["eDrive35", "eDrive40", "xDrive40", "M50", "M60"],
    },
    "Mercedes-Benz": {
      "A-Class": ["Base", "Progressive", "AMG Line", "Premium", "AMG A45 S"],
      "C-Class": [
        "Base",
        "Avantgarde",
        "AMG Line",
        "Night Edition",
        "AMG C63 S",
      ],
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
      "Land Cruiser": [
        "Active",
        "Lounge",
        "Executive",
        "Invincible",
        "GR Sport",
      ],
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

  const [selectedCar, setSelectedCar] = useState<{
    brand?: CarBrand;
    model?: CarModel<CarBrand>;
    setUp?: CarSetUp<CarBrand, CarModel<CarBrand>>;
  }>({});

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[80%] justify-center relative">
        <div className="flex items-center justify-evenly bg-[#353535] gap-8 p-2 -top-7 absolute">
          <span
            key={"VEICOLO"}
            className={`text-4xl font-poppins font-bold cursor-pointer  ${
              searchType === "VEICOLO" ? `text-[#0BB489]` : `text-white`
            } `}
            style={{ textShadow: "0px 5px 5px #00000040" }}
            onClick={() => setSearchType("VEICOLO")}
          >
            VEICOLO
          </span>
          <div className="w-[3px] h-9 bg-white" />
          <span
            key={"N. DI SERIE"}
            className={`text-4xl font-poppins font-bold cursor-pointer ${
              searchType === "N. DI SERIE" ? `text-[#0BB489]` : `text-white`
            } `}
            style={{ textShadow: "0px 5px 5px #00000040" }}
            onClick={() => setSearchType("N. DI SERIE")}
          >
            N. DI SERIE
          </span>
        </div>
        <div className="flex flex-col gap-5 w-full p-10 border-[#0BB489] border-4">
          {searchType === "VEICOLO" ? (
            <div className="flex items-center gap-5">
              <SelectHero
                title="Marca"
                options={Object.keys(cars)}
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
                    ? Object.keys(cars[selectedCar.brand as CarBrand])
                    : []
                }
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
                onSelect={(setUp) =>
                  setSelectedCar((prev) => ({
                    ...prev,
                    setUp: setUp as CarSetUp<CarBrand, CarModel<CarBrand>>,
                  }))
                }
              ></SelectHero>
              <div className="flex flex-col items-center w-56 gap-2">
                <span className="text-sm text-white font-inter font-medium">
                  Anno di produzione
                </span>
                <Slider
                  value={range}
                  onValueChange={(newRange) => setRange(newRange)}
                  max={new Date().getFullYear()}
                  min={1970}
                  step={1}
                />
                <span className="text-sm text-white font-inter font-medium">
                  {range[0]} - {range[1]}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <span className="text-xl text-white font-inter font-semibold">
                Cerca per numero di serie
              </span>
              <div className="flex w-[80%] items-center bg-white p-3 border-2 border-[#0BB489] rounded-[6px]">
                <input
                  id="search1"
                  name="search1"
                  type="text"
                  placeholder="Per esempio: 9643777980, 0265216..."
                  className="w-full text-lg text-gray-900 placeholder:text-[#637381] focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          )}
          <Button className="w-56 bg-[#0BB489] hover:bg-[#0BB489]/85">
            <span className="text-xl text-white font-inter font-extrabold">
              TROVA RICAMBIO
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
