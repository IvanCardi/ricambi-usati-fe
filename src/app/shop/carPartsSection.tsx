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

export default function CarPartsSection() {
  const carParts: CarPart[] = [
    {
      id: "1",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "2",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "3",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "4",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "5",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "6",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "7",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "8",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "9",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "10",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "11",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "12",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "13",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "14",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "15",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "16",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "17",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "18",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "19",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "20",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "21",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "22",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "23",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "24",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "25",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "26",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "27",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "28",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "29",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "30",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "31",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "32",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "33",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "34",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "35",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "36",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "37",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "38",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "39",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
    {
      id: "40",
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      imageUrl: "/kit_alfa.png",
    },
    {
      id: "41",
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      imageUrl: "/kit_giulietta.png",
    },
  ];
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
