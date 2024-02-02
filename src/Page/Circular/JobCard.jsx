import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import Swal from "sweetalert2";
import { IoLocationOutline } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import { FaRegPenToSquare } from "react-icons/fa6";


const JobCard = (jobs) => {
  console.log(jobs.jobs);
  const { _id, title, location, salary, jobType, logo, companyName, positionSummary } = jobs.jobs || {}

  // Delete Handeler
  const handleDelete = _id => {
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
        fetch(`http://localhost:5000/postjob/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
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
    <div className="flex justify-center">
      <Card className="w-96 bg-green-50 transition-transform duration-500 transform origin-center hover:translate-y-[-.5rem]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div>
              <img src={logo} className="border w-20 rounded-lg shadow" />
            </div>
            <div>
              <p className="font-semibold text-xl">{companyName}</p>
              <div className="flex items-center text-gray-500">
                <IoLocationOutline />
                <p className="ml-1"> {location}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">{title}</p>
              <div className="flex gap-5">
                <span className="border rounded-full text-sm bg-blue-50 px-2">
                  <p className="text-blue-500 font-medium p-1">
                    {jobType}
                  </p>
                </span>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-light">{positionSummary}</p>
            </div>
            <div className="flex items-baseline pb-5">
              <p className="font-bold text-3xl text-blue-600">${salary}</p>
              <p className="text-gray-400">/Month</p>
            </div>
            {/* <div className="flex gap-5 opacity-80">
              <span className="flex justify-center items-center ">
                <CiLocationOn />
                <p className="text-gray-700 ml-1">{location}</p>
              </span>
              <span className="flex justify-center items-center">
                <FaMoneyCheckDollar />
                <p className="text-gray-700 ml-1">${salary}</p>
              </span>
            </div> */}
            {/* <h3 className="">{tags}</h3> */}
            <div className="flex justify-between">
              <Link to={`/jobdetails/${_id}`} className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">See Details <FaArrowRightLong></FaArrowRightLong> </Link>
              <div className="flex gap-2">
                <Link to={`/updateJob/${_id}`} className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2"><FaRegPenToSquare /></Link>
                <button onClick={() => handleDelete(_id)} className="bg-red-600 rounded px-3 py-2">
                  <ImBin className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default JobCard;

