import React, { useEffect, useRef } from "react"
import * as styles from "./SectionTitleAndIcon.module.css"

const SectionTitleAndIcon = ({ iconSrc, title }) => {
  const logoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateBorder)
            observer.unobserve(entry.target) // stopping the observing once animation is triggered
          }
        })
      },
      { threshold: 0.5 } // triggering when 50% of the element is in view
    )

    if (logoRef.current) {
      observer.observe(logoRef.current)
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current)
      }
    }
  }, [])

  return (
    <div className={styles.titleAndIconContainer}>
      <div ref={logoRef} className={styles.logoContainer}>
        <img src={iconSrc} alt={title} className={styles.logoImage} />
      </div>

      <h3>{title}</h3>
    </div>
  )
}

export default SectionTitleAndIcon
