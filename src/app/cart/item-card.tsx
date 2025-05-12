import Image from "next/image";
import noImagePlaceholder from "../../../public/no-image-placeholder.jpg";
import { CartItem, useCart } from "./cartContext";
import Device from "../components/device";
import MobileItemCard from "./mobile-item-card";

export default function ItemCard(item: CartItem) {
  const { removeFromCart } = useCart();

  return (
    <Device>
      {({ isMobile }) =>
        isMobile ? (
          <MobileItemCard {...item} />
        ) : (
          <div className="flex w-full min-h-16 justify-between items-center">
            <div className="flex w-[75%] items-center gap-8">
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
                  className="w-full object-cover"
                  src={noImagePlaceholder.src}
                  alt={`No image placeholder`}
                  height={48}
                  width={48}
                />
              )}
              <div className="flex w-full justify-center items-center">
                <span className="text-base text-center font-inter font-medium">
                  {item.name}
                </span>
              </div>
            </div>
            <div className="flex w-[20%] justify-center items-center">
              <span className="text-base font-inter font-semibold">
                {(item.price * item.quantity).toFixed(2)}€
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
        )
      }
    </Device>
  );
}
