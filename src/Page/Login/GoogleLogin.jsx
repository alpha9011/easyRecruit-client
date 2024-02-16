import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const GoogleLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext)


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successful",
                    showConfirmButton: false,
                    timer: 1500
                  });

            })
            .catch(err => {
                console.log(err.message);
            })
    }


    return (
        <div>
            <Link onClick={handleGoogleLogin}>
                <div className="flex items-center justify-start gap-2 mb-2 rounded hover:bg-gray-200 px-4 py-2 ">
                    <p className=" border-r-2 pr-2 ">Or, Sign in with...</p>
                    <FcGoogle className="text-4xl" />
                </div>

            </Link>
        </div>
    );
};

export default GoogleLogin;