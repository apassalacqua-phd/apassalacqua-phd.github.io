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
          Research Interest in Finance, Macroeconomics and
          Financial Intermediation
        </h3>

        <SocialIcons />

        <div className={styles.aboutMeContainer}>
          <h5>Personal Biography & Research Background</h5>

          <p>
            I am a financial economist with a strong background in applying economic 
            and financial analysis to policy-related questions. 
            I have held positions in both the government and the private sector and 
            have extensive experience working with large financial datasets, sophisticated 
            econometric models, simulations and forecasting. 
          </p> 


          <p>
            I currently serve as Vice President and Data Research Lead at 
            JPMorgan Chase & Co. I also hold a position as an Adjunct Instructor at [John 
              Hopkins University Carey Business School](https://carey.jhu.edu/faculty/andrea-passalacqua-phd) and I am a Visiting Research Fellow at the AI, Analytics, and the Future of Work Initiative within [Georgetown 
              University McDonough School of Business](https://gufaculty360.georgetown.edu/s/contact/003UH00000FAg8cYAD/andrea-passalacqua).
          </p>  

          <p>  
            Previously, I was an associate at Analysis Group, a leading financial consulting 
            firm in the litigation industry. I began my career as a financial 
            economist at the Board of Governors of the Federal Reserve System where I worked 
            on issues related to the microeconomic and macroeconomic implications of banking 
            regulations and supervision for the financial markets and the real economy.
          </p>

          <p> 
            My research interests include financial intermediation, macroeconomics, household 
            finance, corporate finance, venture capital, private equity, and entrepreneurship.
          </p>

          <p>
            I obtained a Ph.D. from Harvard University in Spring 2020 under the
            supervision of Jeremy Stein (chair), Josh Lerner, David Scharfstein,
            Marco Di Maggio, and Adi Sunderam. I received a BSc and MSc in Economics from Bocconi University.
          </p>
          
        </div>

        <a
          className={styles.getMyResume}
          href="/Passalacqua_CV_Academic_September2024.docx"
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
