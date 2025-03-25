export interface Veicolo {
  name: string;
  image: string;
  details: {
    riferimento?: string;
    vin?: number;
    codiceMotore?: number;
    km?: number;
  };
  osservazioni?: string;
  technicalInfos: {
    trazione?: string;
    carburante?: string;
    potenza?: string;
    cilindri?: number;
    spostamento?: number;
    valvole?: number;
    carrozzeria?: string;
    motore?: string;
    freno?: string;
    catalizzatore?: string;
    sistemaFrenata?: string;
    trasmissione?: string;
  };
}

export function InfoVeicolo(car: Veicolo) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <h2 className="text-lg md:text-2xl text-[#0BB489] font-poppins font-normal">
          Dettagli veicolo
        </h2>
        <span className="text-sm md:text-base font-poppins font-light">
          {car.name}
        </span>
        <div className="flex flex-col md:grid md:grid-cols-2 w-full gap-8">
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Riferimento
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.details?.riferimento ? car.details.riferimento : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              VIN
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.details?.vin ? car.details.vin : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Codice Motore
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.details?.codiceMotore ? car.details.codiceMotore : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Chilometraggio
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.details?.km ? car.details.km : "-"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-2xl text-[#0BB489] font-poppins font-normal">
          Osservazioni
        </h2>
        <p className="text-sm md:text-base font-poppins font-light">
          {car.osservazioni
            ? car.osservazioni
            : "Questo prodotto non ha osservazioni aggiuntive"}
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-lg md:text-2xl text-[#0BB489] font-poppins font-normal">
          Informazioni tecniche
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 w-full gap-8">
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Trazione
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.trazione
                ? `Trazione ${car.technicalInfos.trazione}`
                : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Tipo di carrozzeria
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.carrozzeria
                ? car.technicalInfos.carrozzeria
                : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Tipo di carburannte
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.carburante
                ? car.technicalInfos.carburante
                : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Tipo di motore
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.motore ? car.technicalInfos.motore : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Potenza
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.potenza ? car.technicalInfos.potenza : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Tipo di freno
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.freno ? car.technicalInfos.freno : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              No. di cilindri
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.cilindri ? car.technicalInfos.cilindri : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Tipo di catalizzatore
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.catalizzatore
                ? car.technicalInfos.catalizzatore
                : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Spostamento
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.spostamento
                ? car.technicalInfos.spostamento
                : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Sistema di frenata
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.sistemaFrenata
                ? car.technicalInfos.sistemaFrenata
                : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              No. di valvola
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.valvole ? car.technicalInfos.valvole : "-"}
            </span>
          </div>
          <div>
            <h5 className="text-sm md:text-base font-poppins font-medium">
              Trasmissione
            </h5>
            <span className="text-sm md:text-base font-poppins font-light">
              {car.technicalInfos?.trasmissione
                ? car.technicalInfos.trasmissione
                : "-"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
