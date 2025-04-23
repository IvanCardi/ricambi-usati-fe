"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import FormSelect from "./form-select";
import { CircleX } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormSchema, FormVehicle } from "./formPage";
import { Category } from "../(sections)/ricambi/categoryCard";

export default function CarPartDetailsForm({
  form,
  cars,
  categories,
}: {
  form: UseFormReturn<FormSchema>;
  cars: FormVehicle[];
  categories: Category[];
}) {
  const selectedCar = form.watch("car");
  const detailsText = form.watch("details") || "";
  const photos = form.watch("photos") || [];

  return (
    <div className="flex flex-col w-full gap-12">
      <span className="text-[43px] text-[#0BB489] font-poppins font-medium">
        Dati richiesta
      </span>
      <div className="grid grid-cols-2 gap-11 justify-between">
        <FormField
          control={form.control}
          name="car"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-2xl font-inter font-normal">
                Marca/Modello auto*
              </FormLabel>
              <FormControl>
                <FormSelect<FormSchema>
                  options={cars.map((car) => car.brand)}
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="carPartCategory"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-2xl font-inter font-normal">
                Tipologia parte di ricambio*
              </FormLabel>
              <FormControl>
                <FormSelect<FormSchema>
                  options={categories.map((cat) => cat.name)}
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-2xl font-inter font-normal">
                Anno*
              </FormLabel>
              <FormControl>
                <FormSelect<FormSchema>
                  options={Array.from({
                    length: new Date().getFullYear() - 2000 + 1,
                  }).map((_, index) => new Date().getFullYear() - index)}
                  field={field}
                  disabled={!selectedCar}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fuelType"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-2xl font-inter font-normal">
                Alimentazione*
              </FormLabel>
              <FormControl>
                <FormSelect<FormSchema>
                  options={
                    cars.find((car) => car.brand === selectedCar)?.fuelType ??
                    []
                  }
                  field={field}
                  disabled={!selectedCar}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="engineDisplacement"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-2xl font-inter font-normal">
                Cilindrata
              </FormLabel>
              <FormControl>
                <FormSelect<FormSchema>
                  options={categories.map((cat) => cat.name)}
                  field={field}
                  disabled={!selectedCar}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="plate"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-2xl font-inter font-normal">
                Targa
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Inserisci la targa"
                  className="w-2/3 bg-[#F2F2F2] py-[26px] px-[36px] rounded-[9px] "
                  style={{
                    boxShadow: "0px 2px 2.67px 0px #00000040",
                  }}
                  disabled={!selectedCar}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="details"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-2xl font-inter font-normal">
              Descrizione
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                className="w-[60%] border border-none bg-[#F2F2F2]"
                style={{
                  boxShadow: "0px 2px 2.67px 0px #00000040",
                }}
                placeholder="Inserisci la descrizione"
                maxLength={1000}
                disabled={!selectedCar}
              />
            </FormControl>
            <div className="flex w-[60%] justify-end">
              <span className="text-right text-lg text-[#637381]">
                {detailsText.length} / 1000
              </span>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="photos"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="text-2xl font-inter font-normal ">
              Aggiungi foto
            </FormLabel>
            <FormControl>
              <Input
                key={photos.length}
                className="w-1/3 border border-none bg-[#F2F2F2] file:border-[1px] file:border-black file:rounded-[2px] file:bg-[#DADCDE] h-fit py-[26px] px-[36px] rounded-[9px]"
                style={{
                  boxShadow: "0px 2px 2.67px 0px #00000040",
                }}
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => {
                  field.onChange(Array.from(e.target.files || []));
                }}
                disabled={!selectedCar}
              />
            </FormControl>
            <div className="flex gap-2 flex-wrap">
              {photos.length > 0 && (
                <div className="flex gap-2 pt-2">
                  {photos.map((file, index) => (
                    <div className="relative" key={index}>
                      <Image
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index}`}
                        width={50}
                        height={50}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="absolute top-[-5px] right-[-5px]">
                        <CircleX
                          size={18}
                          className="cursor-pointer bg-white rounded-full"
                          onClick={() => {
                            const updatedPhotos = photos.filter(
                              (_, i) => i !== index
                            );
                            form.setValue("photos", updatedPhotos);
                          }}
                        ></CircleX>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
