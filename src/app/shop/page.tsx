import FormCTA from "@/app/form/formCTA";
import { cookies } from "next/headers";
import CarPartsFilters from "./car-parts-filters";
import CarPartsList from "./car-parts-list";
import CarPartsOrderers from "./car-part-orderers";
import { PageProps } from "@/lib/pageProps";
import CarPartsPaginationBar from "./car-parts-pagination-bar";

export type CarPart = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

const getProducts = async (query: { page?: string }) => {
  const token = (await cookies())?.get("access_token")?.value;

  let params = "";

  if (query.page) {
    if (params !== "") {
      params += `&page=${query.page}`;
    } else {
      params += `page=${query.page}`;
    }
  }

  const products = await fetch(
    `${process.env.BE_BASE_URL}/carParts?${params}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return (await products.json()) as { carParts: CarPart[]; totalPages: number };
};

export default async function Shop({ searchParams }: PageProps) {
  const { page } = await searchParams;
  const { carParts, totalPages } = await getProducts({ page: page as string });

  return (
    <main className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full justify-center py-14">
        <span className="text-7xl font-inter font-bold">SHOP</span>
      </div>
      <CarPartsFilters />
      <div className="h-[30px]" />
      <CarPartsOrderers />
      <div className="h-[60px]" />
      <CarPartsList carParts={carParts} />
      <div className="h-[30px]" />
      <CarPartsPaginationBar
        currentPage={page ? parseFloat(page as string) : undefined}
        totalPages={totalPages}
      ></CarPartsPaginationBar>
      <FormCTA background />
    </main>
  );
}
