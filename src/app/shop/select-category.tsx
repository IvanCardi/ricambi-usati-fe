import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "../(sections)/ricambi/categoryCard";

export default function SelectCategory({
  title,
  categories,
  onSelect,
  value,
}: {
  title: string;
  categories: Category[];
  onSelect?: (val: string) => void;
  value?: string;
}) {
  return (
    <Select onValueChange={onSelect} key={categories[0].name} value={value}>
      <SelectTrigger>
        <SelectValue placeholder={title} className="font-normal" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectGroup key={category.slug}>
            <SelectItem value={category.slug}>
              <SelectLabel className="p-0 font-normal">
                {category.name}
              </SelectLabel>
            </SelectItem>
            {category.subCategories?.map((subCategory) => (
              <div
                key={`${category.slug}/${subCategory.slug}`}
                className="px-4"
              >
                <SelectItem value={`${category.slug}/${subCategory.slug}`}>
                  {subCategory.name}
                </SelectItem>
              </div>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
