import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const checkCategoryId = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
  }

  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1 className="heading">
            MY JOURNEY OF <br /> <span className="ccbp-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => checkCategoryId(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
