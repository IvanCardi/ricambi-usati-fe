"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import noImagePlaceholder from "../../../public/no-image-placeholder.jpg";
import { CarPart } from "./page";
import { useCart } from "../cart/cartContext";

export function CarPartCard(carPart: CarPart) {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col w-full gap-14 bg-white">
      <div className="flex flex-col justify-between items-center w-full h-full border-[3px] border-[#0BB489]">
        <div
          onClick={() => router.push(`/shop/product/${carPart.id}`)}
          className="cursor-pointer flex w-full h-[60%] justify-center border-[3px] border-[#0BB489]"
        >
          {carPart.imageUrl ? (
            <Image
              className="w-full object-cover"
              src={carPart.imageUrl}
              alt="mechanical article"
              height={205}
              width={205}
            />
          ) : (
            <Image
              className="w-full object-cover"
              src={noImagePlaceholder.src}
              alt={`No image placeholder`}
              height={205}
              width={205}
              // className="max-w-full max-h-full object-contain"
            />
          )}
        </div>
        <div className="flex flex-col h-[40%] w-full items-center justify-between border border-t-2 border-[#0BB489] gap-2 py-2">
          <div className="flex h-full items-center justify-center">
            <span
              onClick={() => router.push(`/shop/product/${carPart.id}`)}
              className="cursor-pointer text-base text-center font-inter font-semibold"
            >
              {carPart.name}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <div className="w-10 h-[1px] bg-black" />
            <span className="text-sm text-center font-inter font-semibold">
              {carPart.price}€
            </span>
            <Button
              className="w-fit bg-[#0BB489] hover:bg-[#0BB489]/85"
              onClick={() => addToCart(carPart)}
            >
              <span className="text-[9px] text-white font-inter font-medium">
                Aggiungi al carrello
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
