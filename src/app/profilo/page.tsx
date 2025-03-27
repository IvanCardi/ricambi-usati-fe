"use client";
import { useRouter } from "next/navigation";
import Button from "../components/button";
import MainContainer from "../components/mainContainer";
import { logout } from "./actions";

export default function Profilo() {
  const router = useRouter();

  const onClick = () => {
    logout();

    router.push("/");
  };
  return (
    <MainContainer>
      <div className="h-10"></div>
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
