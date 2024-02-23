import { Card } from 'flowbite-react';
import {   Link, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import profile from '../../../public/Image/profile.jpg'
import Footers from '../../shared/Footer/Footers';

const BlogDetails = () => {

    const { id } = useParams()

    const axiosSecure = useAxiosSecure()

    const { data: blog = [] } = useQuery({
        queryKey: ['singleBlog'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/blog/${id}`)
            const blogItem = res.data;

            return blogItem
        }
    })

  const { blogImage, title, description,  name, date, time } = blog;



    return (
        <div>
       <Card className="max-w-xl ml-12 mt-8">
        <img className="w-full h-[250px]" src={blogImage} alt="" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
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
      <Link to={`/`}><button className="btn bg-gray-400 px-4 py-1 rounded-3xl">Go Back</button></Link>
       </div>
      </Card>
      <Footers/>
        </div>
    );
};

export default BlogDetails;