import React from 'react'
import './Projects.css'

const Projectcards=({projectName,projectDescription,imageUrl,projectUrl})=>{

    return(
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className="project-external-link">
                <img src={imageUrl} alt="project-img" className="project-image" /> </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
            </div>
        </div>
    )
}

export default Projectcards