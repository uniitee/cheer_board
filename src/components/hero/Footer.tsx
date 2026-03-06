"use client";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div id="footer"className="h-18 md:px-16 px-6 flex justify-between items-end text-gray-300 bg-zinc-900 pb-2">
      <div>
        <h2 className="text-gray-100 text-lg font-semibold hidden md:block">
          CheerBoard
        </h2>
        <p className="text-sm text-gray-400  hidden md:block">
          Supporting Educator Wellbeing
        </p>
      </div>
      <div className=" text-xs md:text-sm text-gray-500 text-center">
        <p>Created by Team - Panchayat</p>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
      <div className="items-center justify-center flex flex-col md:flex-row gap-1 md:gap-5">
        <Link href="#">
          <Linkedin className="cursor-pointer w-4 h-4 md:w-8 md:h-8 text-gray-400 hover:text-blue-500" />
        </Link>
        <Link href="#">
          <Github className="cursor-pointer w-4 h-4 md:w-8 md:h-8  text-gray-400 hover:text-blue-500" />
        </Link>
      </div>
    </div>
  );
}
