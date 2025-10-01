import React from "react";

// JSON Data
const industrySolutions = [
  {
    id: 1,
    title: "Building & Construction",
    description:
      "Specialized financing solutions for construction projects, equipment purchase, and property development with flexible terms tailored to project timelines.",
    icon: "🏗️",
  },
  {
    id: 2,
    title: "DeFi & Fintech",
    description:
      "Cutting-edge decentralized finance solutions combining traditional lending models with blockchain technology for faster, more secure transactions.",
    icon: "📈",
  },
  {
    id: 3,
    title: "Agriculture",
    description:
      "Customized financing for farmers and agribusinesses, considering seasonal cash flows and providing loans for equipment, land acquisition, and operational costs.",
    icon: "🌱",
  },
  {
    id: 4,
    title: "Event & Entertainment",
    description:
      "Short-term financing solutions for event organizers and entertainment companies, with quick approval processes and specialized risk assessment models.",
    icon: "🎭",
  },
  {
    id: 5,
    title: "Data & Technology",
    description:
      "Innovative financing for tech startups and data-driven companies, with IP-backed loan options and growth-focused lending solutions for scaling operations.",
    icon: "💾",
  },
  {
    id: 6,
    title: "Custom Solution",
    description:
      "Don’t see your industry? We offer customized lending solutions tailored to your specific business needs.",
    icon: "✨",
    cta: "Get Started as Client",
  },
];

const OurIndustrySolutions = () => {
  return (
    <div className="py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl text-primary font-semibold">
          Our Industry Solutions
        </h1>
        <p className="text-lg text-gray-600 pt-5">
          We provide specialized lending solutions across multiple industries,
          tailored to meet the unique needs of each sector.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-6">
        {industrySolutions.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-xl shadow-md transition hover:shadow-xl ${
              item.id === 6 ? "bg-primary text-white" : "bg-white"
            }`}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
            <p className="text-[16px] mb-4">
              {item.description}
            </p>

            {/* CTA Button for Custom Solution */}
            {item.cta && (
              <button className="mt-3 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                {item.cta} →
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurIndustrySolutions;
