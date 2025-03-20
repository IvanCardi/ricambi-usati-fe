"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import RelatedProducts from "./relatedProducts";
import MainContainer from "@/app/components/mainContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface CarPart {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  slug: string;
}

export default function ProductPage({
  product,
  relatedProducts,
}: {
  product: CarPart;
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

  const compatibileVehicles = ["Tesla", "BYD"];

  return (
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

      <main className="">
        <MainContainer>
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-[30%]">
              <div className="flex flex-col">
                <div className="flex items-center justify-center w-full border-2 border-[#0BB489] rounded-sm">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={200}
                    height={200}
                    priority
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col bg-[#0BB489] bg-opacity-10 p-4 gap-6">
                  <span className="text-xs font-poppins font-semibold">
                    Compatibilità
                  </span>
                  <span className="text-[9px]/[12px] font-poppins font-light italic">
                    Controlla la compatibilità delle nostre parti con la tua
                    auto utilizzando immagini, riferimenti del produttore o
                    anche il VIN. I numeri di riferimento sul tuo vecchio pezzo
                    sono essenziali per trovare un pezzo compatibile. Confronti
                    i riferimenti con la tua vecchia parte prima dell'acquisto
                    per garantire la compatibilità. Attenzione che piccole
                    deviazioni nel riferimento del pezzo, per esempio lettere
                    diverse alla fine di una sequenza, hanno un grande impatto
                    sull'interoperabilità con il tuo veicolo.
                  </span>
                  <Accordion
                    className="border bg-white border-black rounded-sm w-1/2 px-3 py-2"
                    type="single"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-[9px] font-poppins font-light no-underline">
                        Elenco Veicoli
                      </AccordionTrigger>
                      {compatibileVehicles.map((vehicle, i) => (
                        <AccordionContent
                          className="flex justify-start"
                          key={i}
                        >
                          {vehicle}
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="flex w-[45%]"></div>
            <div className="flex w-[25%]"></div>
          </div>

          {/* 
          <RelatedProducts products={relatedProducts} /> */}
        </MainContainer>
      </main>
    </>
  );
}
