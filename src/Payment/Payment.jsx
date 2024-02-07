
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentCheckOut from "./PaymentCheckOut";
// import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    return (
        <div className="p-10" style={{
                            backgroundImage: `linear-gradient(to right, rgba(255, 107, 107, 0.5), rgba(255, 224, 102, 0.5))`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
            {/* <Helmet>
                <title>Fashion Store || Payment</title>
            </Helmet> */}
            <h2 className=" text-center text-3xl font-bold text-cyan-700 mb-10 mt-10">Please Pay for your chosen Plan Amount</h2>

            
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentCheckOut></PaymentCheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;


///////////////////////////////////////




// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import PaymentCheckOut from "./PaymentCheckOut";
// const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);



// const Payment = () => {
//     return (
//         <div>        
//             <div style={{
//                 backgroundImage: `linear-gradient(to right, rgba(255, 107, 107, 0.5), rgba(255, 224, 102, 0.5))`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover'
//             }}
//             >
//             <div className="max-w-7xl mx-auto h-[400px] space-y-8 p-24 ">
                
//                     <Elements  stripe={stripePromise} >
//                         <PaymentCheckOut className="p-12" />
//                     </Elements>
//                 </div>
//             </div>
//             </div>
//     );
// };

// export default Payment;

