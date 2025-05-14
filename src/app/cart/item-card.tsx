import Image from "next/image";
import noImagePlaceholder from "../../../public/no-image-placeholder.jpg";
import { useCart } from "./cartContext";
import { CarPart } from "../shop/page";

export default function ItemCard(item: CarPart & { disabled: boolean }) {
  const { removeFromCart } = useCart();

  return (
    <div
      className={`px-2 md:px-7 py-3 flex w-full min-h-16 justify-between items-center ${
        item.disabled && "bg-gray-50 border border-red-500"
      }`}
    >
      <div className="flex w-1/2 items-center gap-5">
        {item.imageUrl ? (
          <Image
            className="object-cover"
            src={item.imageUrl}
            alt="mechanical article"
            height={48}
            width={48}
          />
        ) : (
          <Image
            className="object-cover"
            src={noImagePlaceholder.src}
            alt={`No image placeholder`}
            height={48}
            width={48}
          />
        )}
        <div className="flex w-full items-center">
          <span className="text-base font-inter font-medium">{item.name}</span>
        </div>
      </div>
      <div className="hidden md:flex w-fit justify-between items-center gap-10">
        <span className="text-base font-inter font-semibold">
          {item.price.toFixed(2)}€
        </span>
        <Image
          className="contain cursor-pointer"
          src={"/circle-x.svg"}
          alt="close icon"
          height={24}
          width={24}
          onClick={() => removeFromCart(item.id)}
        />
      </div>
      <div className="md:hidden flex flex-col-reverse justify-between items-center">
        <span className="text-base font-inter font-semibold">
          {item.price.toFixed(2)}€
        </span>
        <div className="min-h-6" />
        <Image
          className="contain cursor-pointer"
          src={"/circle-x.svg"}
          alt="close icon"
          height={24}
          width={24}
          onClick={() => removeFromCart(item.id)}
        />
      </div>
    </div>
  );
}
