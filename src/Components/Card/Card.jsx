import React from 'react';
import './Card.css';

const Card = ({ card }) => {
    const { name, logo, jobsAvailable } = card;
    return (
        <div className='w-[311px] h-[243px] box-bg p-6'>
            <img className='w-[80px] h-[80px] rounded-lg pb-4 img-bg' src={logo} alt="" />
            <h1 className='pt-8 font-bold text-2xl pb-4'>{name}</h1>
            <p>{jobsAvailable} Jobs Available </p>
        </div>
    );
};

export default Card;