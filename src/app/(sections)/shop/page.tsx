import SearchFilters from "@/app/components/searchFilters";
import Form from "./form";
import CarPartsSection from "./carPartsSection";

export default function Shop() {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full justify-center py-14">
        <span className="text-7xl font-inter font-bold">SHOP</span>
      </div>
      <SearchFilters shop={<CarPartsSection />} />
      <Form background />
    </main>
  );
}
