import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";



const Cards = () => {

  
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch JSON data from the server
    fetch('jobs.json')
      .then((res) => res.json())
      .then(data => setJobs(data))
  }, []);

  console.log(jobs);
    return (
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
            {
                jobs.slice(0,6).map(job => <Card key={job.id} job={job}></Card>)
            }
            <h3 className="text-2xl text-center">Pagination coming soon..</h3>
        </div>
    );
};

export default Cards;