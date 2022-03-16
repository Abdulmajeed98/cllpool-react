/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const ProjectsPageCard = ({ projectName, projectImg, projectId, height }) => {
  return (
    <Link
      to={`/projects/${projectId}`}
      state={{ projectName }}
      className={`group relative flex-1 overflow-hidden rounded-xl shadow-lg ${height}`}
    >
      <img
        width={100}
        height={100}
        src={projectImg}
        alt="project"
        className="absolute inset-0 -z-10 h-full w-full rounded-xl"
      />
      <p className="flex h-full w-full translate-y-full items-center justify-center bg-black bg-opacity-50 text-xl uppercase text-white transition-all duration-500 group-hover:translate-y-0">
        {projectName}
      </p>
    </Link>
  );
};

export default ProjectsPageCard;
