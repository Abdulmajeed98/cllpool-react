import ProjectCard from './ProjectCard';
import data from '../../data.json';
import SectionTitle from '../global/SectionTitle';

const Projects = () => {
    const projectsData = data.projectsData;
    return (
        <section className="pt-8 scroll-mt-nav-offset" id="projects">
            <SectionTitle title={'Projects'} />
            <div className="grid grid-cols-3 justify-items-center overflow-hidden">
                {projectsData.map(project => (<ProjectCard key={project.id} title={project.name} img={project.img} />))}
            </div>
        </section >
    )
}

export default Projects
