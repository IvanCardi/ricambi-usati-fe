import MainContainer from "@/app/components/mainContainer";
import HeroDesktop from "./heroDesktop";

export default function Hero() {
  return (
    <div className="flex w-full justify-center bg-gradient-to-b from-[#000000] from-20% via-[#292929] via-[40%] to-[#353535] to-65%">
      <MainContainer>
        <HeroDesktop />
      </MainContainer>
    </div>
  );
}
