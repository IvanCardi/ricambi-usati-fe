"use client";
import { Slider } from "@/components/ui/slider";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import MainContainer from "../components/mainContainer";

import { CategorySelector } from "@/components/category-selector";
import PopoverSelection from "@/components/popover-selection";
import { Brand } from "@/lib/models/brand";
import { Category } from "@/lib/models/category";
import { Model } from "@/lib/models/model";
import { Version } from "@/lib/models/version";

export default function CarPartsFilters({
  initialBrand,
  initialModel,
  initialSetup,
  initialEndYear,
  initialStartYear,
  initialCategory,
  categories,
  brands,
  models,
  versions,
}: {
  initialBrand?: string;
  initialModel?: string;
  initialSetup?: string;
  initialStartYear?: number;
  initialEndYear?: number;
  initialCategory?: string;
  categories: Category[];
  brands: Brand[];
  models: Model[];
  versions: Version[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCar, setSelectedCar] = useState<{
    brandId?: string;
    modelId?: string;
    versionId?: string;
  }>({
    brandId: initialBrand ? initialBrand : undefined,
    modelId: initialModel ? initialModel : undefined,
    versionId: initialSetup ? initialSetup : undefined,
  });
  const [range, setRange] = useState<number[]>([
    initialStartYear ?? 2000,
    initialEndYear ?? new Date().getFullYear(),
  ]);
  const [category, setCategory] = useState<string | undefined>(initialCategory);

  const onFilterApply = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCar && selectedCar.brandId) {
      params.set("brand", selectedCar.brandId);
    }

    if (selectedCar && selectedCar.modelId) {
      params.set("model", selectedCar.modelId);
    }

    if (selectedCar && selectedCar.versionId) {
      params.set("setup", selectedCar.versionId);
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
        <PopoverSelection
          placeholder="Scegli la marca"
          options={brands.sort((a, b) => a.name.localeCompare(b.name))}
          value={selectedCar.brandId}
          onSelect={(brand) =>
            setSelectedCar({
              brandId: brand,
            })
          }
        />
        <PopoverSelection
          placeholder="Scegli il modello"
          options={models
            .filter(
              (m) => selectedCar.brandId && m.brand_id === selectedCar.brandId
            )
            .sort((a, b) => a.name.localeCompare(b.name))}
          value={selectedCar.modelId}
          onSelect={(model) =>
            setSelectedCar((prev) => ({
              ...prev,
              modelId: model,
            }))
          }
        />
         <PopoverSelection
          placeholder="Scegli la versione"
          options={versions
            .filter(
              (v) =>
                selectedCar.brandId &&
                selectedCar.modelId &&
                v.brand_id === selectedCar.brandId &&
                v.model_id === selectedCar.modelId
            )
            .sort((a, b) => a.name.localeCompare(b.name))}
          value={selectedCar.versionId}
          onSelect={(setUp) =>
            setSelectedCar((prev) => ({
              ...prev,
              versionId: setUp,
            }))
          }
        />
        <CategorySelector
          data={categories}
          allowParentSelection
          onChange={(cat) => setCategory(cat)}
        />
        {/*      <SelectCategory
          title="Categorie"
          categories={[...categories]}
          onSelect={(cat) => setCategory(cat)}
          value={category}
        /> */}
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
