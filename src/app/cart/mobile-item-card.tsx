import Image from "next/image";
import { CartItem, useCart } from "./cartContext";

export default function MobileItemCard(item: CartItem) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex w-full min-h-16 justify-between items-center">
      <Image
        className="object-cover"
        src={item.imageUrl}
        alt="mechanical article"
        height={32}
        width={32}
      />
      <div className="flex w-full justify-center items-center px-2">
        <span className="text-base text-center font-inter font-medium">
          {item.name}
        </span>
      </div>
      <div className="flex flex-col gap-5 justify-between items-center">
        <Image
          className="contain cursor-pointer"
          src={"/circle-x.svg"}
          alt="close icon"
          height={24}
          width={24}
          onClick={() => removeFromCart(item.id)}
        />
        <div className="flex justify-center items-center">
          <span className="text-base font-inter font-semibold">
            {(item.price * item.quantity).toFixed(2)}€
          </span>
        </div>
      </div>
    </div>
  );
}
