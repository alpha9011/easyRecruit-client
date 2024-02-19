import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";



const CandidateForm = () => {
    const axiosPublic = useAxiosPublic()
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const postDate = date.toLocaleDateString('en-US', options);
    const {email,  companyName,title,logo, education, country, language, skills,experience,salary} = useLoaderData()
   
   
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
        const resumeFile = {image: data.resume[0]} 
       const coverLetterFile = {image: data.coverLetter[0]} 
        const res = await axiosPublic.post(imageBBApi, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const res2 = await axiosPublic.post(imageBBApi, resumeFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const res3 = await axiosPublic.post(imageBBApi,coverLetterFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    //    console.log(res.data.data.display_url );
       const image = res.data.data.display_url
       const resume = res2.data.data.display_url
       const coverLetter = res3.data.data.display_url
     
        const applicatnCV = {
            name:data.name,
            email:data.email,
            phone:data.phone,
            photo:image,
            country:data.country,
            resume:resume,
            coverLetter:coverLetter,
            lastAcademy:data.education,
            skills:data.skills,
            language:data.languages,
            salary:data.salary,
            experience:data.experience,
            gender:data.gender,
            applyDate:postDate,

            // companyInformation
            companyName:companyName,
            jobTitle:title,
            jobPostEmail:email,
            jobEducation:education,
            jobSkills:skills,
            jobLanguage:language,
            jobCountry:country,
            jobExperience:experience,
            jobsalary:salary
            
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
           
               <div  className="grid grid-cols-2 gap-3">

               <div >
                    <label>Email<span className="text-red-600">*</span></label>
                    <input type="email" {...register("email", { required: true })} className="mt-1 input input-bordered w-full" placeholder="yourmail@gamil.com" required />

                </div >
               <div >
                    <label>Phone<span className="text-red-600">*</span></label>
                    <input type="text" {...register("phone", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Type your number" required />

                </div >
           
               </div>
              <div className="grid grid-cols-2 gap-3">
              <div >
                    <label>Photo URL<span className="text-red-600">*</span></label>
                    <input type="file" {...register("photo", { required: true })} className="mt-1 input input-bordered w-full" required />

                </div >
                <div >
                    <label>Resume<span className="text-red-600">*</span></label>
                    <input type="file" {...register("resume", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Resume drive link" required />
                </div >
              </div>
   
               <div className="grid grid-cols-2 gap-3">

                <div >
                    <label>Cover Letter<span className="text-red-600">*</span></label>
                    <input type="file" {...register("coverLetter", { required: true })} className="mt-1 input input-bordered w-full" placeholder="Cover Letter drive link" required />
                </div >
                <div>
                    <label>Desired Salary<span className="text-red-600">*</span></label>
                    <input type="text" {...register("salary", { required: true })} className="mt-1 input input-bordered w-full" placeholder="e.g. $2000-$3000" required />
                </div>
               </div>

             
                {/* education and skills */}
                <div className="grid grid-cols-2 gap-3">
                    <div >
                            <label>Education<span className="text-red-600">*</span></label>
                            <select {...register("education")} required className="mt-1 input  w-full">

                                <option value="HSC">HSC</option>
                                <option value="HONOURS Technial">HONOURS(Technical)</option>
                                <option value="HONOURS (Non-Technical)">HONOURS(Non-Technical)</option>
                                <option value="MASTERS(Technical)">MASTERS(Technical)</option>
                                <option value="MASTERS (Non-Technical)">MASTERS(Non-Technical)</option>
                                <option value="Others">Others</option>
                               

                            </select>
                        </div>

                        <div >
                            <label>Skills<span className="text-red-600">*</span></label>
                            <select {...register("skills")} required className="mt-1 input e w-full">

                                <option value="HTML">HTML</option>
                                <option value="HTML">CSS</option>
                               
                               

                            </select>
                        </div>

                    </div>

                    {/* cuntry and language */}
                    <div className="grid grid-cols-2 gap-3">
                    <div>
                            <label >Country<span className="text-red-600">*</span></label>
                            <input type="text" className="mt-1 input  w-full"  {...register("country", { required: true })} placeholder="your Country" required />
                        </div>
                        <div >
                            <label>Language<span className="text-red-600">*</span></label>
                            <select {...register("languages")} required className="mt-1 input  w-full">

                                <option value="Bangla">Bangla</option>
                                <option value="English">English</option>
                                <option value="Others">Others</option>

                            </select>
                        </div>
                
                    </div>


            <div className="grid grid-cols-2 gap-3">
            <div >
                            <label>Experience<span className="text-red-600">*</span></label>
                            <select {...register("experience")} required className="mt-1 input  w-full">

                                <option value="Freasher">Freasher</option>
                                <option value="6 month+">6 month+</option>
                                <option value="1 year+">1 year+</option>
                                <option value="2 year+">2 year+</option>
                                <option value="3 year+">3 year+</option>
                                <option value="4 year+">4 year+</option>
                                <option value="5 year+">5 year+</option>

                            </select>
                        </div>

                <div >
                    <label>Gender<span className="text-red-600">*</span></label>
                    <select {...register("gender")} className="mt-1 input input-bordered w-full ">

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>

                    </select>
                </div>
            </div>



                <div className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">

                    <input type="submit" value='Submit Application' className="cursor-pointer" />
                </div>


            </form>
        </div>
    );
};

export default CandidateForm;