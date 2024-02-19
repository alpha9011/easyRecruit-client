import "../Page/Home/Banner/banner.css";
import { Outlet } from "react-router-dom";

import Navbars from "../shared/Navbars/Navbars";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Navbars></Navbars>

      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
