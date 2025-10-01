import React from "react";
import Nabvar from "../navbar/Nabvar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Nabvar> </Nabvar>
      <div className="w-5/6 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
