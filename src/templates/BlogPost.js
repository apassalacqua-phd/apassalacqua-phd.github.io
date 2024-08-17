import { Link, graphql } from "gatsby"
import * as React from "react"

import * as styles from "./BlogPost.module.css"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
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

            <p itemProp="description">{post.frontmatter.description}</p>
            <hr />

            {/* <small className={styles.subCategory}>
              {post.frontmatter?.subCategory}
            </small> */}
          </div>
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
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
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
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
        cover {
          publicURL
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
