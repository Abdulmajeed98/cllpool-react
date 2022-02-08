import React from 'react';




const ServiceCard = ({ title, description, icon }) => {
    return <div className='w-10/12 group bg-sky-600 text-white py-8 shadow-md rounded-xl overflow-hidden'>
        <div className='w-full flex flex-col items-center translate-y-1/2 group-hover:translate-y-0 transition-all duration-300'>
            <div className='w-24 h-16 scale-150 group-hover:scale-100 transition-all duration-300'>{icon}</div>
            <h2 className='text-3xl capitalize mt-4 mb-6'>{title}</h2>
            <p className='w-2/3 text-center text-xl'>{description}</p>
        </div>
    </div>;
};

export default ServiceCard;
