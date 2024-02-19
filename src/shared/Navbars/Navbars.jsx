import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
// import { CiEdit } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
// import users from "../../assets/user2.jpg"
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { CgMenuGridR } from "react-icons/cg";

// drawer component
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbars = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinkStyle = ({ isActive, isPending }) => {
    return isPending
      ? "pending"
      : `inline-block w-full  text-center py-2  bg-transparent text rounded font-semibold ${
          isActive
            ? "border-blue-500   border-y backdrop-filter backdrop-blur-3xl "
            : "   hover:border-y hover:border-blue-500 hover:backdrop-blur-3xl"
        }`;
  };
  //  NavMenu Side bar
  const navMenu = (
    <div>
      {/* Profile */}

      {user && (
        <div>
          <span>
            <Avatar alt="User settings" img={user?.photoURL} rounded />
          </span>
          <span className="block text-lg font-semibold text-center ">
            {user?.displayName}
          </span>
        </div>
      )}

      <div className="text-center border-t mt-5">
        <NavLink to="/dashboard/dashboardHome" className={navLinkStyle}>
          Dashboard
        </NavLink>

        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>

        <NavLink to="/price" className={navLinkStyle}>
          Pricing
        </NavLink>

        <NavLink to="/about" className={navLinkStyle}>
          About Us
        </NavLink>

        <NavLink to="/whyEasyRecruit" className={navLinkStyle}>
          Why Us
        </NavLink>

        <NavLink to="/contact" className={navLinkStyle}>
          Contact
        </NavLink>

        {/* <NavLink to="/register" className={navLinkStyle}>
          Register
        </NavLink> */}

        <NavLink to="/circular" className={navLinkStyle}>
          Circular
        </NavLink>

        {user ? (
          <Button
            outline
            gradientDuoTone="purpleToBlue"
            onClick={() => logOut()}
            className="inline-block w-full text-center text-xl mt-2"
          >
            logout
          </Button>
        ) : (
          <Link>Login</Link>
        )}
      </div>
    </div>
  );

  return (
    <Navbar
      fluid
      rounded
      className="px-10 sticky top-0 z-50 shadow p-4 bg-white bg-opacity-50"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <Navbar.Brand href="/">
        <div className="flex flex-col items-center">
          <span className="self-center whitespace-nowrap text-3xl lg:text-4xl   font-bold dark:text-white bg-gradient-to-r from-blue-500 to-sky-500 text-transparent bg-clip-text ">
            Easy<span className="">Recruit</span>
          </span>
        </div>
      </Navbar.Brand>
      <div className=" md:order-2  hidden lg:block">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            // here we will display user image and other info dynamically
            <Avatar alt="User settings" img={user?.photoURL} rounded />
          }
          className=""
        >
          <Dropdown.Header>
            {user && (
              <div>
                <span className="block text-lg font-semibold text-center ">
                  {user?.displayName}
                </span>
              </div>
            )}

            <div className="text-center ">
              <Navbar.Link>
                <NavLink to="/dashboard/dashboardHome" className="text-lg">
                  Dashboard
                </NavLink>
              </Navbar.Link>
            </div>

            {
      user ?     <Button
      outline
      gradientDuoTone="purpleToBlue"
      onClick={() => logOut()}
      className="inline-block w-full text-center text-xl mt-2"
    >
      logout
    </Button> 
    : 
    <Link to='/login'><Button
    outline
    gradientDuoTone="purpleToBlue"
    
    className="inline-block w-full text-center text-xl mt-2"
  >
    login
  </Button> </Link>
    }
          </Dropdown.Header>
          <Dropdown.Divider />
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <div className="hidden lg:block ">
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to="/">Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/price">Pricing</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/about">About Us</NavLink>
          </Navbar.Link>

          <Navbar.Link>
            <NavLink to="/whyEasyRecruit">Why Us</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/contact">Contact</NavLink>
          </Navbar.Link>
          {/* <Navbar.Link>
            <NavLink to="/register">Register</NavLink>
          </Navbar.Link> */}
          <Navbar.Link>
            <NavLink to="/circular">Circular</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="lg:hidden p-5"
        overlayColor="#000"
        lockBackgroundScroll="true"
      >
        <ul>{navMenu}</ul>
      </Drawer>
      <CgMenuGridR className="text-3xl lg:hidden" onClick={toggleDrawer} />
    </Navbar>
  );
};

export default Navbars;
