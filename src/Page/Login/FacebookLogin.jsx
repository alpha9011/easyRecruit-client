import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { Link } from "react-router-dom";
import fblogo from "../../assets/fb.png"

const FacebookLogin = () => {

    const { signInWithFacebook } = useContext(AuthContext)


    const handleFacebookLogin = () => {
        signInWithFacebook()
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
            <Link onClick={handleFacebookLogin}>
                <div className="flex items-center gap-2 justify-center border shadow-xl px-4 py-2">
                    <p className="text-lg">Continue with</p>
                    <img src={fblogo}  className="w-8" alt="" />
                </div>

            </Link>
        </div>
    );
};

export default FacebookLogin;