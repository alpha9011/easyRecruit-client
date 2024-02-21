import Lottie from "lottie-react";
import { Link, useParams } from "react-router-dom";
import animation from "../../Json/payment-filed.json"
import { Button } from "flowbite-react";

const PaymentFail = () => {
    const { tranId } = useParams()
    return (
        <div className="text-center">
            <Lottie animationData={animation} className="max-w-sm mx-auto"></Lottie>
            <h1 className="text-4xl md:text-6xl font-medium">Payment Failed</h1>
            <h3 className="text-xl md:text-2xl my-5"><span className="text-red-500 font-bold">Tansaction Id:</span> {tranId}</h3>
            <div className="flex justify-center">
                <Link to={"/"}>
                    <Button outline gradientDuoTone="greenToBlue">
                        Go to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentFail;