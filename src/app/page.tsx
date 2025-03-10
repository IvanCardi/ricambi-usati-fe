import Hero from "./(sections)/hero/hero";
import DiventaPartner from "./(sections)/diventaPartner";
import Ricambi from "./(sections)/ricambi/ricambi";
import Recensioni from "./(sections)/recensioni";
import Partners from "./(sections)/partners";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <DiventaPartner />
      <Ricambi />
      <Recensioni />
      <Partners />
    </main>
  );
}
