import { useForm } from "react-hook-form";
import { GoCheckCircle } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa";
import Toastify from 'toastify-js'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const PostJob = () => {
    const axiospublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()
    const { user } = useContext(AuthContext)
    // console.log(user?.email);



    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const postDate = date.toLocaleDateString('en-US', options);

    // console.log(postDate);

    const imageBBKey = import.meta.env.VITE_IMAGEBB

    const imageBBApi = `https://api.imgbb.com/1/upload?key=${imageBBKey}`

    const onSubmit = async (data) => {

        const imageFile = { image: data.logo[0] }

        const res = await axiospublic.post(imageBBApi, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        //    console.log(res.data.data.display_url );
        const image = res.data.data.display_url
        console.log(image);
        const postjob = {
            title: data.title,
            location: data.location,
            email: user?.email,
            companyName: data.companyName,
            logo: image,
            aboutCompany: data.aboutCompany,
            positionSummary: data.positionSummary,
            responsibilities: data.responsibilities,
            qualifications: data.qualifications,
            education: data.education,
            benifits: data.benifits,
            jobType: data.jobType,
            experience: data.experience,
            salary: data.salary,
            postDate: postDate,
            deadline: data.date,
            vacancy: data.vacancy
        }
        console.log(postjob);
        axiospublic.post('/postjob', postjob)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
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
            <h1 className="font-semibold text-2xl mb-5 flex items-center gap-2"><FaGraduationCap className="text-blue-700" /> Tell us about your role</h1>
            <h2></h2>

            <div className="mr-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label >Job title<span className="text-red-600">*</span></label>
                            <input type="text" className="mt-1 input border-none w-full"  {...register("title", { required: true })} placeholder="e.g. Senior Product Designer" required />
                        </div>
                        <div >
                            <label>Job location<span className="text-red-600">*</span></label>
                            <input type="text" {...register("location", { required: true })} className="mt-1 input border-none w-full" placeholder="e.g. 'New York City' " required />

                        </div >
                    </div>


                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label >Company Name<span className="text-red-600">*</span></label>
                            <input type="text" className="mt-1 input border-none w-full"  {...register("companyName", { required: true })} placeholder="your company name" required />
                        </div>

                        <div>
                            <label >Company Logo<span className="text-red-600">*</span></label>
                            <input type="file" className="mt-1 input border-none w-full"  {...register("logo", { required: true })} placeholder="Company Logo URL" required />
                        </div>
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
                        <label>Education <span className="text-red-600">*</span></label>
                        <textarea {...register("education", { required: true })} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="Education " required></textarea>
                    </div>

                    <div>
                        <label>Anything about job or employe benifits</label>
                        <textarea {...register("benifits")} className="mt-1 input border-none w-full" id="" cols="30" rows="4" placeholder="Anything about job or employe benifits" ></textarea>
                    </div>



                    <div className="grid grid-cols-2 gap-3">

                        <div >
                            <label>Workplace Type<span className="text-red-600">*</span></label>
                            <select {...register("jobType")} required className="mt-1 input border-none w-full">

                                <option value="Remote">Remote</option>
                                <option value="Office">Office</option>
                                <option value="Onsite">Onsite</option>

                            </select>
                        </div>
                        <div >
                            <label>Experience<span className="text-red-600">*</span></label>
                            <select {...register("experience")} required className="mt-1 input border-none w-full">

                                <option value="Freasher">Freasher</option>
                                <option value="6 month+">6 month+</option>
                                <option value="1 year+">1 year+</option>
                                <option value="2 year+">2 year+</option>
                                <option value="3 year+">3 year+</option>
                                <option value="4 year+">4 year+</option>
                                <option value="5 year+">5 year+</option>

                            </select>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div >
                            <label>Salary</label>
                            <input type="text" {...register("salary")} className="mt-1 input border-none w-full" placeholder="2000 - 3000 " />

                        </div >
                        <div >
                            <label>Application Deadline</label>
                            <input type="date" {...register("date")} className="mt-1 input border-none w-full" placeholder="" />
                        </div>
                    </div>

                    <div >
                        <label>Post vacancy</label>
                        <input type="number" {...register("vacancy")} className="mt-1 input border-none w-full" placeholder="vacancy" />
                    </div>

                    <div className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">
                        <GoCheckCircle className="text-lg text-white font-bold"></GoCheckCircle>
                        <input type="submit" value='Post New Job' className="cursor-pointer" />
                    </div>


                </form>
            </div>
        </div>
    );
};

export default PostJob;