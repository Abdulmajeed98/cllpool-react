
const ProjectCard = ({ title, img }) => {
    return (
        <div className="group relative flex flex-col justify-end items-center w-1/3 overflow-hidden h-128 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-25 before:-z-10">

            {/* Card bg image  */}
            <img src={img} alt="project" className="absolute inset-0 w-full h-full -z-20 group-hover:scale-110 transition-all duration-400" />

            {/* Card title */}
            <h4 className="relative w-full text-center text-3xl py-6 capitalize text-white before:content-[''] before:absolute before:inset-0 before:bg-sky-500 before:bg-opacity-70 before:h-full before:translate-y-full before:-z-10 group-hover:before:translate-y-0 before:rounded-t-[50%] before:transition-all before:duration-400">{title}</h4>
        </div>
    )
}

export default ProjectCard
