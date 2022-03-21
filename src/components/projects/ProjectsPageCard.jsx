import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectsPageCard = ({ projectName, projectImg, projectId, height }) => {
  return (
    <Link to={`/projects/${projectId}`} state={{ projectName }} className={`group relative flex-1 overflow-hidden rounded-xl shadow-lg ${height}`}>
      <img width={400} height={400} src={projectImg} alt="project" className="absolute inset-0 -z-10 h-full w-full rounded-xl object-cover" />
      <p className="flex h-full w-full translate-y-full items-center justify-center bg-black bg-opacity-50 text-xl uppercase text-white transition-all duration-500 group-hover:translate-y-0">
        {projectName}
      </p>
    </Link>
  );
};
ProjectsPageCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectImg: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
};

export default ProjectsPageCard;
