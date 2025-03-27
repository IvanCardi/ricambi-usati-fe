"use client";

import Head from "next/head";
import { useEffect } from "react";
import RelatedProducts from "./relatedProducts";
import MainContainer from "@/app/components/mainContainer";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InfoVeicolo, Veicolo } from "./infoVeicolo";
import PaymentDetails from "../paymentDetails";
import FormCTA from "@/app/form/formCTA";
import Device from "@/app/components/device";
import { CarPart } from "../../page";

export interface CarPartDetailed extends CarPart {
  images: string[];
  description: string;
  category: string;
  compatibileVehicles: string[];
  brand: string;
  warranty: number;
  slug: string;
  car: Veicolo;
}

export default function ProductPage({
  product,
  relatedProducts,
}: {
  product: CarPartDetailed;
  relatedProducts?: CarPart[];
}) {
  useEffect(() => {
    // Adding Schema.org structured data
    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: product.name,
      image: product.imageUrl,
      description: product.description,
      brand: { "@type": "Brand", name: product.brand },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: product.price,
        itemCondition: "https://schema.org/UsedCondition",
        availability: "https://schema.org/InStock",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }, [product]);

  return (
    <Device>
      {({ isMobile }) =>
        isMobile ? (
          <div></div>
        ) : (
          <>
            <Head>
              <title>{product.name} | Best Price for Used Car Parts</title>
              <meta name="description" content={product.description} />
              <meta
                name="keywords"
                content={`used car parts, ${product.category}, buy ${product.name}`}
              />
              <meta property="og:title" content={product.name} />
              <meta property="og:description" content={product.description} />
              <meta property="og:image" content={product.imageUrl} />
              <meta property="og:type" content="product" />
              <meta name="robots" content="index, follow" />
              <link
                rel="canonical"
                href={`https://yourwebsite.com/product/${product.slug}`}
              />
            </Head>

            <main>
              <MainContainer>
                <div className="flex flex-col gap-28 pt-14">
                  <div className="flex w-full gap-4 md:gap-7">
                    <div className="flex flex-col w-[30%] gap-8 px-[2px]">
                      <div className="flex flex-col gap-[10px]">
                        <div className="flex items-center justify-center w-full border-2 border-[#0BB489] rounded-sm">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={200}
                            height={200}
                            priority
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          {product.images.map((image, i) => (
                            <Image
                              key={i}
                              src={image}
                              alt={"mechanical item"}
                              width={100}
                              height={100}
                              loading="lazy"
                            />
                          ))}
                          <Image
                            src={product.car.image}
                            alt={"mechanical item"}
                            width={100}
                            height={100}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col bg-[#0BB489] bg-opacity-10 p-4 gap-6">
                        <h3 className="text-xs font-poppins font-semibold">
                          Compatibilità
                        </h3>
                        <p className="text-[9px]/[12px] font-poppins font-light italic">
                          Controlla la compatibilità delle nostre parti con la
                          tua auto utilizzando immagini, riferimenti del
                          produttore o anche il VIN. I numeri di riferimento sul
                          tuo vecchio pezzo sono essenziali per trovare un pezzo
                          compatibile. Confronti i riferimenti con la tua
                          vecchia parte prima dell&apos;acquisto per garantire
                          la compatibilità. Attenzione che piccole deviazioni
                          nel riferimento del pezzo, per esempio lettere diverse
                          alla fine di una sequenza, hanno un grande impatto
                          sull&apos;interoperabilità con il tuo veicolo.
                        </p>
                        <Accordion
                          className="border bg-white border-black rounded-sm w-1/2 px-3 py-2"
                          type="single"
                          collapsible
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[9px] font-poppins font-light no-underline">
                              Elenco Veicoli
                            </AccordionTrigger>
                            {product.compatibileVehicles.map((vehicle, i) => (
                              <AccordionContent
                                className="flex justify-start"
                                key={i}
                              >
                                <span className="text-[9px] font-poppins font-light">
                                  {vehicle}
                                </span>
                              </AccordionContent>
                            ))}
                          </AccordionItem>
                        </Accordion>
                      </div>
                      <div className="flex flex-col gap-4">
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
                    </div>
                    <div className="flex w-[44%] px-[2px]">
                      <div className="flex flex-col w-full  gap-11">
                        <div className="flex flex-col gap-8">
                          <h1 className="text-3xl font-inter font-bold">
                            {product.name}
                          </h1>
                          <div className="flex bg-[#0BB489] w-fit rounded-sm px-4 py-1">
                            <h2 className="text-xs md:text-2xl text-white font-poppins font-light">
                              {product.id}
                            </h2>
                          </div>
                        </div>
                        <InfoVeicolo {...product.car} />
                      </div>
                      <div className="hidden md:flex h-full pt-14">
                        <div className="h-1/2 w-[1px] bg-black"></div>
                      </div>
                    </div>
                    <div className="flex w-[26%] pt-14 px-[2px]">
                      <PaymentDetails
                        price={product.price}
                        warranty={product.warranty}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center w-full px-14">
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
              <div className="flex justify-center py-28">
                <div className="flex flex-col justify-center items-center w-full bg-[#E4F7F2] gap-10 py-12 ">
                  <h2 className="text-3xl text-center font-poppins font-semibold">
                    Scopri altri ricambi compatibili con questa vettura
                  </h2>
                  <Image
                    src={product.car.image}
                    width={400}
                    height={400}
                    alt="car"
                  />
                  <span className="w-1/2 text-2xl text-center text-[#0BB489] font-poppins font-semibold underline">
                    {product.car.name}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-28">
                {relatedProducts ? (
                  <>
                    <FormCTA />
                    <RelatedProducts products={relatedProducts} />
                  </>
                ) : (
                  <FormCTA background />
                )}
              </div>
            </main>
          </>
        )
      }
    </Device>
  );
}
