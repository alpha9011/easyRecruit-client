
import { FaCalendarDays } from "react-icons/fa6";
import Aos from "aos";
import'aos/dist/aos.css';
import { useEffect } from "react";


const Card = ({ job }) => {


    useEffect(() => {
        Aos.init()
    },[])


    const { img1, position, dateApplied, shortDes } = job;
    return (
        <div className=" w-96 shadow-xl p-12" data-aos="fade-up" data-aos-duration="1000">

            <img className="h-48 transition-transform duration-300 transform origin-center hover:scale-110 cursor-pointer rounded-sm w-fit" src={img1} alt="hi" />

           <div className="space-y-3">
           <h5 className="text-2xl mt-4 text-gray-900 dark:text-gray-400">{position}
            </h5>
            <div className="flex gap-1"><FaCalendarDays className="text-xs"/>
            <p className="text-xs text-gray-700 dark:text-gray-400">{dateApplied}</p></div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {shortDes}
            </p>
            <button className=" border-2 px-4 py-2"> Read more</button>
           </div>
        </div>
    );
};

export default Card;