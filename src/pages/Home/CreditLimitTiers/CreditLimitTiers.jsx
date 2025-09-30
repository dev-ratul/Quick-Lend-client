

import React from 'react';
import { Link } from 'react-router'; // You would use this if linking to other pages

const CreditLimitTiers = () => {
  const tiers = [
    {
      title: "Poor",
      scoreRange: "0-39",
      limit: "10,000 FCFA",
      description: "Basic credit limit with opportunities to improve your score",
      features: ["Limited borrowing capacity", "Higher interest rates"],
      bgColor: "bg-red-100", // A lighter red for the poor tier
      textColor: "text-red-800",
      borderColor: "border-red-400"
    },
    {
      title: "Fair",
      scoreRange: "40-59",
      limit: "30,000 FCFA",
      description: "Moderate credit limit with standard terms",
      features: ["Reasonable borrowing capacity", "Standard interest rates"],
      bgColor: "bg-orange-100",
      textColor: "text-orange-800",
      borderColor: "border-orange-400"
    },
    {
      title: "Good",
      scoreRange: "60-79",
      limit: "50,000 FCFA",
      description: "Enhanced credit limit with preferential terms",
      features: ["Good borrowing capacity", "Competitive interest rates"],
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-400"
    },
    {
      title: "Excellent",
      scoreRange: "80-100",
      limit: "100,000 FCFA",
      description: "Maximum credit limit with premium benefits",
      features: ["Maximum borrowing capacity", "Lowest interest rates"],
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-400"
    }
  ];

  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Credit Limit Tiers</h2>
          <p className="mt-2 text-lg text-gray-600">Our system suggests credit limits based on your credit score range</p>
        </div>

        <div className="flex gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 lg:w-1/4 p-6 rounded-lg shadow-lg border-2 ${tier.borderColor} ${tier.bgColor} transition-transform transform hover:scale-105`}
            >
              <div className="text-center mb-4">
                <h3 className={`text-2xl font-semibold ${tier.textColor}`}>{tier.title}</h3>
                <p className={`text-sm font-medium ${tier.textColor}`}>{tier.scoreRange}</p>
              </div>

              <div className="text-center my-6">
                <p className="text-3xl font-bold text-gray-900">{tier.limit}</p>
              </div>

              <p className="text-sm text-center text-gray-700 mb-4">{tier.description}</p>

              <ul className="list-none space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-800">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* This is a placeholder for a React Router DOM link */}
              {/* <div className="mt-6 text-center">
                <Link to={`/apply?tier=${tier.title}`} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
                  Apply Now
                </Link>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreditLimitTiers;