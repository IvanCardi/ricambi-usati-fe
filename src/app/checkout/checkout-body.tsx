"use client";

import { CartProvider } from "../cart/cartContext";
import MainContainer from "../components/mainContainer";
import DeliveryForm from "./delivery-form";
import PurchaseSummary from "./purchase-summary";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

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

export default function CheckOutPage() {
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

  return (
    <CartProvider>
      <MainContainer>
        <Form {...form}>
          <form className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row w-full gap-14">
              <div className="flex flex-col md:w-[60%] gap-12">
                <h1 className="text-[40px] font-inter font-bold"> Checkout</h1>
                <div className="flex flex-col gap-8">
                  <DeliveryForm form={form} />
                </div>
              </div>
              <div className="flex flex-col md:w-[40%] gap-8">
                <PurchaseSummary />
              </div>
            </div>
          </form>
        </Form>
      </MainContainer>
    </CartProvider>
  );
}
