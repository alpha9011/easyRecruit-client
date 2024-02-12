import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import welcome from "../../../Json/welcome.json"
import Lottie from "lottie-react";


const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div>
                <Lottie animationData={welcome} className="max-w-screen-sm max-h-[500px] -mt-20 md:mb-10 mx-auto"></Lottie>
            </div>
            <div className="text-center text-3xl md:text-5xl font-medium">
                Hello!! <span className="text-white italic font-bold text-4xl md:text-6xl">{user.displayName}</span>. Welcome back to the dashboard..
            </div>
        </div>
    );
};

export default DashboardHome;