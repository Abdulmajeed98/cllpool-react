import React from 'react';
import Logo from '../../assets/logo.svg'
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt } from "react-icons/fa"
import { MdPhone, MdEmail } from "react-icons/md";
import data from '../../data.json';
import moment from 'moment';
import QuickLink from './QuickLink';
import ContactInfo from '../contact/ContactInfo';
import FooterTitle from './FooterTitle';


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
    const year = moment().get('year');
    const contactUsData = data.contactInfoData.slice(0, -1);
    return <footer className='px-sides pt-16 pb-4 text-white bg-slate-700'>
        <div className='flex'>
            <div className='w-1/3'>
                <div className='mb-8'>
                    <img src={Logo} alt="Cllpool logo" />
                </div>
                <h3 className='text-xl my-2'>Learn more about us from:</h3>
                <div className='flex my-2 gap-8'>
                    <a href="https://www.facebook.com/CllpoolCompany" className='text-3xl hover:scale-125 hover:text-sky-500 transition-all duration-300'><FaFacebook /></a>
                    <a href="https://www.instagram.com/cllpool_company/?hl=en" className='text-3xl hover:scale-125 hover:text-orange-500 transition-all duration-300'><FaInstagram /></a>
                    <a href="https://www.youtube.com/channel/UCtD6FoJRzZLIh7kd5z0uZEA" className='text-3xl hover:scale-125 hover:text-red-600 transition-all duration-300'><FaYoutube /></a>
                </div>
            </div>
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
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <center>
            <p className='mt-10 text-lg font-light opacity-50 uppercase'>
                {data.CLLPOOL_COPYRIGHT.firstPart} &copy; {year} {data.CLLPOOL_COPYRIGHT.secondPart}
            </p>
        </center>
    </footer>;
};

export default Footer;
