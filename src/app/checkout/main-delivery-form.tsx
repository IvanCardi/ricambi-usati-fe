"use client";

import { UseFormReturn, useWatch } from "react-hook-form";
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
import countries from "i18n-iso-countries";
import it from "i18n-iso-countries/langs/it.json";
import { Button } from "@/components/ui/button";
import { ItalianForm } from "./italian-form-fields";
import { Textarea } from "@/components/ui/textarea";
import ForeignFormField from "./foreign-form-field";
import { CountryCodes } from "postal-address-field-names";
import { provinceList } from "./provinceList";
import { FormSchema } from "./checkout-body";

countries.registerLocale(it);

export default function MainDeliveryForm({
  form,
  deliveryInfosConfirmed,
  onConfirmed,
}: {
  form: UseFormReturn<FormSchema>;
  deliveryInfosConfirmed: boolean;
  onConfirmed: () => void;
}) {
  const countriesOptions = countries.getNames("it", { select: "official" });
  const sortedCountries = Object.entries(countriesOptions).sort(
    ([, a], [, b]) => a.localeCompare(b)
  );
  const selectedCountry = useWatch({ control: form.control, name: "country" });
  const detailsText =
    useWatch({ control: form.control, name: "details" }) || "";
  const italianFormFields: (keyof FormSchema)[] = [
    "firstName",
    "lastName",
    "email",
    "country",
    "streetName",
    "province",
    "city",
    "postalCode",
  ];

  const foreignFormFields: (keyof FormSchema)[] = [
    "firstName",
    "lastName",
    "email",
    "country",
    "streetName",
  ];

  async function onConfirm() {
    const fieldsToValidate: (keyof FormSchema)[] =
      selectedCountry === "Italia" ? italianFormFields : foreignFormFields;

    const valid = await form.trigger(fieldsToValidate);

    if (valid) {
      onConfirmed();
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl font-inter font-semibold">
        Informazioni di spedizione
      </div>
      <div className="flex flex-col md:flex-row gap-7">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Nome*"
                  className="py-[26px] px-[36px] rounded-[9px] "
                  disabled={deliveryInfosConfirmed}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Cognome*"
                  className="py-[26px] px-[36px] rounded-[9px] "
                  disabled={deliveryInfosConfirmed}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <Input
                {...field}
                placeholder="Email*"
                className="w-full md:w-2/3 py-[26px] px-[36px] rounded-[9px]"
                type="email"
                disabled={deliveryInfosConfirmed}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={deliveryInfosConfirmed}
              >
                <SelectTrigger className="w-full md:w-[60%] border border-input py-[26px] px-[36px] rounded-[9px]">
                  <SelectValue
                    placeholder={"Seleziona un paese"}
                    className="placeholder:text-2xl"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {sortedCountries.map(([countryCode, name]) => (
                      <SelectItem key={countryCode} value={name}>
                        {name}
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
      {selectedCountry && (
        <>
          <div className="flex flex-col md:flex-row gap-7">
            <FormField
              control={form.control}
              name="streetName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Indirizzo*"
                      className="py-[26px] px-[36px] rounded-[9px] "
                      disabled={deliveryInfosConfirmed}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="streetName2"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Indirizzo 2"
                      className="py-[26px] px-[36px] rounded-[9px] "
                      disabled={deliveryInfosConfirmed}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {selectedCountry === "Italia" ? (
            <ItalianForm
              form={form}
              provinceList={provinceList}
              disabled={deliveryInfosConfirmed}
            />
          ) : (
            <ForeignFormField
              form={form}
              countryCode={
                Object.entries(countriesOptions).find(
                  ([, countryName]) => countryName === selectedCountry
                )?.[0] as CountryCodes
              }
              disabled={deliveryInfosConfirmed}
            />
          )}
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className="py-[26px] px-[36px] rounded-[9px] h-[180px]"
                    placeholder="Informazioni aggiuntive"
                    maxLength={1000}
                    disabled={deliveryInfosConfirmed}
                  />
                </FormControl>
                <div className="flex  justify-end">
                  <span className="text-right text-sm text-[#637381]">
                    {detailsText.length} / 1000
                  </span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}
      <Button
        type="button"
        className="md:w-80 md:py-8 bg-[#0BB489] hover:bg-[#0BB489]/85"
        onClick={() => onConfirm()}
      >
        <span className="text-2xl font-inter font-bold">
          {deliveryInfosConfirmed ? "MODIFICA" : "CONFERMA"}
        </span>
      </Button>
    </div>
  );
}
