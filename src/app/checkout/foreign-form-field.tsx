import { UseFormReturn } from "react-hook-form";
import countryAddressDetails, {
  CountryCodes,
} from "postal-address-field-names";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSchema } from "./checkout-body";

function getFieldNames(countryCode: CountryCodes) {
  const country = countryAddressDetails.find(
    (country) => country.iso === countryCode
  );

  if (country) {
    const keysToRemove = ["addressLine1", "addressLine2"];

    return Object.entries(country.fields).filter(
      ([key]) => !keysToRemove.includes(key)
    ) as [keyof FormSchema, string][];
  }
  return undefined;
}

export default function ForeignFormField({
  countryCode,
  form,
  disabled,
}: {
  countryCode?: CountryCodes;
  form: UseFormReturn<FormSchema>;
  disabled: boolean;
}) {
  const fields = countryCode ? getFieldNames(countryCode) : undefined;

  return (
    <>
      {fields ? (
        <div className="grid grid-cols-2 w-full gap-8">
          {fields.map(([fieldKey, fieldValue], i) => (
            <FormField
              key={i}
              control={form.control}
              name={fieldKey}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={fieldValue}
                      className="py-[26px] px-[36px] rounded-[9px] "
                      disabled={disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
