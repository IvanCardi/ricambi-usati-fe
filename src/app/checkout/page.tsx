import { CartProvider } from "../cart/cartContext";
import MainContainer from "../components/mainContainer";
import DeliveryForm from "./delivery-form";

export default function CheckOutPage() {
  return (
    <CartProvider>
      <MainContainer>
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-[60%]">
            <DeliveryForm />
          </div>
        </div>
      </MainContainer>
    </CartProvider>
  );
}
