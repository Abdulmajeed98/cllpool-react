import React from 'react';

const QuickLink = ({ dest, content }) => {
    return <a className='capitalize w-max hover:text-sky-500 border-b border-opacity-0 hover:border-b-sky-500 hover:border-opacity-100 transition-all duration-400' href={`#${dest}`}>{content}</a>;
};

export default QuickLink;
