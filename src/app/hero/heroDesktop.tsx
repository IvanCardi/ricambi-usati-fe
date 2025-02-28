import Image from "next/image";
import mechanicalAccessories from "@/../public/mechanical_accessories.png";
import searchIcon from "@/../public/search_icon.svg";
import shield from "@/../public/shield_icon.svg";
import cart from "@/../public/cart_distinctive_icon.svg";
import box from "@/../public/box_icon.svg";
import medal from "@/../public/medal_icon.svg";

interface Distinctive {
  icon: string;
  title: string;
  description: string;
}

const distinctives: Distinctive[] = [
  {
    title: "1 anno di garanzia",
    description:
      "Acquista senza preoccupazioni i ricambi auto di cui hai bisogno",
    icon: shield,
  },
  {
    title: "Consegna veloce ",
    description: "Ricevi il tuo ordine in 1-3 giorni lavorativi",
    icon: cart,
  },
  {
    title: "Consegna gratuita",
    description: "Per ordini superiori a 100€",
    icon: box,
  },
  {
    title: "Qualità assicurata",
    description: "Ricambi auto di qualità ",
    icon: medal,
  },
];

export default function HeroDesktop() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-5xl text-white font-inter font-bold">
            TROVA IL RICAMBIO AUTO PERFETTO PER TE
          </h1>
          <span className="text-2xl text-white font-poppins font-light">
            Scegli ricambi auto di qualità <br></br> in modo facile e veloce.
          </span>
          <div className="flex w-[70%] items-center bg-white p-3 gap-2 border-2 border-[#0BB489] rounded-[100px]">
            <Image src={searchIcon} alt="icon"></Image>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="CERCA TRA TUTTI I RICAMBI"
              className="w-full text-lg text-gray-900 placeholder:text-[#637381] focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <Image
          aria-hidden
          src={mechanicalAccessories}
          alt="Mechanical accessories image"
        />
      </div>
      <div className="flex w-full justify-between">
        {distinctives.map((d) => (
          <div className="flex gap-5" key={d.title}>
            <div className="pt-2">
              <Image src={d.icon} alt="icon"></Image>
            </div>
            <div className="flex flex-col max-w-[200px]  gap-1">
              <span className="text-xl/6 font-poppins font-bold text-white">
                {d.title}
              </span>
              <span className="text-base/4 font-poppins font-normal text-white">
                {d.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
