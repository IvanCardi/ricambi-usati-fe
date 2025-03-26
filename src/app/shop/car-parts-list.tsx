"use client";
import MainContainer from "../components/mainContainer";
import { CarPartCard } from "./car-part-card";
import { CarPart } from "./page";

export default function CarPartsList({ carParts }: { carParts: CarPart[] }) {
  return (
    <MainContainer>
      <div className="flex flex-col gap-16">
        {carParts.length === 0 ? (
          <div className="flex w-fit m-auto text-3xl text-center font-inter font-normal italic">
            <span>
              Sembra che al momento i ricambi <br></br> che stai cercando non
              siano disponibili
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-10">
            {carParts.map((item, index) => (
              <CarPartCard key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    </MainContainer>
  );
}
