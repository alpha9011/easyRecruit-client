import { Modal, Table } from "flowbite-react";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import PropTypes from "prop-types"

const JobDetails = ({job}) => {
  const  {logo, title ,jobType,location,experience,salary,aboutCompany,positionSummary,companyName,postDate,deadline,responsibilities,qualifications,education,benifits} = job|| {}
    const [openModal, setOpenModal] = useState(false);
    return (
        <Table.Cell><button  onClick={() => setOpenModal(true)} className="hover:text-blue-600 font-semibold">Details</button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>    <div className="flex items-center gap-2 mb-3">
  <div>
    <img src={logo} className="border w-20 rounded-lg shadow" />
  </div>
  <div className="ml-2">
      
  <h2>{title}</h2>
  <h3 className="text-sm ">{companyName}</h3>
    <div className="flex items-center gap-5 text-gray-500">
     
      <p className="ml-1 text-sm flex items-center gap-1"> <IoLocationOutline /> {location}</p>
      <p className="font-normal text-white bg-blue-500 text-sm px-2 py-1 rounded-md">{jobType}</p>
      
    </div>
    <div className="flex gap-5 my-2">
      <h5 className="text-sm">Experience: {experience}</h5>
      <p className="font-semibold text-sm">Salary: ${salary}<sub >/month</sub> </p>
    </div>
   <div className="flex gap-5">
   <h4 className="text-sm">Post Date: {postDate}</h4>
   <h4 className="text-sm">Deadline: {deadline}</h4>
   </div>
  </div>
</div></Modal.Header>

<Modal.Body >
<div className="space-y-3">


<div >
<h2 className="font-semibold mb-1">About Company:</h2>
  <p className="text-base  text-gray-500 dark:text-gray-400">
{aboutCompany}</p>
</div>

<div>
<h2 className="font-semibold mb-1">Position Summary:</h2>
  <p className="text-base  text-gray-500 dark:text-gray-400 ">
    {positionSummary}</p>

</div>
<div>
<h2 className="font-semibold mb-1">Responsibilities:</h2>
  <p className="text-base  text-gray-500 dark:text-gray-400 ">
    {responsibilities}</p>
</div>
<div>
<h2 className="font-semibold mb-1">Qualifications:</h2>
  <p className="text-base  text-gray-500 dark:text-gray-400 ">
    {qualifications}</p>
</div>
<div>
<h2 className="font-semibold mb-1">Education:</h2>
  <p className="text-base  text-gray-500 dark:text-gray-400 ">
    {education}</p>
</div>
<div>
<h2 className="font-semibold mb-1">Others Benifit:</h2>
  <p className="text-base  text-gray-500 dark:text-gray-400 ">
    {benifits}</p>
</div>

</div>
</Modal.Body>

</Modal>
        </Table.Cell>
    );
};
JobDetails.propTypes = {
    job: PropTypes.object
}
export default JobDetails;