import appointmentData from "../../../Json/appointmentData.json";

console.log(appointmentData);
import { Table } from "flowbite-react";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";
import Swal from "sweetalert2";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  
  // const getEmails = () => {
  //   return appointmentData.map((item) => item.email);
  // };

  const handleSendEmails = () => {
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Interview Schedule Sent",
      showConfirmButton: false,
      timer: 1500,
    });


    // const emails = getEmails();
    // Send emails using your preferred method or service
    // Here, we're just logging the emails to the console
    // console.log("Sending emails:", emails);
  };
  

  return ( 
    <div>
      <h2 className="text-center font-bold text-3xl text-white opacity-90 my-3" 

      >Appointment</h2>
      <div className="overflow-x-auto ">
        <Table  className="bg-opacity-10 text-white">
          <Table.Head className="bg-opacity-10 ">
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            {/* <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell> */}
          </Table.Head>

          <Table.Body className="divide-y ">
            {appointmentData.map((item) => (
              <Table.Row
                className=" dark:border-gray-700 dark:bg-gray-800 text-white"
                key={item?.id}
              >
                <Table.Cell className="whitespace-nowrap font-medium  dark:text-white ">
                  {item.name}
                </Table.Cell>

                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.number}</Table.Cell>
                {/* <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell> */}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="pt-5 flex justify-center ">
       
        <PrimaryButton
            font={"font-bold"}
            buttonText={"Send Interview Schedule"}
            onClick={handleSendEmails}
            textColor={'text-white'}
          ></PrimaryButton>
      </div>
    </div>
  );
};

export default Appointment;
