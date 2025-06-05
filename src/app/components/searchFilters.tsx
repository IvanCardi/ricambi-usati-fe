"use client";
import PopoverSelection from "@/components/popover-selection";
import { Slider } from "@/components/ui/slider";
import { Brand } from "@/lib/models/brand";
import { Model } from "@/lib/models/model";
import { Version } from "@/lib/models/version";
import { useState } from "react";
import MainContainer from "./mainContainer";

export default function SearchFilters({
  onFilterSelection,
  brands,
  models,
  versions,
}: {
  onFilterSelection: (name: string, value: string | undefined) => void;
  brands: Brand[];
  models: Model[];
  versions: Version[];
}) {
  const [selectedCar, setSelectedCar] = useState<{
    brand?: string;
    model?: string;
    setUp?: string;
  }>({});
  const [range, setRange] = useState<number[]>([
    2000,
    new Date().getFullYear(),
  ]);

  return (
    <MainContainer>
      <div className="grid grid-cols-2 w-full md:flex justify-center items-center gap-5">
        <PopoverSelection
          placeholder="Scegli la marca"
          options={brands.sort((a, b) => a.name.localeCompare(b.name))}
          value={selectedCar.brand}
          onSelect={(brand) => {
            setSelectedCar({
              brand,
            });
            onFilterSelection("brand", brand);
            onFilterSelection("model", undefined);
            onFilterSelection("setup", undefined);
          }}
        />
        <PopoverSelection
          placeholder="Scegli il modello"
          options={models
            .filter(
              (m) => selectedCar.brand && m.brand_id === selectedCar.brand
            )
            .sort((a, b) => a.name.localeCompare(b.name))}
          value={selectedCar.model}
          onSelect={(model) => {
            setSelectedCar((prev) => ({
              ...prev,
              model,
            }));
            onFilterSelection("model", model);
            onFilterSelection("setup", undefined);
          }}
        />
        <PopoverSelection
          placeholder="Scegli la versione"
          options={versions
            .filter(
              (v) =>
                selectedCar.brand &&
                selectedCar.model &&
                v.brand_id === selectedCar.brand &&
                v.model_id === selectedCar.model
            )
            .sort((a, b) => a.name.localeCompare(b.name))}
          value={selectedCar.setUp}
          onSelect={(setUp) => {
            setSelectedCar((prev) => ({
              ...prev,
              setUp,
            }));
            onFilterSelection("setup", setUp);
          }}
        />
        <div className="flex flex-col items-center w-full gap-2">
          <span
            className={`text-sm text-center font-inter font-medium text-white`}
          >
            Anno di produzione
          </span>
          <Slider
            value={range}
            onValueChange={(newRange) => {
              setRange(newRange);
              onFilterSelection("startYear", newRange[0].toString());
              onFilterSelection("endYear", newRange[1].toString());
            }}
            max={new Date().getFullYear()}
            min={2000}
            step={1}
          />
          <span
            className={`text-sm text-center font-inter font-medium text-white`}
          >
            {range[0]} - {range[1]}
          </span>
        </div>
      </div>
    </MainContainer>
  );
}
