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

export default function CarPartsOrderers() {
  return (
    <MainContainer>
      <div className="flex justify-end">
        <Select onValueChange={() => {}}>
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
