export interface Veicolo {
  name: string;
  image: string;
  technicalDetails: { label: string; value: string }[];
}

function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function InfoVeicolo(car: Veicolo) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <h2 className="text-lg md:text-2xl text-[#0BB489] font-poppins font-normal">
          Veicolo di provenienza
        </h2>
        <span className="text-sm md:text-base font-poppins font-light">
          {car.name}
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-lg md:text-2xl text-[#0BB489] font-poppins font-normal">
          Informazioni tecniche
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 w-full gap-8">
          {car.technicalDetails.map((info) => (
            <div key={capitalizeFirstLetter(info.label)}>
              <h5 className="text-sm md:text-base font-poppins font-medium">
                {info.label}
              </h5>
              <span className="text-sm md:text-base font-poppins font-light">
                {info.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
