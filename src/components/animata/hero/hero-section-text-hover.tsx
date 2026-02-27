import React from "react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

interface ItemProps {
  emoji: string;
  position: string;
}

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/flower.jpg')] bg-cover bg-center hero-zoom"></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-semibold max-w-4xl leading-tight">
          Happy Teachers Create Happy Classrooms.
        </h1>

        <p className="text-gray-200 mt-6 text-lg max-w-2xl">
          Supporting educator wellbeing through reflection, mindful habits, and daily joy.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">

            Login
          </button>

          <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition duration-300">
            Sign Up
          </button>
        </div>
        <Link href="/sign-up">  
          <button   className="cursor-pointer rounded-3xl bg-zinc-700 px-4 py-2 font-mono tracking-tighter hover:bg-orange-500 mt-4">
            Begin your journey
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSectionTextHover;