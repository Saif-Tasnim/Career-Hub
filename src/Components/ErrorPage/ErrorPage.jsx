import React from 'react';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='mb-16'>
            {/* <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p> */}
            <h1 className='text-center text-7xl text-red-700 mt-14'>404 Not Found</h1>
            <p className='text-center mt-16 text-5xl'>
               You Have Not Sufficient Data For Showing In This Page.. Thank You !!!!!!!!!!
            </p>
        </div>
    );
};

export default ErrorPage;