import {  Label, Modal, TextInput } from "flowbite-react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";


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
                    text: "Please provide an e-mail" ,
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
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} >
                <Modal.Header />
                <Modal.Body>
                    <h2 className="text-3xl text-center">Hi, Welcome Back!</h2>
                    
                    <form action="" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <div className="mb-2 mt-4 block">
                                    <Label htmlFor="email" value="Your email" />
                                </div>
                                <TextInput ref={emailRef} id="email2" name='email' type="email" placeholder="name@flowbite.com" required shadow />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your password*" />
                                </div>
                                <TextInput id="password" name='password' type="password" placeholder="******" shadow />
                            </div>

                            <div >

                                <a href="#" onClick={handleForgotPass}>Forgot Password</a>

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
                            className="bg-green-500 text-white px-4 py-2 rounded w-full focus:outline-none"
                        >
                            LOGIN
                        </button>
                    </form>

                    


                    <div className="my-4">
                        <GoogleLogin />
                        <FacebookLogin/>
                    </div>
                    <p className="text-center mt-4">Still do not have an account? <Link className="text-cyan-600" to={'/register'}>Sign up</Link></p>
                    
                </Modal.Body>
            </Modal>
        </div>
    );

}
export default Login;