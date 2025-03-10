import Image from "next/image";
import ItemCard, { Item } from "./itemCard";

export interface Category {
  title: string;
  image: string;
  items: Item[];
}

export default function CategoryCard({ title, image, items }: Category) {
  return (
    <div className="flex flex-col w-full gap-20">
      <div className="flex flex-col gap-10">
        <span className="text-5xl text-[#0BB489] font-poppins font-medium ">
          {title}
        </span>
        <div className="flex w-full gap-16">
          <div>
            <Image src={image} alt="mechanical item" width={416} height={416} />
          </div>
          <div
            className={`${
              items.length > 4
                ? "grid grid-cols-4 gap-6"
                : "flex items-center gap-6"
            }`}
          >
            {items.map((item) => (
              <ItemCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <span className="text-base text-black font-inter font-medium italic underline cursor-pointer">
          Vedi tutto {">"}
        </span>
      </div>
    </div>
  );
}
