"use client";

import MainContainer from "../components/mainContainer";
import { useCart } from "./cartContext";
import ItemCard from "./item-card";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createOrUpadteOrderDraft } from "./actions";
import { toast } from "sonner";

export default function CartSummary() {
  const { items, isLoading } = useCart();
  const router = useRouter();

  if (isLoading) {
    return <p>Loading your cart...</p>;
  }

  const onCheckoutClick = async () => {
    const result = await createOrUpadteOrderDraft(
      items.map((i) => i.id),
      localStorage.getItem("orderId") as string | undefined
    );

    if (result.status === "error") {
      toast(result.message);
    } else {
      localStorage.setItem("orderId", result.data?.id);
      router.push(`/checkout?orderId=${result.data?.id}`);
    }
  };

  return (
    <MainContainer>
      <div className="flex flex-col w-full lg:w-[55%] gap-8">
        <div className="flex flex-col border rounded-[9px]">
          <div className="bg-[#F9F9F9] rounded-t-[9px] py-[18px] px-7">
            <span className="text-base font-inter font-medium">
              Articoli del carrello {`(${items.length})`}
            </span>
          </div>
          {items.length === 0 ? (
            <div className="h-44" />
          ) : (
            <>
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`px-2 md:px-7 py-3 gap-16 ${
                    index !== items.length - 1 ? "border-b" : ""
                  }`}
                >
                  <ItemCard {...item} />
                </div>
              ))}
            </>
          )}
        </div>
        {items.length > 0 && (
          <div className="flex w-full">
            <Button
              type="button"
              className="w-full bg-[#0BB489] hover:bg-[#0BB489]/85 py-8 cursor-pointer"
              onClick={onCheckoutClick}
            >
              <span className="text-2xl font-inter font-bold">
                VAI AL CHECKOUT
              </span>
            </Button>
          </div>
        )}
      </div>
    </MainContainer>
  );
}
