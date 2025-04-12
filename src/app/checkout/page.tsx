import { CartProvider } from "../cart/cartContext";
import MainContainer from "../components/mainContainer";
import DeliveryForm from "./delivery-form";
import PurchaseSummary from "./purchase-summary";

async function getProvinceList() {
  try {
    const result = await fetch(
      "https://axqvoqvbfjpaamphztgd.functions.supabase.co/province"
    );

    if (result.status !== 200) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    return result.json();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}

export type Provincia = {
  codice: number;
  nome: string;
  sigla: string;
  regione: string;
};

export default async function CheckOutPage() {
  const provinceList: Provincia[] = await getProvinceList();

  return (
    <CartProvider>
      <MainContainer>
        <div className="flex flex-col md:flex-row w-full gap-14">
          <div className="flex flex-col md:w-[60%] gap-12">
            <h1 className="text-[40px] font-inter font-bold"> Checkout</h1>
            <div className="flex flex-col gap-8">
              <div className="text-2xl font-inter font-semibold">
                Informazioni di spedizione
              </div>
              <DeliveryForm provinceList={provinceList} />
            </div>
          </div>
          <div className="flex flex-col md:w-[40%] gap-8">
            <div className="text-2xl font-inter font-semibold">
              Riepilogo acquisti
            </div>
            <PurchaseSummary />
          </div>
        </div>
      </MainContainer>
    </CartProvider>
  );
}
