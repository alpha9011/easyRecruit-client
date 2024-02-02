import { FaArrowRightLong } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";


const JobCard = (jobs) => {
  console.log(jobs.jobs);
  const { _id, title, location, salary, jobType, tags } = jobs.jobs || {}

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
            <div>
              <Link to={`/updateJob/${_id}`} className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2">Update<FaArrowRightLong></FaArrowRightLong> </Link>
              <Button onClick={() => handleDelete(_id)}>
                {/* <HiShoppingCart className="mr-2 h-5 w-5" /> */}
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default JobCard;

