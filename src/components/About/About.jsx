import React from "react";
import OurCoreValues from "./OurCoreValues/OurCoreValues";

const About = () => {
  const companySections = [
    {
      id: 1,
      version: "Our mission",
      tag: "Our Mission",
      title: "Democratizing Access to Fair Credit",
      description:
        "At GUEHI AND CO, our mission is to create a more inclusive financial ecosystem where everyone has access to fair credit opportunities. We believe in breaking down barriers between lenders and borrowers through transparent, data-driven solutions that benefit both sides of the lending equation.",
      image:
        "https://i.ibb.co.com/9kDRFz1X/workers-giving-ideas-new-project.jpg",
    },
    {
      id: 2,
      version: "Our vision",
      tag: "Our Vision",
      title: "Reimagining Financial Relationships",
      description:
        "We envision a world where lending decisions are based on comprehensive, fair assessments rather than limited credit histories. Our platform aims to be the global standard for connecting qualified borrowers with the right lenders across multiple industries, creating mutual value and trust.",
      image: "https://i.ibb.co.com/K8NZW2T/handshake.jpg",
    },
  ];

  return (
    <div>
      {/* 1st div */}
      <div className=" py-32 bg-primary text-center relative  w-[100vw] right-[8.33vw]">
        <h1 className="text-[#FFFFFF] font-bold mb-5 text-[48px]">
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-[#FFFFFF]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit cum tenetur.
        </p>
      </div>
      {/* 2nd div */}
      <div className=" py-[90px]">
        {companySections.map((data) => (
          <>
            {data.id % 2 == 0 ? (
              <div className="flex  justify-center items-center gap-6">
                <div className="w-2/5 ">
                  <h4 className="bg-[#4B1E2F33] py-1 px-2  rounded-2xl w-fit">
                    {data.version}
                  </h4>
                  <h1 className="text-2xl font-bold text-[#282828]">
                    {data.title}
                  </h1>
                  <p>{data.description}</p>
                </div>
                <div className=" ">
                  <img className="w-xl rounded-xl" src={data.image} alt="" />
                </div>
              </div>
            ) : (
              <div className="flex py-20 justify-center items-center gap-6">
                <div className=" ">
                  <img className="w-xl rounded-xl" src={data.image} alt="" />
                </div>
                <div className="w-2/5 ">
                  <h4 className="bg-[#4B1E2F33] py-1 px-2  rounded-2xl w-fit">
                    {data.version}
                  </h4>
                  <h1 className="text-2xl font-bold text-[#282828]">
                    {data.title}
                  </h1>
                  <p>{data.description}</p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      {/* 3rd div */}
      {/* Our core values */}
      <div>
        <OurCoreValues></OurCoreValues>
      </div>
    </div>
  );
};

export default About;
