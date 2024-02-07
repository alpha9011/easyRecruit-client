import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const CandidateForm = () => {
    const axiosPublic = useAxiosPublic()
    // const { register, handleSubmit, reset } = useForm()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axiosPublic.post('/applicantCV', data)
            .then(res => {
                console.log(res.data);
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Applied Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div className="px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-screen-md mx-auto bg-green-50 p-5 rounded-md">

                <div>
                    <label >Full Name<span className="text-red-600">*</span></label>
                    <input type="text" id="name" className="mt-1 input input-bordered w-full"  {...register("name", { required: true })} name='name' placeholder="Full Name" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div >
                    <label>Email<span className="text-red-600">*</span></label>
                    <input type="email" {...register("email", { required: true })} className="mt-1 input input-bordered w-full" placeholder="yourmail@gamil.com" required />

                </div >
                <div >
                    <label>Phone<span className="text-red-600">*</span></label>
                    <input type="text" {...register("phone", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Type your number" required />

                </div >
                <div >
                    <label>Photo URL<span className="text-red-600">*</span></label>
                    <input type="text" {...register("photo", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Your photo URL" required />

                </div >
                <div >
                    <label>Full Address<span className="text-red-600">*</span></label>
                    <input type="text" {...register("address", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Full Address" required />

                </div >
                <div >
                    <label>Country<span className="text-red-600">*</span></label>
                    <input type="text" {...register("country", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Country" required />

                </div >
                <div >
                    <label>Resume<span className="text-red-600">*</span></label>
                    <input type="text" {...register("resume", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Resume drive link" required />
                </div >

                <div>
                    <label>Cover Letter<span className="text-red-600">*</span></label>
                    <textarea {...register("coverLetter", { required: true })} className="mt-1 input input-bordered w-full" id="" cols="30" rows="10" placeholder="Cover Letter" required></textarea>
                </div>

                <div >
                    <label>Linkedin<span className="text-red-600">*</span></label>
                    <input type="text" {...register("linkedin", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Linkedin profile URL" required />
                </div >
                <div >
                    <label>What languages do you speak fluently?</label>
                    <input type="text" {...register("language")} className="mt-1 input input-bordered w-full" placeholder="Linkedin profile URL" />
                </div >

                <div>
                    <label>Desired Salary<span className="text-red-600">*</span></label>
                    <input type="text" {...register("salary", { required: true })} className="mt-1 input input-bordered w-full" placeholder="e.g. $2000-$3000" required />
                </div>

                <div >
                    <label>Gender<span className="text-red-600">*</span></label>
                    <select {...register("gender")} className="mt-1 input input-bordered w-full">

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>

                    </select>
                </div>



                <div className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">

                    <input type="submit" value='Submit Application' className="cursor-pointer" />
                </div>


            </form>
        </div>
    );
};

export default CandidateForm;