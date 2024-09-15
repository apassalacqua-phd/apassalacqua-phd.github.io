import React from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"
import * as styles from "./Modal.module.css"

const Modal = ({ title, content, onCloseHandler }) => {
  return (
    <div onClick={onCloseHandler} className={styles.popupOverlay}>
      <div onClick={e => e.stopPropagation()} className={styles.popupContainer}>
        {/*title and close button  */}
        <div>
          <div className={styles.popupHeader}>
            <p className={styles.popupTitle}>{title}</p>

            <IoIosCloseCircleOutline
              onClick={onCloseHandler}
              style={{ fontSize: "28px", cursor: "pointer" }}
            />
          </div>
          {/*  horizontal row  */}
          <div className={styles.horizontalDivider}></div>
        </div>
        {/* abstract title and content */}
        <span className={styles.popupContentHeading}>{"ABSTRACT"}</span>
        <p className={styles.popupContent}>{content}</p>
      </div>
    </div>
  )
}

export default Modal
