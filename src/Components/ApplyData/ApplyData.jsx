import React from 'react';
import './data.css';
import { Link } from 'react-router-dom';

const ApplyData = ({ data }) => {
    // console.log(data);

    return (
        <div className='flex justify-between border-2 mt-11 p-8 items-center mb-11'>

            <div className='flex gap-7 items-center'>

                {/* image div */}
                <div>
                    <img className='w-[240px] h-[240px]' src={data.companyLogo} alt="" />
                </div>

                {/* text div */}
                <div>
                    <h1 className='pt-2 font-extrabold text-xl'>{data.jobTitle}</h1>

                    <p className='mb-3 mt-2'>{data.companyName}</p>

                    <div className='flex gap-7 mb-5'>
                        <div className='w-[100px] h-[35px] border-2 px-5 py-1 border-[#7E90FE] text-[#7E90FE] font-bold'>
                            {data.remoteOrOnsite}
                        </div>
                        <div className='w-[120px] h-[35px] border-2 px-5 py-1 border-[#7E90FE] text-[#7E90FE] font-bold'>
                            {data.fulltimeOrPartTime}
                        </div>
                    </div>

                    <div className='flex gap-5 mb-10'>
                        <div className='text-xl'>
                            Location : {data.location}
                        </div>
                        <div className='text-xl'>
                            Salary : {data.salary}
                        </div>
                    </div>

                </div>

            </div>

            <Link to={`/job/${data.companyName}`}> 
            
            <button className='w-[150px] h-[50px] see text-white font-bold'  > View Details </button>
            
            </Link>

        </div>
    );
};

export default ApplyData;