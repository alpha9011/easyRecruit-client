import Lottie from "lottie-react";
import errorAnim from "../../Json/newError.json"

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center mt-16 mx-5">
            <Lottie animationData={errorAnim} className="h-[80vh]"></Lottie>
        </div>
    );
};

export default ErrorPage;