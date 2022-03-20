import React from "react";
import PropTypes from "prop-types";

const FooterTitle = ({ title }) => {
  return <h3 className="border-b border-white text-xl font-medium capitalize">{title}</h3>;
};

FooterTitle.propTypes = {
  title: PropTypes.string,
};

export default FooterTitle;
