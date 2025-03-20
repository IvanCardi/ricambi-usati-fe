/* import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import RelatedProducts from './relatedProducts';


export default function ProductPage({ product, relatedProducts }) {
  useEffect(() => {
    // Adding Schema.org structured data
    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "image": product.imageUrl,
      "description": product.description,
      "brand": { "@type": "Brand", "name": product.brand },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": product.price,
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }, [product]);

  return (
    <>
      <Head>
        <title>{product.name} | Best Price for Used Car Parts</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`used car parts, ${product.category}, buy ${product.name}`} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl} />
        <meta property="og:type" content="product" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://yourwebsite.com/product/${product.slug}`} />
      </Head>

      <main className="container mx-auto p-4">
        <Breadcrumbs category={product.category} productName={product.name} />

        <div className="grid md:grid-cols-2 gap-8">
          <Image src={product.imageUrl} alt={product.name} width={600} height={400} priority />

          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-xl font-semibold text-green-600">${product.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">Buy Now</button>
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
      </main>
    </>
  );
}

// **Fetching product data dynamically (SSR)**
export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.example.com/products/${params.slug}`);
  const product = await res.json();

  const relatedRes = await fetch(`https://api.example.com/products?category=${product.category}`);
  const relatedProducts = await relatedRes.json();

  return {
    props: { product, relatedProducts },
  };
}

export  function Breadcrumbs({ category, productName }) {
    return (
      <nav className="text-gray-500 mb-4">
        <Link href="/">Home</Link> &gt; 
        <Link href={`/category/${category}`} className="mx-2">{category}</Link> &gt; 
        <span className="font-semibold">{productName}</span>
      </nav>
    );
  }
 */
