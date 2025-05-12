"use client";

import { OrderDraft } from "@/lib/models/orderDraft";
import Image from "next/image";
import { UseFormReturn, useWatch } from "react-hook-form";
import noImagePlaceholder from "../../../public/no-image-placeholder.jpg";
import { FormSchema } from "./checkout-body";

export default function PurchaseSummary({
  form,
  orderDraft,
}: {
  form: UseFormReturn<FormSchema>;
  orderDraft: OrderDraft;
}) {
  const deliveryMethod = useWatch({
    control: form.control,
    name: "deliveryMethod",
  });

  return (
    <div className="flex flex-col w-full gap-8">
      <span className="text-2xl font-inter font-semibold">
        Riepilogo acquisti
      </span>
      <div className="flex flex-col w-full border rounded-[9px]">
        <div className="flex w-full justify-between bg-[#F9F9F9] rounded-t-[9px] py-[18px] px-8">
          <span className="text-base font-inter font-medium">Articoli</span>
          <span className="text-base font-inter font-medium">Totale</span>
        </div>
        {orderDraft.products.length === 0 ? (
          <div className="h-44" />
        ) : (
          <>
            {orderDraft.products.map((item) => (
              <div
                key={item.id}
                className={`flex min-h-20 justify-between px-7 py-3 gap-16 border-b `}
              >
                <div className="flex w-full justify-between items-center">
                  {item.photo ? (
                    <div className="flex w-[20%] justify-start items-center">
                      <Image
                        className="object-cover"
                        src={item.photo}
                        alt="mechanical article"
                        height={48}
                        width={48}
                      />
                    </div>
                  ) : (
                    <div className="flex w-[20%] justify-start items-center">
                      <Image
                        className="w-full object-cover"
                        src={noImagePlaceholder.src}
                        alt={`No image placeholder`}
                        height={48}
                        width={48}
                      />
                    </div>
                  )}
                  <div className="flex w-[60%] justify-center items-center">
                    <span className="text-base text-center font-inter font-medium">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex w-[20%] justify-end items-center">
                    <span className="text-base font-inter font-semibold">
                      {item.price.toFixed(2)}€
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col px-7 py-3 gap-4">
              <div className="flex justify-between">
                <span className="text-base font-inter font-normal">Totale</span>
                <span className="text-base font-inter font-semibold">
                  {orderDraft.totalProductsPrice}€
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-inter font-normal">
                  Costi di spedizione
                </span>
                <span className="text-base font-inter font-semibold">
                  {deliveryMethod === "Ritiro di persona" ? (
                    "Gratuito"
                  ) : (
                    <span className="text-base font-inter font-semibold">
                      {orderDraft.shippingCosts}€
                    </span>
                  )}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
