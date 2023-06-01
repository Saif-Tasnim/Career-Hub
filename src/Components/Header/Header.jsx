import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='flex gap-6 md:justify-around p-3 md:pt-10 md:pb-4 
        bg-[#F9F9FF] md:items-center'>

            <div className='font-extrabold text-xl md:text-3xl'>
                <Link to="/"> Job Lagbe  </Link> </div>

            <div className='mt-3 text-lg flex flex-col md:flex-row md:justify-around md:items-center'>

                <div className='flex flex-col md:flex-row'>
                    <Link to='/statistics' className='mr-0 md:mr-6 mb-2 md:mb-0'>Statistics</Link>
                    <Link to='/appliedJobs' className='mr-0 md:mr-6 mb-2 md:mb-0'>Applied Jobs</Link>
                    <Link to='/blog' className='mr-0 md:mr-6 mb-2 md:mb-0'>Blogs</Link>
                </div>

                <div className='mt-2'>
                    <button className='w-full md:w-40 h-12 custom-bg text-xl text-white mb-2 md:mb-0'>Start Applying</button>
                </div>

            
            </div>


        </div>

    );
};

export default Header;