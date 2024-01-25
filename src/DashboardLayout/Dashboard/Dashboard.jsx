import { NavLink, Outlet } from "react-router-dom";
import DashboardNav from "../DashboardPage/DashboardNav/DashboardNav";


const Dashboard = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-3 bg-white shadow-xl min-h-screen p-6">
                    <ul className="space-y-3 w-full">
                    <li>
                      <NavLink
                            to="/dashboard/dashboardHome"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " inline-block w-full  text-center py-2 rounded-md bg-blue-700 text-white font-semibold" 
                                :
                                 "inline-block w-full  text-center py-2 rounded-md bg-white hover:bg-blue-700 hover:text-white hover:duration-200 hover:-translate-y-1"
                            }
                        >
                           Dashboard
                        </NavLink>
                      </li>
                    <li>
                      <NavLink
                            to="/dashboard/candidates"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " inline-block w-full  text-center py-2 rounded-md bg-blue-700 text-white font-semibold" 
                                :
                                 "inline-block w-full  text-center py-2 rounded-md bg-white hover:bg-blue-700 hover:text-white hover:duration-200 hover:-translate-y-1"
                            }
                        >
                           Candidates
                        </NavLink>
                      </li>
                    <li>
                      <NavLink
                            to="/dashboard/myjobs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " inline-block w-full  text-center py-2 rounded-md bg-blue-700 text-white font-semibold" 
                                :
                                 "inline-block w-full  text-center py-2 rounded-md bg-white hover:bg-blue-700 hover:text-white hover:duration-200 hover:-translate-y-1"
                            }
                        >
                           My Jobs
                        </NavLink>
                      </li>
                    </ul>

                </div>




                <div className="col-span-9 bg-slate-200 p-6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;