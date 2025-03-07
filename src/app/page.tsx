import Hero from "./(sections)/hero/hero";
import DiventaPartner from "./(sections)/diventaPartner";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <DiventaPartner />
    </main>
  );
}
