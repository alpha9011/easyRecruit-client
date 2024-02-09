import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51Oe7BxBFKVxdQIZ0stxU2e5n5EOaP1manIMB8H8ju0I5mpRttFnfQPOOsc9VfORjYmOi5PacjyyWCsWMpSSQkc5B00Li8wRA3p');


const Payment = () => {



    return (
        <div className="max-w-5xl mx-auto">
            <Elements stripe={stripePromise} >
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;