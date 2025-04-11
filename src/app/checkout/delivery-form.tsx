"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
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
import { Provincia } from "./page";
import { DefaultForm } from "./default-form-fields";
import { Textarea } from "@/components/ui/textarea";
import ForeignFormField from "./foreign-form-field";
import { CountryCodes } from "postal-address-field-names";

countries.registerLocale(it);

const formSchema = z
  .object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    streetName: z.string().nonempty(),
    streetName2: z.string().optional(),
    country: z.string().nonempty(),
    city: z.string().optional(),
    province: z.string().optional(),
    administrativeArea: z.string().optional(),
    dependentLocality: z.string().optional(),
    postalCode: z.string().optional(),
    email: z.string().email(),
    details: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.country === "Italia") {
      if (!data.city)
        ctx.addIssue({
          path: ["city"],
          code: "custom",
          message: "Inserire la città",
        });
      if (!data.province)
        ctx.addIssue({
          path: ["province"],
          code: "custom",
          message: "Inserire la provincia",
        });
      if (!data.postalCode)
        ctx.addIssue({
          path: ["postalCode"],
          code: "custom",
          message: "Inserire il codice postale",
        });
    } else {
      if (!data.city)
        ctx.addIssue({
          path: ["city"],
          code: "custom",
          message: "Insert a valid locality",
        });
    }
  });

export type FormSchema = z.infer<typeof formSchema>;

export default function DeliveryForm({
  provinceList,
}: {
  provinceList: Provincia[];
}) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      streetName: "",
      country: "Italia",
      city: "",
      province: "",
      postalCode: "",
      email: "",
    },
  });
  const countriesOptions = countries.getNames("it", { select: "official" });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const selectedCountry = form.watch("country");
  const detailsText = form.watch("details") || "";

  return (
    <Form {...form}>
      <form className="flex flex-col w-full gap-8">
        <div className="flex gap-7">
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
                  className="w-2/3 py-[26px] px-[36px] rounded-[9px]"
                  type="email"
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
                  onValueChange={async (value) => {
                    field.onChange(value);
                  }}
                  key={countriesOptions[0]}
                  defaultValue="Italia"
                >
                  <SelectTrigger className="w-[60%] border border-input py-[26px] px-[36px] rounded-[9px]">
                    <SelectValue
                      placeholder={"Seleziona un paese"}
                      className="placeholder:text-2xl"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {Object.entries(countriesOptions)
                        .sort(([, nameA], [, nameB]) =>
                          nameA.localeCompare(nameB)
                        )
                        .map(([countryCode, name]) => (
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
            <div className="flex gap-7">
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
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {selectedCountry === "Italia" ? (
              <DefaultForm form={form} provinceList={provinceList} />
            ) : (
              <ForeignFormField
                form={form}
                countryCode={
                  Object.entries(countriesOptions).find(
                    ([, countryName]) => countryName === selectedCountry
                  )?.[0] as CountryCodes
                }
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
          className="md:w-80 md:py-8 bg-[#0BB489] hover:bg-[#0BB489]/85"
          onClick={form.handleSubmit(onSubmit)}
        >
          <span className="text-2xl font-inter font-bold">CONFERMA</span>
        </Button>
      </form>
    </Form>
  );
}
