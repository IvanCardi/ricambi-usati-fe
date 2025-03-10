import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MainContainer from "../components/mainContainer";

export default function Partners() {
  const partners: string[] = [
    "/partner_alfa_logo.svg",
    "/partner_alfa_logo.svg",
    "/partner_alfa_logo.svg",
    "/partner_alfa_logo.svg",
    "/partner_alfa_logo.svg",
    "/partner_alfa_logo.svg",
    "/partner_alfa_logo.svg",
    "/partner_alfa_logo.svg",
  ];

  return (
    <div className="bg-gradient-to-b from-[#DBD9D9] to-[#939292] pt-24">
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
                  className="flex sm:basis-1/3 lg:basis-[12.5%] justify-center items-center"
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
            <CarouselPrevious variant={"ghost"} />
            <CarouselNext variant={"ghost"} />
          </Carousel>
        </div>
      </MainContainer>
    </div>
  );
}
