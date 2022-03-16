const ProjectCard = ({ title, img }) => {
  return (
    <div className="group relative flex h-128 w-full flex-col items-center justify-end overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-black before:bg-opacity-25 before:content-['']">
      {/* Card bg image  */}
      <img
        width={100}
        height={100}
        src={img}
        alt="project"
        className="absolute inset-0 -z-20 h-full w-full transition-all duration-400 group-hover:scale-110"
      />

      {/* Card title */}
      <h4 className="relative w-full py-6 text-center text-3xl capitalize text-white before:absolute before:inset-0 before:-z-10 before:h-full before:translate-y-full before:rounded-t-[50%] before:bg-sky-500 before:bg-opacity-70 before:transition-all before:duration-400 before:content-[''] group-hover:before:translate-y-0">
        {title}
      </h4>
    </div>
  );
};

export default ProjectCard;
