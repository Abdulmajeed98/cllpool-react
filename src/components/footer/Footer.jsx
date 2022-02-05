import React from 'react';
import Logo from '../../assets/logo.svg'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"



const Footer = () => {
    return <footer className='px-sides py-16 text-white bg-slate-700'>
        <div className='flex'>
            <div className='w-1/3'>
                <div className='mb-8'>
                    <img src={Logo} alt="Cllpool logo" />
                </div>
                <h3 className='text-xl my-2'>Learn more about us from:</h3>
                <div className='flex my-2 gap-8'>
                    <a href="https://www.facebook.com/CllpoolCompany" className='text-3xl hover:scale-125 transition-all duration-300'><FaFacebook /></a>
                    <a href="https://www.instagram.com/cllpool_company/?hl=en" className='text-3xl hover:scale-125 transition-all duration-300'><FaInstagram /></a>
                    <a href="https://www.youtube.com/channel/UCtD6FoJRzZLIh7kd5z0uZEA" className='text-3xl hover:scale-125 transition-all duration-300'><FaYoutube /></a>
                </div>
            </div>
            <div className='flex w-1/3'>
                <div>
                    <h3 className='capitalize'>quick links</h3>
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;
