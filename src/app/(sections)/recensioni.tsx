"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MainContainer from "../components/mainContainer";
import Image from "next/image";
import star from "../../../public/star_icon.svg";
import Device from "../components/device";

interface Review {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
}

export default function Recensioni() {
  const reviews: Review[] = [
    {
      name: "Nicolò B.",
      rating: 5,
      comment:
        "Esperienza ottima, personale educato e molto cortese, sia le segretarie che i gommisti! Prima volta che ci vado e sicuramente non l’ultima!! Prezzi onestissimi!",
    },
    {
      name: "Nicolò B.",
      rating: 5,
      comment:
        "Esperienza ottima, personale educato e molto cortese, sia le segretarie che i gommisti! Prima volta che ci vado e sicuramente non l’ultima!! Prezzi onestissimi!",
    },
    {
      name: "Nicolò B.",
      rating: 5,
      comment:
        "Esperienza ottima, personale educato e molto cortese, sia le segretarie che i gommisti! Prima volta che ci vado e sicuramente non l’ultima!! Prezzi onestissimi!",
    },
    {
      name: "Nicolò B.",
      rating: 3,
      comment:
        "Esperienza ottima, personale educato e molto cortese, sia le segretarie che i gommisti! Prima volta che ci vado e sicuramente non l’ultima!! Prezzi onestissimi!",
    },
    {
      name: "Nicolò B.",
      rating: 2,
      comment:
        "Esperienza ottima, personale educato e molto cortese, sia le segretarie che i gommisti! Prima volta che ci vado e sicuramente non l’ultima!! Prezzi onestissimi!",
    },
  ];

  function ReviewCard(review: Review) {
    return (
      <div className="flex flex-col flex-shrink-0 w-80 h-52 border border-black p-5 gap-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-xl font-inter font-semibold">
            {review.name}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: review.rating }).map((_, index) => (
              <Image key={index} src={star} alt="star icon" />
            ))}
          </div>
        </div>
        <span className="text-sm font-inter font-light">{review.comment}</span>
      </div>
    );
  }

  return (
    <Device>
      {({ isMobile }) =>
        isMobile ? (
          <div className="flex w-full bg-[#D9D9D9] pt-24">
            <MainContainer>
              <div className="flex flex-nowrap gap-3 overflow-x-auto">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </div>
            </MainContainer>
          </div>
        ) : (
          <div className="flex w-full justify-center bg-[#D9D9D9] pt-24">
            <MainContainer>
              <div className="flex w-full justify-center items-center ">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-[80%] md:w-[90%]"
                >
                  <CarouselContent>
                    {reviews.map((review, index) => (
                      <CarouselItem
                        key={index}
                        className="flex lg:basis-1/3 justify-center"
                      >
                        <ReviewCard {...review} />
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
            </MainContainer>
          </div>
        )
      }
    </Device>
  );
}
