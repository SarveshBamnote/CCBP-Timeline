import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} =
    projectDetails

  return (
    <div className="project-card-container">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="project-title-and-duration">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
