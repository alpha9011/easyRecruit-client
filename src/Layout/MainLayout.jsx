import { Outlet } from "react-router-dom";

import Navbars from "../shared/Navbars/Navbars";

const MainLayout = () => {
  return (
    <div>
      <Navbars></Navbars>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
