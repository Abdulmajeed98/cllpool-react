import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

const QuickLink = ({ dest, content, type }) => {
  if (type === "hash") {
    return (
      <HashLink
        className="w-max border-b border-opacity-0 capitalize transition-all duration-400 hover:border-b-sky-500 hover:border-opacity-100 hover:text-sky-500"
        to={dest}>
        {content}
      </HashLink>
    );
  } else {
    return (
      <Link
        className="w-max border-b border-opacity-0 capitalize transition-all duration-400 hover:border-b-sky-500 hover:border-opacity-100 hover:text-sky-500"
        to={dest}>
        {content}
      </Link>
    );
  }
};

QuickLink.propTypes = {
  dest: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default QuickLink;
