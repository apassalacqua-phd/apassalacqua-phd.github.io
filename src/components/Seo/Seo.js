/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

import { useLocation } from "@reach/router"

const Seo = ({ description, title, children, onlyDefaultTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const image = site.siteMetadata.image

  const defaultTitle = site.siteMetadata?.title

  const defaultURL = site.siteMetadata?.siteUrl

  let theTile = defaultTitle ? `${title} | ${defaultTitle}` : title

  if (onlyDefaultTitle) theTile = defaultTitle

  const location = useLocation()

  return (
    <>
      <title>{theTile}</title>
      <link rel="canonical" href={location.href} />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={"Andrea Passalacqua"} key="og-keywords" />
      <meta property="og:title" content={theTile} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta
        property="og:url"
        content={location.href ?? defaultURL}
        key="og-url"
      />
      <meta
        property="og:logo"
        content={`/images/profile-pic-circle.png`}
        key="og-logo"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
