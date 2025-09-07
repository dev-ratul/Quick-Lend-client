import React from "react";

const Banner = () => {
  return (
    <div className="bg-primary w-full">
      <div className="flex items-center justify-between px-10 py-16 ">
        {/* Left side  */}
        <div className="flex-1 ">
          <p className="bg-[#DBCBB91A] p-2 text-[14px] px-4 rounded-full w-fit text-white">
            Trusted by 10,000+ clients and lenders
          </p>
          <h1 className="text-5xl my-5 font-bold mb-4 text-white">
            Revolutionizing{" "}
            <span className="text-[#DBCBB9]">Lending Solutions</span>
          </h1>
          <p className="text-[#FBFAF8] mb-6">
            Our platform helps clients get fair credit ratings and connects them
            with trusted lenders for faster, more transparent lending decisions
            across multiple industries.
          </p>
          <button className="bg-[#DBCBB9] text-white  rounded-lg text-[14px]  transition">
            Get Started as Client
          </button>
        </div>

        {/* Right side img */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co.com/Xff5FMRw/d0b422cf28705267493b2da874b4d910bcb2ef9f.jpg"
            alt="banner"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
