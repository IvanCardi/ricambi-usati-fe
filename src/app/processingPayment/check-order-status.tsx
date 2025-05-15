"use client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { checkPaymentStatus } from "./actions";
import { useCart } from "../cart/cartContext";

export default function CheckOrderStatus({ orderId }: { orderId: string }) {
  const [status, setStatus] = useState<
    "Pagamento in corso..." | "Pagamento completato" | "Pagamento fallito"
  >("Pagamento in corso...");
  const [isProcessing, setIsProcessing] = useState(true);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { clearCart, setOrderDraftId } = useCart();

  useEffect(() => {
    let isMounted = true;

    async function checkPayment() {
      const result = await checkPaymentStatus(orderId);

      if (!isMounted) return; // Prevent state updates if unmounted

      if (result.status === "error") {
        timeoutRef.current = setTimeout(checkPayment, 2000);
      } else {
        const { status } = result.data;

        if (status === "paid") {
          setIsProcessing(false);
          setStatus("Pagamento completato");
          clearCart();
          setOrderDraftId(undefined);
          timeoutRef.current = setTimeout(() => {
            router.push("/");
          }, 2000);
        } else if (status === "in payment") {
          timeoutRef.current = setTimeout(checkPayment, 2000);
        }
      }
    }

    checkPayment();

    return () => {
      isMounted = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [orderId, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
        {isProcessing ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="animate-spin text-blue-500 w-8 h-8" />
            <p className="text-lg font-medium">{status}</p>
          </div>
        ) : (
          <p
            className={`text-lg font-semibold ${
              status === "Pagamento completato"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
