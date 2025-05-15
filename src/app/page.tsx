import DiventaPartner from "./(sections)/diventaPartner";
import Hero from "./(sections)/hero/hero";
import Partners from "./(sections)/partners";
import Ricambi from "./(sections)/ricambi/ricambi";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <DiventaPartner />
      <Ricambi />
      {/* <Recensioni /> */}
      <Partners />
    </main>
  );
}
