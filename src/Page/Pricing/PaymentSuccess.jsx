import Lottie from "lottie-react";
import { Link, useParams } from "react-router-dom";
import animation from "../../Json/payment-success.json"
import { Button } from "flowbite-react";

const PaymentSuccess = () => {
    const { tranId } = useParams()
    return (
        <div className="text-center">
            <Lottie animationData={animation} className="max-w-sm mx-auto"></Lottie>
            <h1 className="text-4xl md:text-6xl font-medium">Payment Successful</h1>
            <h3 className="text-xl md:text-2xl my-5"><span className="text-green-500 font-bold">Tansaction Id:</span> {tranId}</h3>
            <div className="flex justify-center">
                <Link to={"/"}>
                    <Button outline gradientDuoTone="cyanToBlue">
                        Go to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;