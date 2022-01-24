import ProjectImg from '../../assets/project-img.jpg';
import ProjectCard from './ProjectCard';

const projectsData = [
    { id: 1, name: 'project name', img: ProjectImg },
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
        <section className="pt-12" id="projects">
            <h2 className="capitalize text-center text-6xl my-12">Projects</h2>
            <div className="flex flex-wrap justify-center overflow-hidden">
                {projectsData.map(project => (<ProjectCard key={project.id} title={project.name} img={project.img} />))}
            </div>
        </section>
    )
}

export default Projects
