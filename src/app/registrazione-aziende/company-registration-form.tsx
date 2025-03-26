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
import { register } from "./actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z
  .object({
    name: z.string().nonempty("Inserire il nome dell'azienda"),
    shippingStreet: z.string().optional(),
    shippingCity: z.string().optional(),
    shippingProvince: z.string().optional(),
    shippingZipCode: z.string().optional(),
    shippingNumber: z.string().optional(),
    shippingState: z.string().optional(),
    billingStreet: z.string().nonempty("Inserire l'indirizzo"),
    billingNumber: z.string().nonempty("Inserire il numero civico"),
    billingState: z.string().nonempty("Inserire lo stato"),
    billingCity: z.string().nonempty("Inserire la città"),
    billingProvince: z.string().nonempty("Inserire la provincia"),
    billingZipCode: z.string().nonempty("Inserire il codice postale"),
    vat: z
      .string()
      .nonempty("Inserire P.IVA")
      .length(11, "Inserire una P.IVA corretta"),
    email: z.string().email("Inserire una mail corretta"),
    taxCode: z
      .string()
      .regex(
        /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/,
        "Inserire un codice fiscale valido"
      ),
    sdi: z
      .string()
      .nonempty("Inserire SDI")
      .length(7, "Inserire un SDI corretto"),
    isAutomotive: z.boolean(),
    isSameAddress: z.boolean(),
    privacy: z
      .boolean()
      .refine(
        (val) => val === true,
        "Devi aver letto la privacy per registrarti"
      ),
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
  })
  .superRefine((data, ctx) => {
    if (!data.isSameAddress && !data.shippingStreet) {
      ctx.addIssue({
        path: ["shippingStreet"],
        message: "Inserire l'indirizzo",
        code: "custom",
      });
    }
    if (!data.isSameAddress && !data.shippingCity) {
      ctx.addIssue({
        path: ["shippingCity"],
        message: "Inserire la città",
        code: "custom",
      });
    }
    if (!data.isSameAddress && !data.shippingProvince) {
      ctx.addIssue({
        path: ["shippingProvince"],
        message: "Inserire la provincia",
        code: "custom",
      });
    }
    if (!data.isSameAddress && !data.shippingZipCode) {
      ctx.addIssue({
        path: ["shippingZipCode"],
        message: "Inserire il cap",
        code: "custom",
      });
    }
    if (!data.isSameAddress && !data.shippingNumber) {
      ctx.addIssue({
        path: ["shippingNumber"],
        message: "Inserire il numero civico",
        code: "custom",
      });
    }
    if (!data.isSameAddress && !data.shippingState) {
      ctx.addIssue({
        path: ["shippingState"],
        message: "Inserire lo stato",
        code: "custom",
      });
    }
  });

