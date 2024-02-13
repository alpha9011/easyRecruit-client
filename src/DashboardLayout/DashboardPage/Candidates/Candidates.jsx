import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import CandidateCard from "./CandidateCard";
import useAuth from "../../../Hooks/useAuth";
import { Table } from "flowbite-react";

const Candidates = () => {
  const axiosPublic = useAxiosPublic()
  const [candidates, setCandidate] = useState([])
  const {user} = useAuth()
  const currentUSer = user?.email
  useEffect(() => {
    axiosPublic.get('/applicantCV')
      .then(res => {
        const allcandidates = res.data
        const myCandidates = allcandidates.filter( candidate => candidate.jobPostEmail === currentUSer)
        setCandidate(myCandidates)
      })
  }, [axiosPublic,currentUSer])
  console.log(candidates);
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">All Candidates : {candidates.length}</h1>
     
    

<div className="overflow-x-auto">
        <Table>
          <Table.Head className="text-center">
          <Table.HeadCell>Photo</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Job Title</Table.HeadCell>
            <Table.HeadCell>Resume</Table.HeadCell>
            <Table.HeadCell>Cover Letter</Table.HeadCell>
            <Table.HeadCell> Status </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
          {
          candidates.map(candidate => <CandidateCard key={candidate._id} candidates={candidates} candidate={candidate} setCandidate={setCandidate}></CandidateCard>)
        }
            
           
          </Table.Body>
        </Table>
      </div>
     
    </div>
  );
};

export default Candidates;