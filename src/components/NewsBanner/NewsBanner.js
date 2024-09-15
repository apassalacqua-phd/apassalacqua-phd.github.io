import * as React from "react"

import newsBannerContent from "../../constants/NewsBannerData"
import * as styles from "./NewsBanner.module.css"

const NewsBanner = () => {
  if (newsBannerContent?.length > 0)
    return (
      <div className={styles.globalHeader}>
        <div className="global-wrapper">
          <strong>Upcoming Events</strong>: {newsBannerContent}
        </div>
      </div>
    )
  else return <></>
}

export default NewsBanner