export default function CompanyRegistrationForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      vat: "",
      email: "",
      sdi: "",
      taxCode: "",
      isSameAddress: false,
      billingCity: "",
      billingProvince: "",
      billingStreet: "",
      billingZipCode: "",
      shippingCity: "",
      shippingProvince: "",
      shippingStreet: "",
      shippingZipCode: "",
      isAutomotive: false,
      privacy: false,
      password: "",
      confirmPassword: "",
      billingNumber: "",
      billingState: "",
      shippingNumber: "",
      shippingState: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await register(values);

    if (result.status === "ok") {
      router.push("/login");

      toast("Azienda registrata con successo!");
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
        className="flex flex-col w-full"
      >
        <div className="w-[20%] h-[1px] bg-primary-green m-auto"></div>
        <div className="h-[67px]"></div>
        <div className="flex flex-col gap-7 w-[45%] m-auto">
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
        <div className="h-[80px]"></div>
        <p className="uppercase font-semibold text-[38px]/[38px] m-auto">
          Anagrafica
        </p>
        <div className="h-[32px]"></div>
        <div className="w-[10%] h-[1px] bg-primary-green m-auto"></div>
        <div className="h-[74px]"></div>
        <div className="w-full flex flex-col gap-[28px] m-auto">
          <div className="flex gap-[52px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput {...field} placeholder="Nome azienda" />
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
                    <FormTextInput {...field} placeholder="Partita IVA" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-[52px]">
            <FormField
              control={form.control}
              name="taxCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput {...field} placeholder="Codice Fiscale" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sdi"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput {...field} placeholder="SDI" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="h-[80px]"></div>
        <p className="uppercase font-semibold text-[38px]/[38px] m-auto">
          Indirizzo di fatturazione
        </p>
        <div className="h-[32px]"></div>
        <div className="w-[10%] h-[1px] bg-primary-green m-auto"></div>
        <div className="h-[74px]"></div>
        <div className="w-full flex flex-col gap-[28px] m-auto">
          <div className="flex gap-[52px]">
            <FormField
              control={form.control}
              name="billingStreet"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput {...field} placeholder="Via" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billingNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput {...field} placeholder="Numero civico" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-[52px]">
            <FormField
              control={form.control}
              name="billingCity"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput {...field} placeholder="Città" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billingProvince"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput {...field} placeholder="Provincia" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-[52px]">
            <FormField
              control={form.control}
              name="billingZipCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput {...field} placeholder="CAP" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billingState"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput {...field} placeholder="Stato" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="h-[80px]"></div>
        <p className="uppercase font-semibold text-[38px]/[38px] m-auto">
          Indirizzo di spedizione
        </p>
        <div className="h-[32px]"></div>
        <div className="w-[10%] h-[1px] bg-primary-green m-auto"></div>
        <div className="h-[74px]"></div>
        <div className="w-full flex flex-col gap-[28px] m-auto">
          <FormField
            control={form.control}
            name="isSameAddress"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex gap-5 items-center">
                    <input
                      checked={field.value} // Bind checked state
                      onChange={(e) => {
                        field.onChange(e.target.checked);

                        if (e.target.checked) {
                          form.setValue(
                            "shippingStreet",
                            form.getValues().billingStreet
                          );
                          form.setValue(
                            "shippingNumber",
                            form.getValues().billingNumber
                          );
                          form.setValue(
                            "shippingCity",
                            form.getValues().billingCity
                          );
                          form.setValue(
                            "shippingProvince",
                            form.getValues().billingProvince
                          );
                          form.setValue(
                            "shippingZipCode",
                            form.getValues().billingZipCode
                          );
                          form.setValue(
                            "shippingState",
                            form.getValues().billingState
                          );
                        }
                      }}
                      className="size-5 rounded-lg border-gray-400 cursor-pointer"
                      type="checkbox"
                    />
                    <p className="font-normal text-[#9CA3AF] text-[28px]/[28px]">
                      Uguale a indirizzo di fatturazione
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-[52px]">
            <FormField
              control={form.control}
              name="shippingStreet"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput
                      {...field}
                      placeholder="Via"
                      disabled={form.getValues().isSameAddress}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shippingNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput
                      {...field}
                      placeholder="Numero civico"
                      disabled={form.getValues().isSameAddress}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-[52px]">
            <FormField
              control={form.control}
              name="shippingCity"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput
                      {...field}
                      placeholder="Città"
                      disabled={form.getValues().isSameAddress}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shippingProvince"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput
                      {...field}
                      placeholder="Provincia"
                      disabled={form.getValues().isSameAddress}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-[52px]">
            <FormField
              control={form.control}
              name="shippingZipCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput
                      {...field}
                      placeholder="CAP"
                      disabled={form.getValues().isSameAddress}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shippingState"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <FormTextInput
                      {...field}
                      placeholder="Stato"
                      disabled={form.getValues().isSameAddress}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="h-[56px]"></div>
        <FormField
          control={form.control}
          name="isAutomotive"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="flex gap-5 items-center">
                  <input
                    checked={field.value} // Bind checked state
                    onChange={(e) => field.onChange(e.target.checked)}
                    className="size-5 rounded-lg border-gray-400 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="font-normal text-[#9CA3AF] text-[28px]/[28px]">
                    Sei un&apos;azienda automotive?
                  </p>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="h-[28px]"></div>
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="flex gap-5 items-center">
                  <input
                    checked={field.value} // Bind checked state
                    onChange={(e) => field.onChange(e.target.checked)}
                    className="size-5 rounded-lg border-gray-400 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="font-normal text-[#9CA3AF] text-[28px]/[28px]">
                    Privacy
                  </p>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="h-[12px]"></div>
        <div className="w-full h-[120px] border border-black"></div>
        <div className="h-[61px]"></div>
        <div className="w-[400px]">
          <Button
            className="bg-secondary-blue text-white font-bold text-[32px]/[32px] uppercase w-[500px]"
            type="submit"
          >
            crea profilo
          </Button>
        </div>
      </form>
    </Form>
  );
}
