
import { useForm } from "react-hook-form";
import { GoCheckCircle } from "react-icons/go";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UpdateJob = () => {
    // const axiosPublic = useAxiosPublic()
    const job = useLoaderData();
    const { _id, title, companyName, location, salary,
        deadline,experience,jobType,benifits,education,qualifications,responsibilities,positionSummary,aboutCompany,logo} = job;
    const { register, handleSubmit, reset } = useForm()
console.log(aboutCompany);
    // Update Handeler
    const onSubmit = (data) => {
        console.log(data);
        reset();
        fetch(`http://localhost:5000/postjob/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Successfully Updated!!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        // axiosPublic.put(`/postjob/${_id}`)
        //     .then(res => {
        //         console.log(res.data);
        //         if (res.data.modifiedCount > 0) {
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: `Updated Success!!`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //         }
        //     })
    }
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-[500px] px-3 bg-slate-100">
            <h1 className="text-center text-3xl md:text-2xl font-bold my-2">Update Your Job</h1>
            <h1 className="text-center text-xl md:text-xl font-bold mb-10">{title}</h1>
            <div className="bg-slate-200 w-full max-w-screen-md p-5 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

<div className="grid grid-cols-2 gap-3">
    <div>
        <label >Job title<span className="text-red-600">*</span></label>
        <input type="text" defaultValue={title} className="mt-1 input border-none w-full"  {...register("title", { required: true })} placeholder="e.g. Senior Product Designer" required />
    </div>
    <div >
        <label>Job location<span className="text-red-600">*</span></label>
        <input type="text" defaultValue={location} {...register("location", { required: true })} className="mt-1 input border-none w-full" placeholder="e.g. 'New York City' " required />

    </div >
</div>


<div className="grid grid-cols-2 gap-3">
    <div>
        <label >Company Name<span className="text-red-600">*</span></label>
        <input type="text" defaultValue={companyName} className="mt-1 input border-none w-full"  {...register("companyName", { required: true })} placeholder="your company name" required />
    </div>

    <div>
        <label >Company Logo<span className="text-red-600">*</span></label>
        <input type="text" defaultValue={logo} className="mt-1 input border-none w-full"  {...register("logo", { required: true })} placeholder="Company Logo URL" required />
    </div>
</div>

<div>
    <label>About your Company<span className="text-red-600">*</span></label>
    <textarea {...register("aboutCompany",  { required: true })} className="mt-1 input border-none w-full" defaultValue={aboutCompany} id="" cols="30" rows="4" placeholder="About your Company" required></textarea>
</div>

<div>
    <label>Position Summary<span className="text-red-600">*</span></label>
    <textarea {...register("positionSummary", { required: true })} className="mt-1 input border-none w-full" defaultValue={positionSummary} id="" cols="30" rows="4" placeholder="Job Position summary" required></textarea>
</div>

<div>
    <label>Job Responsibilities<span className="text-red-600">*</span></label>
    <textarea {...register("responsibilities", { required: true })} className="mt-1 input border-none w-full" defaultValue={responsibilities} id="" cols="30" rows="4" placeholder="Job Responsibilities" required></textarea>
</div>

<div>
    <label>Qualifications<span className="text-red-600">*</span></label>
    <textarea {...register("qualifications", { required: true })} className="mt-1 input border-none w-full" defaultValue={qualifications} id="" cols="30" rows="4" placeholder="Qualifications" required></textarea>
</div>

<div>
    <label>Education <span className="text-red-600">*</span></label>
    <textarea {...register("education", { required: true })} className="mt-1 input border-none w-full" defaultValue={education} id="" cols="30" rows="4" placeholder="Education " required></textarea>
</div>

<div>
    <label>Anything about job or employe benifits</label>
    <textarea {...register("benifits")} className="mt-1 input border-none w-full" defaultValue={benifits} id="" cols="30" rows="4" placeholder="Anything about job or employe benifits" ></textarea>
</div>



<div className="grid grid-cols-2 gap-3">
    
    <div >
        <label>Workplace Type<span className="text-red-600">*</span></label>
        <select {...register("jobType")} defaultValue={jobType} required className="mt-1 input border-none w-full">
            
            <option value="Remote">Remote</option>
            <option value="Office">Office</option>
            <option value="Onsite">Onsite</option>

        </select>
    </div>
    <div >
        <label>Experience<span className="text-red-600">*</span></label>
        <select {...register("experience")} defaultValue={experience} required className="mt-1 input border-none w-full">
            
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
        <input type="text" defaultValue={salary} {...register("salary")} className="mt-1 input border-none w-full" placeholder="2000 - 3000 " />

    </div >
    <div >
        <label>Application Deadline</label>
        <input type="date" defaultValue={deadline} {...register("date")} className="mt-1 input border-none w-full" placeholder="" />
    </div>
</div>

<div className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">
    <GoCheckCircle className="text-lg text-white font-bold"></GoCheckCircle>
    <input type="submit" value='Update your job' className="cursor-pointer" />
</div>


</form>
            </div>
        </div>
    );
};

export default UpdateJob;