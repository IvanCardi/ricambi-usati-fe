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
import FormPassInput from "../components/form-pass-input";
import { login } from "./actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCart } from "../cart/cartContext";

const formSchema = z.object({
  email: z.string().email("Inserire una mail corretta"),
  password: z.string().nonempty("Inserisci la password"),
});

export default function LoginForm() {
  const router = useRouter();
  const { refreshUser } = useCart();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await login(values.email, values.password);

    if (response.status === "ok") {
      await refreshUser();
      router.push("/");
    } else {
      if (response.message === "InvalidCredentials") {
        toast("Nome utente o password errati");
      } else {
        toast("Si è verificato un errore");
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
                  <FormPassInput {...field} placeholder="Password" />
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
