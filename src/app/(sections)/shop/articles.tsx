import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Articles() {
  interface Article {
    name: string;
    price: number;
    image: string;
  }
  const articles: Article[] = [
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
    {
      name: "Kit Airbag Alfa Romeo Giulietta",
      price: 800,
      image: "/kit_alfa.png",
    },
    {
      name: "Kit Airbag Fiat Qubo Fiorino",
      price: 450,
      image: "/kit_giulietta.png",
    },
  ];

  function ArticleCard(article: Article) {
    return (
      <div className="flex flex-col justify-center max-w-72 max-h-80 border-[3px] border-[#0BB489]">
        <div className="flex w-full justify-center border-[3px] border-[#0BB489]">
          <Image
            src={article.image}
            alt="mechanical article"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <span className="text-base text-center font-inter font-semibold">
            {article.name}
          </span>
          <div className="w-10 h-[1px] bg-black" />
          <span className="text-sm text-center font-inter font-semibold">
            {article.price}€
          </span>
        </div>
        <Button className="w-fit md:w-24 bg-[#0BB489] hover:bg-[#0BB489]/85">
          <span className="text-xs text-white font-inter font-medium">
            Aggiungi al carrello
          </span>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4  gap-10">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
}
