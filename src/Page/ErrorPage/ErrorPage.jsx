import Lottie from "lottie-react";
import errorAnim from "../../Json/coming.json"

const ErrorPage = () => {
    return (
        <div className="max-h-10">
            <Lottie animationData={errorAnim} className="h-screen"></Lottie>
        </div>
    );
};

export default ErrorPage;