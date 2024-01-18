import { Outlet } from "react-router-dom";
import Navbars from "../shared/Navbars/Navbars"

const MainLayout = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet/>
        </div>
    );
};

export default MainLayout;