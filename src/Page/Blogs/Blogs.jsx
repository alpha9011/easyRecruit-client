import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Blog from "./Blog";
import { useQuery } from "@tanstack/react-query";
import { FaPen } from "react-icons/fa";
import Footers from "../../shared/Footer/Footers";

const Blogs = () => {


  const axiosPublic = useAxiosPublic()

  const { refetch, data: blogs = [] } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs`)
      const blogItem = res.data;

      return blogItem
    }
  })


  return (
    <div>
      <div >

        <div className="py-12 flex justify-between  px-24 " >
          <div>
            <h1 className="text-4xl font-bold">Blog</h1>
            <h3 className="text-xl mt-2">Get the latest news, updates and tips</h3>
          </div>

          <div>
            <Link to={'/createBlog'}><div className="flex gap-1 items-center text-xl bg-gray-400 px-4 pr-12 py-2"><FaPen></FaPen>Create Blog</div></Link>

          </div>
        </div>

      </div> 

      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {
          blogs.map(item => <Blog refetch={refetch} item={item} key={item._id}></Blog>)
        }
      </div>
      <Footers/>

    </div>
  );
};

export default Blogs;