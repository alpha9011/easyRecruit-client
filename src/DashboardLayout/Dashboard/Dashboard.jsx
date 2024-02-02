import { NavLink, Outlet } from "react-router-dom";
import DashboardNav from "../DashboardPage/DashboardNav/DashboardNav";

const Dashboard = () => {
  return (
    <>
      <div>
        <DashboardNav></DashboardNav>
        <div className="grid grid-cols-10 gap-6 ">
          <div className="col-span-2  shadow-xl min-h-screen p-6 bg-blue-200">
            <ul className="space-y-3 w-full">
              <li>
                <NavLink
                  to="/dashboard/dashboardHome"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " inline-block w-full  text-center py-2 rounded-md bg-blue-700 text-white font-semibold"
                      : "inline-block w-full  text-center py-2 rounded-md bg-white hover:bg-blue-700 hover:text-white hover:duration-200 hover:-translate-y-1"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myjobs"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " inline-block w-full  text-center py-2 rounded-md bg-blue-700 text-white font-semibold"
                      : "inline-block w-full  text-center py-2 rounded-md bg-white hover:bg-blue-700 hover:text-white hover:duration-200 hover:-translate-y-1"
                  }
                >
                  My Jobs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/candidates"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " inline-block w-full  text-center py-2 rounded-md bg-blue-700 text-white font-semibold"
                      : "inline-block w-full  text-center py-2 rounded-md bg-white hover:bg-blue-700 hover:text-white hover:duration-200 hover:-translate-y-1"
                  }
                >
                  Candidates
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/appointment"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " inline-block w-full  text-center py-2 rounded-md bg-blue-700 text-white font-semibold"
                      : "inline-block w-full  text-center py-2 rounded-md bg-white hover:bg-blue-700 hover:text-white hover:duration-200 hover:-translate-y-1"
                  }
                >
                  Appointment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/interviewSchedule"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " inline-block w-full  text-center py-2 rounded-md bg-blue-700 text-white font-semibold"
                      : "inline-block w-full  text-center py-2 rounded-md bg-white hover:bg-blue-700 hover:text-white hover:duration-200 hover:-translate-y-1"
                  }
                >
                  Interview Schedule
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-span-8 bg-slate-200 p-6">
            <Outlet></Outlet>
          </div>
        </div>
      </div>

      <div className="col-span-9 bg-slate-200 p-6">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
