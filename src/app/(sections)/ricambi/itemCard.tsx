import Image from "next/image";

export interface Item {
  name: string;
  image: string;
}

export default function ItemCard(item: Item) {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <Image src={item.image} alt="mechanical item" />
      <span className="text-sm text-black font-inter font-medium">
        {item.name}
      </span>
    </div>
  );
}
