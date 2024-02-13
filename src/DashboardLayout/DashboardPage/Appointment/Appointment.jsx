import appointmentData from "../../../Json/appointmentData.json";

import { Table } from "flowbite-react";


import { NavLink } from "react-router-dom";

const Appointment = () => {
  

  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-3 text-white">
        Appointment
      </h2>
      <div className="overflow-x-auto border rounded-xl">
        <Table>
          <Table.Head className="bg-opacity-10 ">
            <Table.HeadCell>Company Name</Table.HeadCell>
            <Table.HeadCell>Job Name</Table.HeadCell>
            <Table.HeadCell>Appointment</Table.HeadCell>

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

                <Table.Cell>
                  <NavLink>Appointed</NavLink>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="pt-5 flex justify-center "></div>
    </div>
  );
};

export default Appointment;
