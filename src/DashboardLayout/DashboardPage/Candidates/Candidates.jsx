import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import CandidateCard from "./CandidateCard";
import useAuth from "../../../Hooks/useAuth";

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
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">All Candidates</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {
          candidates.map(candidate => <CandidateCard key={candidate._id} candidates={candidates} candidate={candidate} setCandidate={setCandidate}></CandidateCard>)
        }
      </div>
    </div>
  );
};

export default Candidates;