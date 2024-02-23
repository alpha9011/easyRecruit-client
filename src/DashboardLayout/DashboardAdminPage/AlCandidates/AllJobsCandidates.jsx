
import PropTypes from 'prop-types'
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Select, Spinner, Table } from "flowbite-react";
import CandidatesDetail from './CandidatesDetail';
import { useEffect, useState } from 'react';
const AllJobsCandidates = () => {
  const { title, companyName } = useLoaderData()
  const axiosSecure = useAxiosSecure()
  const [counts, setCount] = useState({})

  const count =counts.count
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)
  const numberOfPages = Math.ceil(count/itemsPerPage)

  const pages = [];
  for( let i = 0; i < numberOfPages; i ++) {
    pages.push(i)
  }
  useEffect( ()=> {
    axiosSecure.get('/applicantCount')
    .then( res =>{
      setCount( res.data)
    })
  }, [axiosSecure])


  const { isLoading, refetch, data: candidates = [] } = useQuery({
    queryKey: ['candidates', currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/applicantCV?page=${currentPage}&size=${itemsPerPage}`)
      const applier = res.data;
      const candidate = applier.filter(apply =>
        apply.companyName === companyName && apply.jobTitle === title)
      return candidate
    }
  })





  const handlePrevPage =()=> {
    if(currentPage > 0) {
      setCurrentPage( (prevPage) => prevPage -1 )
    }
  }

  const handleNextPage =()=> {
    if (currentPage < numberOfPages -1) {
      setCurrentPage( (prevPage)=> prevPage + 1)
    }
  }

  const handleItemsPerPage = e => {
    e.preventDefault()
    const value = parseInt(e.target.value)
  
    setItemsPerPage(value)
    setCurrentPage(0)
  }




  if (isLoading) {
    return <div className=" h-screen flex items-center justify-center">
      <Spinner aria-label="Large spinner example" size="lg" />
    </div>
  }

  return (
    <div className="text-white">
      <h1 className='text-center font-semibold text-2xl'>{companyName}</h1>
      <h1 className='text-center font-semibold text-3xl'>{title} Total Candidates: {candidates.length}</h1>
      <h2></h2>

      {
        candidates.length > 0 ?
          <div className="overflow-x-auto mt-5 ">
            <Table striped>
              <Table.Head className='text-center'>
                <Table.HeadCell>Photo</Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Phone</Table.HeadCell>
                <Table.HeadCell>Country</Table.HeadCell>
                <Table.HeadCell>Apply Date</Table.HeadCell>
                <Table.HeadCell>Selected</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>

              </Table.Head>
              <Table.Body className="divide-y">

                {

                  candidates.map(candidate =>

                    <Table.Row key={candidate._id} className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
                      <Table.Cell> <img src={candidate?.photo} alt="applier photo" className='w-14 h-14 rounded-full ' /> </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{candidate?.name}</Table.Cell>
                      <Table.Cell>{candidate?.phone}</Table.Cell>
                      <Table.Cell>{candidate?.country}</Table.Cell>
                      <Table.Cell>{candidate?.applyDate}</Table.Cell>

                      {/* <Table.Cell> {(candidate?.isSelected) === 'selected' ? 'selected' : (candidate?.isSelected === 'notselected') ? 'Not selected' : 'Make Select' } </Table.Cell> */}

                      <Table.Cell>{candidate?.isSelected || 'Make Select'}</Table.Cell>


                      <Table.Cell>
                        <CandidatesDetail candidate={candidate} refetch={refetch}></CandidatesDetail>
                      </Table.Cell>
                    </Table.Row>

                  )

                }

              </Table.Body>
            </Table>
          </div>

          :

          <div className='flex h-[50vh] justify-center items-center '>
            <h1>This post do not have any Applier</h1>
          </div>

      }

  
   <div className='flex justify-center gap-3 mt-5'>
   <button onClick={handlePrevPage} className=" bg-black text-white text-md px-2 py-1 rounded-md">Prev</button>
    {
      pages.map(page => <button 
          key={page}
          onClick={()=>setCurrentPage(page)}
          className={` bg-black text-white text-md px-2 py-1 rounded-md ${currentPage === page  && 'selected'}`}
      >{page +1}</button>)
    }

    <button onClick={handleNextPage} className=" bg-black text-white text-md px-2 py-1 rounded-md">Next</button>
    <Select value={itemsPerPage} onChange={handleItemsPerPage}>
    <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </Select>
   </div>

    </div>
  );
};

AllJobsCandidates.propTypes = {
  job: PropTypes.object
}
export default AllJobsCandidates;