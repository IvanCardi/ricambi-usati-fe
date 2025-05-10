"use client";

import { UseFormReturn } from "react-hook-form";
import { FormSchema, paymentMethods } from "./checkout-body";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function PaymentMethod({
  form,
}: {
  form: UseFormReturn<FormSchema>;
}) {
  return (
    <div className="flex flex-col w-full bg-white items-center border rounded-[9px]">
      <div className="flex w-full bg-[#F9F9F9] rounded-t-[9px] py-[18px] px-8">
        <span className="text-2xl font-inter font-semibold">Pagamento</span>
      </div>
      <div className="flex flex-col w-full gap-4 p-8">
        {paymentMethods.map((method, i) => (
          <FormField
            key={i}
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center gap-3">
                    <input
                      {...field}
                      value={method}
                      type="radio"
                      className="scale-150"
                      defaultChecked={method === field.value}
                    />
                    <span className="text-base font-inter font-normal">
                      {method}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
}
