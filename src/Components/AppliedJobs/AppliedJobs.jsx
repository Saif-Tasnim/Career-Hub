import React, { useEffect, useState } from 'react';
import ApplyData from '../ApplyData/ApplyData';
import ErrorPage from '../ErrorPage/ErrorPage';

const AppliedJobs = () => {
    const [job, setJob] = useState([]);

    useEffect(() => {
        const dataJson = localStorage.getItem('jobs');
        const data = JSON.parse(dataJson);
        setJob(data);
    }, [])

    const remoteOrOnSite = type => {
        const filterData = job.filter(j => j.remoteOrOnsite === type);

        setJob(filterData);
    }

    return (
        <div>
            <header className='h-[250px] bg-[#F9F9FF]'>
                <h1 className='text-center pt-28 text-4xl font-bold'> Applied Jobs </h1>
            </header>

            <div className='w-3/4 mx-auto mt-32'>
                <div className='flex justify-end'>
                    <button onClick={() => remoteOrOnSite('Remote')} className='mr-10 btn-bg px-4 py-2'> Remote </button>
                    <button onClick={() => remoteOrOnSite('Onsite')} className='mr-10 btn-bg px-4 py-2'> Onsite </button>
                </div>

                <div>

                    { 
                    
                      job ? job.map(j => <ApplyData
                            key={j.id}
                            data={j}
                        ></ApplyData>) : <ErrorPage></ErrorPage>
                    }
                </div>
            </div>

        </div>
    );
};

export default AppliedJobs;