"use client";
import { useRouter, useSearchParams } from "next/navigation";
import MainContainer from "../components/mainContainer";

export default function CarPartsPaginationBar({
  totalPages,
  currentPage = 1,
}: {
  totalPages: number;
  currentPage?: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const onPageChange = (page: number) => {
    if (page !== currentPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`/shop?${params.toString()}#list`);
    }
  };

  return (
    <MainContainer>
      <div className="w-full flex gap-2 justify-end">
        {pages.map((p) => (
          <p
            className="cursor-pointer"
            onClick={() => {
              onPageChange(p);
            }}
            key={p}
          >
            {p}
          </p>
        ))}
      </div>
    </MainContainer>
  );
}
// export default function PaginationBar({
//   totalPages,
//   currentPage = 1,
// }: {
//   totalPages: number;
//   currentPage: number;
// }) {
//   const [bar, setBar] = useState<"start" | "middle" | "end">("start");
//   function InitialPagesBar() {
//     return (
//       <>
//         {[1, 2, 3].map((num, index) => (
//           <Button
//             key={num}
//             className={`${
//               currentPage === num
//                 ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
//                 : "bg-transparent hover:bg-slate-100"
//             } `}
//             onClick={() => {
//               /*  onSelectPage(pages[index]);
//               window.scrollTo({ behavior: "smooth", top: 0, left: 0 }); */
//             }}
//           >
//             <span
//               className={`text-xl font-inter font-normal ${
//                 currentPage === num ? "text-white" : "text-[#637381]"
//               }`}
//             >
//               {num}
//             </span>
//           </Button>
//         ))}
//         <MoreHorizontal className="text-[#637381]" />
//         <Button
//           key={totalPages}
//           className={`${
//             currentPage === totalPages
//               ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
//               : "bg-transparent hover:bg-slate-100"
//           } `}
//           onClick={() => {
//             /* onSelectPage(pages[pages.length - 1]);
//             setBar("end");
//             window.scrollTo({ behavior: "smooth", top: 0, left: 0 }); */
//           }}
//         >
//           <span
//             className={`text-xl font-inter font-normal ${
//               currentPage === totalPages ? "text-white" : "text-[#637381]"
//             }`}
//           >
//             {totalPages - 1}
//           </span>
//         </Button>
//       </>
//     );
//   }

//   function FinalPagesBar() {
//     return (
//       <>
//         <Button
//           key={1}
//           className={`${
//             currentPage === 1
//               ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
//               : "bg-transparent hover:bg-slate-100"
//           } `}
//           onClick={() => {
//             /*  onSelectPage(pages[0]);
//             setBar("start");
//             window.scrollTo({ behavior: "smooth", top: 0, left: 0 }); */
//           }}
//         >
//           <span
//             className={`text-xl font-inter font-normal ${
//               currentPage.number === 1 ? "text-white" : "text-[#637381]"
//             }`}
//           >
//             1
//           </span>
//         </Button>
//         <MoreHorizontal className="text-[#637381]" />
//         {pages
//           .toReversed()
//           .splice(0, 3)
//           .reverse()
//           .map((page, index) => (
//             <Button
//               key={page.number}
//               className={`${
//                 currentPage.number === page.number
//                   ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
//                   : "bg-transparent hover:bg-slate-100"
//               } `}
//               onClick={() => {
//                 onSelectPage(pages[index]);
//                 window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
//               }}
//             >
//               <span
//                 className={`text-xl font-inter font-normal ${
//                   currentPage.number === page.number
//                     ? "text-white"
//                     : "text-[#637381]"
//                 }`}
//               >
//                 {page.number}
//               </span>
//             </Button>
//           ))}
//       </>
//     );
//   }

//   return (
//     <MainContainer>
//       <div className="flex items-center gap-3 w-full justify-end">
//         <Button
//           className="bg-transparent hover:bg-slate-100 cursor-pointer"
//           onClick={() => {
//             onSelectPage(pages[currentPage.number - 2]);
//             window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
//           }}
//           disabled={currentPage.number === 1}
//         >
//           <ChevronLeft className="text-[#637381]" />
//         </Button>
//         <div className="flex items-end">
//           {pages.length < 5 ? (
//             <>
//               {pages.map((page, i) => (
//                 <Button
//                   key={page.number}
//                   className={`${
//                     currentPage.number === page.number
//                       ? "bg-[#0BB489] hover:bg-[#0BB489]/85"
//                       : "bg-transparent hover:bg-slate-100"
//                   } `}
//                   onClick={() => {
//                     onSelectPage(pages[i]);
//                     window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
//                   }}
//                 >
//                   <span
//                     className={`text-xl font-inter font-normal ${
//                       currentPage.number === page.number
//                         ? "text-white"
//                         : "text-[#637381]"
//                     }`}
//                   >
//                     {page.number}
//                   </span>
//                 </Button>
//               ))}
//             </>
//           ) : (
//             <>
//               {bar === "start" && <InitialPagesBar />}
//               {bar === "end" && <FinalPagesBar />}
//             </>
//           )}
//         </div>
//         <Button
//           className="bg-transparent hover:bg-slate-100 cursor-pointer"
//           onClick={() => {
//             onSelectPage(pages[currentPage.number]);
//             window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
//           }}
//           disabled={currentPage.number === pages.length}
//         >
//           <ChevronRight className="text-[#637381]" />
//         </Button>
//       </div>
//     </MainContainer>
//   );
// }
