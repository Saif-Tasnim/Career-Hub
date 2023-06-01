import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='flex justify-evenly pt-10 pb-4 
        bg-[#F9F9FF]'>
          
          <div className='font-extrabold text-3xl'>  
           <Link to="/"> Job Lagbe  </Link> </div>
            
            <div className='mt-3 text-lg'>
                <Link to ='/statistics' className='mr-6'>Statistics</Link>
                <Link to ='/appliedJobs' className='mr-6'>Applied Jobs</Link>
                <Link to ='/blog' className='mr-6'>Blogs</Link>
            </div>
            <div className='mt-2'>
                <button className='w-40 h-12 custom-bg text-xl text-white'>Start Applying</button>
            </div>
        </div>
    
    );
};

export default Header;