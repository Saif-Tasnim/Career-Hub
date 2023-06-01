import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='flex flex-col md:justify-evenly md:flex-row p-3 md:pl-28 md:pt-16 md:pb-4 bg-[#F9F9FF] '>

            <div className="text w-11/12 md:w-[550px] h-[570px]">
                <h1 className='text-2xl md:text-6xl line font-bold'>One Step </h1>
                <h1 className='text-2xl md:text-6xl line font-bold'>Closer To Your </h1>
                <h1 className='text-2xl md:text-6xl line font-bold'> <span className='span'> Dream Job</span>
                </h1>
                <p className='mt-6 w-full'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>

                <button className='mt-8 custom-bg px-7 py-5 text-white text-xl font-bold'>Get Started</button>
            </div>

            <div className="w-[240px] h-[200px] md:w-[500px] md:h-[570px] md:ml-24 md:mt-10">

                <img src="/src/images/hardy.png" alt="" />

            </div>



        </div>
    );
};

export default Banner;