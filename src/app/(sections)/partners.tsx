"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CustomCarouselDots,
} from "@/components/ui/carousel";
import MainContainer from "../components/mainContainer";
import Device from "../components/device";

export default function Partners() {
  const partners: string[] = [
    "/partner_alfa_logo.svg",
    "/audi_logo.svg",
    "/bmw_logo.svg",
    "/chevrolet_logo.svg",
    "/citroen_logo.svg",
    "/dacia_logo.svg",
    "/fiat_logo.svg",
    "/ford_logo.svg",
    "/partner_alfa_logo.svg",
    "/audi_logo.svg",
    "/bmw_logo.svg",
    "/chevrolet_logo.svg",
    "/citroen_logo.svg",
    "/dacia_logo.svg",
    "/fiat_logo.svg",
    "/ford_logo.svg",
    "/partner_alfa_logo.svg",
    "/audi_logo.svg",
    "/bmw_logo.svg",
    "/chevrolet_logo.svg",
    "/citroen_logo.svg",
    "/dacia_logo.svg",
    "/fiat_logo.svg",
    "/ford_logo.svg",
  ];

  return (
    <Device>
      {({ isMobile }) =>
        isMobile ? (
          <div className="flex w-full justify-center bg-gradient-to-b from-[#DBD9D9] to-[#939292] pt-24">
            <MainContainer>
              <div className="flex flex-col">
                <div className="flex w-full justify-between gap-2">
                  {partners.slice(0, 3).map((partner, index) => (
                    <Image
                      key={index}
                      src={partner}
                      alt="brand icon"
                      width={80}
                      height={80}
                    />
                  ))}
                </div>
                <div className="flex w-full justify-evenly">
                  {partners.slice(3, 5).map((partner, index) => (
                    <Image
                      key={index}
                      src={partner}
                      alt="brand icon"
                      width={80}
                      height={80}
                    />
                  ))}
                </div>
              </div>
            </MainContainer>
          </div>
        ) : (
          <div className="flex w-full justify-center bg-gradient-to-b from-[#DBD9D9] to-[#939292] pt-24">
            <MainContainer>
              <div className="flex justify-center items-center">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {partners.map((partner, index) => (
                      <CarouselItem
                        key={index}
                        className="flex basis-[12.5%] justify-center items-center"
                      >
                        <Image
                          src={partner}
                          alt="brand icon"
                          width={100}
                          height={100}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex pt-14 justify-center">
                    <CustomCarouselDots
                      totalSlides={Math.ceil(partners.length / 8)}
                      show={8}
                    />
                  </div>
                </Carousel>
              </div>
            </MainContainer>
          </div>
        )
      }
    </Device>
  );
}
