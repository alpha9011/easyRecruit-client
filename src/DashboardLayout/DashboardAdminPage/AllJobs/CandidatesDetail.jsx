import { Modal, Table } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CandidatesDetail = ({ candidate, refetch }) => {
  const {
    name,
    email,
    phone,
    photo,
    country,
    resume,
    coverLetter,
    lastAcademy,
    language,
    salary,
    gender,
    applyDate,
    _id,
    isSelected,
  } = candidate || {};
  const axiosSecure = useAxiosSecure();
  const [openModal, setOpenModal] = useState(false);

  const handleUpdateSelected = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Select ",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/applicantCV/${id}`)

          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `selected successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  const handlenNOtSelect = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Not Select",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/applicantCV/notSelect/${id}`)

          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `selected successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <Table.Cell>
      <button
        onClick={() => setOpenModal(true)}
        className="hover:text-blue-600 font-semibold"
      >
        Details
      </button>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="pt-10 md:pt-0 backdrop-filter backdrop-blur "
      >
        <Modal.Header className="border-none" />
        <div className="text-center ">
          <img
            src={photo}
            alt="candidate photo"
            className="absolute -top-12 left-0 right-0  w-24 h-24 rounded-full mx-auto hover:shadow-md hover:shadow-[#1D227C]"
          />

          <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
          <h4 className="text-sm">
            <span className="font-semibold">Apply Date : </span>
            {applyDate}
          </h4>
        </div>
        <Modal.Body className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <h2>
              <span className="font-semibold">Email :</span> {email}
            </h2>
            <h2>
              <span className="font-semibold"> Phone:</span> {phone}
            </h2>
            <h3>
              <span className="font-semibold"> Country:</span> {country}
            </h3>

            <h3>
              <span className="font-semibold"> Last Academy: </span>{" "}
              {lastAcademy}
            </h3>
            <h3>
              <span className="font-semibold"> Language: </span> {language}
            </h3>
            <h3>
              <span className="font-semibold"> Expected salary: </span> $
              {salary}
            </h3>
            <h4>
              <span className="font-semibold"> Gender: </span> {gender}
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-5 w-full">
            <a
              href={resume}
              rel="noreferrer"
              className=" hover:scale-105 duration-300  rounded-full w-full text-center text-white bg-blue-500 p-1"
              target="_blank"
            >
              Resume
            </a>
            <a
              href={coverLetter}
              rel="noreferrer"
              className="hover:scale-105 duration-300   rounded-full  text-center text-white bg-green-500 p-1"
              target="_blank"
            >
              Cover Letter
            </a>

            <button
              className="bg-red-600 px-3 py-2 rounded-md text-white w-full"
              onClick={() => handlenNOtSelect(_id)}
            >
              Not Select
            </button>
            <div className="">
              {isSelected === "selected" ? (
                <span className="bg-green-400 px-4 py-2 rounded-md text-white w-full">
                  {" "}
                  selected
                </span>
              ) : (
                <button
                  className="bg-blue-600 px-3 py-2 rounded-md text-white w-full"
                  onClick={() => handleUpdateSelected(_id)}
                >
                  Select
                </button>
              )}
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Body>
          <div>
            <h2>Email:{email}</h2>
            <h2>Phone: {phone}</h2>
            <h3>Country: {country}</h3>
            <a
              href={resume}
              rel="noreferrer"
              className="text-blue-500"
              target="_blank"
            >
              Resume
            </a>
            <a
              href={coverLetter}
              rel="noreferrer"
              className="text-blue-500"
              target="_blank"
            >
              Cover Letter
            </a>
            <h3>Last Academy: {lastAcademy}</h3>
            <h3>Language: {language}</h3>
            <h3>Expected salary: ${salary}</h3>
            <h4>Gender: {gender}</h4>

            <div className="mt-3">
              {isSelected === "selected" ? (
                <span className="bg-green-400 px-4 py-2 rounded-md ">
                  {" "}
                  selected
                </span>
              ) : (
                <button
                  className="bg-blue-600 px-3 py-2 rounded-md text-white"
                  onClick={() => handleUpdateSelected(_id)}
                >
                  Select
                </button>
              )}
            </div>
            <button
              className="bg-red-600 px-3 py-2 rounded-md text-white mt-5"
              onClick={() => handlenNOtSelect(_id)}
            >
              Not Select
            </button>
          </div>
        </Modal.Body> */}
      </Modal>
    </Table.Cell>
  );
};
CandidatesDetail.propTypes = {
  candidate: PropTypes.object,
  refetch: PropTypes.object,
};
export default CandidatesDetail;
