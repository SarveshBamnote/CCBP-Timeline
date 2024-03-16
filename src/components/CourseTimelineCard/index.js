import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails

  return (
    <div>
      <div className="course-title-and-duration">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-cont">
          <AiFillClockCircle color="#171f46" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="tags-list">
        {tagsList.map(eachTag => (
          <p className="course-tag-name">{eachTag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
