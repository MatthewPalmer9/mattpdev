import React from 'react';

export default function Project(props) {
    const {demoLink, imgSrc, title, techs, description} = props;
    return(
        <div className="project">
            <a target="_blank" rel="noopener noreferrer" href={demoLink}>
                <img alt="react-dragndrop" src={imgSrc} />
            </a>
            <div className="project-description">
                <a target="_blank" rel="noopener noreferrer" href={demoLink}>
                <h2>{title}</h2>
                </a>
                <span className="tech-list">
                    <strong>Technologies: </strong>
                    {techs.map((skill, index) => {
                        return <span key={index} className={skill.toLowerCase()}>{skill}</span>
                    })}
                </span>
            </div>
            <div className="hr"></div> 
            {description}
        </div>
    )
}