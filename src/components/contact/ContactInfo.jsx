const ContactInfo = ({ icon, title, content, href, animation }) => {
    return (
        <a href={href} className="flex-1 flex items-center justify-center" style={{ textDecoration: 'none' }}>
            <span className={`flex-1 inline-block w-10 h-10 text-xl ${animation}`}>{icon}</span>
            <div className="flex-4">
                <h4 className="py-1">{title}</h4>
                <p className="w-fit underline-offset-2 hover:text-sky-500 hover:decoration-sky-500 hover:underline transition-all duration-300">{content}</p>
            </div>
        </a>
    )
}

export default ContactInfo
