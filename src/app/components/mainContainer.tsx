"use client";

import { ReactNode } from "react";

export default function MainContainer(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`md:mx-[auto] lg:mx-[auto] sm:px-[24px] sm:w-full md:max-w-[740px] lg:max-w-[1300px] md:px-[0px] ${props.className}`}
    >
      {props.children}
    </div>
  );
}
