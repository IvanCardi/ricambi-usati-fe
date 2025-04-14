"use client";

import Image from "next/image";
import { useCart } from "../cart/cartContext";
import CartSkeleton from "./cart-skeleton";

export default function PurchaseSummary() {
  const { items, isLoading } = useCart();

  return (
    <>
      {isLoading ? (
        <CartSkeleton />
      ) : (
        <div className="flex flex-col w-full border rounded-[9px]">
          <div className="flex w-full justify-between bg-[#F9F9F9] rounded-t-[9px] py-[18px] px-8">
            <span className="text-base font-inter font-medium">Articoli</span>
            <span className="text-base font-inter font-medium">Totale</span>
          </div>
          {items.length === 0 ? (
            <div className="h-44" />
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`flex justify-between px-7 py-3 gap-16 border-b `}
                >
                  <div className="flex w-full justify-between items-center">
                    <div className="flex w-[20%] justify-between items-center">
                      <Image
                        className="contain"
                        src={item.imageUrl}
                        alt="mechanical article"
                        height={48}
                        width={48}
                      />
                    </div>
                    <div className="flex w-[60%] justify-between items-center">
                      <span className="text-base font-inter font-medium">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex w-[20%] justify-center items-center">
                      <span className="text-base font-inter font-semibold">
                        {Math.round(item.price * item.quantity * 100) / 100}€
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col px-7 py-3 gap-4">
                <div className="flex justify-between">
                  <span className="text-base font-inter font-normal">
                    Totale
                  </span>
                  <span className="text-base font-inter font-semibold">
                    {items.reduce(
                      (sum, item) => sum + item.price * item.quantity,
                      0
                    )}
                    €
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base font-inter font-normal">
                    Costi di spedizione
                  </span>
                  <span className="text-base font-inter font-semibold">
                    Gratuito
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
