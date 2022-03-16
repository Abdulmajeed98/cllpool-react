import VisitUs from "./VisitUs";
import FormInput from "./FormInput";
import ContactInfo from "./ContactInfo";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import data from "../../data.json";
import SectionTitle from "../global/SectionTitle";

const icons = [
    {
        id: 1,
        icon: <MdPhone className="h-full w-full" />,
        name: "phone",
    },
    {
        id: 2,
        icon: <MdEmail className="h-full w-full" />,
        name: "email",
    },
    {
        id: 3,
        icon: <FaMapMarkerAlt className="h-full w-full" />,
        name: "address",
    },
];

const ContactUs = () => {
    return (
        <section className="flex scroll-mt-nav-offset flex-col py-8" id="contact-us">
            <VisitUs />
            <div className="mt-4 flex flex-col gap-8 py-4">
                <SectionTitle title={"contact us"} />
                <form className="px-sides">
                    <div className="flex gap-4">
                        {data?.formFields.map((field) => {
                            return (
                                <FormInput
                                    key={field.id}
                                    id={field.id}
                                    title={field.title}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                />
                            );
                        })}
                    </div>
                    <div className="mt-8">
                        <label htmlFor="message" className="w-full font-bold capitalize">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            className="mt-2 min-h-message-textarea w-full resize-y rounded-md border border-slate-700 py-4 px-2 focus:outline-2 focus:outline-sky-500"
                            placeholder="Message"></textarea>
                    </div>

                    <div className="mt-8 flex items-center justify-center">
                        <button
                            className="w-1/5 rounded-lg border-2 border-sky-600 bg-sky-600 py-4 text-2xl uppercase text-white transition-all duration-400 hover:rounded-3xl hover:border-sky-600 hover:bg-transparent hover:text-sky-600 hover:shadow-lg hover:shadow-sky-300"
                            type="submit">
                            Submit
                        </button>
                    </div>
                </form>

                <div className="my-8 flex items-center justify-center gap-14 px-sides">
                    {data.contactInfoData.map((element) => (
                        <ContactInfo
                            key={element.id}
                            icon={
                                icons.find(
                                    (icon) => icon.name === element.icon || icon.id === element.icon
                                ).icon
                            }
                            title={element.title}
                            content={element.content}
                            href={element.href}
                            altContent={element.altContent}
                            altHref={element.altHref}
                            target={element.target}
                            animation={element.animation}
                            titleSize={"text-xl"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
