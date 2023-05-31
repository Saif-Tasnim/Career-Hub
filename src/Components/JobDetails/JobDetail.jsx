import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css';

const JobDetail = () => {
    const data = useLoaderData();

    console.log(data);

    return (
        <div>
            <header className='h-[250px] bg-[#F9F9FF]'>
                <h1 className='text-center pt-28 text-4xl font-bold'> Job Details </h1>
            </header>

            <main className='w-3/4 mx-auto mt-32 flex justify-center gap-9 mb-11'>

                <div className=''>
                    <h1 className='text-xl font-bold mb-4'>Job Description : </h1>
                    <p className='mb-4 text-lg ml-5'>{data.jobDescription}</p>
                    <h1 className='text-xl font-bold mb-4'>Job Responsibility : </h1>
                    <p className='mb-4 text-lg ml-5'>{data.jobResponsibility}</p>
                    <h1 className='text-xl font-bold mb-4'>Educational Requirements :</h1>
                    <p className='mb-4 text-lg ml-5'> {data.educationalRequirements} </p>

                    <h1 className='text-xl font-bold mb-4'>Experience :</h1>
                    <p className='mb-4 text-lg ml-5'> {data.experiences} </p>
                </div>

                <div className=' w-[424px]  ml-7'>

                    <div className='custom-bg p-6'>
                        <h1 className='text-lg font-bold mt-3 mb-5'>Job Details</h1>
                        <hr />

                        <p className='mt-2 text-lg mb-2'> <span className='font-bold '>Salary : </span> <span>{data.salary}</span></p>

                        <p className='mt-2 text-lg mb-4'><span className='font-bold '>Job Title : </span> <span>{data.jobTitle}</span></p>

                        <h1 className='text-lg font-bold mt-5 mb-5'>Contact Information </h1>
                        <hr />

                        <p className='mt-2 text-lg mb-4'><span className='font-bold '> Phone : </span> <span>{data.contactInformation.phone}</span></p>

                        <p className='mt-2 text-lg mb-4'>
                            <span className='font-bold '> Email : </span> <span>{data.contactInformation.email}</span></p>

                        <p className='mt-2 text-lg mb-2'>  <span className='font-bold'> Address : </span> <span>{data.location}</span></p>

                    </div>

                    <div className='mt-3 text-center btn-bg px-4 py-3'>
                        <button>Apply Now</button>
                    </div>
                </div>




            </main>
        </div>

    );
};

export default JobDetail;