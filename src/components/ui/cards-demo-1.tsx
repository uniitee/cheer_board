// "use client";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// interface CardProps{
//   title: string;
//   description: string;
//   imageUrl: string;
//   hoverImageUrl: string;
//   href: string;
// }

// export default function CardDemo({
//   title, description, imageUrl, hoverImageUrl, href
// }: CardProps) {
//   return (
//     <Link href={href} className="max-w-xs w-full">
//       <div
//         className={cn(
//           "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
//           `bg-[url(${imageUrl})] bg-cover`,
//           // Preload hover image by setting it in a pseudo-element
//           `before:bg-[url(${hoverImageUrl})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
//           `hover:bg-[url(${hoverImageUrl})]`,
//           "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
//           "transition-all duration-500",
//         )}
//       >
//         <div className="text relative z-49">
//           <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
//            {title}
//           </h1>
//           <p className="font-normal text-base text-gray-400 relative my-4">
//             {description}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }

"use client";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  href: string;
}

export default function Card({
  title,
  description,
  image,
  hoverImage,
  href,
}: CardProps) {
  return (
    <Link href={href} className="max-w-xs w-full block">
      <div
        className="group relative h-96 rounded-md shadow-xl flex flex-col justify-end p-4 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
          style={{ backgroundImage: `url(${hoverImage})` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-sm mt-2 text-white/80">{description}</p>
        </div>
      </div>
    </Link>
  );
}