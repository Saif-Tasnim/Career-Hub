import React, { useEffect, useState } from 'react';
import PerBlog from '../PerBlog/PerBlog';

const Blog = () => {
    const [blog , setBlog] = useState([]);
    
    useEffect(() => {
       fetch('Q_A.json')
       .then(res => res.json())
       .then( data => setBlog(data));
    }, [])
    return (
        <div>
            <header className='h-[250px] bg-[#F9F9FF]'>
                <h1 className='text-center pt-28 text-4xl font-bold'> Blog Page </h1>
            </header>

            <div className='w-3/4 mx-auto mt-32'>
              {
                blog.map( b=> <PerBlog
                key={b.id}
                blog = {b}
                ></PerBlog>)
              }
            </div>
        </div>
    );
};

export default Blog;