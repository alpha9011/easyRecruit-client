import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="text-center text-3xl md:text-5xl">
            Hello!! <span className="text-white font-bold text-4xl md:text-6xl">{user.displayName}</span>. Welcome back to the dashboard..
        </div>
    );
};

export default DashboardHome;