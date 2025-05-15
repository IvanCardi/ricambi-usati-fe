import { Button } from "@/components/ui/button";
import Image from "next/image";
import acceptedPayments from "../../../../public/card_payment_logos.png";

export default function PaymentDetails({
  onAddToCart,
  price,
  warranty,
}: {
  onAddToCart: () => void;
  price: number;
  warranty?: number;
}) {
  return (
    <div className="flex flex-col w-full gap-4 md:gap-8">
      <div className="flex flex-col gap-2 md:gap-6">
        {warranty && (
          <h2 className="text-base md:text-2xl text-[#0BB489] font-poppins font-medium">
            {warranty} mesi di garanzia
          </h2>
        )}
        <span className="text-2xl md:text-5xl font-poppins font-semibold">
          {price} €
        </span>
        <span className="text-xs md:text-[15px] font-poppins font-semibold">
          La spedizione e l&apos;IVA sono incluse nel prezzo.
        </span>
        <Button
          className="md:w-fit bg-[#0BB489] hover:bg-[#0BB489]/85"
          onClick={onAddToCart}
        >
          <span className="text-xs md:text-base text-white font-inter font-medium">
            Aggiungi al carrello
          </span>
        </Button>
        <div className="flex flex-col">
          <span className="text-sm font-poppins font-normal">
            Metodi di pagamento accettati:
          </span>
          <div className="flex items-center w-4/5">
            <Image
              src={acceptedPayments}
              className="object-contain"
              alt="accepted payments card list"
            />
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
