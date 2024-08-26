import * as React from "react"

import Header from "../Header/Header"

import * as styles from "./Layout.module.css"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <Header />
        <main>{children}</main>
      </div>
      <footer className={styles.footer}>
        <em>
          <strong> Disclaimer: </strong>The opinions expressed on this website
          are solely those of Andrea Passalacqua and do not necessarily reflect
          the views or opinions of his employer.
        </em>
      </footer>
    </div>
  )
}

export default Layout
