import Hero from "@/components/global/Hero";
import About from "@/components/global/About";
import Services from "@/components/global/Services";

export default async function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}
