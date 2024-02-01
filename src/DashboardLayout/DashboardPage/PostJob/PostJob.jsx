import { useForm } from "react-hook-form";
import { GoCheckCircle } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa";
import Toastify from 'toastify-js'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const PostJob = () => {
    const axiospublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        axiospublic.post('/postjob', data)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Toastify({
                    text: "Job Posted succesfully",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
                reset()
              }
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
                   <label >Company Name<span className="text-red-600">*</span></label>
                    <input type="text" className="mt-1 input border-none w-full"  {...register("companyName", { required: true })} placeholder="your company name" required />
                   </div>

                    <div>
                    <label>About your Company<span className="text-red-600">*</span></label>
                    <textarea {...register("aboutCompany", { required: true })} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="About your Company" required></textarea>
                    </div>

                    <div>
                    <label>Position Summary<span className="text-red-600">*</span></label>
                    <textarea {...register("positionSummary", { required: true })} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="Job Position summary" required></textarea>
                    </div>

                    <div>
                    <label>Job Responsibilities<span className="text-red-600">*</span></label>
                    <textarea {...register("responsibilities", { required: true })} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="Job Responsibilities" required></textarea>
                    </div>

                    <div>
                    <label>Qualifications<span className="text-red-600">*</span></label>
                    <textarea {...register("qualifications", { required: true })} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="Qualifications" required></textarea>
                    </div>

                    <div>
                    <label>Education & Experience<span className="text-red-600">*</span></label>
                    <textarea {...register("education", { required: true })} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="Education & Experience" required></textarea>
                    </div>

                    <div>
                    <label>Anything about job or employe benifits</label>
                    <textarea {...register("benifits")} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="Anything about job or employe benifits" ></textarea>
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
                            <option value="Remote">Remote</option>
                            <option value="Office">Office</option>
                            <option value="Onsite">Onsite</option>
                           
                        </select>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                 <div >
                        <label>Salary</label>
                        <input type="text" {...register("salary")} className="mt-1 input border-none w-full" placeholder="2000 - 3000 "  />

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