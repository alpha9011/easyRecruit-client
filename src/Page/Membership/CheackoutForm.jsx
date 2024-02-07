import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";


const CheackoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')

    const handleSubmit= async (event) => {
        
        event.preventDefault()
        if(!stripe || !elements) {
            return 
        }
        const card = elements.getElement(CardElement)
        if(card === null) {
            return
        }
        const {error,  paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error) {
            console.log('payment Error' , error);
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setError('')
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "CONGRATULATIONS!! you get Golden badge",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                ></CardElement>

        
                <button className="btn btn-accent mt-4" type="submit" disabled={!stripe }>Pay</button>
                <p className="text-red-500">{error && error}</p>
            </form>
        </div>
    );
};

export default CheackoutForm;