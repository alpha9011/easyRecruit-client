import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";



const CandidateForm = () => {
    const axiosPublic = useAxiosPublic()
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const postDate = date.toLocaleDateString('en-US', options);
    const {email,  companyName,title,logo} = useLoaderData()
    console.log(email, companyName,title);
   
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
// this is  candidate apply form
const imageBBKey = import.meta.env.VITE_IMAGEBB
const imageBBApi =`https://api.imgbb.com/1/upload?key=${imageBBKey}`
    const onSubmit = async(data) => {

        const imageFile = {image: data.photo[0]} 
       
        const res = await axiosPublic.post(imageBBApi, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    //    console.log(res.data.data.display_url );
       const image = res.data.data.display_url
       console.log(image);
        const applicatnCV = {
            name:data.name,
            email:data.email,
            phone:data.phone,
            photo:image,
            country:data.country,
            resume:data.resume,
            coverLetter:data.coverLetter,
            lastAcademy:data.lastAcademy,
            language:data.language,
            salary:data.salary,
            gender:data.gender,
            companyName:companyName,
            jobTitle:title,
            jobPostEmail:email,
            applyDate:postDate,
        }
        console.log(applicatnCV);
        axiosPublic.post('/applicantCV', applicatnCV)
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
            <img src={logo} alt="" className="w-20"/>
        <h1>{companyName}</h1>
        <h1>{title}</h1>
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
                    <input type="file" {...register("photo", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Your photo URL" required />
</div>
            
                <div >
                    <label>Country<span className="text-red-600">*</span></label>
                    <input type="text" {...register("country", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Country" required />

                </div >
                <div >
                    <label>Resume<span className="text-red-600">*</span></label>
                    <input type="text" {...register("resume", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Resume drive link" required />
                </div >
                <div >
                    <label>Cover Letter<span className="text-red-600">*</span></label>
                    <input type="text" {...register("coverLetter", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Cover Letter drive link" required />
                </div >

          

                <div >
                    <label>Last academic status <span className="text-red-600">*</span></label>
                    <input type="text" {...register("lastAcademy", { required: true })} className="mt-1 input input-bordered w-full" placeholder="e.g. Hons, Masters" required />
                </div >
                <div >
                    <label>What languages do you speak fluently?<span className="text-red-600">*</span></label>
                    <input type="text" {...register("language", { required: true })} className="mt-1 input input-bordered w-full" placeholder="e.g. Bangla, English, Hindi" />
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