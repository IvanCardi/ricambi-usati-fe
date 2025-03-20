import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Page } from "./pagination";
import { useState } from "react";

export default function PaginationBar({
  pages,
  onSelectPage,
  currentPage,
}: {
  pages: Page[];
  onSelectPage: (page: Page) => void;
  currentPage: Page;
}) {
  const [bar, setBar] = useState<"start" | "middle" | "end">("start");
  function InitialPagesBar() {
    return (
      <>
        {[1, 2, 3].map((num, index) => (
          <Button
            key={num}
            className={`${
              currentPage.number === num
                ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
                : "bg-transparent hover:bg-slate-100"
            } `}
            onClick={() => {
              onSelectPage(pages[index]);
              window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
            }}
          >
            <span
              className={`text-xl font-inter font-normal ${
                currentPage.number === num ? "text-white" : "text-[#637381]"
              }`}
            >
              {num}
            </span>
          </Button>
        ))}
        <MoreHorizontal className="text-[#637381]" />
        <Button
          key={pages.length - 1}
          className={`${
            currentPage.number === pages.length
              ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
              : "bg-transparent hover:bg-slate-100"
          } `}
          onClick={() => {
            onSelectPage(pages[pages.length - 1]);
            setBar("end");
            window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
          }}
        >
          <span
            className={`text-xl font-inter font-normal ${
              currentPage.number === pages.length
                ? "text-white"
                : "text-[#637381]"
            }`}
          >
            {pages[pages.length - 1].number}
          </span>
        </Button>
      </>
    );
  }

  function FinalPagesBar() {
    return (
      <>
        <Button
          key={1}
          className={`${
            currentPage.number === 1
              ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
              : "bg-transparent hover:bg-slate-100"
          } `}
          onClick={() => {
            onSelectPage(pages[0]);
            setBar("start");
            window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
          }}
        >
          <span
            className={`text-xl font-inter font-normal ${
              currentPage.number === 1 ? "text-white" : "text-[#637381]"
            }`}
          >
            1
          </span>
        </Button>
        <MoreHorizontal className="text-[#637381]" />
        {pages
          .toReversed()
          .splice(0, 3)
          .reverse()
          .map((page, index) => (
            <Button
              key={page.number}
              className={`${
                currentPage.number === page.number
                  ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
                  : "bg-transparent hover:bg-slate-100"
              } `}
              onClick={() => {
                onSelectPage(pages[index]);
                window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
              }}
            >
              <span
                className={`text-xl font-inter font-normal ${
                  currentPage.number === page.number
                    ? "text-white"
                    : "text-[#637381]"
                }`}
              >
                {page.number}
              </span>
            </Button>
          ))}
      </>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Button
        className="bg-transparent hover:bg-slate-100 cursor-pointer"
        onClick={() => {
          onSelectPage(pages[currentPage.number - 2]);
          window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
        }}
        disabled={currentPage.number === 1}
      >
        <ChevronLeft className="text-[#637381]" />
      </Button>
      <div className="flex items-end">
        {pages.length < 5 ? (
          <>
            {pages.map((page, i) => (
              <Button
                key={page.number}
                className={`${
                  currentPage.number === page.number
                    ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
                    : "bg-transparent hover:bg-slate-100"
                } `}
                onClick={() => {
                  onSelectPage(pages[i]);
                  window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
                }}
              >
                <span
                  className={`text-xl font-inter font-normal ${
                    currentPage.number === page.number
                      ? "text-white"
                      : "text-[#637381]"
                  }`}
                >
                  {page.number}
                </span>
              </Button>
            ))}
          </>
        ) : (
          <>
            {bar === "start" && <InitialPagesBar />}
            {bar === "end" && <FinalPagesBar />}
          </>
        )}
      </div>
      <Button
        className="bg-transparent hover:bg-slate-100 cursor-pointer"
        onClick={() => {
          onSelectPage(pages[currentPage.number]);
          window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
        }}
        disabled={currentPage.number === pages.length}
      >
        <ChevronRight className="text-[#637381]" />
      </Button>
    </div>
  );
}
