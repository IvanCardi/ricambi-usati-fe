import { Veicolo } from "./infoVeicolo";
import ProductPage, { CarPartDetailed } from "./productPage";

/* // **Fetching product data dynamically (SSR)**
async function getServerSideProps(productId: string) {
  const res = await fetch(`https://api.example.com/products/${productId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const product = (await res.json()).product;
  const relatedProducts = (await res.json()).relatedProducts;

  return {
    props: { product, relatedProducts },
  };
} */

export default async function ProductDetailsPage({}: {
  params: { id: string };
}) {
  const res = {
    props: {
      product: {
        id: "BP5012299C120",
        name: "Kit Airbag Alfa Romeo Giulietta",
        price: 800,
        imageUrl: "/kit_alfa.png",
        brand: "Alfa Romeo Giulietta",
        category: "Security",
        description:
          "Il serbatoio di espansione è un contenitore di plastica, costituito da due ingressi, uno per un fluido e l'altro per un gas.La sua funzione principale è quella di compensare l'aumento di volume dell'acqua causato dall'aumento della temperatura. È un dispositivo che viene aggiunto da un sistema a circuito chiuso. Questo componente si trova nel vano motore, sopra il radiatore. Serbatoio di espansione NISSAN QASHQAI II SUV (J11, J11_) 1.5 dCi è un unico pezzo originale usato con il riferimento sem ref visivel e con l'id dell'articolo BP5012299C120",
        slug: "this is a slug",
        images: ["/kit_alfa.png", "/kit_alfa.png"],
        warranty: "12 mesi",
        car: {
          name: "NISSAN QASHQAI II SUV (J11, J11_) 1.5 dCi [2013-2025] (5 Porte)",
          image: "/car.png",
          details: {
            riferimento: "Sem ref visivel",
          },
          technicalInfos: {
            trazione: "anteriore",
            carburante: "Diesel",
            potenza: "110 hp/81 kw",
            cilindri: 4,
            spostamento: 1461,
            valvole: 4,
            carrozzeria: "SUV",
            motore: "Diesel",
            catalizzatore: "Diesel (Oxi-Kat)",
          },
        } as Veicolo,
      } as CarPartDetailed,
      relatedProducts: [
        {
          id: "2",
          name: "Kit Airbag Fiat Qubo Fiorino",
          price: 450,
          imageUrl: "/kit_giulietta.png",
        },
        {
          id: "3",
          name: "Kit Airbag Alfa Romeo Giulietta",
          price: 800,
          imageUrl: "/kit_alfa.png",
        },
        {
          id: "4",
          name: "Kit Airbag Alfa Romeo Giulietta",
          price: 800,
          imageUrl: "/kit_alfa.png",
        },
        {
          id: "5",
          name: "Kit Airbag Alfa Romeo Giulietta",
          price: 800,
          imageUrl: "/kit_alfa.png",
        },
      ],
    },
  }; //await getServerSideProps(params.id);

  return (
    <ProductPage
      product={res.props.product}
      relatedProducts={res.props.relatedProducts}
    ></ProductPage>
  );
}
