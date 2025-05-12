"use client";

import { useCart } from "../cart/cartContext";
import MainContainer from "../components/mainContainer";
import MainDeliveryForm from "./main-delivery-form";
import PurchaseSummary from "./purchase-summary";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import DeliveryOptions from "./delivery-options";
import PaymentMethod from "./payment-methods";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitForm } from "./actions";
import { OrderDraft } from "@/lib/models/orderDraft";

export const deliveryOptions = [
  "Corriere espresso",
  "Ritiro di persona",
] as const;

export const paymentMethods = [
  "Paga con carte",
  "Paypal",
  "Pagamento alla consegna",
] as const;

const formSchema = z
  .object({
    firstName: z.string().nonempty({ message: "inserire un nome" }),
    lastName: z.string().nonempty({ message: "inserire un cognome" }),
    streetName: z.string().nonempty({ message: "inserire un indirizzo" }),
    streetName2: z.string().optional(),
    country: z.string().nonempty(),
    city: z.string().optional(),
    province: z.string().optional(),
    administrativeArea: z.string().optional(),
    dependentLocality: z.string().optional(),
    postalCode: z.string().optional(),
    email: z.string().email({ message: "inserire un indirizzo mail valido" }),
    details: z.string().optional(),
    deliveryMethod: z.enum(deliveryOptions),
    paymentMethod: z.enum(paymentMethods),
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

export default function CheckOutPage({
  orderDraft,
}: {
  orderDraft: OrderDraft;
}) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      streetName: "",
      streetName2: "",
      country: "Italia",
      city: "",
      province: "",
      postalCode: "",
      email: "",
      deliveryMethod: "Corriere espresso",
      paymentMethod: "Paga con carte",
    },
  });
  const [deliveryFormFilled, setDeliveryFormFilled] = useState(false);
  const { items } = useCart();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const itemIds = items.map((i) => i.id);

    const response = await submitForm(values, itemIds);

    if (response.status === "ok" && response.data.checkoutPaymentUrl) {
      sessionStorage.setItem("orderId", response.data.orderId);
      window.location.href = response.data.checkoutPaymentUrl;
    }
    if (response.status === "error") {
      console.error(response.message);
    }
  }

  return (
    <MainContainer>
      <div className="h-20" />
      <Form {...form}>
        <form
          className="flex flex-col w-full gap-8"
          onChange={() => form.clearErrors()}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col md:flex-row w-full gap-14">
            <div className="flex flex-col md:w-[60%] gap-12">
              <h1 className="text-[40px] font-inter font-bold"> Checkout</h1>
              <div className="flex flex-col gap-8">
                <MainDeliveryForm
                  form={form}
                  deliveryInfosConfirmed={deliveryFormFilled}
                  onConfirmed={() => setDeliveryFormFilled(!deliveryFormFilled)}
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:w-[40%] gap-8">
              <PurchaseSummary form={form} orderDraft={orderDraft} />
              <DeliveryOptions form={form} />
              <PaymentMethod form={form} />
              <Button
                type="submit"
                className="md:w-80 md:py-8 bg-[#0BB489] hover:bg-[#0BB489]/85"
                disabled={!deliveryFormFilled}
              >
                <span className="text-2xl font-inter font-bold">
                  COMPLETA L&apos;ORDINE
                </span>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </MainContainer>
  );
}
