"use client";
import { useRouter } from "next/navigation";
import Button from "../components/button";
import MainContainer from "../components/mainContainer";
import { logout } from "./actions";
import { useCart } from "../cart/cartContext";

export default function Profilo() {
  const router = useRouter();
  const { clearCart } = useCart();

  const onClick = () => {
    logout();
    clearCart();

    router.push("/");
  };

  return (
    <MainContainer>
      <Button
        className="bg-primary-green uppercase w-[150px] py-[10px] px-[10px] text-white font-semibold"
        type="button"
        onClick={onClick}
      >
        Logout
      </Button>
      <div className="h-10"></div>
    </MainContainer>
  );
}
