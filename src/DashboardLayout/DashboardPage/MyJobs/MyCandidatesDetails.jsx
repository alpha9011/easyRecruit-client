import { Table } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Modal } from "flowbite-react";
const MyCandidatesDetails = ({ candidate }) => {
  const [openModal, setOpenModal] = useState(false);

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
    isSelected,
    jobTitle,
  } = candidate || {};
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center ">
      <Table.Cell className="flex justify-center">
        {" "}
        <img src={photo} alt="" className="w-12 h-12 rounded-full " />{" "}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {name}
      </Table.Cell>
      <Table.Cell>{jobTitle}</Table.Cell>
      <Table.Cell>{isSelected || "Waiting"}</Table.Cell>

      <Table.Cell>
        <button onClick={() => setOpenModal(true)}>See Details</button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          className="pt-10 md:pt-0 backdrop-filter backdrop-blur "
        >
          {/* <Modal.Header >
           
            <div className="w-full flex justify-center items-center bg-red-500 ">
              
              <div className="w-full bg-green-500 text-center">

                  <img
                    src={photo}
                    alt="candidate photo"
                    className="absolute -top-12 left-0 right-0 w-24 h-24 rounded-full mx-auto"
                  />
                  <h1>{name}</h1>
                  <h4 className="text-sm">Apply Date: {applyDate}</h4>
              </div>             
            </div>
          </Modal.Header> */}
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

              <a
                href={resume}
                rel="noreferrer"
                className="text-blue-500 hover:scale-105 duration-300 hover:translate-x-3"
                target="_blank"
                
              >
                Resume
              </a>
              <a
                href={coverLetter}
                rel="noreferrer"
                className="text-blue-500 hover:scale-105 duration-300 hover:translate-x-3"
                target="_blank"
              >
                Cover Letter
              </a>
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
          </Modal.Body>
        </Modal>
      </Table.Cell>
    </Table.Row>
  );
};
MyCandidatesDetails.propTypes = {
  candidate: PropTypes.object,
};
export default MyCandidatesDetails;
