import { Table } from "flowbite-react";
import PropTypes  from 'prop-types'
import { useState } from "react";
import {  Modal } from 'flowbite-react';
const MyCandidatesDetails = ({candidate}) => {
  const [openModal, setOpenModal] = useState(false);

    const{ name, email,phone,photo,country,resume,coverLetter,lastAcademy,language,salary,gender,applyDate, isSelected,jobTitle} = candidate || {}
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
           <Table.Cell className="flex justify-center"> <img src={photo} alt="" className="w-12 h-12 rounded-full "/> </Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{name}</Table.Cell>
        <Table.Cell>{jobTitle}</Table.Cell>
        <Table.Cell>{isSelected || 'Waiting'}</Table.Cell>
       
        <Table.Cell>
        <button onClick={() => setOpenModal(true)}>See Details</button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="w-full">    <div className="">
                  <div>
                  <img src={photo} alt="candidate photo" className="w-24 "/>
                   <h1>{name}</h1>
                   <h4 className="text-sm">Apply Date: {applyDate}</h4>
                  </div>
                
                </div></Modal.Header>

                <Modal.Body >
                   <div>
                    <h2>Email:{email}</h2>
                    <h2>Phone: {phone}</h2>
                    <h3>Country: {country}</h3>
                    <a href={resume} rel="noreferrer" className="text-blue-500" target="_blank">Resume</a>
                    <a href={coverLetter} rel="noreferrer" className="text-blue-500" target="_blank">Cover Letter</a>
                    <h3>Last Academy: {lastAcademy}</h3>
                    <h3>Language: {language}</h3>
                    <h3>Expected salary: ${salary}</h3>
                    <h4>Gender: {gender}</h4>

           
                   </div>
                </Modal.Body>
    
      </Modal>
        </Table.Cell>
      </Table.Row>
    );
};
MyCandidatesDetails.propTypes = {
    candidate: PropTypes.object
}
export default MyCandidatesDetails;