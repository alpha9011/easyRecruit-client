import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheackoutForm from "./CheackoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
console.log(import.meta.env.PAYMENT_KEY)
const MemberShip = () => {
    return (
        <div className="mt-10 max-w-6xl mx-auto h-[75vh]">
            <h1 className="mb-5 font-bold text-center text-2xl">Pay for your choosen Plan</h1>
          <div>
                <Elements stripe={stripePromise}>
                    
                <CheackoutForm></CheackoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default MemberShip;