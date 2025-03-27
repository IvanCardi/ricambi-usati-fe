import MainContainer from "@/app/components/mainContainer";
import CategoryCard from "./categoryCard";
import { categories } from "./categoriesList";

export default function Ricambi() {
  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-[#353535] from-5% via-[#616161] via-[15%] to-[#DBD9D9] to-40% pt-24">
      <MainContainer>
        <div className="flex flex-col gap-14">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </MainContainer>
    </div>
  );
}
