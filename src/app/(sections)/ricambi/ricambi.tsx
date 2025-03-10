import MainContainer from "@/app/components/mainContainer";
import CategoryCard, { Category } from "./categoryCard";

export default function Ricambi() {
  const categories: Category[] = [
    {
      title: "Meccanica",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
        { name: "Pastiglie Freno", image: "/pastiglie.png" },
        {
          name: "Piantone Servosterzo",
          image: "/piantone.png",
        },
        { name: "Pinza Freno", image: "/pastiglie.png" },
        { name: "Pompa Carburante", image: "/pompa.png" },
      ],
    },
    {
      title: "Meccanica2",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
        { name: "Pastiglie Freno", image: "/pastiglie.png" },
        {
          name: "Piantone Servosterzo",
          image: "/piantone.png",
        },
        { name: "Pinza Freno", image: "/pastiglie.png" },
      ],
    },
    {
      title: "Meccanica3",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
      ],
    },
    {
      title: "Meccanica4",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
      ],
    },
    {
      title: "Meccanica5",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
        { name: "Pastiglie Freno", image: "/pastiglie.png" },
        {
          name: "Piantone Servosterzo",
          image: "/piantone.png",
        },
      ],
    },
    {
      title: "Meccanica6",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
      ],
    },
    {
      title: "Meccanica7",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
        { name: "Pastiglie Freno", image: "/pastiglie.png" },
        {
          name: "Piantone Servosterzo",
          image: "/piantone.png",
        },
        { name: "Pinza Freno", image: "/pastiglie.png" },
      ],
    },
    {
      title: "Meccanica8",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
        { name: "Pastiglie Freno", image: "/pastiglie.png" },
      ],
    },
    {
      title: "Meccanica9",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
        {
          name: "Motorino Avviamento",
          image: "/motorino.png",
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#353535] from-5% via-[#616161] via-[15%] to-[#DBD9D9] to-40%">
      <MainContainer>
        <div className="flex flex-col gap-14">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </MainContainer>
    </div>
  );
}
