"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { ShopPagination } from "./pagination";

interface SortOption {
  name: string;
  logic: (a: CarPart, b: CarPart) => number;
}

export interface CarPart {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export default function CarPartsSection({ carParts }: { carParts: CarPart[] }) {
  const sortOptions: SortOption[] = [
    {
      name: "Più costosi",
      logic: (a: CarPart, b: CarPart) => b.price - a.price,
    },
    {
      name: "Meno costosi",
      logic: (a: CarPart, b: CarPart) => a.price - b.price,
    },
  ];

  const [sortedItems, setSortedItems] = useState(carParts);

  function sortItems(value: string) {
    const option = sortOptions.find((option) => option.name === value)!;

    setSortedItems(sortedItems.toSorted(option.logic));
  }

  return (
    <div className="flex flex-col w-full gap-14 pt-12">
      <div className="flex justify-end">
        <Select key={sortOptions[0].name} onValueChange={sortItems}>
          <SelectTrigger className="max-w-32 border-[1px] min-w-36">
            <SelectValue placeholder="Ordina per" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ordina per</SelectLabel>
              {sortOptions?.map((option) => (
                <SelectItem
                  className="flex justify-start"
                  key={option.name}
                  value={option.name}
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ShopPagination items={sortedItems} />
    </div>
  );
}
