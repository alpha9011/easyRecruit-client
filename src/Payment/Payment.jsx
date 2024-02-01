import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentCheckOut from "./PaymentCheckOut";
// import { Helmet } from "react-helmet-async";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    return (
        <div className="p-10">
            {/* <Helmet>
                <title>Fashion Store || Payment</title>
            </Helmet> */}
            <h2 className="text-3xl font-bold text-cyan-700 mb-10 mt-10">Please APay for your chosen Plan Amount</h2>

            
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentCheckOut></PaymentCheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;



/*
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentCheckOut from "./PaymentCheckOut";
import { Helmet } from "react-helmet-async";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    return (
        <div className="p-10">
            <Helmet>
                <title>Fashion Store || Payment</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-cyan-700 mb-10 mt-10">Pay Your Plan Amount</h2>
            
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentCheckOut></PaymentCheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;

*/ 