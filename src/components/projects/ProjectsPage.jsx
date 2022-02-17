import React from 'react'
import ProjectsPageCard from './ProjectsPageCard'
import data from '../../data.json'
const ProjectsPage = () => {
    return (
        <div className='mt-nav-offset px-sides py-8'>
            <h2 className='text-4xl text-center capitalize mb-8'>Explore all our projects</h2>
            <div className='grid grid-cols-4 gap-x-4 gap-y-8'>
                {data.projectsData.map(element => (<ProjectsPageCard key={element.id} projectName={element.name} projectImg={element.img} />))}
            </div>
        </div>
    )
}

export default ProjectsPage