import React from "react"

import { FaLinkedin, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import * as styles from "./SocialIcons.module.css"

const SocialIcons = () => {
  return (
    <div className={styles.socialIconsContainer}>
      <a
        href="http://www.linkedin.com/in/andrea-passalacqua-158b305b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.socialLinkContainer}>
          <FaLinkedin size={"30px"} />
        </div>
      </a>

      <a
        href="https://twitter.com/passalacquaand?lang=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.socialLinkContainer}>
          <FaTwitter size={"30px"} />
        </div>
      </a>
      <a href={"mailto:andrea.passalacqua@outlook.com"} itemProp="url">
        <div className={styles.socialLinkContainer}>
          <MdEmail size={"30px"} />
        </div>
      </a>
    </div>
  )
}

export default SocialIcons
