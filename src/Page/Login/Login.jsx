import { Label, Modal, TextInput } from "flowbite-react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import GoogleLogin from "./GoogleLogin";
import { MdOutlineMail } from "react-icons/md";
import { MdKey } from "react-icons/md";
// import bgRegister from '../../assets/women.jpg'
import refer from "../../../public/refer.json";
import gift from "../../../public/gift.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";

const Login = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const [openModal, setOpenModal] = useState(false);

  const emailRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { login, forgotPass } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get input field
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    login(email, password)
      .then((currentUser) => {
        console.log(currentUser.user);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Login failed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleForgotPass = () => {
    const email = emailRef.current.value;
    if (!email) {
    
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "please provide an email",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "please provide an valid email",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    forgotPass(email)
      .then(() => {
       
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Please provide an e-mail",
            showConfirmButton: false,
            timer: 1500,
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Link
        className="text-cyan-700 text-center ml-8"
        onClick={() => setOpenModal(true)}
      >
        SIGN IN
      </Link>
      <Modal
        show={openModal}
        size="6xl"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body className="2 ">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-8 py-8 lg:px-12 gap-6 md:gap-8 lg:gap-12">
              <div className="w-2/3">
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
                      <TextInput
                        ref={emailRef}
                        id="email"
                        type="email"
                        placeholder="email"
                        required
                        shadow
                      />
                    </div>

                    <div className="mt-4 mb-2">
                      <div className="flex mb-2 gap-1 items-center">
                        <MdKey className="text-blue-600" />
                        <div className="block">
                          <Label htmlFor="password" value="Password" />
                        </div>
                      </div>
                      <TextInput
                        id="password"
                        type="password"
                        placeholder="password"
                        required
                        shadow
                      />
                    </div>

                    <div>
                      <a
                        href="#"
                        className="hover:underline"
                        onClick={handleForgotPass}
                      >
                        Forgot Password
                      </a>
                    </div>

                    <div>
                      <ReCAPTCHA
                        className="my-4 "
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
                <p className="text-center mt-4">
                  Still do not have an account?
                  <Link className="text-cyan-600" to={"/register"}>
                    SIGN UP
                  </Link>
                </p>
              </div>

              <div className="transform rounded transition-transform duration-300 hover:scale-105 hover:bg-gray-100 border-2 border-blue-400">
                <div className="p-6">
                  <div className="flex items-center">
                    <h3 className="text-3xl">
                      Refer a friend <br /> and get reward
                    </h3>

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
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Login;
