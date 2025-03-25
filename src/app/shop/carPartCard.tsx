"use client";

import { useRouter } from "next/navigation";
import { CarPart } from "./carPartsSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CarPartCard(carPart: CarPart) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col w-full gap-14 bg-white"
      onClick={() => router.push(`/shop/product/${carPart.id}`)}
    >
      <div className="flex flex-col justify-between items-center w-full h-full border-[3px] border-[#0BB489]">
        <div className="flex w-full h-full justify-center border-[3px] border-[#0BB489]">
          <Image
            src={carPart.imageUrl}
            alt="mechanical article"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col w-full items-center border border-t-2 border-[#0BB489] gap-2 py-2">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <span className="text-base text-center font-inter font-semibold">
              {carPart.name}
            </span>
            <div className="w-10 h-[1px] bg-black" />
            <span className="text-sm text-center font-inter font-semibold">
              {carPart.price}€
            </span>
          </div>
          <Button className="w-fit bg-[#0BB489] hover:bg-[#0BB489]/85">
            <span className="text-[9px] text-white font-inter font-medium">
              Aggiungi al carrello
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
