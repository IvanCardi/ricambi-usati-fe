import MainContainer from "../components/mainContainer";
import Cart from "./cart-summary-page";
import { CartProvider } from "./cartContext";

export default function CartPage() {
  return (
    <CartProvider>
      <MainContainer>
        <div className="flex flex-col w-full gap-[90px] pt-14">
          <h1 className="text-[40px] font-inter font-bold">
            Riepilogo del carrello
          </h1>
          <Cart />
        </div>
      </MainContainer>
    </CartProvider>
  );
}
