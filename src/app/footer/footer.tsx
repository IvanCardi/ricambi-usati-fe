import Link from "next/link";
import MainContainer from "../components/mainContainer";
import Image from "next/image";
import SiteMap from "./siteMap";
import logo from "../../../public/logo.svg";

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-[#939292] via-[#353535] to-black pt-24">
      <MainContainer>
        <div className="flex flex-col w-full gap-24">
          <SiteMap />
          <div className="flex w-full justify-between">
            <Link href={"/"}>
              <Image src={logo} objectFit="contain" alt="ricambi usati logo" />
            </Link>
            <span className="w-1/3 text-base text-center text-white font-inter font-extralight ">
              © 2025 Ricambiusati.it All Rights reserved.<br></br> P.IVA:
              IT01020320386 Uff. del Reg. delle Imprese di Milano N. REA:
              Mi-2071045 - R.A.E.E. IT19110P00005805 - Registro Pile e
              Accumulatori IT20070000012272
            </span>
            <div className="grid grid-cols-4 gap-5 p-3">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-white h-8 w-10"></div>
              ))}
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
