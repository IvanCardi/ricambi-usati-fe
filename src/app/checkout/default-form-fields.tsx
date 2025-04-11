"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormSchema } from "./delivery-form";
import { Provincia } from "./page";

export function DefaultForm({
  form,
  provinceList,
}: {
  form: UseFormReturn<FormSchema>;
  provinceList: Provincia[];
}) {
  return (
    <div className="flex w-full justify-between">
      <FormField
        control={form.control}
        name="province"
        render={({ field }) => (
          <FormItem className="w-[36%]">
            <FormControl>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                }}
                key={provinceList[0].codice}
              >
                <SelectTrigger className="border border-input py-[26px] px-[36px] rounded-[9px]">
                  <SelectValue
                    placeholder={"Seleziona una provincia*"}
                    className="placeholder:text-2xl"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {provinceList.map((province, i) => (
                      <SelectItem key={i} value={province.nome}>
                        {province.nome}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem className="w-[36%]">
            <FormControl>
              <Input
                {...field}
                placeholder="Città*"
                className="py-[26px] px-[36px] rounded-[9px] "
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="w-1/5">
        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="CAP*"
                  className="py-[26px] px-[36px] rounded-[9px] "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
