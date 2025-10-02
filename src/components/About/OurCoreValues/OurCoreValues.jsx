import React from "react";
import {
  FaShieldAlt,
  FaChartLine,
  FaUserTie,
  FaGlobe,
  FaStar,
  FaChartBar,
} from "react-icons/fa"; // ১. এখানে সব আইকন ইম্পোর্ট করা হলো

const OurCoreValues = () => {
  const coreValues = [
    {
      id: 1,
      title: "Trust & Transparency",
      description:
        "We believe in complete transparency in our scoring models and lending processes, building trust with both clients and lenders.",
      // ২. সরাসরি কম্পোনেন্ট হিসেবে আইকন বসানো হলো
      icon: <FaShieldAlt size={30}  />,
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continuously innovate our platform and scoring models to provide the most accurate and fair assessment of creditworthiness.",
      icon: <FaChartLine size={30}  />,
    },
    {
      id: 3,
      title: "Client-Centered",
      description:
        "We put our clients' needs first, ensuring they have control over their data and receive fair treatment from lenders.",
      icon: <FaUserTie size={30}  />,
    },
    {
      id: 4,
      title: "Inclusivity",
      description:
        "We're committed to creating financial opportunities for underserved communities and businesses across diverse industries.",
      icon: <FaGlobe size={30}  />,
    },
    {
      id: 5,
      title: "Excellence",
      description:
        "We strive for excellence in all aspects of our platform, from user experience to the accuracy of our credit scoring algorithms.",
      icon: <FaStar size={30}  />,
    },
    {
      id: 6,
      title: "Social Impact",
      description:
        "We measure our success not just by profits, but by the positive impact we make on individuals, businesses, and communities.",
      icon: <FaChartBar size={30}  />,
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-[40px] font-medium text-primary">
          Our Core Values
        </h1>
        <p className="text-[18px] text-[#282828]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          pariatur perferendis obcaecati adipisci?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 py-[80px]">
        {coreValues.map((data) => {
          const Icon= data.icon;

          return(
              <div className="bg-gray-50 p-5 rounded-xl">
                <div className="p-2 rounded-full bg-[#4B1E2F1A] w-fit">
                  {Icon}
                </div>
                <h1 className="py-5">{data.title}</h1>
                <p>{data.description}</p>
                
              </div>
          )
          
        })}
      </div>
    </div>
  );
};

export default OurCoreValues;
