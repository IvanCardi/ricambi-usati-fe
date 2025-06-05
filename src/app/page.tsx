import { Suspense } from "react";
import DiventaPartner from "./(sections)/diventaPartner";
import Hero from "./(sections)/hero/hero";
import Partners from "./(sections)/partners";
import Ricambi from "./(sections)/ricambi/ricambi";
import { getCategories } from "@/lib/http/getCategories";
import { getBrandsModelsVersions } from "@/lib/http/getBrandsModelsVersions";

export default async function Home() {
  const categories = await getCategories();
  const { brands, models, versions } = await getBrandsModelsVersions();
  return (
    <Suspense fallback="loading...">
      <main className="flex flex-col">
        <Hero brands={brands} models={models} versions={versions} />
        <DiventaPartner />
        <Ricambi categories={categories} />
        {/* <Recensioni /> */}
        <Partners />
      </main>
    </Suspense>
  );
}
