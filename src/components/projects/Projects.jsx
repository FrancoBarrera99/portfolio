import React from 'react'
import ProjectCard from './ProjectCard'

import Image from '../../assets/test.png'

import './Projects.scss'

const Projects = () => {

  const projects = [
    {
      id:1,
      src: Image,
      name: "Project 1",
      link: "https://www.google.com.ar"
    },
    {
      id:2,
      src: Image,
      name: "Project 2",
      link: "https://www.google.com.ar"
    },
    {
      id:3,
      src: Image,
      name: "Project 3",
      link: "https://www.google.com.ar"
    },
    {
      id:4,
      src: Image,
      name: "Project 4",
      link: "https://www.google.com.ar"
    },
    {
      id:5,
      src: Image,
      name: "Project 5",
      link: "https://www.google.com.ar"
    },
  ]

  return (
    <div id='projects' className='projects'>
      <h1 className='projects_title'>My recent work</h1>
      <div className='cards_grid'>
        {projects.map((project) => {
            return (<ProjectCard 
            key={project.id}
            src={project.src}
            name={project.name}
            link={project.link}
            />)
          })}
      </div>
    </div>
  )
}

export default Projects