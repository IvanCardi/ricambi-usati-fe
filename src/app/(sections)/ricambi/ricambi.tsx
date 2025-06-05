import MainContainer from "@/app/components/mainContainer";
import CategoryCard from "./categoryCard";
import { Category } from "@/lib/models/category";

export default function Ricambi({ categories }: { categories: Category[] }) {
  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-[#353535] from-5% via-[#616161] via-[15%] to-[#DBD9D9] to-40% pt-24">
      <MainContainer>
        <div className="flex flex-col gap-14">
          {categories.map((category) => {
            const cat = {
              name: category.name.toLowerCase(),
              image: category.image,
              slug: category.name,
              subCategories: category.children.map((c) => ({
                name: c.name.toLowerCase(),
                image: c.image,
                slug: c.name,
              })),
            };

            return <CategoryCard key={category.name} {...cat} />;
          })}
        </div>
      </MainContainer>
    </div>
  );
}
