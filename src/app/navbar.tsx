"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import searchIcon from "../../public/search_nav_icon.svg";
import profile from "../../public/profile_icon.svg";
import cart from "../../public/cart_icon.svg";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Contatti", href: "/" },
  ];

  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className={`${
        pathname.includes("/shop") ||
        pathname.includes("/form") ||
        pathname.includes("/login") ||
        pathname.includes("/registrazione")
          ? "bg-white"
          : "bg-black"
      }`}
    >
      <div className="flex w-full justify-between items-center md:items-start px-4 pt-4">
        <Link href="/">
          <Image
            src={logo}
            objectFit="contain"
            alt="ricambi usati logo"
            className="w-2/3 md:w-full"
          />
        </Link>
        <div className="hidden md:flex justify-between items-start gap-7">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="text-2xl font-poppins font-light text text-[#0BB489]">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex justify-between gap-5">
          <Image src={searchIcon} objectFit="contain" alt="search icon" />
          <Link href="/profilo">
            <Image src={profile} objectFit="contain" alt="profile icon" />
          </Link>
          <Image src={cart} objectFit="contain" alt="cart icon" />
        </div>
        <div className="flex items-center md:hidden p-1 sticky top-0">
          {/* Mobile menu button*/}
          <DisclosureButton className="flex items-center justify-center rounded-md p-2 hover:bg-[#353535]">
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#0BB489"
              className="block size-6 group-data-open:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="hidden size-6 group-data-open:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </DisclosureButton>
        </div>
      </div>
      <DisclosurePanel className="flex justify-end md:hidden">
        <div className="flex flex-col justify-between items-end px-5 gap-3 bg-[#353535]">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="text-l font-poppins font-light text text-[#0BB489] hover:bg"
            >
              {item.name}
            </DisclosureButton>
          ))}
          <DisclosureButton
            key="Carrello"
            as="a"
            href=""
            className="text-l font-poppins font-light text text-[#0BB489]"
          >
            Carrello
          </DisclosureButton>
          <DisclosureButton
            key="Profile"
            as="a"
            href="/profilo"
            className="text-l font-poppins font-light text text-[#0BB489]"
          >
            Profile
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
