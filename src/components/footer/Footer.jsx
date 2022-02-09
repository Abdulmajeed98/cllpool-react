import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { MdPhone, MdEmail } from "react-icons/md";
import data from '../../data.json';
import QuickLink from './QuickLink';
import ContactInfo from '../contact/ContactInfo';
import FooterTitle from './FooterTitle';
import Map from './../contact/Map';


const icons = [
    {
        id: 1,
        icon: <MdPhone className="w-full h-full" />,
        name: "phone",
    },
    {
        id: 2,
        icon: <MdEmail className="w-full h-full" />,
        name: "email",
    },
];

const Footer = () => {
    const currentDate = new Date()
    const contactUsData = data.contactInfoData.slice(0, -1);
    const [viewPort, setViewPort] = useState({
        latitude: data.CLLPOOL_COORDINATES.latitude,
        longitude: data.CLLPOOL_COORDINATES.longitude,
        zoom: 15.5,
        maxZoom: 16,
        minZoom: 15,
    });


    return <footer className='px-sides pt-16 pb-4 text-white bg-slate-700'>
        <div className='flex'>
            {/* first div */}
            <div className='w-1/3'>
                <div className='mb-8'>
                    <Logo className='fill-white' />
                </div>
                <h3 className='text-xl my-2'>Learn more about us from:</h3>
                <div className='flex my-2 gap-16'>
                    <a href="https://www.facebook.com/CllpoolCompany" className='text-3xl hover:scale-125 hover:text-sky-500 transition-all duration-300'><FaFacebook /></a>
                    <a href="https://www.instagram.com/cllpool_company/?hl=en" className='text-3xl hover:scale-125 hover:text-orange-600 transition-all duration-300'><FaInstagram /></a>
                    <a href="https://www.youtube.com/channel/UCtD6FoJRzZLIh7kd5z0uZEA" className='text-3xl hover:scale-125 hover:text-red-600 transition-all duration-300'><FaYoutube /></a>
                </div>
            </div>

            {/* second div */}
            <div className='flex gap-8 w-1/3 justify-between'>
                <div className='flex-1'>
                    <FooterTitle title={data.footerTitles.quickLinks} />
                    <div className='flex flex-col gap-1 mt-4'>
                        {data.navLinks.map(element => (<QuickLink key={element.id} dest={element.destination} content={element.content} />))}
                    </div>
                </div>
                <div className='flex-1'>
                    <FooterTitle title={data.footerTitles.contactUs} />
                    <div className='flex flex-col gap-4 mt-4'>
                        {contactUsData.map((element) => (
                            <ContactInfo
                                key={element.id}
                                icon={
                                    icons.find(
                                        (icon) =>
                                            icon.name === element.icon || icon.id === element.icon
                                    ).icon
                                }
                                title={element.title}
                                content={element.content}
                                href={element.href}
                                altContent={element.altContent}
                                altHref={element.altHref}
                                animation={""}
                                titleSize={'text-md'}
                            />
                        ))}
                    </div>
                </div>
            </div>


            {/* third div */}
            <div className='w-1/3 px-16'>
                <FooterTitle title={data.footerTitles.visitUs} />
                <div className='w-11/12 h-48 my-4 mx-auto'>
                    <Map latitude={data.CLLPOOL_COORDINATES.latitude} longitude={data.CLLPOOL_COORDINATES.longitude} viewPort={viewPort} setViewPort={setViewPort} mapStyle='mapbox://styles/mapbox/light-v10' />
                </div>
            </div>
        </div>
        <center>
            <p className='mt-10 text-lg font-light opacity-50 uppercase'>
                {data.CLLPOOL_COPYRIGHT.firstPart} &copy; {currentDate.getFullYear()} {data.CLLPOOL_COPYRIGHT.secondPart}
            </p>
        </center>
    </footer>;
};

export default Footer;
