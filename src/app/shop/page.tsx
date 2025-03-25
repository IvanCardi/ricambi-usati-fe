import SearchFilters from "@/app/components/searchFilters";
import CarPartsSection from "./carPartsSection";
import { cookies } from "next/headers";
import FormCTA from "@/app/form/formCTA";

const getProducts = async () => {
  const token = (await cookies())?.get("access_token")?.value;
  const products = await fetch(`${process.env.BE_BASE_URL}/carParts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await products.json();
};

export default async function Shop() {
  const products = await getProducts();

  return (
    <main className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full justify-center py-14">
        <span className="text-7xl font-inter font-bold">SHOP</span>
      </div>
      <SearchFilters shop={<CarPartsSection carParts={products} />} />
      <FormCTA background />
    </main>
  );
}
