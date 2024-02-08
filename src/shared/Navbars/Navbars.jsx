import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
// import { CiEdit } from "react-icons/ci";
import { NavLink } from "react-router-dom";
// import users from "../../assets/user2.jpg"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbars = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Navbar fluid rounded className="px-10 mb-10">
      <Navbar.Brand href="/">
        <div className="flex flex-col items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Easy<span className="text-yellow-400">Recruit</span>
          </span>
          <span className="text-xs">Simplify Hiring, Amplify Results.</span>
        </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            // here we will display user image and other info dynamically
            <Avatar alt="User settings" img={user?.photoURL} rounded />
          }
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
                <NavLink to="/dashboard" className="text-lg">
                  Dashboard
                </NavLink>
              </Navbar.Link>
            </div>

            <Button
              outline
              gradientDuoTone="purpleToBlue"
              onClick={() => logOut()}
              className="inline-block w-full text-center text-xl mt-2"
            >
              logout
            </Button>
          </Dropdown.Header>
          <Dropdown.Divider />
        </Dropdown>
        <Navbar.Toggle />
      </div>
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

        {/* <Navbar.Link>
                    <NavLink >Blog</NavLink>
                </Navbar.Link> */}
        <Navbar.Link>
          <NavLink to="/whyEasyRecruit">Why Us</NavLink>
        </Navbar.Link>
        {/* <Navbar.Link>
                    <NavLink to='/contact'>Contact</NavLink>
                </Navbar.Link> */}
        <Navbar.Link>
          <NavLink to="/register">Register</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to="/circular">Circular</NavLink>
        </Navbar.Link>
  
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
