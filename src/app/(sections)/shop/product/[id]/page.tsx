import ProductPage from "./productPage";

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
        id: "1",
        name: "Kit Airbag Alfa Romeo Giulietta",
        price: 800,
        imageUrl: "/kit_alfa.png",
        brand: "Alfa Romeo Giulietta",
        category: "Security",
        description: "This is a good airbag",
        slug: "this is a slug",
      },
      relatedProducts: [
        {
          id: "2",
          name: "Kit Airbag Fiat Qubo Fiorino",
          price: 450,
          imageUrl: "/kit_giulietta.png",
          brand: "Alfa Romeo Giulietta",
          category: "Security",
          description: "This is a very good airbag",
          slug: "this is another slug",
        },
        {
          id: "3",
          name: "Kit Airbag Alfa Romeo Giulietta",
          price: 800,
          imageUrl: "/kit_alfa.png",
          brand: "Alfa Romeo Giulietta",
          category: "Security",
          description: "This is a good airbag",
          slug: "this is a slug",
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
