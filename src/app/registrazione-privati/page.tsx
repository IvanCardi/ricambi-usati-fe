import Link from "next/link";
import Button from "../components/button";
import MainContainer from "../components/mainContainer";
import PrivateRegistrationForm from "./private-registration-form";

export default function PrivateRegistration() {
  return (
    <div>
      <MainContainer>
        <div className="h-[80px]"></div>
        <div className="w-fit m-auto flex flex-col gap-[84px] items-center">
          <h1 className="font-bold text-[72px]/[72px] uppercase w-fit">
            Registrazione utente
          </h1>
          <div className="w-[70%] m-auto">
            <PrivateRegistrationForm />
          </div>
          <Link href="/registrazione-aziende" className="w-[45%]">
            <Button
              type="button"
              className="text-[#444444] font-bold text-[24px]/[24px] uppercase py-[14px] bg-white border-secondary-blue border-2"
            >
              Hai una azienda? Registrati qui
            </Button>
          </Link>
        </div>
      </MainContainer>
      <div className="h-[250px] w-full bg-gradient-to-b from-white to-[#939292] mt-10">
        <div className="h-[80px]"></div>
        <p className="text-[28px]/[28px] text-[#9CA3AF] m-auto w-fit">
          Hai già un account?
          <Link href="/login" className="underline ">
            Accedi
          </Link>
        </p>
      </div>
    </div>
  );
}
