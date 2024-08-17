import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import SocialIcons from "./SocialIcons"

import * as styles from "./Intro.module.css"

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.mainImageContainer}>
        <StaticImage
          className={styles.mainImage}
          layout="fullWidth"
          src="../../images/andrea-teaching.jpg"
          alt="Andrea Teaching"
        />
      </div>
      <div className={styles.introDetailsContainer}>
        <h1 className={styles.nameTitle}>Andrea Passalacqua</h1>
        <h2 className={styles.subTitle}>
          Financial Economist at JPMorgan Chase & Co.
        </h2>

        <h3 className={styles.subSubTitle}>
          Research Interest in Financial Intermediation, Macroeconomics and
          Finance
        </h3>

        <SocialIcons />

        <div className={styles.aboutMeContainer}>
          <h5>Personal Biography & Research Background</h5>

          <p>
            I am a financial economist with a research interest in financial
            intermediation, macroeconomics, household finance, corporate
            finance, venture capital, private equity, and entrepreneurship.
          </p>

          <p>
            I worked as an Associate at Analysis Group, an Economic and
            Financial Consulting Company. Previously, I was a financial
            economist at the Board of Governors of Federal Reserve System.
          </p>

          <p>
            I obtained a Ph.D. from Harvard University in Spring 2020 under the
            supervision of Jeremy Stein (chair), Josh Lerner, David Scharfstein,
            Marco Di Maggio, and Adi Sunderam. Previously, I received a BSc and
            MSc in Economics from Bocconi University.
          </p>
        </div>

        <a
          className={styles.getMyResume}
          href="/Passalacqua_CV_industry_August2024_alternative.docx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5>DOWNLOAD RESUME</h5>
        </a>
      </div>
    </div>
  )
}

export default Intro
