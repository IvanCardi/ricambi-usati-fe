/* import Link from 'next/link';
import Image from 'next/image';

export default function RelatedProducts({ products }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <Image src={product.imageUrl} alt={product.name} width={200} height={150} className="rounded-md" />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold">${product.price}</p>
            <Link href={`/product/${product.slug}`} className="text-blue-600 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
 */
