const ContactInfo = ({ icon, title, content, href, altContent, altHref, target, animation }) => {
    return (
        <div className="flex-1 flex items-center justify-center" style={{ textDecoration: 'none' }}>
            <span className={`flex-1 inline-block w-10 h-10 text-xl mx-4 ${animation}`}>{icon}</span>
            <div className="flex-4">
                <h4 className="py-1">{title}</h4>
                <a href={href} target={target} rel="noreferrer" className="w-fit underline-offset-2 hover:text-sky-500 hover:decoration-sky-500 hover:underline transition-all duration-300">{content}</a> <br />
                {altHref && (<a href={altHref} className="w-fit underline-offset-2 hover:text-sky-500 hover:decoration-sky-500 hover:underline transition-all duration-300">{altContent}</a>)}
            </div>
        </div>
    )
}

export default ContactInfo
