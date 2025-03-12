import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import searchIcon from "../../public/search_nav_icon.svg";
import profile from "../../public/profile_icon.svg";
import cart from "../../public/cart_icon.svg";

export default function Navbar() {
  return (
    <div className="hidden w-full md:inline-flex bg-black px-5">
      <div className="flex w-full justify-between items-start pt-4">
        <Link href={"/"}>
          <Image src={logo} objectFit="contain" alt="ricambi usati logo" />
        </Link>
        <div className="flex justify-between items-start gap-7">
          <Link href={"/"}>
            <span className="text-2xl font-poppins font-light text text-[#0BB489]">
              Home
            </span>
          </Link>
          <Link href={"/"}>
            <span className="text-2xl font-poppins font-light text text-[#0BB489]">
              Shop
            </span>
          </Link>
          <Link href={"/"}>
            <span className="text-2xl font-poppins font-light text text-[#0BB489]">
              Contatti
            </span>
          </Link>
        </div>
        <div className="flex justify-between gap-5">
          <Image src={searchIcon} objectFit="contain" alt="search icon" />
          <Image src={profile} objectFit="contain" alt="profile icon" />
          <Image src={cart} objectFit="contain" alt="cart icon" />
        </div>
      </div>
    </div>
  );
}
