"use client";

import { useRouter } from "next/navigation";

export default function FormCTA({
  background = false,
}: {
  background?: boolean;
}) {
  const router = useRouter();

  return (
    <div
      className={`${
        background &&
        "bg-gradient-to-b from-white from-[60%] to-[#939292] p-24 pb-80 "
      } flex w-full justify-center items-center px-6`}
    >
      <div className="flex items-center bg-[#0BB489] p-10">
        <span className="text-3xl/[60px] text-center text-white font-inter font-normal">
          Non trovi quello che stai cercando? <br></br> Compila il{" "}
          <span
            className="text-3xl text-white font-inter font-semibold cursor-pointer underline"
            onClick={() => router.push("/form")}
          >
            form
          </span>{" "}
          e invieremo la tua richiesta ai nostri demolitori affiliati <br></br>{" "}
          <span className="text-3xl text-white font-inter font-bold">
            GRATIS E SENZA IMPEGNO
          </span>
        </span>
      </div>
    </div>
  );
}
