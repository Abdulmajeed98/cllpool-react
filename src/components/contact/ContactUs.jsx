import { useState } from 'react'
import VisitUs from "./VisitUs"
import FormInput from './FormInput'

const formFields = [
    { id: 'name', title: 'name', type: 'text', placeholder: 'Enter your name' },
    { id: 'phone', title: 'phone number', type: 'text', placeholder: 'Enter your phone number' },
    { id: 'email', title: 'email', type: 'email', placeholder: 'Enter your email address' },
]

const ContactUs = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phoneNumber: '',
    //     message: ''
    // })
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

                {/* <div className='flex items-center justify-start'>

                </div> */}
            </div>
        </div>
    )
}

export default ContactUs
