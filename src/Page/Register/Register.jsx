import { Checkbox, FileInput, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Login from '../Login/Login';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import GoogleLogin from '../Login/GoogleLogin';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';


const Register = () => {

    const axiosPublic = useAxios();
    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const Navigate = useNavigate()


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
        const userInfo = {name,email,img,password};
        console.log(name, email, img, password);





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
                text: "You should use valid password",
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
                        // create user entry in the database
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    res();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    Navigate('/');
                                }
                            })
                    })
                // .then(() => {
                //     Toastify({
                //         text: "Register successful",
                //         className: "info",
                //         style: {
                //             background: "linear-gradient(to right, #00b09b, #96c93d)",
                //         }
                //     }).showToast();
                //     Navigate('/')

                // })
            })
            .catch(error => {
                console.log(error);
            })


    }


    return (
        <div className="flex items-center justify-center">
            <div className="    mt-12 px-8 pb-4 rounded shadow-md  text-left">
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
                    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="userName" value="UserName*" />
                            </div>
                            <TextInput id="userName" name='name' type="name" placeholder="John Doe" required shadow />
                        </div>

                        <div>
                            <div>
                                <Label htmlFor="multiple-file-upload" value="Image*" />
                            </div>
                            <FileInput name='image' id="multiple-file-upload" multiple />
                        </div>



                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email2" name='email' type="email" placeholder="name@flowbite.com" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Your password*" />
                            </div>
                            <TextInput id="password" name='password' type="password" placeholder="******" required shadow />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label htmlFor="agree" className="flex">
                                I agree with the&nbsp;
                                <Link href="" className="text-cyan-600 hover:underline dark:text-cyan-500">
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


                <div className="mt-4">
                    <GoogleLogin />
                </div>

                <div className="flex justify-center items-center mt-4">
                    <p>Have an account? </p>
                    <Login></Login>
                </div>
            </div>
        </div>
    );
};

export default Register;
