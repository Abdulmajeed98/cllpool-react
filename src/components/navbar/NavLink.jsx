const NavLink = ({ destination, content }) => {
    return (
        <a href={`#${destination}`} className="relative p-2 capitalize text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-white hover:after:w-full after:transition-all after:duration-400">{content}</a>
    )
}

export default NavLink
