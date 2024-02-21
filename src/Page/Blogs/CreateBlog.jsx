
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CreateBlog = () => {

    const { register, handleSubmit , reset} = useForm()

    const axiospublic = useAxiosPublic()

    const imageBBKey = import.meta.env.VITE_IMAGEBB
    const imageBBApi = `https://api.imgbb.com/1/upload?key=${imageBBKey}`


    const onSubmit = async (data) => {

        const imageFile = { image: data.blogImage[0] }
        // const imageFile = { image: data.profileImage[0] }

        const res = await axiospublic.post(imageBBApi, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const image = res.data.data.display_url
        console.log(data);
        
        const blogPost = {
            blogImage : image,
            title : data.title,
            // profileImage : image,
            description : data.description,
            name : data.name,
            date : data.date,
            time : data.time,

        }

        console.log(blogPost);

        axiospublic.post('/blogs', blogPost)
        .then(res => {
            console.log(res.data);
            if (res.data.insertedId) {

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Job Posted successfully",
                    showConfirmButton: false,
                    timer: 1500,

                });

                reset()
            }
        })

    }



    return (
        <div className="max-w-4xl my-12 mx-auto">
            <h3 className="text-4xl  text-center mb-12">Create Post</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                <div>
                    <label >Blog Image<span className="text-red-600">*</span></label>
                    <input type="file" className="mt-3 input border  w-full"  {...register("blogImage", { required: true })} placeholder="Image URL" required />
                </div>

                <div>
                    <label >Blog title<span className="text-red-600">*</span></label>
                    <input type="text" className="mt-3 input border  w-full"  {...register("title", { required: true })} placeholder="e.g. 11 way to write resume" required />
                </div>
                <div >
                    <label>Description<span className="text-red-600">*</span></label>
                    <input type="text" {...register("description", { required: true })} className="mt-3 input border  w-full" placeholder="e.g. Our mission is to create the world most sustainable healthcare company" required />

                </div >


                {/* <div>
                    <label >Profile Image<span className="text-red-600">*</span></label>
                    <input type="file" className="mt-3 input border  w-full"  {...register("profileImage", { required: true })} placeholder="Image URL" required />
                </div> */}

                <div >
                    <label>Blogger Name<span className="text-red-600">*</span></label>
                    <input type="text" {...register("name", { required: true })} className="mt-3 input border  w-full" placeholder="e.g. Jhon Doe" required />

                </div >

                <div >
                    <label>Blog Date</label>
                    <input type="date" {...register("date")} className="mt-3 input border  w-full" placeholder="" required />
                </div>

                <div >
                    <label>Time to Read<span className="text-red-600">*</span></label>
                    <input type="text" {...register("time", { required: true })} className="mt-3 input border  w-full" placeholder="e.g. 4 min" required />

                </div >
                
                    <input type="submit" value='Create New Blog' className="cursor-pointer border bg-gray-300 py-2 px-4" />
              


            </form>
        </div>
    );
};

export default CreateBlog;