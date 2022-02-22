import React from 'react';
import VideoHeader from '../../assets/videos/header-video.mp4';

const HeaderVideo = () => {
    return (
        <video src={VideoHeader} autoPlay muted loop className='absolute object-fill w-full h-full -z-10'></video>
    )
}

export default HeaderVideo