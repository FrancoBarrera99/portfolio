import React from 'react'
import Milestone from './Milestone'

import './Experience.scss'

const Experience = () => {

  const Milestones = [
    {
      id: 4,
      organization: "HIVE5 INTERACTIVE",
      title: "Senior Game Developer",
      date: "August 2023 - December 2023",
      description: `As a Senior Game Developer at Hive5 Interactive, I go beyond creating captivating gaming experiences. My role is pivotal in enhancing workflow efficiency, minimizing production errors, and strengthening project documentation through UML architectural designs, code guidelines and iterative development approaches.<br><br>
      In the development of -Vivaland-, a 3D multiplayer life simulation game, I focus on designing technical solutions and implementing gameplay mechanics. While collaborating closely with team members, I refine existing features to ensure a seamless gaming experience while simultaneously raising documentation standards.<br><br>
      Furthermore, I am deeply committed to maintaining the highest quality standards for the product. I invest significant effort in creating intuitive graphical user interfaces (GUI) and optimizing existing features. This dedication not only enhances the overall gaming experience but also elevates the product's quality, making a substantial contribution to the project's success.`
    },
    {
      id: 3,
      organization: "CTRL PARADISE",
      title: "Game Developer",
      date: "August 2023 - December 2023",
      description: "As a Game Developer in my current role at CTRL PARADISE, I play a pivotal role in orchestrating the creation of immersive horror video game experiences. I manage development teams, utilizing agile methodologies, and fostering seamless collaboration between multidisciplinary teams. My responsibilities span from architecting a componentized framework to enhance reusability to crafting gameplay mechanics and designing captivating graphical interfaces with CommonUI."
    },
    {
      id: 2,
      organization: "FANLAB",
      title: "Game Developer",
      date: "July 2022 - August 2023",
      description: "As a Game Developer at FANIOT, I specialize in designing and implementing gameplay mechanics using the Gameplay Ability System in UE5. I have also contributed to AI development for NPCs for efficient decision-making. Additionally, I have experience integrating GraphQL APIs to enhance game functionality."
    },
    {
      id: 1,
      organization: "FANLAB",
      title: "Lead Game Developer",
      date: "December 2020 - April 2022",
      description: "Skilled in managing developer teams using agile methodologies and mediating between multidisciplinary teams to ensure effective collaboration, I worked as a Lead Game Developer at FANIOT. Expertise includes API integration, replication and gameplay development in Unreal Engine 4. Actively explored the Virtual Reality field with UE5 and OculusVR. Proficiently contributed to Front-end Web Development with React, Redux, Axios, RESTAPIs."
    },

  ]

  const reveal = () => {

    let reveals = document.querySelectorAll(".milestone_container")

    for (let i = 0; i < reveals.length; i++) {

      let windowHeight = window.innerHeight
      let elementTop = reveals[i].getBoundingClientRect().top
      let elementVisible = 100

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active")
      } else {
        reveals[i].classList.remove("active")
      }
    }

  }

  window.addEventListener("scroll", reveal)

  return (
    <div id='experience' className='experience'>
      <h1 className='experience_title'>&lt;Journey&gt;</h1>
      <div className="experience_timeline">
        <div className='experience_line'></div>
        {Milestones.map((milestone) => {
          return (
            <Milestone
              key={milestone.id}
              Organization={milestone.organization}
              Title={milestone.title}
              Date={milestone.date}
              Description={milestone.description}
            />
          )
        })}
      </div>
      <h1 className='experience_title'>&lt;Journey/&gt;</h1>
    </div>
  )
}

export default Experience
