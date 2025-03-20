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

export interface Item {
  name: string;
  price: number;
  image: string;
}

interface SortOption {
  name: string;
  logic: (a: Item, b: Item) => number;
}

export default function Items() {
  const items: Item[] = [
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
  ];
  const sortOptions: SortOption[] = [
    {
      name: "Più costosi",
      logic: (a: Item, b: Item) => b.price - a.price,
    },
    { name: "Meno costosi", logic: (a: Item, b: Item) => a.price - b.price },
  ];

  const [sortedItems, setSortedItems] = useState(items);

  function sortItems(value: string) {
    const option = sortOptions.find((option) => option.name === value)!;

    setSortedItems(sortedItems.toSorted(option.logic));
  }

  return (
    <div className="flex flex-col w-full gap-14">
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
