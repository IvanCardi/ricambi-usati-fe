import Image from "next/image";

export interface Item {
  name: string;
  image: string;
}

export default function ItemCard(item: Item) {
  return (
    <div className="flex flex-col md:h-52 justify-center items-center bg-white rounded-[6px] cursor-pointer hover:scale-105">
      <Image
        className="object-contain"
        src={item.image}
        alt="mechanical item"
        width={168}
        height={170}
      />
      <span className="text-sm text-black text-center font-inter font-medium">
        {item.name}
      </span>
    </div>
  );
}
