import MainContainer from "@/app/components/mainContainer";
import HeroDesktop from "./heroDesktop";
import { Brand } from "@/lib/models/brand";
import { Model } from "@/lib/models/model";
import { Version } from "@/lib/models/version";

export default function Hero({
  brands,
  models,
  versions,
}: {
  brands: Brand[];
  models: Model[];
  versions: Version[];
}) {
  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-[#000000] from-20% via-[#292929] via-[40%] to-[#353535] to-65%">
      <MainContainer>
        <HeroDesktop brands={brands} models={models} versions={versions}/>
      </MainContainer>
    </div>
  );
}
