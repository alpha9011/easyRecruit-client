import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Spinner, Table } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import MyCandidatesDetails from "./MyCandidatesDetails";


const MyCandidates = () => {
    const {title, companyName} = useLoaderData()
const axiosSecure = useAxiosSecure()
const {isLoading,  data: candidates = [] } = useQuery({
    queryKey: ['candidates'],
    queryFn: async () => {
      const res = await axiosSecure.get('/applicantCV')
      const applier = res.data;
      const candidate = applier.filter(apply =>
        apply.companyName === companyName && apply.jobTitle === title)
      return candidate
    }
})
console.log(candidates);
if(isLoading) {
    return <div className=" h-screen flex items-center justify-center">
      <Spinner aria-label="Large spinner example" size="lg" />
    </div>
  }
    return (
        <div className="overflow-x-auto">
        <Table>
       
          <Table.Head className="text-center">
          <Table.HeadCell>Photo</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Job Title</Table.HeadCell>
            <Table.HeadCell>Is Selected</Table.HeadCell>
            
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
         
          
           {
            candidates.map( candidate => <MyCandidatesDetails candidate={candidate} key={candidate._id}></MyCandidatesDetails>)
           }


          </Table.Body>
        </Table>
      </div>
    );
};

export default MyCandidates;