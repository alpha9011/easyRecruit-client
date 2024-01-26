import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { CiEdit } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import user from "../../assets/user2.jpg"
const Navbars = () => {
    return (
        <Navbar fluid rounded className='px-10'>
            <Navbar.Brand href="/">
                <div className='flex flex-col items-center'>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Easy<span className='text-yellow-400'>Recruit</span></span>
                    <span className='text-xs'>Simplify Hiring, Amplify Results.</span>
                </div>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        // here we will display user image and other info dynamically
                        <Avatar alt="User settings" img={user} rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm text-center">User Name</span>
                        <span className="block truncate text-sm font-medium">user_email@gmail.com</span>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <button className='inline-flex w-full justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-cyan-500 border-2 duration-500 border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900'>
                            Edit Profile
                            <CiEdit className="ml-2 h-5 w-5" />
                        </button>
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link>
                    <NavLink to='/'>Home</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/price'>Pricing</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/about'>About Us</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/jobs'>Jobs</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/candidates'>Candidates</NavLink>
                </Navbar.Link>
                {/* <Navbar.Link>
                    <NavLink to='/blog'>Blog</NavLink>
                </Navbar.Link> */}
                <Navbar.Link>
                    <NavLink to='/contact'>Why Us</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/contact'>Contact</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/login'>Login</NavLink>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;