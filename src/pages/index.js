import { graphql } from "gatsby"
import * as React from "react"

import Intro from "../components/Intro/Intro"
import Layout from "../components/Layout/Layout"
import PostsContainer from "../components/PostsContainer/PostsContainer"
import Seo from "../components/Seo/Seo"
import Timeline from "../components/Timeline/Timeline"
import educationTimelineData from "../constants/EducationTimelineData"
import workExperienceTimelineData from "../constants/WorkExperienceTimelineData"

import * as styles from "../components/Layout/Layout.module.css"
import NewsBanner from "../components/NewsBanner/NewsBanner"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const makeTitleDisplayReady = str => {
    return str
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>No blog posts found. Add markdown posts to the content directory.</p>
      </Layout>
    )
  }

  // categorizing posts
  const categories = [...new Set(posts.map(post => post.frontmatter.category))]

  const customOrder = ["research", "discussions", "teaching-material"]

  categories.sort((x, y) => {
    return customOrder.indexOf(x) - customOrder.indexOf(y)
  })

  return (
    <>
      <NewsBanner />
      <Layout location={location} title={siteTitle}>
        <Intro />

        <div className="timelines-and-posts-container">
          <Timeline
            id="work-experience"
            title="Work Experience"
            iconSrc="/images/work-experience.svg"
            data={workExperienceTimelineData}
          />

          <Timeline
            id="education"
            title="Education"
            iconSrc="/images/education.svg"
            data={educationTimelineData}
          />

          {/* displaying posts by category */}
          {categories.map(category => (
            <PostsContainer
              id={category}
              key={category}
              posts={posts.filter(
                post => post.frontmatter.category === category
              )}
              iconSrc={`/images/${category}.svg`}
              title={makeTitleDisplayReady(category)}
            />
          ))}
        </div>
      </Layout>
      <footer className={styles.footer}>
        <div className="global-wrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <span>
              © {new Date().getFullYear()} Andrea Passalacqua. All Rights
              Reserved.
            </span>{" "}
            <em>
              <strong> Disclaimer: </strong>The opinions expressed on this
              website are solely those of Andrea Passalacqua and do not
              necessarily reflect the views or opinions of his employer.
            </em>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Index
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo onlyDefaultTitle />

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          category
          subCategory
          sortOrder
          primaryButtonTitle
          secondaryButtonTitle
          secondaryButtonLink
          tertiaryButtonTitle
          tertiaryButtonContent
          cover {
            publicURL
          }
        }
      }
    }
  }
`
