import Link from "next/link";
import Image from "next/image";
import SiteMap from "./siteMap";
import logo from "../../../public/logo.svg";
import acceptedPayments from "../../../public/card_payment_logos.png";

export default function Footer() {
  return (
    <div className="flex w-full bg-gradient-to-b from-[#939292] via-[#353535] to-black pt-24 px-5">
      <div className="flex flex-col w-full gap-24">
        <SiteMap />
        <div className="flex w-full justify-between">
          <Link href={"/"}>
            <Image
              className="hidden md:flex"
              src={logo}
              objectFit="contain"
              alt="ricambi usati logo"
            />
          </Link>
          <span className="w-full md:w-1/3 text-base text-center text-white font-inter font-extralight ">
            © 2025 Ricambiusati.it All Rights reserved.<br></br> P.IVA:
            IT01020320386 Uff. del Reg. delle Imprese di Milano N. REA:
            Mi-2071045 - R.A.E.E. IT19110P00005805 - Registro Pile e
            Accumulatori IT20070000012272
          </span>
          <div className="hidden md:flex items-center w-1/6">
            <Image
              src={acceptedPayments}
              className="object-contain"
              alt="accepted payments card list"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
