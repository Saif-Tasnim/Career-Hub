import React from 'react';
import './Job.css';

const Job = ({ job }) => {
    const { companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrPartTime, salary, } = job;

    // console.log(job);

    return (
        <div className='w-[630px] h-[430px] border-2      rounded-xl p-5 mr-6' >
            <img className='h-[125px] w-[250px] pb-4' src={companyLogo} alt="" />

            <h1 className='pt-2 font-extrabold text-xl'>{jobTitle}</h1>

            <p className='mb-3 mt-2'>{companyName}</p>

            <div className='flex gap-7 mb-5'>
                <div className='w-[100px] h-[35px] border-2 px-5 py-1 border-[#7E90FE] text-[#7E90FE] font-bold'>
                    {remoteOrOnsite}
                </div>
                <div className='w-[120px] h-[35px] border-2 px-5 py-1 border-[#7E90FE] text-[#7E90FE] font-bold'>
                    {fulltimeOrPartTime}
                </div>
            </div>

            <div className='flex gap-5 mb-10'>
                <div className='text-xl'>
                    Location : {location}
                </div>
                <div className='text-xl'>
                    Salary : {salary}
                </div>
            </div>
            <button className='w-[160px] btn-bg py-3 px-5'>View Details</button>
        </div>
    );
};

export default Job;