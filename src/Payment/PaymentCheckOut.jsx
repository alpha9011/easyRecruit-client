
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PaymentCheckOut = () => {
    const {user, selectedPlan,
        setSelectedPlan,
        productLimit,
        setProductLimit}  =useContext(AuthContext);

        console.log(user.email);

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements(); 
    
    // console.log(user);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(selectedPlan, productLimit);
                if (selectedPlan && productLimit) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ price: selectedPlan }),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.clientSecret);
                setClientSecret(data.clientSecret);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }, [selectedPlan, productLimit]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
            
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            // console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                // console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    status: 'pending', 
                    plan: selectedPlan
                }

                try {
                    const response = await fetch('http://localhost:5000/payments', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payment),
                    });
                
                    const data = await response.json();

                    console.log('payment saved', data);
                
                    if (data?.paymentResult?.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Thank you for the Payment",
                            showConfirmButton: true,
                            timer: 1500,
                        });
                        navigate('/payments');//navigate to dashboard home
                    }
                } catch (error) {
                    console.error('Error:', error);
                }

            }
        }

    }

    return (
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
      />
      <button className="btn btn-md border-t-cyan-500 my-4" type="submit">
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default PaymentCheckOut;

//////////////////////////////////
// code from aminul
///////////////////////////

// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// // import swal from "sweetalert";

// const PaymentCheckOut = () => {

//   const [clientSecret, setClientSecret] = useState("");

//   const [transID, setTransId] = useState()
//   const [error, setError] = useState()
//   const stripe = useStripe();
//   const elements = useElements();

//   const { user,selectedPlan,
//     setSelectedPlan,
//     productLimit,
//     setProductLimit } = useContext(AuthContext)



//   useEffect(() => {

//     console.log(selectedPlan, productLimit);



//     fetch('http://localhost:3000/create-payment-intent', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ price: selectedPlan })
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
 
//   }, [productLimit,selectedPlan])

//   const handleSubmit = async event => {
//     event.preventDefault()





//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement)
//     if (card === null) {
//       return
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card", card
//     })

//     if (error) {
//       console.log("payment error,", error);
//       setError(error.message)

//     }

//     else {
//       console.log('payment method', paymentMethod);
//       setError('')
//     }

//     // confirm payment 
//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,

//       {
//         payment_method: {
//           card: card,
//           billing_details: {
//             name: user.displayName || 'anonymous',
//             email: user.email || 'anonymous',
//           },
//         },
//       },
//     )
//     if (confirmError) {
//     //   swal("Oops!", "Payment unsuccessful !", "error");
//     }
//     else {
//       console.log('payment intent', paymentIntent);
//       if (paymentIntent.status === 'succeeded') {
//         console.log(paymentIntent.id, "is your transID");
//         setTransId(paymentIntent.id)
//         // swal("Well done!", "Payment successful !", "success");


//         // data saved in database 
//         const payment = {
//           email: user.email,
//           name: user.displayName,
//           transID: paymentIntent.id,
//           price: selectedPlan,
//           date: new Date(),
//         }



//         fetch('http://localhost:3000/payment', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ payment }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data)
//             if(data.insertedId){
//             //   swal("Well done!", "Payment successful !", "success");
//             }

//           })


//       }


//     }


//   }


//   return (
//     <div >
//       <form onSubmit={handleSubmit}>


//         <CardElement></CardElement>

// <div className="pt-12">
// <button disabled={!stripe} className="btn btn-primary px-6  py-2 rounded-full" type="submit">PAY</button>

// </div>
//       </form>
//       <p className="text-red-500" > {error}</p>
//       <p>  {transID}</p>
//     </div>
//   );
// };

// export default PaymentCheckOut;




