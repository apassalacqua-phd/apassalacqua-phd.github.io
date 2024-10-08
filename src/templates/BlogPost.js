import { Link, graphql } from "gatsby"
import * as React from "react"

import * as styles from "./BlogPost.module.css"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"

import { navigate } from "gatsby"

const BlogPostTemplate = ({
  data: { site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className={styles.blogPost}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {post.frontmatter?.cover?.publicURL && (
            <img
              src={post.frontmatter?.cover?.publicURL}
              alt={post.frontmatter.title}
              className={`${styles.coverImage} ${styles.desktopCoverImage}`}
            />
          )}
          <div className={styles.headerDetails} style={{ width: "100%" }}>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            {post.frontmatter?.cover?.publicURL && (
              <img
                src={post.frontmatter?.cover?.publicURL}
                alt={post.frontmatter.title}
                className={`${styles.coverImage} ${styles.mobileCoverImage}`}
              />
            )}

            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description,
              }}
              itemProp="description"
            />

            {post.frontmatter.tertiaryButtonContent && (
              <p>
                {
                  <>
                    <strong>{`ABSTRACT: `}</strong>
                    <span>{post.frontmatter.tertiaryButtonContent}</span>
                  </>
                }
              </p>
            )}

            {post.frontmatter.publicationInfo && (
              <p>
                {
                  <>
                    <strong>{`PUBLICATION INFORMATION: `}</strong>
                    <span>{post.frontmatter.publicationInfo}</span>
                  </>
                }
              </p>
            )}

            <hr />

            {/* <small className={styles.subCategory}>
              {post.frontmatter?.subCategory}
            </small> */}
          </div>

          {post.frontmatter?.secondaryCover?.publicURL && (
            <img
              src={post.frontmatter?.secondaryCover?.publicURL}
              alt={post.frontmatter.title}
              className={`${styles.coverImage} ${styles.desktopCoverImage}`}
            />
          )}
        </header>

        <hr style={{ marginBottom: "30px" }} />

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <nav className={styles.blogPostNav}>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: "space-between",
            listStyle: `none`,
            padding: 0,
          }}
        >
          {post.frontmatter.externalPublicationLink && (
            <li>
              <Link to={post.frontmatter.externalPublicationLink} rel="prev">
                Publication Link
              </Link>
            </li>
          )}

          {post.frontmatter.externalReadWorkingPaperLink && (
            <li>
              <Link
                to={post.frontmatter.externalReadWorkingPaperLink}
                rel="prev"
              >
                Read Working Paper
              </Link>
            </li>
          )}

          <li onClick={() => navigate(-1)}>
            <Link>← Go Back</Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
        subCategory
        tertiaryButtonContent
        externalPublicationLink
        externalReadWorkingPaperLink
        publicationInfo
        cover {
          publicURL
        }
        secondaryCover {
          publicURL
        }
      }
    }
  }
`
