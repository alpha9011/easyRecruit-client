import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";



const JobCard = (jobs) => {
  console.log(jobs.jobs);
  const { _id, title, location, salary, jobType, logo, companyName, positionSummary, deadline } = jobs.jobs || {}
  return (
    <div className="flex justify-center">
      <div className="">

        <div
          className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span className="z-10 absolute top-0.5 right-3 text-base  leading-7 text-sky-500 transition-all duration-300 group-hover:text-white">{jobType}</span>
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <div>
                <img src={logo} className="h-20 w-20 rounded-full" alt="Company Logo" />
              </div>
            </span>
            <div
              className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 ">
              <div className="hover:scale-110 duration-500">
                <h3 className="text-xl font-bold text-sky-500 transition-all duration-300 group-hover:text-white">{companyName}</h3>
                <p className="text-sm"> {location}</p>
              </div>
              <div className="flex justify-between">
                <h3 className="text-lg font-bold">{title}</h3>
                <h3 className="text-sky-500 transition-all duration-300 group-hover:text-white font-semibold">${salary}<span className="text-sm text-black">/Month</span></h3>
              </div>

              <p className="">{positionSummary.slice(0, 75)}......</p>
            </div>
            <div className="pt-5 flex justify-between text-base font-semibold leading-7">
              <p className=" text-sky-500 transition-all duration-300 group-hover:text-white font-semibold hover:scale-110">
                Deadline: <span className="text-black"> {deadline}</span>
              </p>
             <p>
             <Link to={`/jobdetails/${_id}`} className="text-sky-500 transition-all duration-300 group-hover:text-white flex before:ease relative overflow-hidden shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-50 before:duration-1000
                    hover:before:-translate-x-40 hover:scale-110">See Details <FaArrowRightLong className="mt-2 ml-2" />

                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>



    </div>

  );
};

export default JobCard;

