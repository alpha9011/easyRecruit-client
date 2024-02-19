import { Button, Card, Label, TextInput } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
// import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const PackDetiles = () => {
    const { _id, pack_name, job_limit, price, short_details, feature_1, feature_2, feature_3 } = useLoaderData();
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()

    // hook form things
    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const orderInfo = {
            id: _id,
            name: data.name,
            email: data.email,
            price: data.price
        }
        console.log(orderInfo);
        axiosPublic.post('/order', orderInfo)
            .then(res => {
                console.log(res.data);
                window.location.replace(res.data.url);
                // if (res.data.insertedId) {
                //     Swal.fire({
                //         position: "top-end",
                //         icon: "success",
                //         title: "Payment send successFully",
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                //     reset()
                // }
            })
    }

    return (
        <div>
            <h1 className="text-center text-6xl font-bold my-4">Purchese your favorite pack</h1>
            <div className="flex flex-col justify-center items-center md:flex-row gap-10 lg:gap-32 mt-10">
                {/* pack card */}
                <div className="flex md:w-1/2 justify-center md:justify-end items-center">
                    <Card className='w-[360px] max-h-md'>
                        <h5 className="text-4xl font-semibold -mb-2 bg-gradient-to-r from-[#6c07ae] to-[#4c39b7] inline-block text-transparent bg-clip-text">{pack_name}</h5>
                        <h5 className="mb-3 text-gray-500 dark:text-gray-400">{short_details}</h5>
                        <div className="flex flex-row justify-around">
                            <div className="flex flex-col items-center bg-slate-100 py-4 w-36 rounded-sm">
                                <FaRegCircleUser className="bg-blue-200 rounded-full text-xl mb-2"></FaRegCircleUser>
                                <p className="text-xs font-bold">Unlimited Users</p>
                            </div>
                            <div className="flex flex-col items-center bg-slate-100 py-4 w-36 rounded-sm">
                                <BiBriefcaseAlt2 className="bg-blue-200 rounded-full text-xl mb-2"></BiBriefcaseAlt2>
                                <p className="text-xs font-bold">{job_limit} Open Jobs<span className="text-blue-400"> *</span></p>
                            </div>
                        </div>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        <ul className="my-5 space-y-5">
                            <li className="flex items-center">
                                <GoDotFill className="text-blue-500 mr-1" />
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{feature_1}</span>
                            </li>
                            <li className="flex items-center">
                                <GoDotFill className="text-blue-500 mr-1" />
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                    {feature_2}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <GoDotFill className="text-blue-500 mr-1" />
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{feature_3}</span>
                            </li>
                        </ul>
                    </Card>
                </div>

                {/* payment form */}
                <div className="md:w-1/2 flex justify-center md:justify-start">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md w-full flex-col gap-4 mb-8 bg-slate-100 p-4 rounded-xl">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Name" />
                            </div>
                            <TextInput id="name" type="text" {...register("name", { required: true })} name='name' placeholder="Enter your name here" defaultValue={user?.displayName} shadow />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email address" />
                            </div>
                            <TextInput id="email" type="email" {...register("email", { required: true })} name='email' placeholder="receveres email address" defaultValue={user?.email} shadow />
                            {errors.email && <span className="text-red-600">Email address is required</span>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="price" value="Pack price" />
                            </div>
                            <TextInput id="price" type="number" {...register("price", { required: true })} name='price' defaultValue={price} shadow />
                            {errors.price && <span className="text-red-600">price is required</span>}
                        </div>
                        <Button type="submit" >Pay Now</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PackDetiles;