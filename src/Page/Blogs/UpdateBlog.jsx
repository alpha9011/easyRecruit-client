import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {

    const blog = useLoaderData()

    const {title, blogImg,description,name, date, time } = blog;

    const { register, handleSubmit } = useForm()

    const axiosPublic = useAxiosPublic()

    const onSubmit = async (data) => {

         // update 
         axiosPublic.put(`/blog/${blog._id}`, data)
         .then(res => {
             console.log(res.data);
             if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Successfully Updated!!`,
                    showConfirmButton: false,
                    timer: 1500
                });
             }
         })


    }



    return (
        <div className="max-w-4xl my-12 mx-auto">
            <h3 className="text-4xl  text-center mb-12">Update Blog</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                <div>
                    <label >Blog Image<span className="text-red-600">*</span></label>
                    <input type="file" className="mt-3 input border  w-full" defaultValue={blogImg}   {...register("blogImage", { required: true })} placeholder="Image URL" required />
                </div>

                <div>
                    <label >Blog title<span className="text-red-600">*</span></label>
                    <input type="text" className="mt-3 input border  w-full" defaultValue={title}   {...register("title", { required: true })} placeholder="e.g. 11 way to write resume" required />
                </div>
                <div >
                    <label>Description<span className="text-red-600">*</span></label>
                    <input type="text  " defaultValue={description} {...register("description", { required: true })} className="mt-3 input border  w-full" placeholder="e.g. Our mission is to create the world most sustainable healthcare company" required />

                </div >


                {/* <div>
                    <label >Profile Image<span className="text-red-600">*</span></label>
                    <input type="file" className="mt-3 input border  w-full" defaultValue={profileImg}   {...register("profileImage", { required: true })} placeholder="Image URL" required />
                </div> */}

                <div >
                    <label>Blogger Name<span className="text-red-600">*</span></label>
                    <input type="text  " defaultValue={name} {...register("name", { required: true })} className="mt-3 input border  w-full" placeholder="e.g. Jhon Doe" required />

                </div >

                <div >
                    <label>Blog Date</label>
                    <input type="date  " defaultValue={date} {...register("date")} className="mt-3 input border  w-full" placeholder="" required />
                </div>

                <div >
                    <label>Time to Read<span className="text-red-600">*</span></label>
                    <input type="text  " defaultValue={time} {...register("time", { required: true })} className="mt-3 input border  w-full" placeholder="e.g. 4 min" required />

                </div >

                <input type="submit" value='Update Blog' className="cursor-pointer border bg-gray-300 py-2 px-4" />



            </form>
        </div>
    );
};

export default UpdateBlog;