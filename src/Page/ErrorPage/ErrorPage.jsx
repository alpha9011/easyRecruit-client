import Lottie from "lottie-react";
import errorAnim from "../../../public/Json/coming.json"

const ErrorPage = () => {
    return (
        <div className="max-h-10 border">
            <Lottie animationData={errorAnim} className="border h-screen"></Lottie>
        </div>
    );
};

export default ErrorPage;