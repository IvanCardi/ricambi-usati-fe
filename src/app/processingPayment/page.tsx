import { PageProps } from "@/lib/pageProps";
import CheckOrderStatus from "./check-order-status";

export default async function ProcessingPaymentPage(props: PageProps) {
  const orderId = (await props.searchParams).orderId as string;

  return <CheckOrderStatus orderId={orderId} />;
}
