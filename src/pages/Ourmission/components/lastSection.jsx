import React from 'react';
import kids from '../../../assets/img/Kids_with_pets.png'

export const LastSection = () => {
    return (
        <div className='flex flex-col justify-center items-center text-2xl font-medium gap-5 py-8'>
            <h1 className='text-green-800'>Furry Freinds</h1>
            <h1>Brings happiness to your family</h1>
            <img src={kids} alt="" />
        </div>
    );
};

