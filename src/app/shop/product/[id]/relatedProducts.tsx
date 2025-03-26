import { CarPart } from "../../car-parts-list";
import Device from "../../../components/device";
import MainContainer from "@/app/components/mainContainer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarPartCard } from "../../car-part-card";

export default function RelatedProducts({ products }: { products: CarPart[] }) {
  return (
    <Device>
      {({ isMobile }) =>
        isMobile ? (
          <div className="flex w-full bg-gradient-to-b from-white from-[60%] to-[#939292]">
            <MainContainer>
              <div className="flex flex-col gap-16">
                <h2 className="text-[40px] text-center font-poppins font-semibold">
                  PRODOTTI SIMILI
                </h2>
                <div className="flex flex-nowrap gap-3 overflow-x-auto">
                  {products.map((product, index) => (
                    <CarPartCard key={index} {...product} />
                  ))}
                </div>
              </div>
            </MainContainer>
          </div>
        ) : (
          <div className="flex w-full bg-gradient-to-b from-white from-[60%] to-[#939292]">
            <MainContainer>
              <div className="flex flex-col w-full items-center gap-16">
                <h2 className="text-[40px] font-poppins font-semibold">
                  PRODOTTI SIMILI
                </h2>
                <div className="flex w-full justify-center items-center ">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-[80%] md:w-[90%]"
                  >
                    <CarouselContent>
                      {products.map((product, index) => (
                        <CarouselItem
                          key={index}
                          className="flex sm:basis-1/2 md:basis-1/3  lg:basis-1/4 justify-center"
                        >
                          <CarPartCard {...product} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      variant={"ghost"}
                      className="hidden md:flex h-0 w-0"
                    />
                    <CarouselNext
                      variant={"ghost"}
                      className="hidden md:flex h-0 w-0"
                    />
                  </Carousel>
                </div>
              </div>
            </MainContainer>
          </div>
        )
      }
    </Device>
  );
}
