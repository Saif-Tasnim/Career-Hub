import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='flex justify-evenly pl-28 pt-16 pb-4 bg-[#F9F9FF] '>

            <div className="text w-[550px] h-[570px]">
                <h1 className='text-6xl line font-bold'>One Step </h1>
                <h1 className='text-6xl line font-bold'>Closer To Your </h1>
                <h1 className='text-6xl line font-bold'> <span className='span'> Dream Job</span>
                </h1>
                <p className='mt-6'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>

                <button className='mt-8 custom-bg px-7 py-5 text-white text-xl font-bold'>Get Started</button>
            </div>

            <div className="w-[500px] h-[570px] ml-24 mt-10">

                <img src="/src/images/hardy.png" alt="" />

            </div>



        </div>
    );
};

export default Banner;