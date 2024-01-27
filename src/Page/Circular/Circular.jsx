import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";


const Circular = () => {
    // const axiosPublic = useAxiosPublic()
    const [postJobs, setPostJob] = useState([])
    useEffect(() => {
        axios.get('./postjob.json')
            .then(res => {
                setPostJob(res.data)
            })
    }, [])
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