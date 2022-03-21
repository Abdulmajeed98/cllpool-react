import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

const NavLink = ({ destination, content, type }) => {
  if (type === "hash") {
    return (
      <HashLink
        to={destination}
        className="relative p-2 capitalize text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-400 after:content-[''] hover:after:w-full">
        {content}
      </HashLink>
    );
  }
  return (
    <Link
      to={destination}
      className="relative p-2 capitalize text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-400 after:content-[''] hover:after:w-full">
      {content}
    </Link>
  );
};

NavLink.propTypes = {
  destination: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NavLink;
