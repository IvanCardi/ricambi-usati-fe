import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormSchema } from "./formPage";

export default function PrivacyForm({
  form,
}: {
  form: UseFormReturn<FormSchema>;
}) {
  return (
    <div className="flex flex-col gap-5">
      <FormField
        control={form.control}
        name="privacy"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <div className="flex gap-5 items-center">
                <input
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="size-5 rounded-lg border-gray-400 cursor-pointer"
                  type="checkbox"
                />
                <p className="font-normal text-[#9CA3AF] text-[28px]/[28px]">
                  Privacy*
                </p>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="h-52 border border-black text-xl font-inter font-medium rounded-none overflow-y-scroll resize-y p-5">
        <strong>
          INFORMATIVA AI SENSI DEL CODICE IN MATERIA DI PROTEZIONE DEI DATI
          PERSONALI
        </strong>
        <br />
        (Decreto Legislativo n. 196 del 30 giugno 2003)
        <br />
        <br />
        Il Decreto Legislativo n. 196 del 30 giugno 2003 ha la finalità di
        garantire che il trattamento dei tuoi dati personali si svolga nel
        rispetto dei diritti, delle libertà fondamentali e della dignità delle
        persone, con particolare riferimento alla riservatezza e all’identità
        personale.
        <br />
        Ti informiamo, ai sensi dell’art. 13 del Codice, che i dati personali da
        te forniti ovvero altrimenti acquisiti nell’ambito dell’attività da noi
        svolta, potranno formare oggetto di trattamento, per le finalità
        connesse all’esercizio della nostra attività. Per trattamento di dati
        personali si intende la loro raccolta, registrazione, organizzazione,
        conservazione, elaborazione, modificazione, selezione, estrazione,
        raffronto, utilizzo, diffusione, cancellazione, distribuzione,
        interconnessione e quant’altro sia utile per l’esecuzione del Servizio,
        compresa la combinazione di due o più di tali operazioni.
        <br />
        Il trattamento dei tuoi dati per le finalità sopraindicate avrà luogo
        prevalentemente con modalità automatizzate e informatiche, sempre nel
        rispetto delle regole di riservatezza e di sicurezza previste dalla
        legge, e con procedure idonee alla tutela delle stesse.
        <br />
        Il titolare del trattamento dei dati personali è Danieli Gomme S.n.c.,
        con sede legale in Comacchio - FE via Romea Vecchia, 41, nella persona
        del legale rappresentante (di seguito: “Ricambiusati”); responsabili del
        trattamento sono i dipendenti e/o professionisti incaricati da
        Ricambiusati, i quali svolgono le suddette attività sotto la sua diretta
        supervisione e responsabilità.
        <br />
        Il conferimento dei dati personali da parte tua è assolutamente
        facoltativo; tuttavia l’eventuale rifiuto ad inserirli nella pagina
        dedicata alla registrazione rende impossibile l’esecuzione a tuo favore
        dei nostri servizi, come promossi anche nell’ambito del sito
        www.ricambiusati.it, nonché la tua registrazione al medesimo sito
        internet.
        <br />
        <br />
        I tuoi dati personali sono trattati nell’ambito della normale attività
        di Ricambiusati secondo le seguenti finalità:
        <br />
        - finalità strettamente connesse e strumentali alla gestione dei
        rapporti con la clientela (es.: esecuzione di operazioni sulla base
        degli obblighi derivanti dal contratto concluso con la clientela, etc.);
        <br />
        - finalità connesse agli obblighi previsti da leggi, da regolamenti e
        dalla normativa comunitaria, nonché da disposizioni impartite da
        autorità a ciò legittimate dalla legge o da organi di vigilanza e
        controllo;
        <br />
        - finalità funzionali all’attività di Ricambiusati;
        <br />
        <br />
        Rientrano in questa categoria le seguenti attività:
        <br />
        a) rilevazione del grado di soddisfazione della clientela sulla qualità
        dei servizi resi e sull’operatività svolta da Ricambiusati, eseguita
        direttamente ovvero attraverso l’opera di società specializzate mediante
        interviste personali o telefoniche, questionari, etc.;
        <br />
        b) promozione e vendita di prodotti e servizi di Ricambiusati, o di
        società terze, effettuate attraverso lettere, telefono, materiale
        pubblicitario, sistemi automatizzati di comunicazioni, etc.;
        <br />
        c) indagini di mercato.
        <br />
        <br />
        I dati, o alcuni di essi, per le finalità dianzi espresse, potranno
        essere comunicati a:
        <br />
        - società appartenenti al medesimo gruppo societario di cui fa parte
        Ricambiusati;
        <br />
        - soggetti esterni che svolgano funzioni connesse e strumentali
        all’operatività del Servizio, come, a puro titolo esemplificativo, la
        gestione del sistema informatico, l’assistenza e consulenza in materia
        contabile, amministrativa, legale, tributaria e finanziaria;
        <br />
        - soggetti cui la facoltà di accedere ai dati sia riconosciuta da
        disposizioni di legge o da ordini delle autorità Ricambiusati potrà
        inoltre, se autorizzata, comunicare i dati a soggetti facenti parte del
        medesimo gruppo che ne facciano richiesta per scopi pubblicitari e/o di
        marketing.
        <br />
        <br />
        Ti informiamo, inoltre, che puoi consultare, modificare, opporti o far
        cancellare i tuoi dati o comunque esercitare tutti i diritti che ti sono
        riconosciuti ai sensi dell’art. 7 del Codice, inviando richiesta scritta
        al nostro indirizzo e-mail{" "}
        <a
          href="mailto:privacy@ricambiusati.it"
          className="underline text-blue-600"
        >
          privacy@ricambiusati.it
        </a>
        .
        <br />
        Se desideri consultare il testo completo del Codice in materia di
        protezione dei dati personali, visita il sito ufficiale dell’Autorità
        Garante{" "}
        <a
          href="http://www.garanteprivacy.it"
          target="_blank"
          className="underline text-blue-600"
        >
          www.garanteprivacy.it
        </a>
        .
      </div>
    </div>
  );
}
