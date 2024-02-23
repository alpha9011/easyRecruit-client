import { Avatar, Select, Table } from "flowbite-react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
const Appointment = () => {

  // get all the job post
  const axiosPublic = useAxiosSecure();
  const [jobPost, setjobPost] = useState([]);
  const {count} = useLoaderData();
  const [currentPage , setCurrentPage] = useState(0)
  const [itemsPerPage ,setItemsPerPage]=useState (5)
  const numberOfPages = Math.ceil(count/itemsPerPage)
 const pages = [...Array(numberOfPages).keys()] 
  useEffect(() => {
    axiosPublic.get((`/postjob?page=${currentPage}&size=${itemsPerPage}`))
      .then(res => {
        setjobPost(res.data)
      })
  }, [axiosPublic, currentPage, itemsPerPage])
  console.log(jobPost);
  const handlePerPage = e => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    setItemsPerPage(value)
    setCurrentPage(0)
  }

  const handlePrevPage = ( )=> {
    
    if(currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
     
    }
  
  }
  const handleNextPage = ()=>{
   
    if( currentPage < numberOfPages -1) {
      setCurrentPage((prevPage) => prevPage + 1);
      
      
    }
   
  }
  return (
    <div>
      <h2 className="text-center font-bold text-4xl my-3 text-white">
        All companies jobs
      </h2>
      <div className="overflow-x-auto border rounded-xl">
        <Table>
          {/* Table titles */}
          <Table.Head className="bg-opacity-10 ">
            <Table.HeadCell>Logo</Table.HeadCell>
            <Table.HeadCell>Company Name</Table.HeadCell>
            <Table.HeadCell>Job Title</Table.HeadCell>
            <Table.HeadCell>Deadline</Table.HeadCell>
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
                <Table.Cell>{item.deadline}</Table.Cell>
                <Table.Cell><Link to={`/dashboard/shortlisted/${item._id}`}>Candidates</Link></Table.Cell>
                <Table.Cell>{item.phone}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>


      </div>
      <div className="pt-5 flex justify-center "></div>
      {/* pagination */}
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

      <Select value={itemsPerPage} onChange={handlePerPage}  name="" id="">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </Select>
    </div>
    </div>
  );
};

export default Appointment;
