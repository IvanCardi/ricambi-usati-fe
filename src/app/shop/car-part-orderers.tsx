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
import MainContainer from "../components/mainContainer";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const sortOptions = [
  {
    label: "Più costosi",
    value: "price_desc",
  },
  {
    label: "Meno costosi",
    value: "price_asc",
  },
];

export default function CarPartsOrderers({
  initialOrder,
}: {
  initialOrder?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [order, setOrder] = useState(initialOrder ?? undefined);

  const onOrder = (order: string) => {
    setOrder(order);
    const params = new URLSearchParams(searchParams.toString());

    params.set("order", order);
    params.set("page", "1");

    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  return (
    <MainContainer>
      <div className="flex justify-end">
        <Select onValueChange={onOrder} value={order}>
          <SelectTrigger className="max-w-32 border-[1px] min-w-36">
            <SelectValue placeholder="Ordina per" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ordina per</SelectLabel>
              {sortOptions?.map((option) => (
                <SelectItem
                  className="flex justify-start"
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </MainContainer>
  );
}
