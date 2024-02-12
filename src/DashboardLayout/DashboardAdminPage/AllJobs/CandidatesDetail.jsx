
import { Modal, Table } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types"
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CandidatesDetail = ({candidate,refetch}) => {
    const { name, email,phone,photo,country,resume,coverLetter,lastAcademy,language,salary,gender,applyDate, _id,isSelected} = candidate || {}
const axiosSecure = useAxiosSecure()
    const [openModal, setOpenModal] = useState(false);

const handleUpdate = id => {
    console.log(id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make Admin"
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.patch(`/applicantCV/${id}`)

            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `selected successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })

        }
    });
}
    return (
        <Table.Cell><button onClick={() => setOpenModal(true)} className="hover:text-blue-600 font-semibold">Details</button>
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

               <div className="mt-3">
               {
                        isSelected ? <span className="bg-green-400 px-4 py-2 rounded-md "> selected</span> :
                        
                    <button className="bg-blue-600 px-3 py-2 rounded-md text-white" onClick={()=>handleUpdate(_id)}>Select</button>
                    }

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