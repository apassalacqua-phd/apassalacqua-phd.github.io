import * as React from "react"

import * as styles from "./NewsBanner.module.css"

const NewsBanner = () => {
  // edit and uncomment the following code to show banner
  return (
    <div className={styles.globalHeader}>
      <div className="global-wrapper">
        <strong>NEWS</strong>: A new version of the paper {" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.apassalacqua.net/research/disciplining-banks-through-disclosure-evidence-from-cfpb-consumer-complaints"
        >
          "Disciplining Banks through Disclosure: Evidence from CFPB Consumer
          Complaints"
        </a>{" "}
        is finally posted online!
      </div>
    </div>
  )

  // uncomment the following code to hide banner

  // return <></>
}

export default NewsBanner
