import Lottie from "lottie-react";
import errorAnim from "../../Json/newError.json"
import ErrorNavbar from "./ErrorNavbar";

const ErrorPage = () => {
    return (
        <div className="bg-slate-700 h-svh">
            <div className="flex items-center justify-center pt-10 md:mb-5 mx-5">
                <Lottie animationData={errorAnim} className="h-[80vh]"></Lottie>
            </div>
            <ErrorNavbar></ErrorNavbar>
        </div>
    );
};

export default ErrorPage;