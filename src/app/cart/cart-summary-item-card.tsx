import Image from "next/image";
import { CartItem, useCart } from "./cartContext";

export default function ItemCard(item: CartItem) {
  const { addToCart, decrementItem, removeFromCart } = useCart();

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex w-1/2 justify-between items-center gap-4">
        <Image
          className="contain"
          src={item.imageUrl}
          alt="mechanical article"
          height={48}
          width={48}
        />
        <span className="text-base font-inter font-medium">{item.name}</span>
      </div>
      <div className="flex w-[15%] justify-center items-center h-fit px-2 border border-black rounded-sm gap-4">
        <button
          className="flex items-center"
          onClick={() => {
            addToCart(item);
          }}
        >
          <span className="text-sm font-inter font-medium">+</span>
        </button>
        <span className="text-base font-inter font-medium">
          {item.quantity}
        </span>
        <button
          className="flex items-center"
          onClick={() => decrementItem(item.id)}
          disabled={item.quantity === 1}
        >
          <span className="text-sm font-inter font-medium">-</span>
        </button>
      </div>
      <div className="flex w-[20%] justify-center items-center">
        <span className="text-base font-inter font-semibold">
          {Math.round(item.price * item.quantity * 100) / 100}€
        </span>
      </div>
      <Image
        className="contain cursor-pointer"
        src={"/circle-x.svg"}
        alt="close icon"
        height={24}
        width={24}
        onClick={() => removeFromCart(item.id)}
      />
    </div>
  );
}
