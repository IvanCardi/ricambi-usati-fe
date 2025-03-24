import MainContainer from "../components/mainContainer";
import CompanyRegistrationForm from "./company-registration-form";

export default function PrivateRegistration() {
  return (
    <div>
      <MainContainer>
        <div className="h-[80px]"></div>
        <div className="m-auto flex flex-col gap-[32px] items-center">
          <h1 className="w-fit m-auto font-bold text-[72px]/[72px] uppercase">
            Registrazione azienda
          </h1>
          <CompanyRegistrationForm />
        </div>
      </MainContainer>
      <div className="h-[200px] w-full bg-gradient-to-b from-white to-[#939292] mt-10"></div>
    </div>
  );
}
