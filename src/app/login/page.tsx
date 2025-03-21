import Button from "../components/button";
import MainContainer from "../components/mainContainer";
import LoginForm from "./login-form";
import GoogleIcon from "../../../public/google.png";
import Image from "next/image";
import Link from "next/link";

export default async function Login() {
  return (
    <div className="flex flex-col">
      <div className="sm:h-[80px] md:h-[160px]"></div>
      <MainContainer>
        <div className="lg:w-[50%] m-auto flex flex-col items-center">
          <h1 className="font-bold md:text-[80px]/[80px] sm:text-[64px]/[64px] w-full">
            LOGIN
          </h1>
          <div className="md:h-[70px] sm:h-10"></div>
          <LoginForm></LoginForm>
          <div className="h-[97px]"></div>
          <Button
            type="button"
            className="text-[#444444] font-bold text-[24px]/[24px] md:w-[60%] uppercase bg-white border-[#616161] border"
          >
            Registrati
          </Button>
          <div className="h-[66px]"></div>
          <Button
            type="button"
            className="text-[#444444] font-medium text-[24px]/[24px] md:w-[60%] bg-white border-[#616161] border"
          >
            <div className="w-full flex gap-7 items-center">
              <Image className="w-8" src={GoogleIcon} alt="Google Icon"></Image>
              <p>Sign in with Google</p>
            </div>
          </Button>
        </div>
        <div className="h-[20px]"></div>
      </MainContainer>
      <div className="md:h-[200px] sm:h-[80px] bg-gradient-to-b from-white to-[#939292] flex flex-col items-center">
        <div className="h-[40px]"></div>
        <Link href="/" className="underline text-[28px]/[28px] text-[#9CA3AF]">
          Hai dimenticato la password?
        </Link>
      </div>
    </div>
  );
}
