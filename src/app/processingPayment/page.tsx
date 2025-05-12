"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { checkPaymentStatus } from "../checkout/actions";

export default function ProcessingPaymentPage() {
  const [status, setStatus] = useState<
    "Pagamento in corso..." | "Pagamento completato" | "Pagamento fallito"
  >("Pagamento in corso...");
  const [isProcessing, setIsProcessing] = useState(true);
  const router = useRouter();

  const orderId = sessionStorage.getItem("orderId");

  if (!orderId) {
    setIsProcessing(false);
    setStatus("Pagamento fallito");
    console.warn("Order ID not found in session storage.");
  }

  async function checkPayment() {
    const paymentStatus = await checkPaymentStatus(orderId!);

    if (paymentStatus === "paid") {
      setIsProcessing(false);
      setStatus("Pagamento completato");
    }
    if (paymentStatus === "pending" || paymentStatus === "open") {
      setTimeout(async () => {
        await checkPayment();
      }, 2000);
    }
    if (paymentStatus === "failed" || paymentStatus === "expired") {
    }
  }

  useEffect(() => {
    setTimeout(async () => {
      await checkPayment();
    }, 1);
  }, []);

  useEffect(() => {
    if (status === "Pagamento completato") {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [status]);

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
