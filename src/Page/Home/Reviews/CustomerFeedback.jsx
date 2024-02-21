/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaHandSparkles } from "react-icons/fa";


import Swal from "sweetalert2";

const CustomerFeedback = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0); // State to store rating

    const onSubmit = async (data) => {

        const feedbackInfo = {
            email: user?.email,
            name: user?.displayName,
            image: user?.photoURL,
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
            <div className="flex items-center justify-center relative ">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                    style={{
                        backgroundImage: `url('https://i.ibb.co/LrMJbrv/bg.jpg')`, // Replace 'your-image-url.jpg' with the URL of your background image
                        opacity: 0.5, // Adjust the opacity as needed
                    }}
                ></div>

                <div className="max-w-2xl text-center rounded-tr-3xl transition-transform duration-500 transform origin-center bg-yellow-50 hover:shadow-2xl   border-t-8 border-r-8 border-blue-400">
                    <div className="p-6">
                        <h2 className="text-2xl text-left font-semibold mb-2 flex"><span><BsStars className="text-yellow-300 mt-1" /></span> We would Love To Here From You</h2>
                        <p className="text-left font-normal text-lg"><span><FaHandSparkles className="text-yellow-300  text-xl mt-1" /></span> Hey there! You are Here because you are an valued EasyRecruit visitor . We'd love to receive your UI experience feedback so that we can improve our UI and make user friendly for you and others</p>
                    </div>
                    <form className="">
                        <div>
                            {/* Rating Component */}
                            <div className="flex justify-center space-x-2 mt-5">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <button
                                        key={value}
                                        type="button"
                                        onClick={() => handleRatingClick(value)}
                                        className={`text-4xl hover:cursor-pointer hover:scale-110 hover:text-yellow-400  focus:outline-none ${rating >= value ? 'text-yellow-400' : 'text-gray-400'}`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                            <h3 className="text-center mt-3 text-lg">Rate Us </h3>

                        </div>


                        <div className="p-5">
                            <label className="flex text-lg font-normal">FeedBack<span className="text-red-600">*</span></label>
                            <textarea {...register("feedback", { required: true })} className="mt-1 input border-sky-400 border-1 w-full" id="" cols="15" rows="3" placeholder="What would like to tell usk" required></textarea>
                        </div>

                    </form>
                    <button disabled className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-10">Submit</button>

                </div>
            </div>

        );
    }

    return (
        <div className="flex items-center justify-center relative p-5">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                style={{
                    // backgroundImage: `url('https://i.ibb.co/sjcjk2F/bg-4.jpg')`, 
                    backgroundImage: `url('https://i.ibb.co/LrMJbrv/bg.jpg')`, 
                    
                    // opacity: 0.5, 
                }}
            ></div>
            <div className="max-w-2xl text-center rounded-tr-3xl transition-transform duration-500 transform origin-center bg-yellow-50 hover:shadow-2xl   border-t-8 border-r-8 border-yellow-300 ">



                <div className="p-5 m-2">
                    <h2 className="text-2xl text-left font-semibold mb-2 flex gap-2"> <span><BsStars className="text-yellow-300 mt-1" /></span> We would Love To Here From You</h2>
                    <p className="text-left font-light text-lg flex gap-2"> <span><FaHandSparkles className="text-yellow-300  text-xl mt-1" /></span> Hey there! You are Here because you are an valued EasyRecruit customer. We'd love to receive your feedback so that we can improve for you and others</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div>

                        {/* Rating Component */}
                        <div className="flex justify-center space-x-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => handleRatingClick(value)}
                                    className={`text-4xl hover:cursor-pointer hover:scale-110 hover:text-yellow-400  focus:outline-none ${rating >= value ? 'text-yellow-400' : 'text-gray-400'}`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        <h3 className="text-center mt-2 text-lg">Rate us </h3>
                    </div>


                    <div className="p-2 mx-4">
                        <label className="flex text-lg font-normal">FeedBack<span className="text-red-600">*</span></label>
                        <textarea {...register("feedback", { required: true })} className="mt-1 input border-sky-400 border-1 w-full" id="" cols="15" rows="3" placeholder="What would like to tell us" required></textarea>
                    </div>
                    <div className="p-5">
                        <button
                            type="submit"
                            className="px-3 py-2 bg-white text-black border-2 border-sky-400 hover:text-white rounded-md hover:bg-sky-400 hover:-translate-y-[2px] duration-75 cursor-pointer"
                        >
                            Please Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CustomerFeedback;


