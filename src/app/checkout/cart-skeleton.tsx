export default function CartSkeleton() {
  return (
    <div className="flex flex-col w-full border rounded-t-[9px] animate-pulse">
      <div className="flex w-full justify-between bg-[#F9F9F9] rounded-t-[9px] py-[18px] px-8">
        <span className="text-base font-inter font-medium">Articoli</span>
        <span className="text-base font-inter font-medium">Totale</span>
      </div>

      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className={`flex justify-between px-7 py-3 gap-16 border-b`}
        >
          <div className="flex w-full justify-between items-center">
            <div className="flex w-[20%] justify-between items-center">
              <div className="h-12 w-12 bg-gray-200 rounded-md" />
            </div>
            <div className="flex w-[60%] justify-between items-center">
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
            <div className="flex w-[20%] justify-center items-center">
              <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
