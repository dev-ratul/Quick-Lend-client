import React from "react";
import { NavLink } from "react-router";

const Nabvar = () => {
  const menu = (
    <div className="text-[18px] flex gap-5">
      <NavLink
       to={'/'}
      >
        Home
      </NavLink>
      <NavLink
       to={'/'}
      >
        About
      </NavLink>
    </div>
  );

  return (
    <div className="flex justify-between items-center py-4">
        {/* logo */}
      <div>
        <div>
          <img
            className="w-30 h-20"
            src="https://i.ibb.co.com/wNKP0J3b/3dfa84ff062a34b1f02e81da56e57a11ffdb4050.png"
            alt=""
          />
        </div>
      </div>
      {/* item */}
      <div>
        {menu}
      </div>
      {/* login/logout button */}
      <div>
           <button className="btn text-white bg-primary">Login</button> 
      </div>
    </div>
  );
};

export default Nabvar;
