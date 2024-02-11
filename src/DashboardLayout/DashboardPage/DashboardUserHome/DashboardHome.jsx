import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            Hello!! {user.displayName}. Welcome back to the dashboard..
        </div>
    );
};

export default DashboardHome;