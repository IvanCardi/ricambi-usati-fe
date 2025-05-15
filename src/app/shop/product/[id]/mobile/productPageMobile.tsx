"use client";

import MainContainer from "@/app/components/mainContainer";
import Image from "next/image";
import { CarPartDetailed } from "../productPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InfoVeicolo } from "../infoVeicolo";
import PaymentDetails from "../../paymentDetails";
import FormCTA from "@/app/form/formCTA";
import RelatedProducts from "../relatedProducts";
import { CarPart } from "@/app/shop/page";
import { useCart } from "@/app/cart/cartContext";
import noImagePlaceholder from "../../../../../../public/no-image-placeholder.jpg";

export default function ProductPageMobile({
  product,
  relatedProducts,
  setImage,
  mainImg,
}: {
  product: CarPartDetailed;
  relatedProducts?: CarPart[];
  setImage: (img: string) => void;
  mainImg: string;
}) {
  const { addToCart } = useCart();

  return (
    <>
      <MainContainer>
        <div className="flex flex-col gap-14 pt-14">
          <div className="flex w-full gap-4 md:gap-7">
            <div className="flex flex-col w-[45%] gap-4 md:gap-8 px-[2px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center justify-center w-full border-2 border-[#0BB489] rounded-sm">
                  {mainImg ? (
                    <div className="relative w-[150px] h-[150px]">
                      <Image
                        className="object-scale-down"
                        src={mainImg}
                        alt={product.name}
                        fill
                        priority
                      />
                    </div>
                  ) : (
                    <Image
                      className="w-full object-cover"
                      src={noImagePlaceholder.src}
                      alt={`No image placeholder`}
                      height={200}
                      width={200}
                    />
                  )}
                </div>
                <div className="flex flex-nowrap gap-3 overflow-x-auto">
                  {product.images.map((image, i) => (
                    <Image
                      key={i}
                      src={image}
                      alt={"mechanical item"}
                      width={50}
                      height={50}
                      loading="lazy"
                      onClick={() => setImage(image)}
                    />
                  ))}
                </div>
                <div className="flex w-full md:pt-14 px-[2px]">
                  <PaymentDetails
                    onAddToCart={() =>
                      addToCart({
                        id: product.id,
                        imageUrl: product.imageUrl,
                        name: product.name,
                        price: product.price,
                      })
                    }
                    price={product.price}
                    warranty={product.warranty}
                  />
                </div>
              </div>
              <div className="flex flex-col bg-[#0BB489] bg-opacity-10 p-2 gap-6">
                <h3 className="text-xs font-poppins font-semibold">
                  Compatibilità
                </h3>
                <p className="text-[9px]/[12px] font-poppins font-light italic">
                  Controlla la compatibilità delle nostre parti con la tua auto
                  utilizzando immagini, riferimenti del produttore o anche il
                  VIN. I numeri di riferimento sul tuo vecchio pezzo sono
                  essenziali per trovare un pezzo compatibile. Confronti i
                  riferimenti con la tua vecchia parte prima dell&apos;acquisto
                  per garantire la compatibilità. Attenzione che piccole
                  deviazioni nel riferimento del pezzo, per esempio lettere
                  diverse alla fine di una sequenza, hanno un grande impatto
                  sull&apos;interoperabilità con il tuo veicolo.
                </p>
                <Accordion
                  className="border bg-white border-black rounded-sm w-full px-3 py-2"
                  type="single"
                  collapsible
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-[9px] font-poppins font-light no-underline">
                      Elenco Veicoli
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 pt-2">
                        {product.compatibileVehicles.map((vehicle, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-poppins font-light"
                          >
                            {vehicle}
                          </span>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="flex w-[55%] px-[2px]">
              <div className="flex flex-col w-full  gap-11">
                <div className="flex flex-col gap-8">
                  <h1 className="text-xl font-inter font-bold">
                    {product.name}
                  </h1>
                  <div className="flex bg-[#0BB489] w-fit rounded-sm px-4 py-1">
                    <h2 className="text-[10px] text-white font-poppins font-light">
                      {product.id}
                    </h2>
                  </div>
                </div>
                <InfoVeicolo {...product.car} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-lg md:text-2xl font-poppins font-semibold">
              Vorresti più informazioni?
            </h2>
            <div className="flex items-center gap-[1px]">
              <Image
                src="/phone_icon.svg"
                width={20}
                height={20}
                alt="Phone Icon"
              />
              <p className="text-base md:text-xl font-poppins font-light">
                Chiamaci al{" "}
                <span className="text-base md:text-xl font-poppins font-medium">
                  +39 0444 636259
                </span>
              </p>
            </div>
            <p className="text-base md:text-xl font-poppins font-normal">
              Orario: lunedì - venerdì
              <br /> dalle 08:00 - 12:00 e 14:00 - 19:00
              <br /> sabato dalle 08:00 - 12:00
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col w-full border border-black gap-4 px-11 py-8">
              <h2 className="text-[27px] text-center text-[#0BB489] font-poppins font-semibold">
                Informazioni sul ricambio
              </h2>
              <p className="text-base md:text-xl font-poppins font-normal">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
      <div className="flex justify-center py-14">
        <div className="flex flex-col justify-center items-center w-full bg-[#E4F7F2] gap-10 py-12 ">
          <h2 className="text-3xl text-center font-poppins font-semibold">
            Scopri altri ricambi compatibili con questa vettura
          </h2>
          <Image src={product.car.image} width={400} height={400} alt="car" />
          <span className="w-1/2 text-2xl text-center text-[#0BB489] font-poppins font-semibold underline">
            {product.car.name}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-14">
        {relatedProducts ? (
          <>
            <FormCTA />
            <RelatedProducts products={relatedProducts} />
          </>
        ) : (
          <FormCTA background />
        )}
      </div>
    </>
  );
}
