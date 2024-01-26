import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { CiEdit } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import user from "../../assets/user2.jpg"
const Navbars = () => {
    return (
        <Navbar fluid rounded className='px-10 mb-10'>
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
                        <div className='text-center '>
                        <Navbar.Link>
                    <NavLink  to='/dashboard/dashboardHome' className='text-[15px]'>Dashboard</NavLink>
                </Navbar.Link>
                        </div>

                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Button>
                            Edit Profile
                            <CiEdit className="ml-2 h-5 w-5" />
                        </Button>
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link>
                    <NavLink to='/'>Home</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/about'>About Us</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/price'>Pricing</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/jobs'>Jobs</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/candidates'>Candidates</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/blog'>Blog</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/contact'>Contact</NavLink>
                </Navbar.Link>

                <Navbar.Link>
                    <NavLink to='/register'>Register</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink to='/circular'>Circular</NavLink>
                </Navbar.Link>
             
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;