import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {  Table } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import JobDetails from "./JobDetails";


const AllJobs = () => {
    const axiosSecure = useAxiosSecure()
    const {  data: jobs = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/postjob')
            return res.data
        }
    })
    console.log(jobs);
    return (
        <div>
        <h1 className='mb-5 text-white text-center font-bold text-3xl'>All Jobs: {jobs.length}</h1>
       <div className="overflow-x-auto">


<Table  className="bg-opacity-10  text-center">
      <Table.Head className="bg-opacity-10 ">
        <Table.HeadCell>Company Name</Table.HeadCell>
        <Table.HeadCell>Job Title</Table.HeadCell>
        <Table.HeadCell>Deadline</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
       

      </Table.Head>

      <Table.Body className="divide-y ">

        {
            jobs.map( job =>  <Table.Row
                className=" dark:border-gray-700 dark:bg-gray-800 text-center  bg-white"
                key={job._id}
              >
                <Table.Cell className="whitespace-nowrap font-medium  dark:text-white ">
                {job?.companyName}
                </Table.Cell>
                <Table.Cell>{job?.title}</Table.Cell>
                <Table.Cell>{job?.deadline}</Table.Cell>
                
                {/* job details */}

                <JobDetails job={job}></JobDetails>
                
                <Table.Cell className=' text-2xl text-red-700 cursor-pointer' ><MdDelete/></Table.Cell>

             
     
              </Table.Row>)
        }
         
         
        
      </Table.Body>
    </Table>
</div>
    </div>
    );
};

export default AllJobs;