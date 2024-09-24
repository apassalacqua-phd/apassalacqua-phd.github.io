import { Link } from "gatsby"
import React, { useState } from "react"
import { PiBookOpenText } from "react-icons/pi"
import Modal from "../Modal/Modal"
import SectionTitleAndIcon from "../SectionTitleAndIcon/SectionTitleAndIcon"
import * as styles from "./PostsContainer.module.css"

const PostsContainer = ({ posts, iconSrc, title, id }) => {
  const [showModal, setShowModal] = useState(false)

  const [modalTitle, setModalTitle] = useState("")
  const [modalContent, setModalContent] = useState("")

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

  // sorting based on sortOrder if present, otherwise by title
  const sortedPosts = posts.sort((a, b) => {
    const sortOrderA = a.frontmatter.sortOrder
      ? parseInt(a.frontmatter.sortOrder)
      : null
    const sortOrderB = b.frontmatter.sortOrder
      ? parseInt(b.frontmatter.sortOrder)
      : null

    if (sortOrderA !== null && sortOrderB !== null) {
      return sortOrderA - sortOrderB
    } else if (sortOrderA !== null) {
      return -1 // a comes first
    } else if (sortOrderB !== null) {
      return 1 // b comes first
    } else {
      // if both don't have sortOrder, sort by title alphabetically
      return a.frontmatter.title.localeCompare(b.frontmatter.title)
    }
  })

  const singleCoverExists = sortedPosts.some(
    item => item.frontmatter.cover !== null
  )

  return (
    <>
      <div id={id}>
        <SectionTitleAndIcon iconSrc={iconSrc} title={title} />

        {/* list of posts */}
        <div className={styles.postsListContainer}>
          {sortedPosts.map(post => {
            const postTitle = post.frontmatter.title || post.fields.slug
            const coverUrl = post.frontmatter.cover?.publicURL

            return (
              <li key={post.fields.slug}>
                <article
                  className={styles.postListItem}
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div className={styles.contentContainer}>
                    {/* cover image */}

                    {/* TODO: Condition 1 */}

                    {/* {coverUrl && (
                      <Link to={post.fields.slug} itemProp="url">
                        <div
                          style={{ backgroundColor: coverUrl && "white" }}
                          className={styles.coverImageContainer}
                        >
                          <img
                            src={coverUrl}
                            alt={postTitle}
                            className={styles.coverImage}
                          />
                        </div>
                      </Link>
                    )} */}

                    {/* TODO: Condition 2 */}

                    {singleCoverExists ? (
                      <Link to={post.fields.slug} itemProp="url">
                        <div
                        // style={{ backgroundColor: coverUrl && "white" }}
                        // className={styles.coverImageContainer}
                        >
                          {coverUrl && (
                            <img
                              src={coverUrl}
                              alt={postTitle}
                              className={styles.coverImage}
                            />
                          )}
                        </div>
                      </Link>
                    ) : (
                      coverUrl && (
                        <div
                          style={{ backgroundColor: coverUrl && "white" }}
                          className={styles.coverImageContainer}
                        >
                          <img
                            src={coverUrl}
                            alt={postTitle}
                            className={styles.coverImage}
                          />
                        </div>
                      )
                    )}

                    {/* title */}
                    <h4>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{postTitle}</span>
                      </Link>
                    </h4>

                    {/* subcategory */}
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

                    {/* description */}
                    <p
                      className={styles.description}
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />

                    {/* buttons container */}
                    <div className={styles.buttonsContainer}>
                      {/* secondary button container */}
                      {post.frontmatter?.secondaryButtonTitle &&
                        post.frontmatter?.secondaryButtonLink && (
                          <a
                            className={styles.actionButton}
                            href={post.frontmatter?.secondaryButtonLink}
                          >
                            <span>
                              {String(
                                post.frontmatter.secondaryButtonTitle
                              ).toUpperCase()}
                            </span>
                            <PiBookOpenText
                              className={styles.actionButtonIcon}
                            />
                          </a>
                        )}

                      {post.frontmatter?.tertiaryButtonTitle &&
                        post.frontmatter?.tertiaryButtonContent && (
                          <div
                            onClick={() => {
                              setModalTitle(postTitle)
                              setModalContent(
                                post.frontmatter?.tertiaryButtonContent
                              )
                              setShowModal(true)
                            }}
                            className={styles.actionButton}
                          >
                            <span>
                              {String(
                                post.frontmatter.tertiaryButtonTitle
                              ).toUpperCase()}
                            </span>
                            <PiBookOpenText
                              className={styles.actionButtonIcon}
                            />
                          </div>
                        )}

                      {/* continue reading container */}
                      <Link
                        className={styles.actionButton}
                        to={post.fields.slug}
                        itemProp="url"
                      >
                        <span>
                          {String(
                            post?.frontmatter?.primaryButtonTitle ??
                              "READ SUMMARY"
                          ).toUpperCase()}
                        </span>
                        <PiBookOpenText className={styles.actionButtonIcon} />
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </div>
      </div>

      {showModal && (
        <Modal
          onCloseHandler={() => setShowModal(false)}
          title={modalTitle}
          content={modalContent}
        />
      )}
    </>
  )
}

export default PostsContainer
