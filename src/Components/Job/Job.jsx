import React from 'react';
import './Job.css';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrPartTime, salary, } = job;

    // console.log(job);

    return (
        <div className='w-[375px] h-[375px] md:w-[630px] md:h-[430px] border-2 rounded-xl p-2 md:p-5 mr-6' >
            <img className='w-[80px] h-[60px] md:h-[125px] md:w-[250px] pb-4' src={companyLogo} alt="" />

            <h1 className='pt-2 font-bold md:font-extrabold text-lg md:text-xl'>{jobTitle}</h1>

            <p className='my-2 md:mb-3 md:mt-2'>{companyName}</p>

            <div className='flex gap-3 md:gap-7 mb-5'>
                <div className='w-[100px] h-[35px] border-2 px-5 py-1 border-[#7E90FE] text-[#7E90FE] font-bold'>
                    {remoteOrOnsite}
                </div>
                <div className='w-[120px] h-[35px] border-2 px-5 py-1 border-[#7E90FE] text-[#7E90FE] font-bold'>
                    {fulltimeOrPartTime}
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-5 mb-10'>
                <div className='text-xl'>
                    Location : {location}
                </div>
                <div className='text-xl'>
                    Salary : {salary}
                </div>
            </div>
            <Link to={`/job/${companyName}`}>
            <button className='w-[160px] btn-bg p-3 md:py-3 md:px-5'>View Details</button>
            </Link>

        </div>
    );
};

export default Job;