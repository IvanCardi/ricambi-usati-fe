import { categories } from "../(sections)/ricambi/categoryList";
import FormPage, { FormVehicle } from "./formPage";

export default function Form() {
  const fetchedCars: FormVehicle[] = [
    { brand: "Toyota ", fuelType: ["Benzina", "Diesel"] },
    { brand: "Audi", fuelType: ["GPL"] },
  ];

  return (
    <main className="flex flex-col">
      <FormPage cars={fetchedCars} categories={categories} />
    </main>
  );
}
