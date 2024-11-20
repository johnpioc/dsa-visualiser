import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Options from "@/components/home/Options";

export default function Home() {
  return (
    <div className="w-[100vw] min-h-[100vw]">
        <Navbar />
        <Hero />
        <Options />
    </div>
  );
}
