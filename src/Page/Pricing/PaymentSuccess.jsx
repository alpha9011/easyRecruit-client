import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
    const { tranId } = useParams()
    return (
        <div className="text-center">
            <h1 className="text-6xl">Payment Successfull</h1>
            <h3>Tansaction Id: {tranId}</h3>
        </div>
    );
};

export default PaymentSuccess;