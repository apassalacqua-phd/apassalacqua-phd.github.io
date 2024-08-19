import { Link } from "gatsby"
import React from "react"
import { PiBookOpenText } from "react-icons/pi"
import SectionTitleAndIcon from "../SectionTitleAndIcon/SectionTitleAndIcon"
import * as styles from "./PostsContainer.module.css"

const PostsContainer = ({ posts, iconSrc, title, id }) => {
  const getBackgroundColor = subCategory => {
    switch (subCategory) {
      case "Publications":
        return "var(--color-publication)"
      case "Working Papers":
        return "var(--color-working-papers)"
      default:
        return "var(--color-work-in-progress)"
    }
  }

  return (
    <div id={id} className={styles.postsContainer}>
      <SectionTitleAndIcon iconSrc={iconSrc} title={title} />

      {/* list of posts */}
      <ol style={{ listStyle: "none" }}>
        {posts.map(post => {
          const postTitle = post.frontmatter.title || post.fields.slug
          const coverUrl = post.frontmatter.cover?.publicURL

          return (
            <li key={post.fields.slug}>
              <article
                className={styles.postListItem}
                itemScope
                itemType="http://schema.org/Article"
              >
                {coverUrl && (
                  <img
                    src={coverUrl}
                    alt={postTitle}
                    className={styles.coverImage}
                  />
                )}

                <div className={styles.contentContainer}>
                  {/* title, date, desc container */}
                  <div>
                    <header>
                      <h4>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{postTitle}</span>
                        </Link>
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        {post.frontmatter.subCategory && (
                          <small
                            style={{
                              backgroundColor: getBackgroundColor(
                                post?.frontmatter?.subCategory
                              ),
                            }}
                            className={styles.subCategory}
                          >
                            {post.frontmatter.subCategory}
                          </small>
                        )}
                      </div>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </div>

                  {/* continue reading container */}
                  <Link
                    className={styles.continueReading}
                    to={post.fields.slug}
                    itemProp="url"
                  >
                    <span>CONTINUE READING</span>
                    <PiBookOpenText className={styles.continueReadingIcon} />
                  </Link>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default PostsContainer
