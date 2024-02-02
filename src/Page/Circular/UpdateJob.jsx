import { Button, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UpdateJob = () => {
    // const axiosPublic = useAxiosPublic()
    const job = useLoaderData();
    const { _id, title, companyName, location, salary } = job;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

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
            <h1 className="text-center text-5xl md:text-6xl font-bold my-2">Update Your Job</h1>
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">{title}</h1>
            <div className="bg-slate-200 w-full max-w-screen-md p-5 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-8">
                    {/* row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Job Title" />
                            </div>
                            <TextInput id="title" type="text" {...register("title", { required: true })} name='title' defaultValue={title} shadow />
                            {errors.title && <span className="text-red-600">Job Title is required</span>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="company" value="Company Name" />
                            </div>
                            <TextInput id="company" type="text" {...register("company", { required: true })} name='company' defaultValue={companyName} shadow />
                            {errors.company && <span className="text-red-600">Company Name is required</span>}
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="about" value="About Company" />
                            </div>
                            <textarea id="about" type="text" {...register("about", { required: true })} name='about' placeholder="Write Something about your company" className="w-full h-32 shadow rounded" />
                            {errors.about && <span className="text-red-600">About your company is required</span>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="summury" value="Position Summury" />
                            </div>
                            <textarea id="summury" type="text" {...register("summury", { required: true })} name='summury' placeholder="Write Something about position summury" className="w-full h-32 shadow rounded" />
                            {errors.summury && <span className="text-red-600">Summury of this position is required</span>}
                        </div>
                    </div>
                    {/* row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="responsibilities" value="Responsibilities" />
                            </div>
                            <TextInput id="responsibilities" type="text" {...register("responsibilities", { required: true })} name='responsibilities' placeholder="Write Something about position responsibilities" shadow />
                            {errors.responsibilities && <span className="text-red-600">Responsibilities of this post is required</span>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="qualifications" value="Qualifications" />
                            </div>
                            <TextInput id="qualifications" type="text" {...register("qualifications", { required: true })} name='qualifications' placeholder="Write Something about position qualifications" shadow />
                            {errors.qualifications && <span className="text-red-600">Qualifications is required</span>}
                        </div>
                    </div>
                    {/* row 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="eduEx" value="Education & Experience" />
                            </div>
                            <TextInput id="eduEx" type="text" {...register("eduEx", { required: true })} name='eduEx' placeholder="Education & Experience" shadow />
                            {errors.eduEx && <span className="text-red-600">Education & Experience is required</span>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="benifits" value="Anything about job or employe benifits" />
                            </div>
                            <TextInput id="benifits" type="text" {...register("benifits", { required: true })} name='benifits' placeholder="Anything about job or employe benifits" shadow />
                            {errors.benifits && <span className="text-red-600">Benifits is required</span>}
                        </div>
                    </div>
                    {/* row 5 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="location" value="Job Location" />
                            </div>
                            <TextInput id="location" type="text" {...register("location", { required: true })} name='location' defaultValue={location} shadow />
                            {errors.location && <span className="text-red-600">location is required</span>}
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="jobType" value="Select your job type" />
                            </div>
                            <Select id="jobType" name="jobType" {...register("jobType", { required: true })} >
                                {/* <option selected disabled>Select a type</option> */}
                                <option>Remote</option>
                                <option>Onsite</option>
                                <option>Paid-Intern</option>
                                <option>Unpaid-Intern</option>
                                <option>Contractual</option>
                            </Select>
                            {errors.jobType && <span className="text-red-600">job type is required</span>}
                        </div>
                    </div>
                    {/* row 6 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="salary" value="2000$ - 3000$" />
                            </div>
                            <TextInput id="salary" type="text" {...register("salary", { required: true })} name='salary' defaultValue={salary} shadow />
                            {errors.salary && <span className="text-red-600">salary is required</span>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="tags" value="Tags(optional)" />
                            </div>
                            <TextInput id="tags" type="text" {...register("tags", { required: true })} name='tags' placeholder="Your tags" shadow />
                            {errors.tags && <span className="text-red-600">Tags is required</span>}
                        </div>
                    </div>
                    {/* <div>
                        <div className="mb-2 block">
                            <Label htmlFor="logo" value="company logo" />
                        </div>
                        <FileInput id="logo" {...register("logo", { required: true })} name='logo' />
                        {errors.logo && <span className="text-red-600">logo URL is required</span>}
                    </div> */}
                    <div className="w-full flex justify-center">
                        <Button gradientMonochrome="cyan" type="submit" className="w-full md:w-1/2">Update Job</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateJob;