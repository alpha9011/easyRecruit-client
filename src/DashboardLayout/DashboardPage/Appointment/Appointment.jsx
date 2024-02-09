import appointmentData from "../../../Json/appointmentData.json";

console.log(appointmentData);
import { Table } from "flowbite-react";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";
import Swal from "sweetalert2";

;

const Appointment = () => {


  const handleSendEmails = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Interview Schedule Sent",
      showConfirmButton: false,
      timer: 1500,
    });

 
  };

  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-3 text-white">
        Appointment
      </h2>
      <div className="overflow-x-auto border rounded-xl">
        <Table>
          <Table.Head className="bg-opacity-10 ">
            <Table.HeadCell>Company Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            {/* <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell> */}
          </Table.Head>

          <Table.Body className="divide-y ">
            {appointmentData.map((item) => (
              <Table.Row
                className=" dark:border-gray-700 dark:bg-gray-800     text-black"
                key={item?.id}
              >
                <Table.Cell className="whitespace-nowrap font-medium  dark:text-white ">
                  {item.name}
                </Table.Cell>

                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.number}</Table.Cell>
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
          textColor={"text-white"}
        ></PrimaryButton>
      </div>
    </div>
  );
};

export default Appointment;
