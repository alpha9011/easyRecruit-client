import { FaArrowRightLong } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const JobCard = (jobs) => {
    console.log(jobs.jobs.title);
    const { _id, title,location, salary, jobType, tags } = jobs.jobs || {}
    return (
        <div>
    <div
            
            className="bg-white  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
          >
            
            <div className="flex items-start mb-4 p-5">
              <div>
             
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-xl">{title}</p>

                <div className="flex gap-5 opacity-80">
                  <span className="flex justify-center items-center ">
                    <CiLocationOn />
                    <p className="text-gray-700 ml-1">{location}</p>
                  </span>
                  <span className="flex justify-center items-center">
                    <FaMoneyCheckDollar />
                    <p className="text-gray-700 ml-1">${salary}</p>
                  </span>
                </div>

                <div className="flex gap-5">
                  <span className="border rounded-full text-sm bg-blue-50 px-2">
                    <p className="text-blue-500 p-1">
                     {jobType}
                    </p>
                  </span>
                </div>

                <h3 className="">{tags}</h3>
                <Link to={`/jobdetails/${_id}`} className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">See Details <FaArrowRightLong></FaArrowRightLong> </Link>
              </div>
            </div>
          </div>

   
        </div>
    );
};

export default JobCard;

