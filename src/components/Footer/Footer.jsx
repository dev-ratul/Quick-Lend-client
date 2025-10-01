import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-primary text-white py-8 ">
      <div className="w-5/6 mx-auto ">
        {/* 1st div */}
        <div className="flex justify-between">
          <div className="">
            <img
              className="w-35 h-20 bg-white rounded-sm mb-6"
              src="https://i.ibb.co.com/wNKP0J3b/3dfa84ff062a34b1f02e81da56e57a11ffdb4050.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              repellat dolores aut?
            </p>
          </div>
          <div>
            <p className="mb-6"> Quick Links</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>Home</Link>
          </div>
          <div>
            <h2 className="mb-6">Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        {/* 2nd div */}
        <div className="w-full h-[0.2px] bg-[#D9D9D94D] mt-16 mb-8"></div>
        {/* 3rd div */}
        <div>
            <div className="flex justify-between ">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>

            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
