import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
    return <div className='w-11/12 group bg-sky-600 text-white py-8 rounded-lg overflow-hidden h-72'>
        <div className='w-full flex flex-col items-center'>
            <div className='flex flex-col justify-center items-center translate-y-1/2 group-hover:translate-y-0  transition-all duration-300'>
                <div className='w-24 h-16 scale-150 group-hover:scale-125  transition-all duration-300'>{icon}</div>
                <h2 className='text-3xl capitalize mt-6 group-hover:mt-2 transition-all duration-300'>{title}</h2>
            </div>
            <p className='w-2/3 text-center text-xl mt-8 translate-y-[200%] group-hover:translate-y-0  transition-all duration-300'>{description}</p>
        </div>
    </div>;
};

export default ServiceCard;
