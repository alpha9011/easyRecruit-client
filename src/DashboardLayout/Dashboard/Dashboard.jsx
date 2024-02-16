import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaChartSimple } from "react-icons/fa6";
// react icons
import { CgMenuRound } from "react-icons/cg";
import { FiEdit, FiUsers } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import {
  AiOutlineCarryOut,
  AiOutlineHome,
  AiOutlineSchedule,
} from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
// drawer component
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

//Aos Animation
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../Hooks/useAuth";
AOS.init();
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const navLinkStyle = ({ isActive, isPending }) => {
    return isPending
      ? "pending"
      : `inline-block w-full text-center py-2  bg-transparent text-white rounded font-semibold ${
          isActive
            ? "border-white border-y backdrop-filter backdrop-blur-3xl "
            : "  hover:border-y hover:backdrop-blur-3xl"
        }`;
  };

  const [isAdmin] = useAdmin();
  const dashBoardMenu = 
  
   isAdmin ? 
   
   <div>
      <div className="flex flex-col items-center ">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.photoURL} alt="Bonnie image" />
        <h5 className="mb-3 text-xl font-medium bg-gradient-to-r from-gray-300 to-gray-400 inline-block text-transparent bg-clip-text dark:text-white">{user?.displayName}</h5>
        <NavLink to="/dashboard/customerProfile" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            Profile
          </span>
        </NavLink>
      </div>
      <li>
        <NavLink to="/dashboard/allUser" className={navLinkStyle}>
        <span className="flex justify-center items-center gap-2">
            <FaUsers />
            All User
          </span> 
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/allJobs" className={navLinkStyle}>
        <span className="flex justify-center items-center gap-2">
            <FaChartSimple />
            All jobs
          </span> 
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/appointment" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <AiOutlineCarryOut />
            Appointment
          </span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/interviewSchedule" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <AiOutlineSchedule />
            Interview Schedule
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="CVmanage" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <FiEdit></FiEdit>CV Management
          </span>
        </NavLink>
      </li>

      <div className="border-t  mt-5 "></div>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <AiOutlineHome />
            Home
          </span>
        </NavLink>
      </li>

    </div>

   : 

    <div>
      
      <div className="flex flex-col items-center">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.photoURL} alt="Bonnie image" />
        <h5 className="mb-3 text-xl font-medium bg-gradient-to-r from-gray-300 to-gray-400 inline-block text-transparent bg-clip-text dark:text-white">{user?.displayName}</h5>
        <NavLink to="/dashboard/customerProfile" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            Profile
          </span>
        </NavLink>
      </div>
      <li>
        <NavLink to="/dashboard/dashboardHome" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <LuLayoutDashboard />
            Dashboard
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myjobs" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
           <FaChartSimple></FaChartSimple> My Jobs
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="postjob" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <FiEdit></FiEdit> Post Job
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/candidates" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <FiUsers />
            Candidates
          </span>
        </NavLink>
      </li>
      
      <div className="border-t  mt-5 "></div>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <AiOutlineHome />
            Home
          </span>
        </NavLink>
      </li>
    </div>

  return (
    <>
      {/* gradient blue 3 */}
      <div className="flex flex-col items-center min-h-screen  bg-gradient-to-br from-[#191970] via-[#4169e1] to-[#6a5acd]">
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="lg:hidden p-5"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="bg-transparent p-5 rounded-xl ">
            <ul>{dashBoardMenu}</ul>
          </div>
        </Drawer>

        <div className=" container  p-5 lg:p-0 mt-10 lg:mt-20 mb-10">
          <div className="grid grid-cols-5 gap-10   min-h-[80vh] ">
            <div
              className=" hidden lg:block lg:col-span-1  rounded-xl backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 bg-white p-5 sticky top-20"
              data-aos={"fade-right"}
              data-aos-duration="2000"
            >
              <ul className="space-y-3 w-full">{dashBoardMenu}</ul>
            </div>

            <div
              className="relative bg-opacity-10 bg-white col-span-5 lg:col-span-4 rounded-xl 
            backdrop-filter backdrop-blur-xl  border p-6
            "
              data-aos={"fade-left"}
              data-aos-duration="2000"
            >
              <CgMenuRound
                className="text-white absolute top-1 left-1 text-2xl bg-opacity-100 backdrop-filter-none border rounded-full border-[#1D227C] bg-[#1D227C] lg:hidden "
                onClick={toggleDrawer}
                data-aos={"flip-right"}
                data-aos-duration="2000"
                data-aos-delay="1500"
              />

              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
