import Features from "@/components/hero/Features";
import HeroSectionTextHover from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="relative h-[75vh] w-full">
        <HeroSectionTextHover />
        <Features />
      </main>
    </div>
  );
}