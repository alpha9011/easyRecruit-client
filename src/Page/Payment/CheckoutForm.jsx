import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {



    const [error, setError] = useState()
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async event => {
 event.preventDefault()


 if (!stripe || !elements) {
    return;
  }

  const card = elements.getElement(CardElement)
  if(card === null ){
    return
  }

  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: "card", card
  })

  if(error){
    console.log("payment error,", error);
    setError(error.message)

  }

  else{
    console.log('payment method', paymentMethod);
    setError('')
  }

    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
  {/* Options are spread onto the component as props. */}

<CardElement>
options={{
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontSize: '16px',
        margin: '0',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  }}

</CardElement>

<button className="btn btn-primary" type="submit">PAY</button>

            </form>
            <p className="text-red-500" > ⚠{error}</p>
        </div>
    );
};

export default CheckoutForm;