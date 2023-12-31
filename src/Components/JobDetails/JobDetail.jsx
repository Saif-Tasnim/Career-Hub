import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetail = () => {
    
    const allData = useLoaderData();
    const {jobId} = useParams();
    
    console.log(allData);
    console.log(jobId);

    const data = allData.find(d => d.companyName === jobId);

    
    const clickApplyBtn = () => {
        
        const exist = localStorage.getItem("jobs");
        const localData = JSON.parse(exist);
        //  console.log(localData);

        if (localData) {
            const found = localData.find(e => e.id === data.id)
           
            if(found){
                toast.warning(`You have already applied in ${data.companyName}`)
            }

            else {
                const prev = JSON.parse(exist);

                const array = [...prev, data];

                localStorage.setItem('jobs', JSON.stringify(array));
                toast.success(`You have successfully applied in ${data.companyName}`);
            }
        }

        else {
            let array = [];
            array = [...array, data];
            localStorage.setItem("jobs", JSON.stringify(array));
            toast.success(`You have successfully applied in ${data.companyName}`);

        }


    }

    return (
        <div>
            <header className='h-[250px] bg-[#F9F9FF]'>
                <h1 className='text-center pt-28 text-4xl font-bold'> Job Details </h1>
            </header>

            <div className='w-3/4 mx-auto mt-32 flex justify-center gap-9 mb-11'>

                <div className=''>
                    <h1 className='text-xl font-bold mb-4 mt-7'>Job Description : </h1>
                    <p className='mb-4 text-lg ml-5'>{data.jobDescription}</p>
                    <h1 className='text-xl font-bold mb-4 mt-7'>Job Responsibility : </h1>
                    <p className='mb-4 text-lg ml-5'>{data.jobResponsibility}</p>
                    <h1 className='text-xl font-bold mb-4 mt-7'>Educational Requirements :</h1>
                    <p className='mb-4 text-lg ml-5'> {data.educationalRequirements} </p>

                    <h1 className='text-xl font-bold mb-4 mt-7'>Experience :</h1>
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
                        <button onClick={clickApplyBtn}> Apply Now </button>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default JobDetail;