import React from "react";
import CardDemo from "@/components/ui/cards-demo-1";

const Features = () => {
  const cardsData = [
    {
      title: "Breathing Exercise",
      description: "Take deep breaths to calm your mind.",
      image: "/flower2.jpg",
      hoverImage: "/flower2.jpg",
      href: "/dashboard",
    },
    {
      title: "Wellness",
      description:
        "Boost your energy and calm your mind with quick wellness hacks!",
      image: "/flower2.jpg",
      hoverImage: "/flower2.jpg",
      href: "/dashboard/wellness",
    },
    {
      title: "Joy Missions",
      description: "Fun mini-challenges to sprinkle joy into your busy day!",
      image: "/flower2.jpg",
      hoverImage: "/flower2.jpg",
      href: "/dashboard/daily-joy",
    },
  ];

  return (
    <div
      id="features"
      className="px-6 md:px-10 py-8 flex items-center justify-center flex-col max-w-7xl mx-auto my-8"
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Boost Your <span className="text-blue-300">Workday</span>
        </h1>
        <p className="text-white/70 text-sm md:text-base">
          Discover tools designed to uplift teachers every day 🩵
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-">
        {cardsData.map((card) => (
          <CardDemo key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Features;
