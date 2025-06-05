import cart from "@/../public/cart_distinctive_icon.svg";
import mechanicalAccessories from "@/../public/mechanical_accessories.png";
import medal from "@/../public/medal_icon.svg";
import searchIcon from "@/../public/search_icon.svg";
import shield from "@/../public/shield_icon.svg";
import Image from "next/image";
import { TrovaRicambi } from "./trovaRicambi";
import { Brand } from "@/lib/models/brand";
import { Model } from "@/lib/models/model";
import { Version } from "@/lib/models/version";

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
  /* {
    title: "Consegna gratuita",
    description: "Per ordini superiori a 100€",
    icon: box,
  }, */
  {
    title: "Qualità assicurata",
    description: "Ricambi auto di qualità ",
    icon: medal,
  },
];

export default function HeroDesktop({
  brands,
  models,
  versions,
}: {
  brands: Brand[];
  models: Model[];
  versions: Version[];
}) {
  return (
    <div className="flex flex-col gap-28">
      <div className="flex flex-col gap-16 ">
        <div className="flex w-full h-fit justify-center md:justify-between">
          <div className="flex flex-col pt-3 justify-center items-center md:items-start gap-6">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <h1 className="text-center md:text-left text-5xl text-white font-inter font-bold">
                TROVA IL RICAMBIO <br></br> AUTO PERFETTO PER TE
              </h1>
              <span className="text-center md:text-left text-2xl text-white font-poppins font-light">
                Scegli ricambi auto di qualità <br></br> in modo facile e
                veloce.
              </span>
            </div>
            <div className="flex w-[80%] items-center bg-white p-3 gap-2 border-2 border-[#0BB489] rounded-[100px]">
              <Image src={searchIcon} alt="search icon"></Image>
              <input
                id="search"
                name="search"
                type="text"
                placeholder="CERCA TRA TUTTI I RICAMBI"
                className="w-full text-lg text-gray-900 placeholder:text-[#637381] focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
          <div className="hidden md:block w-fit">
            <Image
              aria-hidden
              src={mechanicalAccessories}
              alt="Mechanical accessories image"
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:flex w-full justify-between">
          {distinctives.map((d) => (
            <div className="flex justify-center gap-5" key={d.title}>
              <div className="min-w-8 pt-2">
                <Image src={d.icon} alt="icon"></Image>
              </div>
              <div className="flex flex-col max-w-[200px]  gap-1">
                <span className="text-lg text-center md:text-left md:text-xl/6 font-poppins font-bold text-white">
                  {d.title}
                </span>
                <span className="text-sm text-center md:text-left md:text-base/4 font-poppins font-normal text-white">
                  {d.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TrovaRicambi brands={brands} models={models} versions={versions} />
    </div>
  );
}
