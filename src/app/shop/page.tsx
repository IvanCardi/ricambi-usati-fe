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

const getProducts = async (params: {
  [key: string]: string | string[] | undefined;
}) => {
  const token = (await cookies())?.get("access_token")?.value;

  let queryParams = "";

  for (let i = 0; i < Object.keys(params).length; i++) {
    const paramName = Object.keys(params)[i];
    const paramValue = params[paramName];

    if (i === Object.keys(params).length - 1) {
      queryParams += `${paramName}=${paramValue as string}`;
    } else {
      queryParams += `${paramName}=${paramValue as string}&`;
    }
  }

  if (!params["page"]) {
    queryParams += `${Object.keys(params).length > 0 ? "&" : ""}page=1`;
  }

  const products = await fetch(
    `${process.env.BE_BASE_URL}/carParts?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return (await products.json()) as { carParts: CarPart[]; totalPages: number };
};

export default async function Shop({ searchParams }: PageProps) {
  const params = await searchParams;
  const { carParts, totalPages } = await getProducts(params);

  return (
    <main className="flex flex-col w-full justify-center items-center">
      <div className="flex w-full justify-center py-14">
        <span className="text-7xl font-inter font-bold">SHOP</span>
      </div>
      <CarPartsFilters
        initialBrand={params.brand as string}
        initialModel={params.model as string}
        initialSetup={params.setup as string}
        startYear={
          params.startYear ? parseFloat(params.startYear as string) : undefined
        }
        endYear={
          params.endYear ? parseFloat(params.endYear as string) : undefined
        }
      />
      <div className="h-[30px]" />
      <CarPartsOrderers initialOrder={params.order as string} />
      <div className="h-[60px]" />
      <CarPartsList carParts={carParts} />
      <div className="h-[30px]" />
      <CarPartsPaginationBar
        currentPage={
          params.page ? parseFloat(params.page as string) : undefined
        }
        totalPages={totalPages}
      ></CarPartsPaginationBar>
      <FormCTA background />
    </main>
  );
}
