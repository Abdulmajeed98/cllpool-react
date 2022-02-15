/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const ProjectsPageCard = ({ projectName, projectImg }) => {
    return (
        <div className='relative group h-96 rounded-xl shadow-lg overflow-hidden'>
            <img src={projectImg} alt="project" className='w-full h-full rounded-xl absolute inset-0 -z-10' />
            <a href='#' className='w-full h-full flex justify-center items-center text-xl text-white uppercase bg-black bg-opacity-50 translate-y-full group-hover:translate-y-0 transition-all duration-700'>{projectName}</a>
        </div>
    )
}

export default ProjectsPageCard