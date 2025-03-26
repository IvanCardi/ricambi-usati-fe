"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import SearchFilters from "@/app/components/searchFilters";
import { useRouter, useSearchParams } from "next/navigation";

export function TrovaRicambi() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchType, setSearchType] = useState<"VEICOLO" | "N. DI SERIE">(
    "VEICOLO"
  );

  const [params, setParams] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setParams({});
  }, [searchType]);

  const onSearchButtonClick = () => {
    const query = new URLSearchParams(searchParams.toString());

    for (const param in params) {
      query.set(param, params[param]);
    }

    query.set("page", "1");

    router.push(`/shop?${query.toString()}`);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[80%] justify-center relative">
        <div className="flex items-center justify-betweeen bg-[#353535] gap-2 md:gap-8 md:p-2 md:-top-7 -top-4 absolute">
          <span
            key={"VEICOLO"}
            className={`text-xl md:text-4xl font-poppins font-bold cursor-pointer  ${
              searchType === "VEICOLO" ? `text-[#0BB489]` : `text-white`
            } `}
            style={{ textShadow: "0px 5px 5px #00000040" }}
            onClick={() => setSearchType("VEICOLO")}
          >
            VEICOLO
          </span>
          <div className="w-[1px] md:w-[3px] h-5 md:h-9 bg-white" />
          <span
            key={"N. DI SERIE"}
            className={`text-xl md:text-4xl font-poppins font-bold cursor-pointer  ${
              searchType === "N. DI SERIE" ? `text-[#0BB489]` : `text-white`
            } `}
            style={{ textShadow: "0px 5px 5px #00000040" }}
            onClick={() => setSearchType("N. DI SERIE")}
          >
            N. DI SERIE
          </span>
        </div>

        <div className="flex flex-col justify-center md:h-56 gap-5 w-full p-2 md:p-10 border-[#0BB489] border-4">
          {searchType === "VEICOLO" ? (
            <SearchFilters
              onFilterSelection={(name, value) => {
                setParams((curr) => ({ ...curr, [name]: value }));
              }}
            />
          ) : (
            <div className="flex flex-col gap-2">
              <span className="text-xl text-white font-inter font-semibold">
                Cerca per numero di serie
              </span>
              <div className="flex w-[80%] items-center bg-white p-3 border-2 border-[#0BB489] rounded-[6px]">
                <input
                  id="search1"
                  name="search1"
                  type="text"
                  placeholder="Per esempio: 9643777980, 0265216..."
                  className="w-full text-lg text-gray-900 placeholder:text-[#637381] focus:outline-none sm:text-sm/6"
                  onChange={(e) => setParams({ number: e.target.value })}
                />
              </div>
            </div>
          )}
          <div className="flex w-full justify-center md:justify-start">
            <Button
              className="w-fit md:w-56 bg-[#0BB489] hover:bg-[#0BB489]/85"
              onClick={onSearchButtonClick}
            >
              <span className="text-xl text-white font-inter font-extrabold">
                TROVA RICAMBIO
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
