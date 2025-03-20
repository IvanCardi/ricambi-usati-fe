"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import PaginationBar from "./paginationBar";
import { useRouter } from "next/navigation";
import { CarPart } from "./product/[id]/productPage";

export interface Page {
  number: number;
  items: CarPart[];
}

export function ShopPagination({ items = [] }: { items: CarPart[] }) {
  const router = useRouter();

  const pages: Page[] = useMemo(() => {
    return Array.from({ length: Math.ceil(items.length / 12) }).map(
      (_, index) => ({
        number: index + 1,
        items: items.slice(index * 12, (index + 1) * 12),
      })
    );
  }, [items]);

  const [selectedPage, setSelectedPage] = useState<Page>(pages[0]);

  useEffect(() => {
    setSelectedPage(pages[0]);
  }, [pages]);

  function CarPartCard(carPart: CarPart) {
    return (
      <div
        className="flex flex-col w-full gap-14"
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

  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-center">
        {pages.length === 0 ? (
          <div className="flex w-full text-3xl text-center font-inter font-normal italic">
            <span>
              Sembra che al momento i ricambi <br></br> che stai cercando non
              siano disponibili
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10">
            {selectedPage.items.map((item, index) => (
              <CarPartCard key={index} {...item} />
            ))}
          </div>
        )}
      </div>
      <div className="flex w-full justify-end">
        <PaginationBar
          pages={pages}
          currentPage={selectedPage}
          onSelectPage={(newPage: Page) => setSelectedPage(newPage)}
        />
      </div>
    </div>
  );
}
