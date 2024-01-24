import { Label, Modal, TextInput } from "flowbite-react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import GoogleLogin from "./GoogleLogin";
import { MdOutlineMail } from "react-icons/md";
import { MdKey } from "react-icons/md";
// import bgRegister from '../../assets/women.jpg'
import referImg from '../../assets/refer.webp'


const Login = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }
    const [openModal, setOpenModal] = useState(false);

    const emailRef = useRef(null)

    const location = useLocation()
    const navigate = useNavigate()

    const { login, forgotPass } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        // get input field 
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        login(email, password)
            .then(currentUser => {
                console.log(currentUser.user);
                Toastify({
                    text: "Login successful",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();

                navigate(location?.state ? location.state : "/")


            })
            .catch((error) => {
                alert(error.message);

                Toastify({
                    text: "Login failed",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #b30000, #ff6666)",
                    }
                }).showToast();

            });








    }


    const handleForgotPass = () => {


        const email = emailRef.current.value;
        if (!email) {
            Toastify({
                text: "please provide an email",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #b30000, #ff6666)",
                }
            }).showToast();
            return;
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            Toastify({
                text: "please provide an valid email",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #b30000, #ff6666)",
                }
            }).showToast();
            return;
        }



        forgotPass(email)
            .then(() => {
                Toastify({
                    text: "Please provide an e-mail",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <div>

            <Link className="text-cyan-700 text-center ml-8" onClick={() => setOpenModal(true)}>SIGN IN</Link>
            <Modal show={openModal} size="6xl" popup onClose={() => setOpenModal(false)} >
                <Modal.Header />
                <Modal.Body className="2 ">

                    <div>

                        <div className="flex justify-center items-center gap-32">
                            <div  >

                                <h3 className="text-3xl">Sign in to EasyRecruit</h3>

                                <form action="" onSubmit={handleSubmit}>
                                    <div className="space-y-4">
                                        <div className="mt-4 mb-2">
                                            <div className="flex mb-2 gap-1 items-center">
                                                <MdOutlineMail className="text-blue-600" />
                                                <div className="block">
                                                    <Label htmlFor="email" value="Email" />
                                                </div>
                                            </div>
                                            <TextInput ref={emailRef} id="email2" name='email' type="email" placeholder="email" required shadow />
                                        </div>

                                        <div className="mt-4 mb-2">
                                            <div className="flex mb-2 gap-1 items-center">
                                                <MdKey className="text-blue-600" />
                                                <div className="block">
                                                    <Label htmlFor="password" value="Password" />
                                                </div>
                                            </div>
                                            <TextInput id="password" name='password' type="password" placeholder="password" required shadow />
                                        </div>

                                        <div >

                                            <a href="#" className="hover:underline" onClick={handleForgotPass}>Forgot Password</a>

                                        </div>


                                        <div>
                                            <ReCAPTCHA className="my-4"
                                                sitekey="6LdUVFUpAAAAAIFCUM-zZgHQXqStjUROmZiQWcWV"
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>



                                    <button
                                        type="submit"
                                        className="bg-[#428bca] mb-4 text-white px-4 py-2 rounded w-full focus:outline-none"
                                    >
                                        LOGIN
                                    </button>
                                </form>

                                <div className=" bg-gray-200">
                                    <GoogleLogin />
                                </div>
                                <p className="text-center mt-4">Still do not have an account? <Link className="text-cyan-600" to={'/register'}>Sign up</Link></p>
                            </div>


                            <div className="transform rounded transition-transform duration-300 hover:-translate-y-2 hover:scale-105" style={{
                                background: 'linear-gradient(to right,  #93C5FD ,white)',

                            }}>
                                <div className="p-6 border-white">
                                    <h3 className="text-3xl">Refer a friend to EasyRecruit <br /> and get reward</h3>
                                    <p className="mt-4">See Details...</p>
                                    <img className="w-[250px] h-[200px]" src={referImg} alt="" />

                                </div>

                            </div>
                        </div>
                    </div>


                </Modal.Body>
            </Modal>
        </div>
    );

}
export default Login;