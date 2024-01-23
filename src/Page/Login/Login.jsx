import { Label, Modal, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import GoogleLogin from "./GoogleLogin";

const Login = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }
    const [openModal, setOpenModal] = useState(false);


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
                console.log(error.message);

                Toastify({
                    text: "Login failed",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #b30000, #ff6666)",
                    }
                }).showToast();

            });
    }


    return (
        <div>

            <Link className="text-cyan-700 text-center ml-8" onClick={() => setOpenModal(true)}>SIGN IN</Link>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} >
                <Modal.Header />
                <Modal.Body>
                    <h2 className="text-3xl text-center">Hi, Welcome Back!</h2>
                    <p className="text-center mt-4">Still do not have an account? <Link className="text-cyan-600" to={'/register'}>Sign up</Link></p>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="space-y-4">
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

                    <label className="label">
                        <div className="mt-4 flex justify-between">
                            <p>Have an account?</p> <Link to="/login" className="text-cyan-600 label-text-alt link link-hover">Please Login</Link>
                        </div>
                    </label>


                    <div className="my-4">
                        <GoogleLogin />
                    </div>

                    <div className="flex justify-center items-center mt-4">
                        <p>Have an account? </p>
                        <Login></Login>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );

}
export default Login;