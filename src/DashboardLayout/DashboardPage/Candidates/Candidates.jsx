import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import CandidateCard from "./CandidateCard";

const Candidates = () => {
  const axiosPublic = useAxiosPublic()
  const [candidates, setCandidate] = useState([])
  useEffect(() => {
    axiosPublic.get('/applicantCV')
      .then(res => {
        setCandidate(res.data)
      })
  }, [axiosPublic])
  console.log(candidates);
  return (
    <div>
      <h1 className="text-5xl font-bold mb-5 text-center">All Candidates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          candidates.map(candidate => <CandidateCard key={candidate._id} candidate={candidate}></CandidateCard>)
        }
      </div>
    </div>
  );
};

export default Candidates;