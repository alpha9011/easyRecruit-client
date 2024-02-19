
import { Modal, Table } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types"

import { Link } from "react-router-dom";

const CandidatesDetail = ({candidate}) => {
    const { name, email,phone,photo,country,resume,coverLetter,lastAcademy,language,salary,gender,applyDate, _id} = candidate || {}

    const [openModal, setOpenModal] = useState(false);


    return (
        <Table.Cell><button onClick={() => setOpenModal(true)} className="hover:text-blue-600 font-semibold">Details</button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="w-full">    <div className="">
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
                
                </div></Modal.Header>

                <Modal.Body >
                   <div>
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

  
          <div>
            <Link to={`/dashboard/CVmanage/${_id}`}> CV Mangagement</Link>
          </div>
                   </div>
                </Modal.Body>

            </Modal>
        </Table.Cell>
    );
};
CandidatesDetail.propTypes = {
  candidate: PropTypes.object,
  refetch: PropTypes.object
}
export default CandidatesDetail;