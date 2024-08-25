import React from "react"

import * as styles from "./Timeline.module.css"

import { MdOutlineLocationOn } from "react-icons/md"
import SectionTitleAndIcon from "../SectionTitleAndIcon/SectionTitleAndIcon"

const Timeline = ({ title, iconSrc, data, id }) => {
  return (
    <div id={id} className={styles.container}>
      <SectionTitleAndIcon iconSrc={iconSrc} title={title} />

      <div className={styles.timeline}>
        {data.length > 0 &&
          data.map((item, index) => (
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
                {/* company name and location for desktop only */}
                <div className={styles.entityNameAndLocationContainerDesktop}>
                  <h4 className={styles.timelineHeading}>{item.entityName}</h4>
                  <h4 className={styles.timelineHeading}>
                    <MdOutlineLocationOn className={styles.locationIcon} />
                    {item.location}
                  </h4>
                </div>

                {/* company name and location for mobile only */}
                <div className={styles.entityNameAndLocationContainerMobile}>
                  <h4 className={styles.timelineHeading}>
                    {`${item.entityName} - ${item.location}`}
                  </h4>
                </div>

                {/* job position */}
                {item.position && (
                  <h5
                    style={{
                      marginBottom: index + 1 === data.length ? 0 : "16px",
                    }}
                    className={styles.timelinePosition}
                  >
                    {item.position}
                  </h5>
                )}

                {/* data bullet points */}
                {item?.data?.length > 0 && (
                  <ul>
                    {item.data.map((point, i) => (
                      <li
                        style={{
                          marginBottom:
                            index + 1 === data.length
                              ? 0
                              : i + 1 < item.data.length
                              ? "0px"
                              : "18px",
                        }}
                        key={i}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Timeline
