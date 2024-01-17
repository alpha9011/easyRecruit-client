import { useEffect, useState } from "react";

const LatestJobs = () => {
  const [latestJob, setLatestJob] = useState([]);
  console.log(latestJob);

  useEffect(() => {
    fetch('latestJob.json')
      .then(res => res.json())
      .then(data => setLatestJob(data))
  }, [])
    return (
        <div>
      <h2 className="text-2xl font-bold mb-4">Latest Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {latestJob.map(job => (
          <div key={job.id} className="bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-4 text-black">
            <div className="flex items-start mb-4">
              <img
                src={job.companyLogo}
                alt="Company Logo"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{job.companyName}</h3>
                <p className="text-gray-500">{job.jobTitle}</p>
              </div>
            </div>
            <div>
              <p className="text-blue-500">{job.jobCategory} - {job.jobType}</p>
              <p className="text-gray-700">{job.jobLocation}</p>
              <p className="text-gray-700">{job.salary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default LatestJobs;