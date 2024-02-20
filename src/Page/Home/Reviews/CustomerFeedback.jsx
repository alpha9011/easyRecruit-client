import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const CustomerFeedback = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0); // State to store rating

    const onSubmit = async (data) => {

        const feedbackInfo = {
            email: user?.email,
            name:user?.displayName,
            image:user?.photoURL,
            feedback: data.feedback,
            rating: rating,
            // userName: data.userName,
            // userEmail: data.userEmail,
        }
        console.log(feedbackInfo);
        // send data to backend
        axiosPublic.post('/feedback', feedbackInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Thankyou For Your FeedBack",
                        showConfirmButton: false,
                        timer: 1500,

                    });

                    reset()
                }
            })
    }
     // Function to handle rating click
     const handleRatingClick = (value) => {
        setRating(value);
    };

    // If user is not logged in, display message and links
    if (!user) {
        return (
            <div className="p-8 mx-auto">
                <h2 className="text-4xl text-green-600 text-center font-bold">Please Log In to Give Feedback</h2>
                <p className="text-center font-semibold text-xl">You need to be logged in to give feedback.</p>
                <div className="flex justify-center space-x-4 mt-8">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Log In</button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Register</button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Go Back</button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 mx-auto">
            <h2 className="text-4xl text-green-600 text-center font-bold">Please Give Your Feed<span className="text-yellow-400">Back</span></h2>
            <p className="text-center font-semibold text-xl">Your Feedback helps us to improve</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                    <h3>Rating</h3>
                    {/* Rating Component */}
                    <div className="flex justify-center space-x-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <button
                                key={value}
                                type="button"
                                onClick={() => handleRatingClick(value)}
                                className={`text-xl focus:outline-none ${rating >= value ? 'text-yellow-400' : 'text-gray-400'}`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>
                
                    {/* <div>
                        <label>Name<span className="text-red-600">*</span></label>
                        <textarea {...register("userName", { required: true })} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="Your Name" required></textarea>
                    </div>

                    <div>
                        <label>eMail<span className="text-red-600">*</span></label>
                        <textarea {...register("userEmail", { required: true })} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="Your Email" required></textarea>
                    </div> */}

                    <div>
                        <label>FeedBack<span className="text-red-600">*</span></label>
                        <textarea {...register("feedback", { required: true })} className="mt-1 input border-sky-400 border-1 w-full" id="" cols="15" rows="3" placeholder="Your Feedback" required></textarea>
                    </div>
                    <div className=" px-3 py-2 bg-white text-black border-2 border-sky-400 hover:text-white  rounded-md hover:bg-sky-400 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">
                        {/* <GoCheckCircle className="text-lg text-white font-bold"></GoCheckCircle> */}
                        <input type="submit" value='Please Submit' className="cursor-pointer" />
                    </div>
                
                </form>
        </div>
    );
};

export default CustomerFeedback;


