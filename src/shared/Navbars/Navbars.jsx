import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { CiEdit } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
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
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm text-center">User Name</span>
                        <span className="block truncate text-sm font-medium">user_email@gmail.com</span>
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
                    <NavLink to='/register'>register</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink className="text-white" to='/dashboard'>Dashbord</NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink className="text-white" to='/login'>Login</NavLink>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;