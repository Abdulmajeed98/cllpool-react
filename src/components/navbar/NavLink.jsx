import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
const NavLink = ({ destination, content, type }) => {
    console.log(type);
    if (type === 'hash') {
        return (<HashLink to={destination} className="relative p-2 capitalize text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-white hover:after:w-full after:transition-all after:duration-400">{content}</HashLink>)
    } else {
        return (<Link to={destination} className="relative p-2 capitalize text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-white hover:after:w-full after:transition-all after:duration-400">{content}</Link>)
    }
}

export default NavLink
