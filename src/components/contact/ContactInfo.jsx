const ContactInfo = ({
    icon,
    title,
    content,
    href,
    altContent,
    altHref,
    target,
    animation,
    titleSize,
}) => {
    return (
        <div className="flex flex-1 items-center justify-center">
            <span className={`mx-4 inline-block h-10 w-10 flex-1 text-xl ${animation}`}>
                {icon}
            </span>
            <div className="flex-4">
                <h4 className={`py-1 ${titleSize} font-bold`}>{title}</h4>
                <a
                    href={href}
                    target={target}
                    rel="noreferrer"
                    className="w-fit underline-offset-2 transition-all duration-300 hover:text-sky-500 hover:underline hover:decoration-sky-500">
                    {content}
                </a>
                <br />
                {altHref && (
                    <a
                        href={altHref}
                        className="w-fit underline-offset-2 transition-all duration-300 hover:text-sky-500 hover:underline hover:decoration-sky-500">
                        {altContent}
                    </a>
                )}
            </div>
        </div>
    );
};

export default ContactInfo;
