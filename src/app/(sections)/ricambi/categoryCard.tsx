import Image from "next/image";
import ItemCard, { Item } from "./itemCard";

export default function CategoryCard({
  title,
  image,
  items,
}: {
  title: string;
  image: string;
  items: Item[];
}) {
  return (
    <div className="flex flex-col w-full">
      <span className="text-5xl text-[#0BB489] font-poppins font-medium ">
        {title}
      </span>
      <div className="flex w-full">
        <Image src={image} alt="mechanical item" />
        {items.map((item) => (
          <ItemCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
