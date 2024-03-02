import { Card, Spinner } from "flowbite-react";
import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ImBin } from "react-icons/im";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const MyJobCard = ({ myjob, refetch }) => {
  console.log(myjob);
  const {
    logo,
    title,
    jobType,
    location,

    aboutCompany,
    positionSummary,
    companyName,
    postDate,
    deadline,
    responsibilities,
    qualifications,
    education,
    benifits,
    _id,
  } = myjob || {};
  const [openModal, setOpenModal] = useState(false);

  const axiosSecure = useAxiosSecure();
  const { isLoading, data: candidates = [] } = useQuery({
    queryKey: ["candidates"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applicantCV");
      const applier = res.data;
      const candidate = applier.filter(
        (apply) => apply.companyName === companyName && apply.jobTitle === title
      );
      return candidate;
    },
  });
  console.log(candidates);
  if (isLoading) {
    return (
      <div className=" h-screen flex items-center justify-center">
        <Spinner aria-label="Large spinner example" size="lg" />
      </div>
    );
  }

  // Delete handler for delete a job
  const handleDelete = (_id) => {
    console.log(`want to delete ${_id}`);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/postjob/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your Job Post has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <>
      <div className="hover:-translate-y-1 duration-150 border-none">
        <Card className="text-center ">
          <div className="flex justify-center items-center relative">
            <img src={logo} alt="company logo" className="h-40" />
            <p className="font-normal  dark:text-gray-400 absolute top-0 left-0 bg-blue-600 px-4  text-white rounded-md text-sm">
              {" "}
              {jobType}
            </p>
          </div>
          <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
            {title}
          </h5>
          <div className="flex justify-center">
            <p className="text-gray-500 -mt-3 flex items-center gap-2">
              <CiLocationOn /> {location}
            </p>
          </div>

          <div className="flex gap-2 justify-center">
            <Link
              to={`/dashboard/updateJob/${_id}`}
              className=" px-3 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2"
            >
              <FaRegPenToSquare />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-600 rounded px-3 py-2"
            >
              <ImBin className="text-white" />
            </button>

            <Link
              to={`/dashboard/myCandidate/${_id}`}
              className=" px-3 py-2 bg-blue-700 text-white  rounded-md hover:bg-slate-800 hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-fit gap-2"
            >
              <FaUsers />
            </Link>
          </div>

          <Button
            onClick={() => setOpenModal(true)}
            className="px-2 py-1 mt-5 bg-blue-700 hover:bg-blue-900 text-white  rounded-md  hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-full gap-2 "
          >
            See Details
          </Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
              {" "}
              <div className="flex items-center gap-2 mb-3">
                <div>
                  <img src={logo} className="border w-20 rounded-lg shadow" />
                </div>
                <div className="ml-2">
                  <h2>{title}</h2>
                  <h3 className="text-sm ">{companyName}</h3>
                  <div className="flex items-center gap-5 text-gray-500">
                    <p className="ml-1 text-sm flex items-center gap-1">
                      {" "}
                      <IoLocationOutline /> {location}
                    </p>
                    <p className="font-normal text-white bg-blue-500 text-sm px-2 py-1 rounded-md">
                      {jobType}
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <h4 className="text-sm">Post Date: {postDate}</h4>
                    <h4 className="text-sm">Deadline: {deadline}</h4>
                  </div>
                </div>
              </div>
            </Modal.Header>
            {/* update and delete */}

            <Modal.Body>
              <div className="space-y-3">
                <div>
                  <h2 className="font-semibold mb-1">About Company:</h2>
                  <p className="text-base  text-gray-500 dark:text-gray-400 text-justify">
                    {aboutCompany}
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold mb-1">Position Summary:</h2>
                  <p className="text-base  text-gray-500 dark:text-gray-400 text-justify">
                    {positionSummary}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold mb-1">Responsibilities:</h2>
                  <p className="text-base  text-gray-500 dark:text-gray-400 text-justify">
                    {responsibilities}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold mb-1">Qualifications:</h2>
                  <p className="text-base  text-gray-500 dark:text-gray-400 text-justify">
                    {qualifications}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold mb-1">Education:</h2>
                  <p className="text-base  text-gray-500 dark:text-gray-400 text-justify">
                    {education}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold mb-1">Others Benifit:</h2>
                  <p className="text-base  text-gray-500 dark:text-gray-400 text-justify">
                    {benifits}
                  </p>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </Card>
      </div>
    </>
  );
};

MyJobCard.propTypes = {
  myjob: PropTypes.object,
  refetch: PropTypes.object,
};
export default MyJobCard;
