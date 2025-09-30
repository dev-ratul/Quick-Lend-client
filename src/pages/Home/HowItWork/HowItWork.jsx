import React from "react";
import { FaUser, FaWpforms, FaChartBar, FaHandshake } from "react-icons/fa";

const HowItWork = () => {
  const processSteps = [
    {
      step_number: 1,
      title: "Create Account",
      description:
        "Sign up with your basic information to get started on your credit journey.",
      icon: FaUser,
    },
    {
      step_number: 2,
      title: "Fill Data Form",
      description:
        "Provide your financial information securely to calculate your credit score.",
      icon: FaWpforms,
    },
    {
      step_number: 3,
      title: "Get Score & Limit",
      description:
        "Receive your credit score and suggested credit limit instantly.",
      icon: FaChartBar,
    },
    {
      step_number: 4,
      title: "Connect with Lenders",
      description:
        "Consent to share your score with trusted lenders to receive loan offers.",
      icon: FaHandshake,
    },
  ];

  return (
    <div className=" mx-auto px-4">
      {/* first section */}
      <div className="text-center py-16">
        <h1 className="text-[#4B1E2F] text-4xl md:text-5xl font-semibold">
          How It Works
        </h1>
        <p className="text-lg text-[#282828] mt-6 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          libero tenetur quo itaque ipsum eum sed? Quas maxime pariatur
          reiciendis.
        </p>
      </div>

      {/* second section - cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
        {processSteps.map((data) => {
          const Icon = data.icon;
          return (
            <div
              key={data.step_number}
              className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6  border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16  rounded-full bg-[#4B1E2F]/10 text-[#4B1E2F] mb-4">
                <Icon size={28} />
              </div>
              <h2 className="text-xl font-semibold mb-3 text-[#4B1E2F]">
                {data.title}
              </h2>
              <p className="text-gray-600 text-sm">{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWork;
