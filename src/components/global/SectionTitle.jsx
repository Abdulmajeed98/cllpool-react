import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return <h1 className="my-8 text-center text-5xl font-medium capitalize">{title}</h1>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
