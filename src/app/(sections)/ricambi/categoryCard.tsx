import Image from "next/image";
import ItemCard, { Item } from "./itemCard";

export interface Category {
  title: string;
  image: string;
  items: Item[];
}

export default function CategoryCard({ title, image, items }: Category) {
  return (
    <div className="flex flex-col w-full gap-20 p-2 md:p-0">
      <div className="flex flex-col items-center md:items-start gap-10">
        <span className="text-5xl text-[#0BB489] font-poppins font-medium ">
          {title}
        </span>
        <div className="flex w-full gap-16 justify-center md:justify-start ">
          <div className="hidden md:block sm:w-[30%]">
            <Image
              className="object-contain"
              src={image}
              alt="mechanical item"
              width={416}
              height={416}
            />
          </div>
          <div
            className={`grid grid-cols-2 ${
              items.length >= 4
                ? "md:grid-cols-3 lg:grid-cols-4 gap-6"
                : "md:flex items-center gap-6"
            }`}
          >
            {items.map((item) => (
              <ItemCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end cursor-pointer">
        <span className="text-base text-black font-inter font-medium italic underline ">
          Vedi tutto {">"}
        </span>
      </div>
    </div>
  );
}
