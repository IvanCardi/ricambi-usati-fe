import { PageProps } from "@/lib/pageProps";
import CheckOutPage from "./checkout-body";
import { getOrderDraft } from "@/lib/http/getOrderDraft";

export default async function Main(props: PageProps) {
  const orderId = (await props.searchParams).orderId as string;

  const orderDraft = await getOrderDraft(orderId);

  return (
    <div className="w-full bg-gradient-to-b from-white from-[70%] to-[#939292]">
      <CheckOutPage orderDraft={orderDraft} />
      <div className="h-52" />
    </div>
  );
}
