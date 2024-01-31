import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const LatestJobs = () => {
  const [latestJob, setLatestJob] = useState([]);
  console.log(latestJob);

  useEffect(() => {
    fetch("latestJob.json")
      .then((res) => res.json())
      .then((data) => setLatestJob(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {latestJob.map((job) => (
          <div
            key={job.id}
            className="bg-white  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
          >
            
            <div className="flex items-start mb-4 p-5">
              <div>
                <img
                  src={job.companyLogo}
                  alt="Company Logo"
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">{job.jobTitle}</p>

                <div className="flex gap-5 opacity-80">
                  <span className="flex justify-center items-center ">
                    <CiLocationOn />
                    <p className="text-gray-700 ml-1">{job.jobLocation}</p>
                  </span>
                  <span className="flex justify-center items-center">
                    <FaMoneyCheckDollar />
                    <p className="text-gray-700 ml-1">{job.salary}</p>
                  </span>
                </div>

                <div className="flex gap-5">
                  <span className="border rounded-full text-sm bg-blue-50 px-2">
                    <p className="text-blue-500 p-1">
                      {job.jobCategory} - {job.jobType}
                    </p>
                  </span>
                </div>

                <h3 className="text-lg font-bold">{job.companyName}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
