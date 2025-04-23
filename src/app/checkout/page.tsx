import { CartProvider } from "../cart/cartContext";
import CheckOutPage from "./checkout-body";

export default function Main() {
  return (
    <CartProvider>
      <div className="w-full bg-gradient-to-b from-white from-[70%] to-[#939292]">
        <CheckOutPage />
        <div className="h-52" />
      </div>
    </CartProvider>
  );
}
