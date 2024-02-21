import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {  Spinner, Table } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import JobDetails from "./Jobdetails";


const ALLShowJobs = () => {
    const axiosSecure = useAxiosSecure()
    const {isLoading, refetch,  data: jobs = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/postjob')
            return res.data
        }
    })
    console.log(jobs);
    if(isLoading) {
      return <div className=" h-screen flex items-center justify-center">
         <Spinner aria-label="Large spinner example" size="lg" />
      </div>
    }

    const handleDelete = _id => {
      console.log(`want to delete ${_id}`);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          axiosSecure.delete(`/postjob/${_id}`)
            .then(res => {
              if (res.data.deletedCount > 0) {
                refetch()
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Job Post has been deleted.",
                  icon: "success"
                });
             
            }
            })
           
        }
      });
    }





    return (
        <div>
        <h1 className='mb-5 text-white text-center font-bold text-3xl'>All Jobs: {jobs.length}</h1>
       <div className="overflow-x-auto">


<Table  className="bg-opacity-10  text-center">
      <Table.Head className="bg-opacity-10 ">
     
        <Table.HeadCell>Company Logo</Table.HeadCell>
        <Table.HeadCell>Company Name</Table.HeadCell>
        <Table.HeadCell>Job Title</Table.HeadCell>
       

        <Table.HeadCell>Job Details</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
       

      </Table.Head>

      <Table.Body className="divide-y ">

        {
            jobs.map( job =>  <Table.Row
                className=" dark:border-gray-700 dark:bg-gray-800 text-center  bg-white"
                key={job._id}
              >
                 <Table.Cell className="flex justify-center"> <img src={job?.logo} alt="company logo" className="h-12 w-12 rounded-full" /> </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium  dark:text-white ">
                {job?.companyName}
                </Table.Cell>
                <Table.Cell>{job?.title}</Table.Cell>

            
               
                
                {/* job details */}

                <JobDetails job={job}></JobDetails>
                
                <Table.Cell className=' text-2xl text-red-700 cursor-pointer' onClick={()=>handleDelete(job._id)} ><MdDelete/></Table.Cell>

             
     
              </Table.Row>)
        }
         
         
        
      </Table.Body>
    </Table>
</div>
    </div>
    );
};

export default ALLShowJobs;