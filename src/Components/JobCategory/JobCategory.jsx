import React from 'react';
import './same.css';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const JobCategory = () => {
    const card_data = useLoaderData();
 
    
    return (
        <div className='w-3/4 margin'>
            <h2 className='text-center text-4xl font-bold pb-6'>Job Category List</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='flex md:flex-row gap-6 mt-8'>
                {
                    card_data.map(card => <Card
                        key={card.name}
                        card={card}
                    ></Card>)
                }

            </div>

        </div>
    );
};

export default JobCategory;