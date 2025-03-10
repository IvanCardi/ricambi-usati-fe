import Image from "next/image";

export interface Item {
  name: string;
  image: string;
}

export default function ItemCard(item: Item) {
  return (
    <div className="flex flex-col h-52 justify-center items-center bg-white rounded-[6px] cursor-pointer hover:scale-105">
      <div>
        <Image
          src={item.image}
          alt="mechanical item"
          width={168}
          height={170}
        />
      </div>
      <span className="text-sm text-black font-inter font-medium">
        {item.name}
      </span>
    </div>
  );
}
