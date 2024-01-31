import { Button, FileInput, Footer, Label, Select, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Login from '../Login/Login';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { FaRegCircle } from "react-icons/fa";


import bgRegister from '../../assets/women.jpg'
import useAxios from '../../hooks/useAxios';

const Register = () => {
    const axiosPublic = useAxios();

    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const Navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const img = event.target.file.value;
        const password = event.target.password.value;
        const company = event.target.company.value;
        const PhoneNO = event.target.PhoneNO.value;
        const aboutUS = event.target.aboutUS.value;
        const canPostJob = 2;
        const userInfo = {firstName,lastName,email,img,password,company,PhoneNO,aboutUS,canPostJob}
        console.log(userInfo);

        



        // validation 
        if (password.length < 6) {
            Toastify({
                text: "Password must be at least 6 characters",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #b30000, #ff6666)",
                }
            }).showToast();

            return;
        }

        else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password)) {
            Toastify({
                text: "You should use a valid password",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #b30000, #ff6666)",
                }
            }).showToast();
            return;
        }

        axiosPublic.post('/users', {
            firstName,lastName,email,img,password,company,PhoneNO,aboutUS,canPostJob
        })
        .then((response) => {
            console.log(response.data);

            handleUpdateProfile(userInfo.firstName, userInfo.img)
                .then(() => {
                    Toastify({
                        text: "Register successful",
                        className: "info",
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                        }
                    }).showToast();
                    Navigate('/');
                })
                .catch((error) => {
                    console.error(error);
                });
        })
        .catch((error) => {
            console.error(error);
        });

    };



    return (

        <>
        <div style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 107, 107, 0.5), rgba(255, 224, 102, 0.5)), url(${bgRegister})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
            >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 md:p-10 lg:gap-16  lg:p-24'>
            <div>

<div className='text-xl'>
    <h1 className='text-5xl font-semibold mb-4'>Try EasyRecruit for Free <br /> Today</h1>
    <p>Start a 14-day free trial today with unlimited users and no credit card required.*</p>
    <h3>Post your first job for free today and see why over 10,000 growing businesses trust JazzHR to power their hiring process.</h3>
    <ul className='mt-4'>
        <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Voted #1 most user-friendly applicant tracking system</li>
        <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Reduces time to hire by 50%</li>
        <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Creates a lasting candidate experience</li>
        <li className='flex items-center gap-2'><FaRegCircle className='text-sm'/>Transparent pricing that is actually affordable</li>
    </ul>
</div>

<div className='mt-4' style={{fontStyle:'italic'}}>
<p>Note: Indeed access is restricted during the trial experience. To access Indeed, please purchase a JazzHR plan.</p>

<p className='mt-4'>*If you are looking for a job, we kindly request that you refrain from completing this form. The JazzHR free trial is exclusively available for businesses seeking to make new hires, and not intended for individual candidates. Thank you for your understanding</p>
</div>
</div>

<div className='bg-[#b9cdc6]  p-12  lg:w-[500px]'>

<h2 className='text-2xl font-semibold mb-4 text-center'>Create a Free Account</h2>
<form onSubmit={handleSubmit} className="flex max-w-md flex-col  gap-4">

    <div>
        <div className="mb-2 block">
            <Label htmlFor="firstName" value="*First name" />
        </div>
        <TextInput id="firstName" type="text" required shadow />
    </div>


    <div>
        <div className="mb-2 block">
            <Label htmlFor="lastName" value="*Last name" />
        </div>
        <TextInput id="lastName" type="text" required shadow />
    </div>

    <div>
        <div className="mb-2 block">
            <Label htmlFor="email" value="*Work email address" />
        </div>
        <TextInput id="email" type="email" placeholder="name123@gmail.com" required shadow />
    </div>


    <div id="fileUpload" className="max-w-md">
<div className="mb-2 block">
<Label htmlFor="file" value="*Image" />
</div>
<FileInput id="file" helperText="" />
</div>

    <div>
        <div className="mb-2 block">
            <Label htmlFor="PhoneNO" value="*Phone Number" />
        </div>
        <TextInput id="PhoneNO" type="number" placeholder='1+XXX-XXX-XXX' required shadow />
    </div>
    <div>
        <div className="mb-2 block">
            <Label htmlFor="password" value="*Your password" />
        </div>
        <TextInput id="password" type="password" required shadow />
    </div>



    <div className="max-w-md">
        <div className="mb-2 block">
            <Label htmlFor="company" value="*Company " />
        </div>
        <TextInput id="company" type="text" required shadow />

    </div>



    <div className="max-w-md">
        <div className="mb-2 block">
            <Label htmlFor="aboutUS" value="*How did you hear about us?:" />
        </div>
        <Select id="aboutUS" required>
            <option>  Select...</option>
            <option>Social Media</option>
            <option>Advertising</option>
            <option>Previous Customer</option>
            <option>I am looking for a job</option>

        </Select>
    </div>




    <Button type="submit">Register New Account</Button>



</form>

<div className="flex justify-center items-center mt-4">
    <p>Have an account? <Login></Login> </p>
    
</div>
</div>
            </div>
            
        </div>
        <Footer/>
        </>
    );
};

export default Register;
