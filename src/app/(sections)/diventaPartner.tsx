import handShake from "../../../public/handshake.png";
import Image from "next/image";
import MainContainer from "../components/mainContainer";
import { Button } from "@/components/ui/button";

export default function DiventaPatner() {
  return (
    <div className="bg-[#353535] pt-24">
      <MainContainer>
        <div className="flex flex-col items-center md:items-start border-[3px] md:pl-10 pb-12 border-white gap-12">
          <div className="flex w-full items-center">
            <div className="flex flex-col md:w-1/2 gap-6">
              <span className="text-3xl md:text-5xl text-center md:text-left font-poppins font-bold text-white">
                Sei un professionista del settore automotive?
              </span>
              <span className="text-3xl md:text-5xl text-center md:text-left font-poppins font-bold text-[#0BB489] underline">
                DIVENTA NOSTRO PARTNER!
              </span>
            </div>
            <div className="hidden md:block w-fit">
              <Image
                className="border-l-2 border-b-2 border-white "
                src={handShake}
                alt="handshake image"
              />
            </div>
          </div>
          <span className="text-2xl md:text-4xl text-white text-center md:text-left font-poppins font-light">
            Sei un meccanico, un elettrauto o il proprietario di un’officina?
            Diventa nostro partner e scopri tutti i vantaggi e gli sconti che
            abbiamo pensato per te!
          </span>
          <span className="text-2xl md:text-4xl text-white text-center md:text-left font-poppins font-medium">
            Registrati nella nostra area riservata e inizia subito ad usufruire
            delle agevolazioni su misura per te!
          </span>
          <Button className="w-fit px-10 py-7 bg-[#0BB489] hover:bg-[#0BB489]/85">
            <span className="text-xl md:text-3xl text-white font-inter font-extrabold">
              REGISTRATI QUI!
            </span>
          </Button>
        </div>
      </MainContainer>
    </div>
  );
}
