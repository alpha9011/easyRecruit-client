import { useForm } from "react-hook-form";
import { GoCheckCircle } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const PostJob = () => {
    const axiospublic = useAxiosPublic()
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        axiospublic.post('/postjob', data)
        .then(res => {
            console.log(res.data);
        })
    }

    return (
        <div>
            <h1 className="font-semibold text-2xl mb-5 flex items-center gap-2"><FaGraduationCap className="text-blue-700"/> Tell us about your role</h1>
            <h2></h2>

            <div className="mr-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                   <div>
                   <label >Job title<span className="text-red-600">*</span></label>
                    <input type="text" className="mt-1 input border-none w-full"  {...register("title", { required: true })} placeholder="e.g. Senior Product Designer" required />
                   </div>
                    <div>
                    <label>Add your job description<span className="text-red-600">*</span></label>
                    <textarea {...register("description", { required: true })} className="mt-1 input border-none w-full" id="" cols="30" rows="10" placeholder="Description" required></textarea>
                    </div>



                 <div className="grid grid-cols-2 gap-3">
                 <div >
                        <label>Job location<span className="text-red-600">*</span></label>
                        <input type="text" {...register("location", { required: true })} className="mt-1 input border-none w-full" placeholder="e.g. 'New York City' " required />

                    </div >
                    <div >
                        <label>Workplace Type<span className="text-red-600">*</span></label>
                        <select {...register("jobType")} className="mt-1 input border-none w-full">
                        <option selected disabled>select a type</option>
                            <option value="remote">Remote</option>
                            <option value="office">Office</option>
                            <option value="onsite">Onsite</option>
                           
                        </select>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                 <div >
                        <label>Salary</label>
                        <input type="text" {...register("salary")} className="mt-1 input border-none w-full" placeholder="$2000 - $3000 "  />

                    </div >
                    <div >
                    <label>Tags(optional)</label>
                        <input type="text" {...register("tags")} className="mt-1 input border-none w-full" placeholder="Figma, Ui/Ux, Sketch "  />
                    </div>
                 </div>

                    <div  className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">
                    <GoCheckCircle className="text-lg text-white font-bold"></GoCheckCircle>
                    <input type="submit" value='Post New Job' className="cursor-pointer" />
                    </div>
                   
                   
                </form>
            </div>
        </div>
    );
};

export default PostJob;