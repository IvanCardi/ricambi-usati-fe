"use client";

import { z } from "zod";
import { Category } from "../(sections)/ricambi/categoryCard";
import MainContainer from "../components/mainContainer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CarPartDetailsForm from "./car-part-details-form";
import { Form } from "@/components/ui/form";
import UserDetalForm from "./user-details-form";
import PrivacyForm from "./privacy-form";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface FormVehicle {
  brand: string;
  fuelType: string[];
}

const pecRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.pec\.it$/; // Ensures the email has .pec.it at the end.
const sdiRegex = /^[A-Z0-9]{7}$/; // Ensures it's a 7-character alphanumeric code.

const formSchema = z.object({
  car: z.string(),
  carPartCategory: z.string(),
  year: z
    .number()
    .min(2000, "Inserire un numero maggiore di 2000")
    .max(
      new Date().getFullYear(),
      "Inserire un numero minore dell'anno corrente"
    ),
  fuelType: z.string().nonempty("Inserire un valore per il carburante"),
  engineDisplacement: z
    .number()
    .min(600, "Inserire un numero maggiore di 600")
    .max(6000, "Inserire un numero minore di 6000")
    .optional(),
  plate: z.string().optional(),
  details: z.string().optional(),
  photos: z.array(z.instanceof(File)).optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email("Inserire una mail corretta"),
  phone: z.number().optional(),
  pecOrSdi: z
    .string()
    .optional()
    .refine(
      (val) => val === undefined || pecRegex.test(val) || sdiRegex.test(val),
      {
        message: "Inserisci una PEC email valida o un codice SDI valido",
      }
    ),
  vat: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length === 11, {
      message: "Inserire una P.IVA corretta",
    }),
});

export type FormSchema = z.infer<typeof formSchema>;

export default function FormPage({
  cars,
  categories,
}: {
  cars: FormVehicle[];
  categories: Category[];
}) {
  const dynamicSchema = formSchema.superRefine((data, ctx) => {
    if (!cars.find((car) => car.brand === data.car)) {
      ctx.addIssue({
        path: ["car"],
        message: "Seleziona un auto",
        code: z.ZodIssueCode.custom,
      });
    }
    if (!categories.map((cat) => cat.name).includes(data.carPartCategory)) {
      ctx.addIssue({
        path: ["carPartCategory"],
        message: "Seleziona una tipologia per il ricambio",
        code: z.ZodIssueCode.custom,
      });
    }
  });

  const form = useForm<FormSchema>({
    resolver: zodResolver(dynamicSchema),
    defaultValues: {
      car: "",
      carPartCategory: "",
      year: 0,
      fuelType: "",
      email: "",
    },
    mode: "onChange",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, form, form.formState.errors);
  }

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white from-[90%] to-[#939292]">
      <MainContainer>
        <div className="flex flex-col w-full gap-[90px]">
          <div className="flex flex-col w-full items-center gap-12">
            <h1 className="text-5xl font-inter font-bold pt">
              Richiesta pezzo di ricambio
            </h1>
            <div className="w-1/5 h-[2px] bg-[#0BB489]" />
          </div>
          <Form {...form}>
            <form
              className="flex flex-col gap-11"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              <CarPartDetailsForm
                cars={cars}
                categories={categories}
                form={form}
              />
              <UserDetalForm form={form} />
            </form>
          </Form>
          <PrivacyForm onTermsAccepted={(val) => setTermsAccepted(val)} />
          <ReCAPTCHA sitekey={"process.env.REACT_APP_SITE_KEY"} />
          <Button
            className="md:w-80 md:py-8 bg-[#0BB489] hover:bg-[#0BB489]/85"
            onClick={form.handleSubmit(onSubmit)}
            disabled={!termsAccepted /* || !form.formState.isValid */}
          >
            <span className="text-2xl font-inter font-bold">
              INVIA RICHIESTA
            </span>
          </Button>
        </div>
      </MainContainer>
    </div>
  );
}
