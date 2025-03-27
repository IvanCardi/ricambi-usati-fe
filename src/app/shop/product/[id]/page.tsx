import { cookies } from "next/headers";
import { Veicolo } from "./infoVeicolo";
import ProductPage, { CarPartDetailed } from "./productPage";
import { PageProps } from "@/lib/pageProps";

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

const getCarPart = async (id: string) => {
  const token = (await cookies())?.get("access_token")?.value;

  const products = await fetch(`${process.env.BE_BASE_URL}/carParts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return products.json();
};

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const product = await getCarPart(id);

  const res = {
    props: {
      product: {
        id: product.numbers[0],
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        brand: product.carBrand,
        category: product.category,
        compatibileVehicles: product.compatibleCars,
        description: product.description,
        slug: "this is a slug",
        images: product.photos,
        warranty: product.warranty,
        car: {
          name: `${product.carBrand} ${product.carModel} ${product.carSetup} ${product.carYear}`,
          image: "/car.png",
          details: {},
          technicalInfos: {},
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
