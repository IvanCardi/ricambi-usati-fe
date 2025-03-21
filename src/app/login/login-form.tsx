"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/button";
import FormTextInput from "../components/form-text-input";

const formSchema = z.object({
  email: z.string().email("Inserire una mail corretta"),
  password: z
    .string()
    .min(8, "La password deve essere lunga almeno 8 caratteri")
    .regex(/[A-Z]/, "La password deve contenere almeno una lettera maiuscola")
    .regex(/[a-z]/, "La password deve contenere almeno una lettera minuscola")
    .regex(/\d/, "La password deve contenere almeno un numero")
    .regex(
      /[@$!%*?&]/,
      "La password deve contenere almeno un carattere speciale (@$!%*?&)"
    )
    .refine((password) => !/\s/.test(password), {
      message: "La password non può contenere spazi",
    }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        // onKeyDown={(e) => {
        //   if (e.key === "Enter") {
        //     e.preventDefault();
        //   }
        // }}
        className="flex flex-col gap-10 w-full m-auto"
      >
        <div className="flex flex-col gap-7">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FormTextInput {...field} placeholder="Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FormTextInput {...field} placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="bg-primary-green text-white font-bold text-[32px]/[32px] uppercase"
          type="submit"
        >
          Entra
        </Button>
        {/*  <Button type="submit">Aggiungi</Button> */}
      </form>
    </Form>
  );
}
