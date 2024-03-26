import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import profile from '../../../public/Image/profile.jpg'
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { motion } from 'framer-motion';
const Blog = ({ item, refetch }) => {


  const { blogImage, title, description, _id, name, date, time } = item;



  // Delete handler for delete a job
  const handleDelete = () => {
    console.log(`want to delete ${_id}`);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://easy-recruit-server.vercel.app/blog/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your Job Post has been deleted.",
                icon: "success"
              });
            }
          })
      }


    });
  }

 



  return (
    <>
    <div >
    <motion.div
          className="max-w-sm pb-3 h-[500px] hover:translate-y-3 transition-transform duration-300"
          whileHover={{ translateY: -10 }} // Translate the card 10 pixels upward on hover
        >
      <Card
        className="max-w-sm pb-3 h-[500px] hover:translate-y-3 transition-transform duration-300 "
        // imgAlt=""
        // imgSrc={blogImage}
      >
        <img className="w-full h-[250px]" src={blogImage} alt="" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        {description.length > 100 ? `${description.slice(0, 80)}...` : description}
        </p>


        <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>
            <img className="w-[50px] rounded-3xl" src={profile} alt="" />
          </div>
          <div>
            <p>{name}</p>
            <p>{date}</p>
          </div>
        </div>
        <p>{time} min</p>
        </div>

      <div className="flex items-center justify-between">
      <Link to={`/blog/${_id}`}><button className="btn hover:bg-gray-300 hover:text-gray-600 bg-gray-400 px-4 py-1 rounded-3xl">Details</button></Link>
        <div className="flex items-center gap-3">
        <button onClick={handleDelete}><RiDeleteBin6Fill className="text-red-500 text-2xl" /></button>
        <Link to={`/updateBlog/${_id}`}><GrUpdate className="text-green-500 text-2xl"/></Link>
        </div>
      </div>
      </Card>
      </motion.div>
    </div>
    </>
  );
};

export default Blog;