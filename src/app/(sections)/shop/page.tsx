import MainContainer from "@/app/components/mainContainer";
import SearchFilters from "@/app/components/searchFilters";

export default function Shop() {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <MainContainer>
        <div className="flex w-full justify-center py-14">
          <span className="text-7xl font-inter font-bold">SHOP</span>
        </div>
        <SearchFilters shop />
      </MainContainer>
    </main>
  );
}
