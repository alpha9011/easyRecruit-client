import { useParams } from "react-router-dom";

const PaymentFail = () => {
    const { tranId } = useParams()
    return (
        <div className="text-center">
            <h1 className="text-6xl">Payment Failed</h1>
            <h3>Tansaction Id: {tranId}</h3>
        </div>
    );
};

export default PaymentFail;