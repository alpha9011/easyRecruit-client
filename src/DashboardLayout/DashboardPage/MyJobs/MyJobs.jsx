import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import MyJobCard from "./MyJobCard";


const MyJobs = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [myJobs, setMyJobs] = useState([])

    useEffect(() => {
        axiosPublic.get('/postjob')
            .then(res => {
                const alljobs = res.data
                const jobs = alljobs.filter(job => job?.email === user?.email)
                setMyJobs(jobs)
            })
    }, [axiosPublic, user?.email])
    console.log(myJobs);
    return (
        <div>
            {
                myJobs.length > 0 ? 
                <div className="grid grid-cols-3 gap-6">
                {
                    myJobs.map(myjob => <MyJobCard key={myjob._id} myjob={myjob}></MyJobCard>)
                }
            </div> : 
            <div>
                <h1>You do not have any job post yet</h1>
            </div>
            }
        </div>
    );
};

export default MyJobs;