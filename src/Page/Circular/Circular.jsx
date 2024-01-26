import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import JobCard from "./JobCard";


const Circular = () => {
    const axiosPublic = useAxiosPublic()
    const [postJobs, setPostJob] = useState([])
    useEffect(() => {
        axiosPublic('/postjob')
            .then(res => {
                setPostJob(res.data)
            })
    }, [axiosPublic])
    console.log(postJobs);
    return (
        <div>
            <h1 className="text-5xl font-bold mb-5 text-center">Latest Job</h1>

            <div className="grid grid-cols-3 gap-4">
                {
                    postJobs.map( jobs => <JobCard key={jobs._id} jobs={jobs}></JobCard>)
                }
            </div>

        </div>
    );
};

export default Circular;