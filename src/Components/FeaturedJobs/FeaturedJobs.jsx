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
            <h1 className="text-center"> Featured Jobs </h1>
            <p className="text-center"> Explore thousands of job opportunities with all the information you need. Its your future
            </p>

            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>

            <button></button>
        </div>
    );
};

export default FeaturedJobs;