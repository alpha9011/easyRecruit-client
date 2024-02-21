import { Label, TextInput } from "flowbite-react";
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { MdOutlineMail } from "react-icons/md";
import { MdKey } from "react-icons/md";
import refer from "../../../public/refer.json";
import gift from "../../../public/gift.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
// import { sendPasswordResetEmail } from "@firebase/auth";

import './login.css'


const Login = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  

    const emailRef = useRef(null)

    const location = useLocation()
    const navigate = useNavigate()

    const { login } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        // get input field 
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        login(email, password)
            .then(currentUser => {
                console.log(currentUser.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location?.state ? location.state : "/")


            })
            .catch(() => {


                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "login failed ",
                    showConfirmButton: false,
                    timer: 1500
                });



            });








    }

    // const handleForgetPassword = () => {
    //     const email = emailRef.current.value;
    //     if (!email) {
    //         console.log('pelase provide an email', emailRef.current.value)
    //         return;
    //     }
    //     else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    //         console.log('please write a valid email')
    //         return;
    //     }

    //     // send validation email
    //     sendPasswordResetEmail(auth, email)
    //         .then(() => {
    //             alert('please check your email')
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })

    // }



    return (
        <div className="">
            <div className=" max-w-5xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-8 py-8 lg:px-12 gap-6 md:gap-8 lg:gap-12">
                    <div className="w-96 " >

                        
                        <h3 className="text-3xl pb-4">Sign in to EasyRecruit</h3>
                        <div className="border-style py-8">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="space-y-4 ">
                                <div className="mt-4 mb-2">
                                    <div className="flex mb-2 gap-1 items-center">
                                        <MdOutlineMail className="text-blue-600" />
                                        <div className="block">
                                            <Label htmlFor="email" value="Email" />
                                        </div>
                                    </div>
                                    <TextInput
                                        type="text"
                                        name="email"
                                        ref={emailRef}
                                        placeholder="email"
                                        className="input input-bordered" />
                                </div>

                                <div className="mt-4 mb-2">
                                    <div className="flex mb-2 gap-1 items-center">
                                        <MdKey className="text-blue-600" />
                                        <div className="block">
                                            <Label htmlFor="password" value="Password" />
                                        </div>
                                    </div>
                                    <TextInput id="password" type="password" placeholder="password" required shadow />
                                </div>

                                <div >

                                    <a href="#"  className="hover:underline text-black" 
                                    // onClick={handleForgetPassword}
                                    >Forgot Password</a>

                                </div>


                                <div>
                                    <ReCAPTCHA className="my-4 "
                                        sitekey="6LdUVFUpAAAAAIFCUM-zZgHQXqStjUROmZiQWcWV"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#428bca] mb-4 text-white px-4 py-2 rounded w-full focus:outline-none"
                            >
                                Login
                            </button>
                        </form>
                        </div>


                        <p className="text-center mt-4">Still do not have an account? <Link className="text-cyan-600 font-bold ml-2" to={'/register'}>Sign Up</Link></p>
                    </div>

                    <div className="transform rounded transition-transform duration-300 hover:scale-105 mt-12 w-96 border border-cyan-400"
      


                    >
                        <div className="p-6">
                            <div className="flex items-center text-gray-800">
                                <h3 className="text-3xl">Refer  a  friend  <br /> and get reward</h3>

                                <div className="w-32">
                                    <Lottie animationData={gift} />
                                </div>
                            </div>


                            <p className="mt-4">See Details...</p>
                            <div className="w-72">
                                <Lottie animationData={refer} />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

                    
                

                 

                
                
            

              

};
export default Login;
