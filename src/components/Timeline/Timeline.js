import React from "react"

import * as styles from "./Timeline.module.css"

import { MdOutlineLocationOn } from "react-icons/md"
import SectionTitleAndIcon from "../SectionTitleAndIcon/SectionTitleAndIcon"

const Timeline = ({ title, iconSrc, data, id }) => {
  return (
    <div id={id} className={styles.container}>
      <SectionTitleAndIcon iconSrc={iconSrc} title={title} />

      <div className={styles.timeline}>
        {data.length > 0 && data.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDate}>
              {item.startYear}
              {item.isPresent
                ? " - Present"
                : item.endYear
                ? ` - ${item.endYear}`
                : ""}
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.entityNameAndLocationContainerDesktop}>
                <h4 className={styles.timelineHeading}>{item.entityName}</h4>
                <h4 className={styles.timelineHeading}>
                  <MdOutlineLocationOn className={styles.locationIcon} />
                  {item.location}
                </h4>
              </div>

              <div className={styles.entityNameAndLocationContainerMobile}>
                <h4 className={styles.timelineHeading}>
                  {`${item.entityName} - ${item.location}`}
                </h4>
              </div>
              {item.position && (
                <h5 className={styles.timelinePosition}>{item.position}</h5>
              )}

              <ul>
                {item?.data?.length>0 &&  item.data.map((point, i) => (
                  <li
                    style={{
                      marginBottom: index + 1 === data.length ? 0 : "16px",
                    }}
                    key={i}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
