import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default function PostTemplate({ data }) {
  const { markdownRemark: post } = data
  return (
    <>
      <Helmet title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query PagePostByPath($slug: String!,$type: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug }, type: { eq: $type } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`