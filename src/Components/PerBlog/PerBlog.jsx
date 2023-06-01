import React from 'react';

const PerBlog = ( {blog} ) => {
    return (
        <div className='border-2 p-5 mb-5 rounded-lg'>
            <h1 className='text-center font-bold text-2xl mb-5'>{blog.question}</h1>
            <p className='text-center text-xl mb-6'> {blog.answer}</p>
        </div>
    );
};

export default PerBlog;