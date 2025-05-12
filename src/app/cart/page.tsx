import MainContainer from "../components/mainContainer";
import CartSummary from "./cart-summary-page";

export default function CartPage() {
  return (
    <>
      <MainContainer>
        <div className="flex flex-col w-full gap-[90px] py-14">
          <h1 className="text-[40px] font-inter font-bold">
            Riepilogo del carrello
          </h1>
          <CartSummary />
        </div>
      </MainContainer>
      <div className="w-full h-[500px] bg-gradient-to-b from-white from-[30%] to-[#939292]" />
    </>
  );
}
