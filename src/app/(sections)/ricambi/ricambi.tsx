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
      title: "Motori",
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
      title: "Carrozzeria",
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
      title: "Fanaleria",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
        { name: "Collettore", image: "/collettore.png" },
      ],
    },
    {
      title: "Interni",
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
      title: "Sicurezza",
      image: "/meccanica.png",
      items: [
        { name: "Alternatore", image: "/alternatore.png" },
        { name: "Cambio", image: "/cambio.png" },
      ],
    },
    {
      title: "Cerchi",
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
      title: "Pneumatici",
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
      title: "Moto",
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
    <div className="flex w-full bg-gradient-to-b from-[#353535] from-5% via-[#616161] via-[15%] to-[#DBD9D9] to-40% pt-24">
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
