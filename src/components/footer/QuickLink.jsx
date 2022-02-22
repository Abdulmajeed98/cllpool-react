import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const QuickLink = ({ dest, content, type }) => {
    if (type === 'hash') {
        return (
            <HashLink className='capitalize w-max hover:text-sky-500 border-b border-opacity-0 hover:border-b-sky-500 hover:border-opacity-100 transition-all duration-400' to={dest}>{content}</HashLink>
        )
    } else {
        return (
            <Link className='capitalize w-max hover:text-sky-500 border-b border-opacity-0 hover:border-b-sky-500 hover:border-opacity-100 transition-all duration-400' to={dest}>{content}</Link>
        )
    }
};

export default QuickLink;
