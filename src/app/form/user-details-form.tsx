"use client";

import { UseFormReturn } from "react-hook-form";
import { FormSchema } from "./formPage";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import FormTextInput from "../components/form-text-input";

export default function UserDetalForm({
  form,
}: {
  form: UseFormReturn<FormSchema>;
}) {
  return (
    <div className="flex flex-col w-full gap-12">
      <span className="text-[43px] text-[#0BB489] font-poppins font-medium">
        Dati utente
      </span>
      <div className="grid grid-cols-2 gap-11 justify-between">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <FormTextInput
                  {...field}
                  placeholder="Nome"
                  className="placeholder:text-2xl border border-none bg-[#F2F2F2] h-16"
                  style={{
                    boxShadow: "0px 2px 2.67px 0px #00000040",
                  }}
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
                <FormTextInput
                  {...field}
                  placeholder="Cognome"
                  className="placeholder:text-2xl border border-none bg-[#F2F2F2] h-16"
                  style={{
                    boxShadow: "0px 2px 2.67px 0px #00000040",
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <FormTextInput
                  {...field}
                  placeholder="Email*"
                  className="placeholder:text-2xl border border-none bg-[#F2F2F2] h-16"
                  style={{
                    boxShadow: "0px 2px 2.67px 0px #00000040",
                  }}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <FormTextInput
                  {...field}
                  placeholder="Telefono"
                  className="placeholder:text-2xl rounded-md bg-[#F2F2F2] h-16 focus:ring-offset-0"
                  type="number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pecOrSdi"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <FormTextInput
                  {...field}
                  placeholder="PEC o SDI"
                  className="placeholder:text-2xl border border-none bg-[#F2F2F2] h-16"
                  style={{
                    boxShadow: "0px 2px 2.67px 0px #00000040",
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vat"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <FormTextInput
                  {...field}
                  placeholder="Partita IVA"
                  className="placeholder:text-2xl border border-none bg-[#F2F2F2] h-16"
                  style={{
                    boxShadow: "0px 2px 2.67px 0px #00000040",
                  }}
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
