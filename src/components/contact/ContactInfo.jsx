const ContactInfo = ({ icon, title, content, href }) => {
    console.log(href);
    return (
        <a href={href} className="flex-1 flex items-center justify-center" style={{ textDecoration: 'none' }}>
            <span className={`flex-1 inline-block w-10 h-10 text-xl ${title === 'Phone' && 'animate-wiggle'} ${title === 'Email' && 'animate-pulse'} ${title === 'Address' && 'animate-bouncing'}`}>{icon}</span>
            <div className="flex-6">
                <h4 className="py-1">{title}</h4>
                <p className="w-fit underline-offset-2 hover:text-sky-500 hover:decoration-sky-500 hover:underline transition-all duration-300">{content}</p>
            </div>
        </a>
    )
}

export default ContactInfo
