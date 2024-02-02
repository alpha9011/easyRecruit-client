import appointmentData from "../../../Json/appointmentData.json";

console.log(appointmentData);
import { Table } from "flowbite-react";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";
import Swal from "sweetalert2";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  const getEmails = () => {
    return appointmentData.map((item) => item.email);
  };
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
  const notify = () => toast("Wow so easy!");

  return (
    <div className="bg-white p-5">
      <h2 className="text-center font-bold text-2xl my-3">Appointment</h2>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            {/* <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell> */}
          </Table.Head>

          <Table.Body className="divide-y">
            {appointmentData.map((item, index) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={item?.id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
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
      <div className="py-5 flex justify-center ">
       
        <PrimaryButton
            font={"font-bold"}
            buttonText={"Send Interview Schedule"}
            onClick={handleSendEmails}
          ></PrimaryButton>
      </div>
    </div>
  );
};

export default Appointment;
