import { Textarea } from "@/components/ui/textarea";

export default function PrivacyForm({
  onTermsAccepted,
}: {
  onTermsAccepted: (val: boolean) => void;
}) {
  const terms: string = `INFORMATIVA AI SENSI DEL CODICE IN MATERIA DI PROTEZIONE DEI DATI PERSONALI 
  (Decreto Legislativo n. 196 del 30 giugno 2003) 
  Il Decreto Legislativo n. 196 del 30 giugno 2003 ha la finalità di garantire che il trattamento dei tuoi dati personali si svolga nel rispetto dei diritti, delle libertà fondamentali e della dignità delle persone, con particolare riferimento `;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          className="border border-black w-6 h-6"
          onChange={(e) => onTermsAccepted(e.target.checked)}
        />
        <span className="text-3xl text-[#9CA3AF] font-inter font-normal">
          Privacy*
        </span>
      </div>
      <Textarea
        className="border border-black text-xl font-inter font-medium"
        value={terms}
        readOnly
      ></Textarea>
    </div>
  );
}
