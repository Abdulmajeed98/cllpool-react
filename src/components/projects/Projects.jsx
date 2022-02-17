import ProjectImg from '../../assets/project-img.jpg';
import ProjectCard from './ProjectCard';


const projectsData = [
    { id: 1, name: 'project name', img: "https://tinyurl.com/2p97hbp6" },
    { id: 2, name: 'project name', img: ProjectImg },
    { id: 3, name: 'project name', img: ProjectImg },
    { id: 4, name: 'project name', img: ProjectImg },
    { id: 5, name: 'project name', img: ProjectImg },
    { id: 6, name: 'project name', img: ProjectImg },
    { id: 7, name: 'project name', img: ProjectImg },
    { id: 8, name: 'project name', img: ProjectImg },
    { id: 9, name: 'project name', img: ProjectImg },
]
const Projects = () => {
    return (
        <section className="pt-12 scroll-mt-nav-offset" id="projects">
            <h2 className="capitalize text-center text-4xl my-12">Projects</h2>
            <div className="grid grid-cols-3 justify-items-center overflow-hidden">
                {projectsData.map(project => (<ProjectCard key={project.id} title={project.name} img={project.img} />))}
            </div>
        </section>
    )
}

export default Projects
