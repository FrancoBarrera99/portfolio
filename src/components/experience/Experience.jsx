import React from 'react'
import Milestone from './Milestone'

import './Experience.scss'

const Experience = () => {

  const Milestones = [
    {
      id: 1,
      organization: "FANLAB",
      title: "Lead Developer",
      date: "December 2020 - April 2022",
      description: "Leading four people team with agile methodologies. API integration, replication and  gameplay in Unreal Engine 4. Virtual Reality with UE5 and OculusVR. Web development with MERN stack."
    },
    {
      id: 2,
      organization: "FANLAB",
      title: "External Consultant / Developer",
      date: "July 2022 - Now",
      description: "Development support and gameplay development in Unreal Engine 4. AI development for video games."
    }
  ]

  return (
    <div id='experience' className='experience'>
      <h1 className='experience_title'>&lt;MyJourney&gt;</h1>
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
      <h1 className='experience_title'>&lt;MyJourney/&gt;</h1>
    </div>
  )
}

export default Experience