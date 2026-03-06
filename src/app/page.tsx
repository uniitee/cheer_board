import Features from "@/components/hero/Features";
import Footer from "@/components/hero/Footer";
import HeroSectionTextHover from "@/components/hero/Hero";
import Navbar from "@/components/hero/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="relative h-[75vh] w-full">
        <Navbar
        variant="hero"
          links={[
            { name: "About", href: "/#about" },
            { name: "Features", href: "/#features" },
            { name: "Contact", href: "/#footer" },
            { name: "Login", href: "/sign-in" },
          ]}
        />
        <HeroSectionTextHover />
        <Features />
        <Footer />
      </main>
    </div>
  );
}
