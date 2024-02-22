
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {  Spinner, Table } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";
import {  useState } from "react";
import './allJobs.css'


const AllJobs = () => {
  // const [jobs, setJobs] = useState([])
    const axiosSecure = useAxiosSecure()
    const [currentPage , setCurrentPage] = useState(0)
    const {count} = useLoaderData();
     const [itemsPerPage ,setItemsPerPage]=useState (10)
     const numberOfPages = Math.ceil(count/itemsPerPage)
    const pages = [...Array(numberOfPages).keys()] 

   
    const {isLoading, refetch,  data: jobs = [] } = useQuery({
        queryKey: ['jobs', currentPage,itemsPerPage],
        queryFn: async () => {
          const res = await axiosSecure.get(`/postjob?page=${currentPage}&size=${itemsPerPage}`)
            return res.data
        }
    })
 
    const handlePerPage = e => {
      e.preventDefault()
      const value = parseInt(e.target.value)
      setItemsPerPage(value)
      setCurrentPage(0)
    }

    const handlePrevPage = ( )=> {
      
      if(currentPage > 0) {
        setCurrentPage((prevPage) => prevPage - 1);
        refetch(); 
      }
    
    }
    const handleNextPage = ()=>{
     
      if( currentPage < numberOfPages -1) {
        setCurrentPage((prevPage) => prevPage + 1);
        refetch();
        
      }
    }
    if(isLoading) {
      return <div className=" h-screen flex items-center justify-center">
         <Spinner aria-label="Large spinner example" size="lg" />
      </div>
    }

    return (
        <div>
        <h1 className='mb-5 text-white text-center font-bold text-3xl'>All Candidates: {jobs.length}</h1>
       <div className="overflow-x-auto">


<Table  className="bg-opacity-10  text-center">
      <Table.Head className="bg-opacity-10 ">
     
        <Table.HeadCell>Company Name</Table.HeadCell>
        <Table.HeadCell>Job Title</Table.HeadCell>
        <Table.HeadCell>Candidates</Table.HeadCell>
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
                <Table.Cell className="hover:text-blue-600"><Link to={`/dashboard/allCandidates/${job._id}`}>See Candidates</Link></Table.Cell>

              </Table.Row>)
        }

        
         
         
        
      </Table.Body>
    </Table>
    <div className="flex justify-center gap-2 mt-5">
      <button onClick={handlePrevPage} className=" bg-black text-white text-md px-2 py-1 rounded-md">Prev</button>
      {
        pages.map(page => <button 
          key={page}
          
          onClick={()=> setCurrentPage(page)}
          className={` bg-black text-white text-md px-2 py-1 rounded-md ${currentPage === page ? 'selected' : ''}`}
      
        
        >{page +1}</button>)
      }
     
      <button onClick={handleNextPage} className=" bg-black text-white text-md px-2 py-1 rounded-md">Next</button>
      <select value={itemsPerPage} onChange={handlePerPage}  name="" id="">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
</div>
    </div>
    );
};

export default AllJobs;