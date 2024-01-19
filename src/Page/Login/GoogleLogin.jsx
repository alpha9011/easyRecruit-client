import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const GoogleLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext)


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                Toastify({
                    text: "Login successful",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            })
            .catch(err => {
                console.log(err.message);
            })
    }


    return (
        <div>
            <Link onClick={handleGoogleLogin}>
                <div className="flex items-center gap-2 justify-center border shadow-xl px-4 py-2">
                    <FcGoogle className="text-4xl"/>
                    <p className="text-xl">Continue with Google</p>
                </div>

            </Link>
        </div>
    );
};

export default GoogleLogin;