import * as React from "react"

import * as styles from "./Header.module.css"

import { navigate } from "gatsby"

import { useLocation } from "@reach/router"

const Header = () => {
  const location = useLocation()

  const handleScrolling = id => {
    const element = document.getElementById(id)
    if (element) {
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleScrollTo = ({ path, id, shouldRedirect }) => {
    if (shouldRedirect) {
      navigate(path, { replace: true })

      // waiting for navigation to complete before scrolling
      setTimeout(() => {
        handleScrolling(id)
      }, 300)
    } else {
      handleScrolling(id)
    }
  }

  const routes = [
    { name: "About", link: "/" },
    { name: "Work Experience", link: "work-experience" },
    { name: "Education", link: "education" },
    { name: "Research", link: "research" },
    { name: "Discussions", link: "discussions" },
    { name: "Teaching Material", link: "teaching-material" },
  ]

  return (
    <div className={styles.globalHeader}>
      {routes.map((route, i) => (
        <React.Fragment key={route.name}>
          <span
            className="header-link-home"
            onClick={() => {
              if (route.link === "/") {
                navigate(route.link)
              } else {
                if (location.pathname !== "/")
                  handleScrollTo({
                    path: "/",
                    id: route.link,
                    shouldRedirect: true,
                  })
                else
                  handleScrollTo({
                    path: "/",
                    id: route.link,
                    shouldRedirect: false,
                  })
              }
            }}
          >
            {String(route.name).toUpperCase()}
          </span>
          {i < routes.length - 1 && (
            <span style={{ color: "var(--color-heading)" }}>|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Header
