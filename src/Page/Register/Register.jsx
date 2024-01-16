import {  Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Login from '../Login/Login';

const Register = () => {
    const [selectedType, setSelectedType] = useState('candidate');

    const handleTypeSelection = (type) => {
        setSelectedType(type);
    };


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="registration-form bg-white p-8 rounded shadow-md max-w-lg w-full text-left">
                <h2 className="text-3xl font-semibold text-center mb-4">Create Account</h2>

                <div className="registration-type-buttons text-center mb-4">
                    <button
                        onClick={() => handleTypeSelection('candidate')}
                        className={`${selectedType === 'candidate'
                            ? 'border-green-500 border-2'
                            : 'bg-gray-200 text-gray-700'
                            } px-12 py-2 rounded-full focus:outline-none`}
                    >
                        Candidate
                    </button>

                    <button
                        onClick={() => handleTypeSelection('employer')}
                        className={`${selectedType === 'employer'
                            ? 'border-green-500 border-2 '
                            : 'bg-gray-200 text-gray-700'
                            } px-12 py-2 rounded-full focus:outline-none`}
                    >
                        Employer
                    </button>
                </div>

                {selectedType && (
                    <form className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="userName" value="UserName*" />
                            </div>
                            <TextInput id="userName" type="name" placeholder="John Doe" required shadow />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password*" />
                            </div>
                            <TextInput id="password" type="password" placeholder="******" required shadow />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label htmlFor="agree" className="flex">
                                I agree with the&nbsp;
                                <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    terms and conditions
                                </Link>
                            </Label>
                        </div>

                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded w-full focus:outline-none"
                        >
                            REGISTER
                        </button>
                    </form>
                )}

                {/* google login */}
                <h4 className="text-xl text-center ">---- OR ---- </h4>


                {/* login  */}
                <div className="flex mt-4 justify-center items-center">
                    <p>Have an account? </p>
                    <Login></Login>
                </div>




            </div>
        </div>
    );
};

export default Register;
