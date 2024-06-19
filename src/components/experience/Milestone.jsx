import React from 'react'

import './Milestone.scss'

const Milestone = ({ Organization, Title, Date, Description }) => {
  return (
    <div className='milestone'>
      <div className="milestone_bead"></div>
      <div id='milestone_container' className="milestone_container">
        <h3 className='milestone_organization'>{Organization}</h3>
        <h3 className='milestone_title'>{Title}</h3>
        <p className='milestone_date'>{Date}</p>
        <p className='milestone_description' dangerouslySetInnerHTML={{ __html: Description }}></p>
      </div>
    </div>
  )
}

export default Milestone
