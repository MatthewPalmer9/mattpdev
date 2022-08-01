export default function ProjectCard({imgSrc, link, title, description}) {
  return (
    <a className="project-link" target="_blank" rel="noreferrer" href={link}>
      <div className="project-card">
          <img className="project-img" src={imgSrc} alt="Project thumbnail" />
          <div className="project-info">  
              <h3 className="project-title">{title}</h3>
              <p className="project-text">
                  {description}
              </p>
          </div>
      </div>
  </a>
  )
}
