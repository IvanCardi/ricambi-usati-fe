"use client";

import { useEffect, useMemo, useState } from "react";
import PaginationBar from "./paginationBar";
import { CarPart } from "./carPartsSection";
import { CarPartCard } from "./carPartCard";

export interface Page {
  number: number;
  items: CarPart[];
}

export function ShopPagination({ items = [] }: { items: CarPart[] }) {
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

  return (
    <div className="flex flex-col gap-16">
      {pages.length === 0 ? (
        <div className="flex w-full text-3xl text-center font-inter font-normal italic">
          <span>
            Sembra che al momento i ricambi <br></br> che stai cercando non
            siano disponibili
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-10">
          {selectedPage.items.map((item, index) => (
            <CarPartCard key={index} {...item} />
          ))}
        </div>
      )}
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
