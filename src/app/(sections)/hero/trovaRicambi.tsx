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

  const modelli = [
    "Fiat Panda",
    "Ford Focus",
    "Toyota Yaris",
    "Hyundai i20",
    "Seat Leon",
  ];
  const allestimento = [
    "Fiat Panda",
    "Ford Focus",
    "Toyota Yaris",
    "Hyundai i20",
    "Seat Leon",
  ];
  const categorie = [
    "Fiat Panda",
    "Ford Focus",
    "Toyota Yaris",
    "Hyundai i20",
    "Seat Leon",
  ];

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
              <SelectHero title="Modelli" options={modelli}></SelectHero>
              <SelectHero
                title="Allestimento"
                options={allestimento}
              ></SelectHero>
              <SelectHero title="Categorie" options={categorie}></SelectHero>
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
