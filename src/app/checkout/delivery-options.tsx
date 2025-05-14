import { UseFormReturn } from "react-hook-form";
import { deliveryOptions, FormSchema } from "./checkout-body";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function DeliveryOptions({
  form,
}: {
  form: UseFormReturn<FormSchema>;
}) {
  return (
    <div className="flex flex-col w-full bg-white border rounded-[9px]">
      <div className="flex w-full bg-[#F9F9F9] rounded-t-[9px] py-[18px] px-8">
        <span className="text-2xl font-inter font-semibold">Spedizione</span>
      </div>
      <div className="flex flex-col gap-4 p-8">
        {deliveryOptions.map((option, i) => (
          <FormField
            key={i}
            control={form.control}
            name="deliveryMethod"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center gap-3">
                    <input
                      {...field}
                      value={option.value}
                      type="radio"
                      className="scale-150"
                      defaultChecked={option.value === field.value}
                    />
                    <span className="text-base font-inter font-normal">
                      {option.value === "delivery" ? (
                        <>
                          {option.label}{" "}
                          <span className="text-base font-inter font-semibold">
                            (2-4 giorni lavorativi)
                          </span>
                        </>
                      ) : (
                        option.label
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
      <div className="flex flex-col px-8"></div>
    </div>
  );
}
