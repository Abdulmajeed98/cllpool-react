import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const LoadingIndicator = ({ classes }) => {
    return (
        <div className={classes}><AiOutlineLoading3Quarters className='animate-spin' /> Loading</div>
    )
}

export default LoadingIndicator