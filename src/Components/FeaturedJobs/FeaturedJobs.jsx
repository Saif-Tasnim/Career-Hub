import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('job_data.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    console.log(jobs);

    return (
        <div className='w-3/4 margin'>
            <h1 className="text-center text-4xl font-bold mb-3"> Featured Jobs </h1>
            <p className="text-center mt-2 mb-5"> Explore thousands of job opportunities with all the information you need. Its your future
            </p>

            <div className="grid grid-cols-2 gap-6 mt-7">
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
           <div className="flex justify-center mt-9">
           <button className="btn-bg w-[174px] h-[65px] mt-11 text-center">See All Jobs</button>
           </div>
     
          
           
        </div>
    );
};

export default FeaturedJobs;