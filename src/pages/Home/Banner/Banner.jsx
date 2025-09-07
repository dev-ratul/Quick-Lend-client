import React from 'react';

const Banner = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-between px-10 py-16 bg-primary">
      {/* Left side (Text + Button) */}
      <div className="max-w-lg gri">
        <p className='bg-[#DBCBB91A] p-2  text-white'>
            Trusted by 10,000+ clients and lenders
        </p>
        <h1 className="text-4xl font-bold mb-4 text-white">
          Revolutionizing <span className='text-[#DBCBB9]'>Lending Solutions</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Get fast, fair, and transparent loans from trusted lenders.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Right side (Image) */}
      <div>
        <img
          src="https://i.ibb.co.com/Xff5FMRw/d0b422cf28705267493b2da874b4d910bcb2ef9f.jpg"
          alt="banner"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
