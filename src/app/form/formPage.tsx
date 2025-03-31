import MainContainer from "../components/mainContainer";
import CarPartForm, { FormVehicle } from "./car-part-form-section";

export default function FormPage() {
  const fetchedCars: FormVehicle[] = [
    { brand: "Toyota ", fuelType: ["Benzina", "Diesel"] },
    { brand: "Audi", fuelType: ["GPL"] },
  ];

  return (
    <MainContainer>
      <div className="flex flex-col w-full items-center py-20 gap-[90px]">
        <div className="flex flex-col w-fit items-center gap-12">
          <h1 className="text-5xl font-inter font-bold pt">
            Richiesta pezzo di ricambio
          </h1>
          <div className="w-1/5 h-[2px] bg-[#0BB489]" />
        </div>
        <CarPartForm cars={fetchedCars} />
      </div>
    </MainContainer>
  );
}
