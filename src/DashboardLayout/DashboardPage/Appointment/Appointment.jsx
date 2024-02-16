import { Avatar, Table } from "flowbite-react";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Appointment = () => {
  // get all the job post
  const axiosPublic = useAxiosSecure();
  const [jobPost, setjobPost] = useState([]);

  useEffect(() => {
    axiosPublic.get("/postjob").then((res) => {
      setjobPost(res.data);
    });
  }, [axiosPublic]);
  console.log(jobPost);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl my-3 text-white">
        Selected Candidates
      </h2>
      <div className="overflow-x-auto border rounded-xl">
        <Table>
          {/* Table titles */}
          <Table.Head className="bg-opacity-10 ">
            <Table.HeadCell>Logo</Table.HeadCell>
            <Table.HeadCell>Company Name</Table.HeadCell>
            <Table.HeadCell>Job Title</Table.HeadCell>
            <Table.HeadCell>Short listed</Table.HeadCell>
          </Table.Head>

          {/* Table data */}
          <Table.Body className="divide-y ">
            {jobPost.map((item) => (
              <Table.Row
                className=" dark:border-gray-700 dark:bg-gray-800     text-black"
                key={item?.id}
              >
                <Table.Cell>
                  <div className="flex justify-start">
                    <Avatar img={item.logo} />
                  </div>
                </Table.Cell>
                <Table.Cell>{item.companyName}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium  dark:text-white">
                  {item.title}
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/dashboard/shortlisted/${item._id}`}>
                    Candidates
                  </Link>
                </Table.Cell>
                <Table.Cell>{item.phone}</Table.Cell>
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
