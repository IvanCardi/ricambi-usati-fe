import MainContainer from "../components/mainContainer";
import PrivateRegistrationForm from "./private-registration-form";

export default function PrivateRegistration() {
  return (
    <MainContainer>
      <div className="h-[80px]"></div>
      <div className="w-fit m-auto flex flex-col gap-[84px]">
        <h1 className="font-bold text-[72px]/[72px] uppercase w-fit">
          Registrazione utente
        </h1>
        <div className="w-[70%] m-auto">
          <PrivateRegistrationForm />
        </div>
      </div>
    </MainContainer>
  );
}
