import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PaymentDetails({
  price,
  warranty,
}: {
  price: number;
  warranty?: string;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        {warranty && (
          <h2 className="text-lg md:text-2xl text-[#0BB489] font-poppins font-medium">
            {warranty} di garanzia
          </h2>
        )}
        <span className="text-4xl md:text-5xl font-poppins font-semibold">
          {price} €
        </span>
        <span className="text-xs md:text-[15px] font-poppins font-semibold">
          La spedizione e l&apos;IVA sono incluse nel prezzo.
        </span>
        <Button className="w-full md:w-fit bg-[#0BB489] hover:bg-[#0BB489]/85">
          <span className="text-sm md:text-base text-white font-inter font-medium">
            Aggiungi al carrello
          </span>
        </Button>
        <div className="flex flex-col">
          <span className="text-sm font-poppins font-normal">
            Metodi di pagamento accettati:
          </span>
          <div className="hidden md:grid grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-black h-8 w-10"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[18px]">
        <div className="flex w-full items-center gap-2">
          <Image
            src={"/delivery_truck_icon.svg"}
            width={24}
            height={24}
            alt="delivery track icon"
            className="hidden md:flex"
          />
          <span className="text-xs md:text-sm font-inter font-medium">
            La spedizione e l’IVA{" "}
            <span className="text-xs md:text-sm font-inter font-normal">
              sono
            </span>{" "}
            incluse{" "}
            <span className="text-xs md:text-sm font-inter font-normal">
              nel prezzo
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/clock_icon.svg"}
            width={24}
            height={24}
            alt="clock icon"
            className="hidden md:flex"
          />
          <span className="text-xs md:text-sm font-inter font-normal">
            Il tempo di {""}
            <span className="text-xs md:text-sm font-inter font-medium">
              consegna
            </span>{" "}
            per questo ricambio usato è di{" "}
            <span className="text-xs md:text-sm font-inter font-medium">
              2 ai 4 giorni lavorativi
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/reply_icon.svg"}
            width={24}
            height={24}
            alt="reply icon"
            className="hidden md:flex"
          />
          <span className="text-xs md:text-sm font-inter font-normal">
            Puoi effettuare il {""}
            <span className="text-xs md:text-sm  font-inter font-medium">
              reso entro 14 giorni
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
