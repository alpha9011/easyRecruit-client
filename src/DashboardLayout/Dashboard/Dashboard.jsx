import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

// react icons
import { CgMenuRound } from "react-icons/cg";
import { FiEdit, FiUsers } from "react-icons/fi";
import {
  AiOutlineCarryOut,
  AiOutlineHome,
  AiOutlineSchedule,
} from "react-icons/ai";

// drawer component
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

//Aos Animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinkStyle = ({ isActive, isPending }) => {
    return isPending
      ? "pending"
      : `inline-block w-full text-center py-2 bg-transparent text-white rounded font-semibold ${
          isActive
            ? "border-white border-y backdrop-filter backdrop-blur-3xl "
            : "hover:bg-blend-saturation hover:text-white hover:duration-200 hover:-translate-y-1 "
        }`;
  };

  const dashBoardMenu = (
    <>
      <div className="border-t  my-5 "></div>
      <li>
        <NavLink to="/dashboard/dashboardHome" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            Dashboard
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myjobs" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            My Jobs
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
        <NavLink to="postjob" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <FiEdit></FiEdit> Post Job
          </span>
        </NavLink>
      </li>
      <div className="border-t  my-5 "></div>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          <span className="flex justify-center items-center gap-2">
            <AiOutlineHome />
            Home
          </span>
        </NavLink>
      </li>
    </>
  );
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

        <div className=" container  p-5 lg:p-0 mt-20 mb-10">
          <div className="grid grid-cols-5 gap-10   min-h-[80vh] ">
            <div
              className=" hidden lg:block lg:col-span-1  rounded-xl backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 bg-white p-5 h-[80vh] sticky top-20"
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
