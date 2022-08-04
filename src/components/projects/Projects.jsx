import React from 'react'
import ProjectCard from './ProjectCard'

import Image from '../../assets/test.png'

import './Projects.scss'

const Projects = () => {

  const projects = [
    {
      id:1,
      src: Image,
      name: "Projecto 1",
      link: "https://www.google.com.ar"
    },
    {
      id:2,
      src: Image,
      name: "Projecto 2",
      link: "https://www.google.com.ar"
    },
    {
      id:3,
      src: Image,
      name: "Projecto 3",
      link: "https://www.google.com.ar"
    },
    {
      id:4,
      src: Image,
      name: "Projecto 4",
      link: "https://www.google.com.ar"
    },
    {
      id:5,
      src: Image,
      name: "Projecto 5",
      link: "https://www.google.com.ar"
    },
  ]

  return (
    <div className='projects_container'>
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