import * as React from "react"

import * as styles from "./NewsBanner.module.css"

const NewsBanner = () => {
  // edit and uncomment the following code to show banner
  return (
    <div className={styles.globalHeader}>
      <div className="global-wrapper">
        <strong>Upcoming Events</strong>: The paper{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.apassalacqua.net/research/disciplining-banks-through-disclosure-evidence-from-cfpb-consumer-complaints"
        >
          "Disciplining Banks through Disclosure: Evidence from CFPB Consumer
          Complaints"
        </a>{" "}
        is set to be presented at the 2024 Community Banking Research Conference
        on October 2, 2024.
      </div>
    </div>
  )

  // uncomment the following code to hide banner

  // return <></>
}

export default NewsBanner
