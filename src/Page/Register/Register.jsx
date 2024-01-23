import {  FileInput, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Login from '../Login/Login';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import GoogleLogin from '../Login/GoogleLogin';
import FacebookLogin from '../Login/FacebookLogin';


const Register = () => {
    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const Navigate = useNavigate();
    const [selectedType, setSelectedType] = useState('candidate');

    const handleTypeSelection = (type) => {
        setSelectedType(type);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.image.value;
        const password = event.target.password.value;

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

        // creating a new user
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                handleUpdateProfile(name, img)
                    .then(() => {
                        Toastify({
                            text: "Register successful",
                            className: "info",
                            style: {
                                background: "linear-gradient(to right, #00b09b, #96c93d)",
                            }
                        }).showToast();
                        Navigate('/')
                    })
            })
            .catch(error => {
                console.log(error);
            });
    };



    const getBackgroundImage = () => {
        let gradient;
        if (selectedType === 'candidate') {
            gradient = 'linear-gradient(to right, #ff6b6b, #ffe066)';
        } else if (selectedType === 'employer') {
            gradient = 'linear-gradient(to right, #00b09b, #96c93d)';
        } else {
            gradient = 'linear-gradient(to right, #b30000, #ff6666)';
        }

        return `${gradient}`;
    
    };

    const renderCandidateForm = () => (
        <form onSubmit={handleSubmit} className="flex rounded p-10 bg-white max-w-md flex-col gap-4">
            {/* Candidate form fields */}
            <div>
               
                <TextInput id="userName" name='name' type="name" placeholder="User Name* " required shadow />
            </div>

            <div>
                <div>
                </div>
                <FileInput name='image' id="multiple-file-upload" placeholder='profile'  />
            </div>

            <div>
                            
                            <TextInput id="email2" name='email' type="email" placeholder="Email*" required shadow />
                        </div>
                        <div>
                
                            <TextInput id="password" name='password' type="password" placeholder="password*" required shadow />
                        </div>


                       



            <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-yellow-300 text-white px-4 py-2 rounded w-full focus:outline-none"
            >
                REGISTER
            </button>
        </form>
    );

    const renderEmployerForm = () => (
        //  Employer Form
        <form onSubmit={handleSubmit} className="flex rounded bg-white p-10 max-w-md flex-col gap-4">
            <div>
                
                <TextInput id="companyName" name='companyName' type="text" placeholder=" ABC Company" required shadow />
            </div>

            <div>
               
                <FileInput name='companyLogo' id="company-logo-upload" multiple />
            </div>

            <div>
                           
                            <TextInput id="email2" name='email' type="email" placeholder="company@name.com" required shadow />
                        </div>
                        <div>
                            
                            <TextInput id="password" name='password' type="password" placeholder="Password*" required shadow />
                        </div>

                        

            <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-lime-400 text-white px-4 py-2 rounded w-full focus:outline-none"
            >
                REGISTER
            </button>
        </form>
    );

    return (
        <div style={{ backgroundImage: getBackgroundImage()}} className='h-[100vh]' >
            <div className="flex items-center justify-center">
                <div className="mt-12 px-8 pb-4 rounded shadow-md text-left">
                    <h2 className="text-3xl font-semibold text-center mb-4">Create Account</h2>

                    <div className="registration-type-buttons text-center mb-4">
                        <button
                            onClick={() => handleTypeSelection('candidate')}
                            className={`${selectedType === 'candidate'
                            ?'bg-gray-200 text-gray-700'
                            :'border-green-500 border-2'
                                } px-12 py-2 rounded-full focus:outline-none`}
                        >
                            Candidate
                        </button>

                        <button
                            onClick={() => handleTypeSelection('employer')}
                            className={`${selectedType === 'employer'
                            ?'bg-gray-200 text-gray-700'
                            :'border-green-500 border-2'
                                } px-12 py-2 rounded-full focus:outline-none`}
                        >
                            Employer
                        </button>
                    </div>

                    {selectedType === 'candidate' && renderCandidateForm()}
                    {selectedType === 'employer' && renderEmployerForm()}

                    <div className="mt-4">
                        <GoogleLogin />
                        <FacebookLogin/>
                    </div>

                    <div className="flex justify-center items-center mt-4">
                        <p>Have an account? </p>
                        <Login></Login>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
