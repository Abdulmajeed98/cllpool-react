import VisitUs from "./VisitUs"
import FormInput from './FormInput'
import ContactInfo from './ContactInfo'
import { MdPhone, MdEmail } from "react-icons/md"
import { FaMapMarkerAlt } from "react-icons/fa"

const formFields = [
    { id: 'name', title: 'name', type: 'text', placeholder: 'Enter your name' },
    { id: 'phone', title: 'phone number', type: 'text', placeholder: 'Enter your phone number' },
    { id: 'email', title: 'email', type: 'email', placeholder: 'Enter your email address' },
]

const contactInfoData = [
    { id: 1, icon: <MdPhone className='w-full h-full' />, title: 'Phone', content: '+964 750 496 7476', href: 'tel:+9647504967476', animation: 'animate-wiggle' },
    { id: 2, icon: <MdEmail className='w-full h-full' />, title: 'Email', content: 'info@cllpooliraq.com', href: 'mailto:info@cllpooliraq.com', animation: 'animate-pulse' },
    { id: 3, icon: <FaMapMarkerAlt className='w-full h-full' />, title: 'Address', content: 'Holy Zard St, Erbil, Iraq, 44001', href: '#', animation: 'animate-bouncing' },
]

const ContactUs = () => {
    return (
        <div className="flex flex-col">
            <VisitUs />
            <div className="flex flex-col mt-4 py-4 gap-8">
                <h2 className="text-6xl text-center">Contact Us</h2>
                <form className="px-sides">
                    <div className="flex gap-4">
                        {formFields.map((field) => {
                            return (<FormInput key={field.id} id={field.id} title={field.title} type={field.type} placeholder={field.placeholder} />)
                        })}
                    </div>
                    <div className="mt-8">
                        <label htmlFor="message" className="capitalize w-full">Message</label>
                        <textarea name="message" id="message" rows="10" className="resize-y w-full min-h-message-textarea mt-2 border border-slate-700 rounded-md py-4 px-2 focus:outline-2 focus:outline-cyan-700" placeholder="Message"></textarea>
                    </div>

                    <div className='flex justify-center items-center mt-8'>
                        <button className='w-1/5 py-4 text-2xl uppercase text-white border-2 border-slate-700 bg-slate-700 rounded-lg hover:rounded-3xl hover:text-slate-700 hover:border-slate-700 hover:bg-transparent transition-all duration-400' type="submit">
                            Submit
                        </button>
                    </div>
                </form>

                <div className='px-sides flex items-center justify-center gap-14 my-8'>
                    {contactInfoData.map(element => (
                        <ContactInfo key={element.id} icon={element.icon} title={element.title} content={element.content} href={element.href} animation={element.animation} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactUs
