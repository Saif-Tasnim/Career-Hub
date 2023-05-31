import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='flex justify-evenly pt-10 pb-4 
        bg-[#d4c5fc]'>
            <div className='font-extrabold text-3xl'> Job Lagbe </div>
            
            <div className='mt-3 text-lg'>
                <Link className='mr-6'>Statistics</Link>
                <Link className='mr-6'>Applied Jobs</Link>
                <Link className='mr-6'>Blogs</Link>
            </div>
            <div className='mt-2'>
                <button className='w-40 h-12 custom-bg text-xl text-white'>Start Applying</button>
            </div>
        </div>
    
    );
};

export default Header;