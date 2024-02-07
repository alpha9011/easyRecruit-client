import { Card } from "flowbite-react";
import PropTypes from "prop-types"
import { CiLocationOn } from "react-icons/ci";
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react'
const MyJobCard = ({myjob}) => {
    console.log(myjob);
    const  {logo, title ,jobType,location,experience,salary,aboutCompany,positionSummary} = myjob || {}
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="hover:-translate-y-1 duration-150">
            <Card >
       <div className="flex justify-center items-center relative">
       <img src={logo} alt="company logo" className="h-40" />
       <p className="font-normal  dark:text-gray-400 absolute top-0 left-0 bg-blue-600 px-4 py-1 text-white rounded-md text-sm"> {jobType}</p>
       </div>
      <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">{title}</h5>
      <p className="text-gray-500 -mt-3 flex items-center gap-2"><CiLocationOn /> {location}</p>
      <div className="flex justify-between">
      <p className="font-medium">Experience:{experience}</p>
      <p className="font-semibold">${salary}<sub >/month</sub> </p>
      </div>
     

      <Button onClick={() => setOpenModal(true)} className="px-2 py-1 mt-5 bg-blue-700 hover:bg-blue-900 text-white  rounded-md  hover:-translate-y-[2px] duration-75 cursor-pointer flex items-center w-full gap-2 ">See Details</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body >
          <div className="space-y-3">
          <div>
          <h2 className="font-semibold mb-1">About Company:</h2>
            <p className="text-base  text-gray-500 dark:text-gray-400">
          {aboutCompany}</p>
          </div>
          <div>
          <h2 className="font-semibold mb-1">Position Summary:</h2>
            <p className="text-base  text-gray-500 dark:text-gray-400 ">
              {positionSummary}</p>
          </div>
          
          </div>
        </Modal.Body>
       
      </Modal>



    </Card>
        </div>
    );
};


MyJobCard.propTypes = {
    myjob: PropTypes.object
}
export default MyJobCard;