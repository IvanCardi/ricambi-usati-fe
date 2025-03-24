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
import FormPassInput from "../components/form-pass-input";
import FormTextInput from "../components/form-text-input";
import { useRouter } from "next/navigation";
import { register } from "./actions";
import { toast } from "sonner";

const formSchema = z
  .object({
    firstName: z.string().nonempty("Inserire il nome"),
    lastName: z.string().nonempty("Inserire il cognome"),
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
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "La password non corrisponde",
    path: ["confirmPassword"], // This highlights the confirmPassword field in errors
  });

export default function PrivateRegistrationForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await register(values);

    if (result.status === "ok") {
      router.push("/login");

      toast("Utente registrato con successo!");
    } else {
      if (result.message === "DuplicatedUser") {
        form.setError("email", { message: "Email già in uso" });
      } else {
        toast("Si è verificato un errore");
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FormTextInput {...field} placeholder="Nome" />
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
                  <FormTextInput {...field} placeholder="Cognome" />
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
                  <FormPassInput {...field} placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FormPassInput {...field} placeholder="Conferma password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="bg-secondary-blue text-white font-bold text-[32px]/[32px] uppercase"
          type="submit"
        >
          Registrati
        </Button>
        {/*  <Button type="submit">Aggiungi</Button> */}
      </form>
    </Form>
  );
}
