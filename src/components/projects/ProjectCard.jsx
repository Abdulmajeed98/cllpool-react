import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, img }) => {
  return (
    <Link
      to={`/projects/${id}`}
      className="group relative flex h-128 w-full flex-col items-center justify-end overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-black before:bg-opacity-25 before:content-['']">
      {/* Card bg image  */}
      <img
        width={400}
        height={400}
        src={img}
        alt="project thumbnail"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-all duration-400 group-hover:scale-110"
      />

      {/* Card title */}
      <h4 className="relative w-full py-6 text-center text-3xl capitalize text-white before:absolute before:inset-0 before:-z-10 before:h-full before:translate-y-full before:rounded-t-[50%] before:bg-sky-500 before:bg-opacity-70 before:transition-all before:duration-400 before:content-[''] group-hover:before:translate-y-0">
        {title}
      </h4>
    </Link>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProjectCard;
