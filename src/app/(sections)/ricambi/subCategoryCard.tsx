"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export interface SubCategory {
  name: string;
  image: string;
  slug: string;
}

export default function SubCategoryCard({
  subCategory,
  categorySlug,
}: {
  subCategory: SubCategory;
  categorySlug: string;
}) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col md:h-52 justify-center items-center bg-white rounded-[6px] cursor-pointer hover:scale-105"
      onClick={() =>
        router.push(`/shop?category=${categorySlug}/${subCategory.slug}`)
      }
    >
      <Image
        className="object-contain"
        src={subCategory.image}
        alt="mechanical item"
        width={168}
        height={170}
      />
      <span className="text-sm text-black text-center font-inter font-medium">
        {subCategory.name}
      </span>
    </div>
  );
}
