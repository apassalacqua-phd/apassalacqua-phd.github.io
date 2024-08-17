import * as React from "react"

import Header from "../Header/Header"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      {/* <footer
        style={{
          backgroundColor: "#2e353f",
          color: "#ffffff",
          padding: "10px",
          margin: "0",
        }}
      >
        Disclaimer: The opinions expressed on this website are solely those of
        Andrea Passalacqua and do not necessarily reflect the views or opinions
        of his employer.
      </footer> */}
    </div>
  )
}

export default Layout
