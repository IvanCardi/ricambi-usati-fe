import Hero from "./(sections)/hero/hero";
import DiventaPartner from "./(sections)/diventaPartner";
import Ricambi from "./(sections)/ricambi/ricambi";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <DiventaPartner />
      <Ricambi />
    </main>
  );
}
