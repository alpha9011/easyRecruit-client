import { FaAngleRight } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { MdMovieEdit } from "react-icons/md";
import { FiHome } from "react-icons/fi";

const PopularCategoriy = () => {
    return (

        <div className="max-w-7xl mx-auto bg-[#f2f9d8] p-4 my-4 lg:p-12 lg:my-12" >
            
            <div className="flex-col md:flex lg:flex gap-10">
                <h1 className="text-6xl font-semibold text-[#254035]"> <span className="flex">Most Demanding <img className="-mt-12" src="https://jobi-nextjs.vercel.app/_next/static/media/shape_04.73aa37f7.svg" alt="" /></span>Categories.</h1>
                <div>
                    <p className="text-lg">Together with useful notifications, collaboration, <br /> insights, and improvement tip lorem etc.</p>
                    <button className="border-b-2 flex items-center mt-2 lg:mt-4 text-[#98bd00]">Explore all fields <FaAngleRight /></button>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mx-auto gap-4 lg:gap-12">
            <div  className="h-56 w-48 text-center  transition-transform duration-500 transform origin-center hover:translate-y-[-1rem] cursor-pointer space-y-8  pt-10 pb-8 bg-white mt-12 hover:bg-[#d2f34c]  rounded-3xl">
                <MdDesignServices className="mx-auto text-4xl" />
                <h2 className="text-xl font-bold">UI/UX Design </h2>
                <p>12k+ Jobs</p>
            </div>
            
            
            <div  className="h-56 w-48 text-center  transition-transform duration-500 transform origin-center hover:translate-y-[-1rem] cursor-pointer space-y-8  pt-10 pb-8 bg-white mt-12 hover:bg-[#d2f34c]  rounded-3xl">
                <IoCodeSlash className="mx-auto text-4xl" />
                <h2 className="text-xl font-bold"> Development</h2>
                <p>12k+ Jobs</p>
            </div>
            <div  className="h-56 w-48 text-center  transition-transform duration-500 transform origin-center hover:translate-y-[-1rem] cursor-pointer space-y-8  pt-10 pb-8 bg-white mt-12 hover:bg-[#d2f34c]  rounded-3xl">
                <CiPhone className="mx-auto text-4xl" />
                <h2 className="text-xl font-bold">Telemarketing</h2>
                <p>12k+ Jobs</p>
            </div>
            <div  className="h-56 w-48 text-center  transition-transform duration-500 transform origin-center hover:translate-y-[-1rem] cursor-pointer space-y-8  pt-10 pb-8 bg-white mt-12 hover:bg-[#d2f34c]  rounded-3xl">
                <AiOutlineShopping className="mx-auto text-4xl" />
                <h2 className="text-xl font-bold"> Marketing</h2>
                <p>12k+ Jobs</p>
            </div>
            <div  className="h-56 w-48 text-center  transition-transform duration-500 transform origin-center hover:translate-y-[-1rem] cursor-pointer space-y-8  pt-10 pb-8 bg-white mt-12 hover:bg-[#d2f34c]  rounded-3xl">
                <MdMovieEdit className="mx-auto text-4xl" />
                <h2 className="text-xl font-bold"> Editing</h2>
                <p>12k+ Jobs</p>
            </div>
            <div  className="h-56 w-48 text-center  transition-transform duration-500 transform origin-center hover:translate-y-[-1rem] cursor-pointer space-y-8  pt-10 pb-8 bg-white mt-12 hover:bg-[#d2f34c]  rounded-3xl">
                <FiHome className="mx-auto text-4xl" />
                <h2 className="text-xl font-bold">Accounting </h2>
                <p>12k+ Jobs</p>
            </div>
            </div>

        </div>
    );
};

export default PopularCategoriy;