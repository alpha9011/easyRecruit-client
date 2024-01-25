import { useForm } from "react-hook-form";

const CandidateForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div>
                    <label >Full Name<span className="text-red-600">*</span></label>
                    <input type="text" className="mt-1 input input-bordered w-full"  {...register("name", { required: true })} placeholder="Full Name" required />
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
                        <label>Full Address<span className="text-red-600">*</span></label>
                        <input type="text" {...register("address", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Full Address" required />

                    </div >
                    <div >
                        <label>Country<span className="text-red-600">*</span></label>
                        <input type="text" {...register("address", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Country" required />

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
                        <input type="text" {...register("language")} className="mt-1 input input-bordered w-full" placeholder="Linkedin profile URL"  />
                    </div >

                    <div>
                    <label>Desired Salary<span className="text-red-600">*</span></label>
                    <input type="text" {...register("salary", { required: true })} className="mt-1 input input-bordered w-full" placeholder="e.g. $2000-$3000" required />
                    </div>

                    <div >
                        <label>Gender<span className="text-red-600">*</span></label>
                        <select {...register("gender")} className="mt-1 input input-bordered w-full">
                            <option selected disabled>select a type</option>
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